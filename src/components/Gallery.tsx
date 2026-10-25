import Reveal from '@/components/Reveal';
import { GALLERY_IMAGES } from '@/data';

export default function Gallery() {
  return (
    <section id="gallery" className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Gallery
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-balance font-serif text-3xl font-bold text-emerald-900 sm:text-4xl lg:text-5xl">
              Glimpses of <span className="text-gradient-emerald">Our World</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 text-base leading-relaxed text-emerald-800/70 sm:text-lg">
              Moments of learning, reflection, and play from the life of Fehmul Quran.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] md:grid-cols-3 lg:auto-rows-[260px]">
          {GALLERY_IMAGES.map((src, i) => (
            <Reveal
              key={src}
              delay={i * 80}
              className={`overflow-hidden rounded-2xl shadow-md ring-1 ring-emerald-900/5 ${
                i === 0 ? 'col-span-2 row-span-2' : ''
              } ${i === 5 ? 'md:col-span-2' : ''}`}
            >
              <div className="group relative h-full w-full">
                <img
                  src={src}
                  alt={`Gallery image ${i + 1}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute bottom-3 left-3 translate-y-2 text-xs font-medium uppercase tracking-wider text-gold-200 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  Fehmul Quran
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
