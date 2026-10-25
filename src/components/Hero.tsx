import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/40053969/pexels-photo-40053969.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920"
          alt="Ornate Islamic mosque dome interior with intricate geometric patterns"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 via-emerald-950/80 to-emerald-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-emerald-950/40" />
      </div>

      {/* Decorative pattern */}
      <div className="pattern-islamic absolute inset-0 opacity-40" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pt-28 pb-20 lg:px-8">
        <div className="max-w-3xl">
          <div className="animate-fade-up mb-6 inline-flex items-center gap-3 rounded-full border border-gold-400/40 bg-emerald-950/40 px-5 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-gold-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-200">
              Under the umbrella of Islamic Culture Centre Trust
            </span>
          </div>

          <h1
            className="animate-fade-up text-balance font-serif text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl xl:text-7xl"
            style={{ animationDelay: '100ms' }}
          >
            Illuminating Hearts with the{' '}
            <span className="text-gradient-gold">Light of Quran</span>
          </h1>

          <p
            className="animate-fade-up mt-6 max-w-2xl text-lg leading-relaxed text-emerald-50/85 sm:text-xl"
            style={{ animationDelay: '220ms' }}
          >
            A premier Islamic Culture Centre Trust offering comprehensive education in
            Arabic Grammar, Tajweed, Quran, and Hadees — within a university-like
            atmosphere built for focused learning and physical well-being.
          </p>

          <div
            className="animate-fade-up mt-9 flex flex-col gap-4 sm:flex-row"
            style={{ animationDelay: '340ms' }}
          >
            <button
              onClick={() => scrollTo('#courses')}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-300 to-gold-500 px-8 py-4 text-base font-semibold text-emerald-950 shadow-xl shadow-gold-900/30 transition-all duration-300 hover:shadow-gold-500/50 hover:brightness-105 active:scale-95"
            >
              Explore Courses
              <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </button>
            <button
              onClick={() => scrollTo('#team')}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-gold-300 hover:bg-white/10 hover:text-gold-200 active:scale-95"
            >
              Meet Our Team
            </button>
          </div>

          {/* Stats strip */}
          <div
            className="animate-fade-up mt-14 grid grid-cols-3 gap-4 sm:gap-8"
            style={{ animationDelay: '460ms' }}
          >
            {[
              { value: '4', label: 'Core Disciplines' },
              { value: '3', label: 'Visionary Leaders' },
              { value: '100%', label: 'Devoted Care' },
            ].map((s) => (
              <div key={s.label} className="border-l-2 border-gold-400/50 pl-4">
                <div className="font-serif text-3xl font-bold text-gold-300 sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wider text-emerald-100/70 sm:text-sm">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 animate-float">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-gold-300/60 p-1.5">
          <span className="h-2 w-1 rounded-full bg-gold-300" />
        </div>
      </div>
    </section>
  );
}
