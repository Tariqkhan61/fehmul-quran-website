import { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2 } from 'lucide-react';
import Reveal from '@/components/Reveal';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-emerald-50/40 py-24 lg:py-32">
      <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-gold-200/40 blur-3xl" />
      <div className="absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-gold-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-700">
              Enroll Now
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-balance font-serif text-3xl font-bold text-emerald-900 sm:text-4xl lg:text-5xl">
              Begin Your <span className="text-gradient-emerald">Journey</span> With Us
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 text-base leading-relaxed text-emerald-800/70 sm:text-lg">
              Have a question or ready to enroll? Reach out — we'd be honored to welcome
              you and your family.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Info side */}
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col gap-6 rounded-3xl bg-emerald-900 p-8 text-emerald-50 shadow-xl lg:p-10">
              <h3 className="font-serif text-2xl font-bold text-white">Get in Touch</h3>
              <p className="text-sm leading-relaxed text-emerald-100/75">
                Visit us, call, or send a message — our doors are always open to seekers
                of knowledge.
              </p>
              <ul className="mt-2 space-y-5">
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gold-500/15 text-gold-300">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-gold-300">Address</div>
                    <div className="mt-1 text-sm text-emerald-100/85">
                      Islamic Culture Centre Trust,<br />ST 02, Sector Z4,<br />Gulshan e Maymar
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gold-500/15 text-gold-300">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-gold-300">Phone</div>
                    <div className="mt-1 text-sm text-emerald-100/85">0311-2076786 / 0335-9990222</div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gold-500/15 text-gold-300">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-gold-300">Email</div>
                    <div className="mt-1 text-sm text-emerald-100/85">info@fehmulquran.org</div>
                  </div>
                </li>
              </ul>
            </div>
          </Reveal>

          {/* Form side */}
          <Reveal delay={120} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="h-full rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm lg:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-emerald-800">
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-emerald-200 bg-emerald-50/40 px-4 py-3 text-sm text-emerald-900 placeholder-emerald-400/60 transition-colors focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-300/40"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-emerald-800">
                    Phone
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="+92 ..."
                    className="w-full rounded-xl border border-emerald-200 bg-emerald-50/40 px-4 py-3 text-sm text-emerald-900 placeholder-emerald-400/60 transition-colors focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-300/40"
                  />
                </div>
              </div>
              <div className="mt-5">
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-emerald-800">
                  Email
                </label>
                <input
                  required
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-emerald-200 bg-emerald-50/40 px-4 py-3 text-sm text-emerald-900 placeholder-emerald-400/60 transition-colors focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-300/40"
                />
              </div>
              <div className="mt-5">
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-emerald-800">
                  Course of Interest
                </label>
                <select
                  className="w-full rounded-xl border border-emerald-200 bg-emerald-50/40 px-4 py-3 text-sm text-emerald-900 transition-colors focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-300/40"
                  defaultValue=""
                >
                  <option value="" disabled>Select a course</option>
                  <option>Arabic Grammar</option>
                  <option>Tajweed</option>
                  <option>Quran</option>
                  <option>Hadees</option>
                </select>
              </div>
              <div className="mt-5">
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-emerald-800">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us a little about yourself..."
                  className="w-full resize-none rounded-xl border border-emerald-200 bg-emerald-50/40 px-4 py-3 text-sm text-emerald-900 placeholder-emerald-400/60 transition-colors focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-300/40"
                />
              </div>
              <button
                type="submit"
                className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-800 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-emerald-900/20 transition-all duration-300 hover:from-gold-300 hover:to-gold-500 hover:text-emerald-950 active:scale-[0.98]"
              >
                {sent ? (
                  <>
                    <CheckCircle2 className="h-5 w-5" />
                    Message Sent — We'll be in touch!
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
