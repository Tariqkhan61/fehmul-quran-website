import { Quote, Sparkles, Users2, BookHeart } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { TEAM } from '@/data';

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-emerald-50/40 py-24 lg:py-32">
      <div className="pattern-dots absolute inset-0 opacity-60" />
      <div className="absolute -right-20 top-20 h-72 w-72 rounded-full bg-gold-200/30 blur-3xl" />
      <div className="absolute -left-20 bottom-20 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image side */}
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-2xl shadow-emerald-900/20 ring-1 ring-emerald-900/10">
                <img
                  src="/assets/images/WhatsApp_Image_2026-10-24_at_4.04.03_PM.jpeg"
                  alt="Islamic Culture Centre Trust building"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              {/* Floating quote card */}
              <div className="absolute -bottom-6 -right-4 max-w-xs rounded-2xl bg-emerald-900 p-5 shadow-xl ring-1 ring-gold-500/30 sm:-right-6">
                <Quote className="h-6 w-6 text-gold-400" />
                <p className="mt-2 font-serif text-sm italic leading-relaxed text-emerald-50">
                  “The best of you are those who learn the Quran and teach it.”
                </p>
                <p className="mt-2 text-[11px] font-medium uppercase tracking-wider text-gold-300">
                  — Prophet Muhammad ﷺ
                </p>
              </div>
            </div>
          </Reveal>

          {/* Text side */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-gold-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-700">
                <Sparkles className="h-3.5 w-3.5" />
                About Us
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 text-balance font-serif text-3xl font-bold text-emerald-900 sm:text-4xl lg:text-5xl">
                A Sanctuary of <span className="text-gradient-emerald">Knowledge</span> and{' '}
                <span className="text-gradient-gold">Character</span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-base leading-relaxed text-emerald-800/80 sm:text-lg">
                Fehmul Quran, an initiative of the Islamic Culture Centre Trust, was founded to
                nurture hearts and minds through authentic Islamic education. We believe a
                complete education shapes both the soul and the body — blending sacred
                learning with a vibrant, healthy environment.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-4 text-base leading-relaxed text-emerald-800/80 sm:text-lg">
                Our vision is to provide a <strong className="font-semibold text-emerald-900">university-like,
                air-conditioned atmosphere</strong> where students can focus deeply on their
                studies, paired with a <strong className="font-semibold text-emerald-900">large outdoor sports
                ground</strong> for football, cricket, and the physical fitness so essential to
                a balanced life.
              </p>
            </Reveal>

            {/* Leadership mini-cards */}
            <Reveal delay={300}>
              <div className="mt-9 grid gap-4 sm:grid-cols-3">
                {TEAM.map((m, i) => (
                  <div
                    key={m.name}
                    className="group rounded-2xl border border-emerald-200 bg-white/80 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold-400 hover:shadow-lg hover:shadow-emerald-900/10"
                  >
                    <div className="flex items-center gap-2 text-gold-600">
                      {i === 0 && <BookHeart className="h-4 w-4" />}
                      {i === 1 && <Sparkles className="h-4 w-4" />}
                      {i === 2 && <Users2 className="h-4 w-4" />}
                      <span className="text-[10px] font-bold uppercase tracking-wider">{m.role}</span>
                    </div>
                    <div className="mt-2 font-serif text-base font-bold text-emerald-900">
                      {m.name}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
