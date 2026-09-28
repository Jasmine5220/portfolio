// Single source of truth for "which full-page section are we on".
//
// Deriving the current section from window.scrollY at the moment of each
// scroll gesture is racy: while a smooth-scroll animation from a previous
// step is still settling, scrollY briefly reports a value in between two
// sections. If a new gesture reads scrollY at exactly that moment, it
// under/overcounts by one and the next jump skips an extra section. This
// module sidesteps that entirely by tracking the index ourselves, updated
// synchronously the instant we start a new scroll, and updated only from
// scrollY once (lazily) on first use.
//
// Sections aren't guaranteed to fit in one viewport (e.g. Projects lists
// ten entries). So a "next" gesture only jumps to the next section once
// the current one has been scrolled all the way through — otherwise it
// scrolls one viewport-height further within the current section. Without
// this, every section beyond the first screen's worth of content would be
// permanently unreachable by scrolling.
const SECTION_SELECTOR = [
    '.hero',
    '.about-section',
    '.experience-section',
    '.projects-section',
    '.contact-container',
].join(', ');

const EDGE_TOLERANCE = 24;

let currentIndex = 0;
let isAnimating = false;
let cooldownTimer = null;
let initialized = false;

const getSections = () => Array.from(document.querySelectorAll(SECTION_SELECTOR));

const inferIndexFromScroll = (sections) => {
    const probe = window.scrollY + window.innerHeight / 3;
    let idx = 0;
    sections.forEach((section, i) => {
        if (section.offsetTop <= probe) idx = i;
    });
    return idx;
};

const ensureInitialized = () => {
    if (initialized) return;
    initialized = true;
    currentIndex = inferIndexFromScroll(getSections());
};

const lockUntilSettled = () => {
    isAnimating = true;
    const release = () => {
        isAnimating = false;
    };
    clearTimeout(cooldownTimer);
    // Prefer the browser's own signal that the scroll animation has
    // actually settled (supported in modern Chrome/Firefox) over a fixed
    // timer: a guessed duration can be too short on a throttled/background
    // tab or a slow device, which is exactly what lets a gesture that
    // arrives just after the lock lifts (but before the page has really
    // stopped moving) read a stale position and overshoot.
    if ('onscrollend' in window) {
        const onScrollEnd = () => {
            window.removeEventListener('scrollend', onScrollEnd);
            clearTimeout(cooldownTimer);
            release();
        };
        window.addEventListener('scrollend', onScrollEnd, { once: true });
        // Fallback in case scrollend never fires (e.g. the scroll was a
        // no-op because we were already there).
        cooldownTimer = setTimeout(() => {
            window.removeEventListener('scrollend', onScrollEnd);
            release();
        }, 2000);
    } else {
        cooldownTimer = setTimeout(release, 1000);
    }
};

const goToIndex = (idx) => {
    ensureInitialized();
    const sections = getSections();
    const clamped = Math.max(0, Math.min(sections.length - 1, idx));
    const target = sections[clamped];
    if (!target) return;
    currentIndex = clamped;
    lockUntilSettled();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const goToSectionId = (id) => {
    ensureInitialized();
    const sections = getSections();
    const idx = sections.findIndex((s) => s.id === id);
    goToIndex(idx === -1 ? currentIndex : idx);
};

const step = (delta) => {
    ensureInitialized();
    if (isAnimating || delta === 0) return;

    const sections = getSections();
    const current = sections[currentIndex];
    if (!current) return;
    const rect = current.getBoundingClientRect();
    const viewportH = window.innerHeight;

    if (delta > 0) {
        // More of the current (taller-than-one-screen) section still
        // below the fold? Scroll further into it before advancing.
        if (rect.bottom - viewportH > EDGE_TOLERANCE) {
            lockUntilSettled();
            window.scrollBy({ top: viewportH, behavior: 'smooth' });
            return;
        }
        goToIndex(currentIndex + 1);
    } else {
        // Scrolled down into this section already? Step back up within
        // it before leaving for the previous section.
        if (rect.top < -EDGE_TOLERANCE) {
            lockUntilSettled();
            window.scrollBy({ top: -viewportH, behavior: 'smooth' });
            return;
        }
        goToIndex(currentIndex - 1);
    }
};

let listenersAttached = false;

const attachGlobalScrollListeners = () => {
    if (listenersAttached) return () => {};
    listenersAttached = true;
    ensureInitialized();

    const onWheel = (e) => {
        e.preventDefault();
        if (isAnimating) return;
        step(e.deltaY > 0 ? 1 : e.deltaY < 0 ? -1 : 0);
    };

    const onKeyDown = (e) => {
        const isDown = e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ';
        const isUp = e.key === 'ArrowUp' || e.key === 'PageUp';
        if (!isDown && !isUp) return;
        const tag = document.activeElement && document.activeElement.tagName;
        if (tag === 'INPUT' || tag === 'TEXTAREA') return;
        e.preventDefault();
        if (isAnimating) return;
        step(isDown ? 1 : -1);
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('keydown', onKeyDown);
    listenersAttached = true;

    return () => {
        window.removeEventListener('wheel', onWheel);
        window.removeEventListener('keydown', onKeyDown);
        clearTimeout(cooldownTimer);
        listenersAttached = false;
    };
};

export { attachGlobalScrollListeners, goToIndex, goToSectionId };
