import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import SocialLinks from './SocialLinks';
import { navLinks, profile } from '../data/portfolio';

const MotionDiv = motion.div;

const sectionIds = navLinks.map((link) => link.id);

// A section counts as "current" once its top passes this distance from the top of the screen.
const ACTIVE_OFFSET = 120;

/**
 * Tracks which section is currently on screen.
 * `select(id)` highlights a link immediately when it is clicked and pauses the
 * scroll tracking until the page has finished scrolling, so the highlight
 * doesn't flicker through every section on the way.
 */
function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  const locked = useRef(false);
  const unlockTimer = useRef(0);
  const update = useRef(() => { });

  useEffect(() => {
    let frame = 0;

    update.current = () => {
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;

      if (atBottom) {
        setActive(ids[ids.length - 1]);
        return;
      }

      let current = ids[0];
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= ACTIVE_OFFSET) {
          current = id;
        }
      });
      setActive(current);
    };

    const unlock = () => {
      locked.current = false;
      update.current();
    };

    const onScroll = () => {
      if (locked.current) {
        // Wait until the scrolling stops, then sync the highlight.
        window.clearTimeout(unlockTimer.current);
        unlockTimer.current = window.setTimeout(unlock, 150);
        return;
      }
      if (!frame) {
        frame = window.requestAnimationFrame(() => {
          frame = 0;
          update.current();
        });
      }
    };

    update.current();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      window.cancelAnimationFrame(frame);
      window.clearTimeout(unlockTimer.current);
    };
  }, [ids]);

  const select = useCallback((id) => {
    locked.current = true;
    setActive(id);
    window.clearTimeout(unlockTimer.current);
    // Fallback in case the page is already at the target and never scrolls.
    unlockTimer.current = window.setTimeout(() => {
      locked.current = false;
      update.current();
    }, 150);
  }, []);

  return [active, select];
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();
  const [active, select] = useActiveSection(sectionIds);
  const headerRef = useRef(null);
  const toggleRef = useRef(null);

  // Add a shadow once the page has been scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // While the mobile menu is open: close it on Escape, on a tap outside, or
  // when the window grows to the desktop layout.
  useEffect(() => {
    if (!menuOpen) return undefined;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };

    const onPointerDown = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    const desktop = window.matchMedia('(min-width: 1024px)');
    const onBreakpoint = (e) => {
      if (e.matches) setMenuOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    desktop.addEventListener('change', onBreakpoint);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
      desktop.removeEventListener('change', onBreakpoint);
    };
  }, [menuOpen]);

  // Scrolls to a section ourselves so the link works every time, on desktop and in the mobile menu.
  const handleLinkClick = (event, id) => {
    // Let the browser handle ctrl/cmd/shift-clicks (open in a new tab, etc.)
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const target = document.getElementById(id);
    if (!target) return;

    event.preventDefault();
    select(id);
    setMenuOpen(false);

    const navHeight =
      headerRef.current?.querySelector('nav')?.offsetHeight ?? 72;
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight;

    window.scrollTo({ top: Math.max(top, 0), behavior: reduceMotion ? 'auto' : 'smooth' });

    if (window.location.hash !== `#${id}`) {
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 border-b bg-white/90 backdrop-blur-md transition-shadow duration-300 ${scrolled ? 'border-gray-200 shadow-sm' : 'border-transparent'
        }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8"
      >
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, 'home')}
          className="rounded-md text-2xl font-bold tracking-tight text-gray-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
          aria-label={`${profile.name} — home`}
        >
          {profile.shortName}
          <span className="text-blue-600">.</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.id;
            return (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${isActive
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#contact"
          onClick={(e) => handleLinkClick(e, 'contact')}
          className="hidden rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition duration-200 hover:bg-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 lg:block"
        >
          Let&apos;s Talk
        </a>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="rounded-lg p-2 text-gray-900 transition hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-blue-600 lg:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <MotionDiv
            id="mobile-menu"
            key="mobile-menu"
            initial={reduceMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden border-t border-gray-100 bg-white lg:hidden"
          >
            {/* Scrolls inside the menu if the screen is too short to fit it */}
            <div className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto overscroll-contain px-5 pb-5 pt-3 sm:px-8">
              <ul>
                {navLinks.map((link) => {
                  const isActive = active === link.id;
                  return (
                    <li key={link.id}>
                      <a
                        href={link.href}
                        onClick={(e) => handleLinkClick(e, link.id)}
                        aria-current={isActive ? 'true' : undefined}
                        className={`block rounded-lg px-3 py-3 text-sm font-medium transition-colors ${isActive
                            ? 'bg-blue-50 text-blue-700'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                          }`}
                      >
                        {link.name}
                      </a>
                    </li>
                  );
                })}
              </ul>

              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, 'contact')}
                className="mt-3 block rounded-full bg-gray-900 px-5 py-3 text-center text-sm font-medium text-white transition hover:bg-blue-600"
              >
                Let&apos;s Talk
              </a>

              <SocialLinks className="mt-5 justify-center" />
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
