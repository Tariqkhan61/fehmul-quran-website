import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-emerald-950/95 shadow-xl shadow-emerald-950/30 backdrop-blur-md'
          : 'bg-gradient-to-b from-emerald-950/60 to-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNav('#home');
          }}
          className="group flex items-center gap-3"
        >
          <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-gold-300 to-gold-600 shadow-lg shadow-gold-900/30 ring-1 ring-gold-200/40">
            <svg viewBox="0 0 24 24" className="h-6 w-6 text-emerald-900" fill="currentColor">
              <path d="M12 2l3.5 3.5h-2.5v6.5h-2V5.5H8.5L12 2zM7 9.5c-2 0-3.5 1.5-3.5 3.5S5 16.5 7 16.5c1.4 0 2.5-.7 3-1.8v3.6c0 .8-.4 1.2-1.2 1.2H7.5v1.5h9v-1.5h-1.3c-.8 0-1.2-.4-1.2-1.2v-3.6c.5 1.1 1.6 1.8 3 1.8 2 0 3.5-1.5 3.5-3.5S18.5 9.5 16.5 9.5c-1.5 0-2.7.8-3.2 2-.5-2-1.9-3.4-3.3-3.4z" />
            </svg>
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-xl font-bold tracking-wide text-white">
              Fehmul Quran
            </span>
            <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.2em] text-gold-300/90">
              Islamic Culture Centre Trust
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
                className="relative px-3.5 py-2 text-sm font-medium text-emerald-50/90 transition-colors hover:text-gold-300"
              >
                {link.label}
                <span className="absolute inset-x-3.5 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-gold-400 transition-transform duration-300 hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNav('#contact')}
            className="hidden rounded-full bg-gradient-to-r from-gold-300 to-gold-500 px-6 py-2.5 text-sm font-semibold text-emerald-950 shadow-lg shadow-gold-900/20 transition-all duration-300 hover:shadow-gold-500/40 hover:brightness-105 active:scale-95 sm:inline-flex"
          >
            Enroll Now
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-emerald-950/98 backdrop-blur-md transition-all duration-400 lg:hidden ${
          open ? 'max-h-screen border-t border-gold-500/20' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {NAV_LINKS.map((link, i) => (
            <li
              key={link.href}
              style={{ transitionDelay: `${i * 40}ms` }}
              className={`transition-all duration-300 ${open ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}
            >
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
                className="block rounded-lg px-4 py-3 text-base font-medium text-emerald-50 transition-colors hover:bg-gold-500/10 hover:text-gold-300"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <button
              onClick={() => handleNav('#contact')}
              className="w-full rounded-full bg-gradient-to-r from-gold-300 to-gold-500 px-6 py-3 text-base font-semibold text-emerald-950 shadow-lg shadow-gold-900/20"
            >
              Enroll Now
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
