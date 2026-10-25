import { Facebook, Instagram, Youtube, ArrowUp, Heart } from 'lucide-react';
import { NAV_LINKS } from '@/data';

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const quickLinks = NAV_LINKS.filter((l) =>
    ['Home', 'Courses', 'Facilities', 'Contact'].includes(l.label),
  );

  return (
    <footer className="relative overflow-hidden bg-emerald-950 text-emerald-100">
      <div className="pattern-islamic absolute inset-0 opacity-15" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Left: Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-gold-300 to-gold-600 shadow-lg ring-1 ring-gold-200/30">
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-emerald-900" fill="currentColor">
                  <path d="M12 2l3.5 3.5h-2.5v6.5h-2V5.5H8.5L12 2zM7 9.5c-2 0-3.5 1.5-3.5 3.5S5 16.5 7 16.5c1.4 0 2.5-.7 3-1.8v3.6c0 .8-.4 1.2-1.2 1.2H7.5v1.5h9v-1.5h-1.3c-.8 0-1.2-.4-1.2-1.2v-3.6c.5 1.1 1.6 1.8 3 1.8 2 0 3.5-1.5 3.5-3.5S18.5 9.5 16.5 9.5c-1.5 0-2.7.8-3.2 2-.5-2-1.9-3.4-3.3-3.4z" />
                </svg>
              </span>
              <div>
                <div className="font-serif text-xl font-bold text-white">Fehmul Quran</div>
                <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-gold-300/90">
                  Islamic Culture Centre Trust
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-emerald-100/65">
              Illuminating hearts with the light of the Quran — through authentic
              education, a nurturing environment, and the joy of a healthy, active life.
            </p>
            <p className="mt-4 text-xs italic text-gold-300/80">
              Under the umbrella of Islamic Culture Centre Trust.
            </p>
          </div>

          {/* Middle: Quick links */}
          <div className="md:justify-self-center">
            <h4 className="font-serif text-lg font-bold text-white">Quick Links</h4>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(l.href);
                    }}
                    className="group inline-flex items-center gap-2 text-sm text-emerald-100/70 transition-colors hover:text-gold-300"
                  >
                    <span className="h-px w-4 bg-gold-500/40 transition-all group-hover:w-8 group-hover:bg-gold-400" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Contact + social */}
          <div>
            <h4 className="font-serif text-lg font-bold text-white">Contact</h4>
            <ul className="mt-5 space-y-3 text-sm text-emerald-100/70">
              <li>Islamic Culture Centre Trust, ST 02 Sector Z4, Gulshan e Maymar</li>
              <li>
                <a href="tel:+923112076786" className="transition-colors hover:text-gold-300">
                  0311-2076786 / 0335-9990222
                </a>
              </li>
              <li>
                <a href="mailto:info@fehmulquran.org" className="transition-colors hover:text-gold-300">
                  info@fehmulquran.org
                </a>
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-3">
              {[
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Youtube, label: 'YouTube' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-emerald-100/70 ring-1 ring-gold-500/20 transition-all duration-300 hover:bg-gradient-to-br hover:from-gold-300 hover:to-gold-500 hover:text-emerald-950"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-gold-500/15 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="text-xs text-emerald-100/60">
              © 2024 Fehmul Quran. All Rights Reserved.
            </p>
            <p className="flex items-center gap-1.5 text-xs text-emerald-100/60">
              This is made with love by
              <span className="font-semibold text-gold-300">Muhammad Tariq Mahboob</span>
              <Heart className="h-3.5 w-3.5 fill-gold-400 text-gold-400" />
            </p>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        className="absolute bottom-6 right-6 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-gold-300 to-gold-500 text-emerald-950 shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-gold-500/40"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
}
