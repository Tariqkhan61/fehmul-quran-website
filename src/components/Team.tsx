import { BookOpenText, Linkedin, Mail } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { TEAM, ULAMA } from '@/data';

export default function Team() {
  return (
    <section id="team" className="relative overflow-hidden bg-emerald-50/40 py-24 lg:py-32">
      <div className="pattern-dots absolute inset-0 opacity-50" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-gold-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-700">
              Our Leadership
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-balance font-serif text-3xl font-bold text-emerald-900 sm:text-4xl lg:text-5xl">
              Guided by <span className="text-gradient-emerald">Devoted Hearts</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 text-base leading-relaxed text-emerald-800/70 sm:text-lg">
              The vision and care behind Fehmul Quran, carried by leaders who live what
              they teach.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((m, i) => (
            <Reveal key={m.name} delay={i * 140} className="h-full">
              <article className="group flex h-full flex-col items-center rounded-3xl border border-emerald-100 bg-white p-8 text-center shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-gold-400 hover:shadow-2xl hover:shadow-emerald-900/15">
                {/* Profile photo */}
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-gold-300 to-gold-600 opacity-60 blur transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative h-32 w-32 overflow-hidden rounded-full ring-4 ring-white">
                    <img
                      src={m.image}
                      alt={`${m.name} — ${m.role}`}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <span className="absolute bottom-1 right-1 flex h-9 w-9 items-center justify-center rounded-full bg-emerald-900 text-xs font-bold uppercase tracking-wide text-gold-300 shadow-lg ring-2 ring-white">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="mt-6 font-serif text-2xl font-bold text-emerald-900">{m.name}</h3>
                <span className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-gold-600">
                  {m.role}
                </span>
                <p className="mt-4 text-sm leading-relaxed text-emerald-800/70">{m.bio}</p>

                <div className="mt-6 flex items-center gap-3">
                  <button
                    aria-label={`Contact ${m.name}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 transition-colors hover:bg-emerald-700 hover:text-white"
                  >
                    <Mail className="h-4 w-4" />
                  </button>
                  <button
                    aria-label={`${m.name} on LinkedIn`}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 transition-colors hover:bg-emerald-700 hover:text-white"
                  >
                    <Linkedin className="h-4 w-4" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={180}>
          <div className="mt-16 overflow-hidden rounded-3xl border border-gold-300/50 bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-900 p-8 shadow-xl shadow-emerald-900/10 lg:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-md">
                <div className="flex items-center gap-3 text-gold-300">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-400/15">
                    <BookOpenText className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.2em]">Prominent Ulama-e-Karam</span>
                </div>
                <h3 className="mt-4 font-serif text-2xl font-bold text-white sm:text-3xl">
                  Honored Voices of Islamic Knowledge
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-emerald-100/75">
                  We are honored to recognize esteemed scholars whose guidance and scholarship continue to inspire our community.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {ULAMA.map((scholar) => (
                  <div key={scholar.name} className="min-w-0 rounded-2xl border border-gold-400/25 bg-white/10 p-5 backdrop-blur-sm transition-colors hover:border-gold-400/60 hover:bg-white/15">
                    <div className="text-xs font-bold uppercase tracking-[0.16em] text-gold-300">{scholar.title}</div>
                    <div className="mt-2 font-serif text-xl font-bold text-white">{scholar.name}</div>
                    <div className="mt-2 text-sm text-emerald-100/70">{scholar.affiliation}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
