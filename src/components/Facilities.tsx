import { Snowflake, Trophy, Wind, Dumbbell } from 'lucide-react';
import Reveal from '@/components/Reveal';

export default function Facilities() {
  return (
    <section id="facilities" className="relative overflow-hidden bg-emerald-900 py-24 lg:py-32">
      <div className="pattern-islamic absolute inset-0 opacity-20" />
      <div className="absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-emerald-950/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
              Our Facilities
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-balance font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              An Environment for <span className="text-gradient-gold">Body and Soul</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 text-base leading-relaxed text-emerald-100/70 sm:text-lg">
              We've built a place where focused scholarship and joyful physical
              activity live side by side.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Academic Environment */}
          <Reveal>
            <article className="group relative h-full overflow-hidden rounded-3xl border border-gold-500/20 bg-emerald-950/40 p-8 backdrop-blur-sm transition-all duration-500 hover:border-gold-400/50 hover:bg-emerald-950/60 sm:p-10">
              <div className="relative z-10">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-300 to-gold-500 text-emerald-950 shadow-lg shadow-gold-900/30 transition-transform duration-500 group-hover:scale-110">
                    <Snowflake className="h-8 w-8" strokeWidth={1.6} />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-white">Academic Environment</h3>
                    <p className="text-sm font-medium text-gold-300">Air-conditioned · University-like</p>
                  </div>
                </div>
                <p className="leading-relaxed text-emerald-100/75">
                  Step into a calm, cool, air-conditioned space thoughtfully designed to
                  mirror the focus and dignity of a university. Bright classrooms, quiet
                  reading corners, and a refined atmosphere let every student settle
                  deeply into their study of the Quran and its sciences.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    { icon: Snowflake, text: 'Climate-controlled classrooms for year-round comfort' },
                    { icon: Wind, text: 'Spacious, well-lit halls inspired by university campuses' },
                    { icon: Trophy, text: 'Dedicated areas for group and individual study' },
                  ].map((f) => (
                    <li key={f.text} className="flex items-start gap-3 text-sm text-emerald-100/80">
                      <f.icon className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-400" />
                      <span>{f.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>

          {/* Sports Ground */}
          <Reveal delay={120}>
            <article className="group relative h-full overflow-hidden rounded-3xl p-8 sm:p-10">
              <img
                src="https://images.pexels.com/photos/13509632/pexels-photo-13509632.jpeg?auto=compress&cs=tinysrgb&h=720&w=940"
                alt="Young cricketer prepares to bat during a match"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/85 to-emerald-950/40" />

              <div className="relative z-10">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-300 to-gold-500 text-emerald-950 shadow-lg shadow-gold-900/30 transition-transform duration-500 group-hover:scale-110">
                    <Trophy className="h-8 w-8" strokeWidth={1.6} />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-white">Sports Ground</h3>
                    <p className="text-sm font-medium text-gold-300">Football · Cricket · Fitness</p>
                  </div>
                </div>
                <p className="leading-relaxed text-emerald-100/85">
                  A large, open outdoor sports ground where children run, play, and grow
                  strong. Football, cricket, and organized physical fitness activities
                  keep our students healthy, energetic, and full of joy — because a
                  strong body carries a strong mind.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    { icon: Trophy, text: 'Full-size ground for football and cricket' },
                    { icon: Dumbbell, text: 'Physical fitness activities for all ages' },
                    { icon: Wind, text: 'Open-air space for healthy, active play' },
                  ].map((f) => (
                    <li key={f.text} className="flex items-start gap-3 text-sm text-emerald-50/90">
                      <f.icon className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-400" />
                      <span>{f.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
