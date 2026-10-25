import { BookOpen, AudioLines, BookMarked, Scroll, ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { COURSES, type Course } from '@/data';

const ICONS = { BookOpen, AudioLines, BookMarked, Scroll };

export default function Courses() {
  return (
    <section id="courses" className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Our Curriculum
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-balance font-serif text-3xl font-bold text-emerald-900 sm:text-4xl lg:text-5xl">
              Courses Rooted in <span className="text-gradient-emerald">Sacred Tradition</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 text-base leading-relaxed text-emerald-800/70 sm:text-lg">
              Four foundational disciplines, taught with depth and care, to illuminate
              every heart that walks through our doors.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {COURSES.map((course: Course, i) => {
            const Icon = ICONS[course.iconName];
            return (
              <Reveal key={course.title} delay={i * 120} className="h-full">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-emerald-100 bg-gradient-to-b from-white to-emerald-50/40 p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-gold-400 hover:shadow-2xl hover:shadow-emerald-900/15">
                  {/* Top accent */}
                  <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-gold-300 to-gold-500 transition-transform duration-500 group-hover:scale-x-100" />

                  {/* Icon */}
                  <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-900 text-gold-300 shadow-lg shadow-emerald-900/20 transition-all duration-500 group-hover:rotate-3 group-hover:bg-gradient-to-br group-hover:from-gold-300 group-hover:to-gold-500 group-hover:text-emerald-950">
                    <Icon className="h-8 w-8" strokeWidth={1.6} />
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold-600">
                    {String(i + 1).padStart(2, '0')} · {course.tagline}
                  </span>
                  <h3 className="mt-2 font-serif text-2xl font-bold text-emerald-900">
                    {course.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-emerald-800/70">
                    {course.description}
                  </p>

                  <button className="group/btn mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 transition-colors hover:text-gold-600">
                    View Details
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1.5" />
                  </button>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
