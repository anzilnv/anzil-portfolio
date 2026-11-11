import { ArrowRight } from 'lucide-react';
import Reveal from '../components/Reveal';
import SocialLinks from '../components/SocialLinks';
import { profile } from '../data/portfolio';

function ProfilePhoto() {
  return (
    <div className="relative mx-auto w-full max-w-[17rem] sm:max-w-sm">
      <div className="overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 shadow-xl shadow-gray-200/70">
        <img
          src={profile.photo}
          alt={`Portrait of ${profile.name}`}
          width="800"
          height="881"
          className="aspect-[4/5] w-full object-cover object-top"
        />
      </div>

      <div className="absolute -bottom-5 left-1/2 w-max max-w-[92%] -translate-x-1/2 rounded-2xl border border-gray-200 bg-white px-5 py-3 text-center shadow-lg sm:left-auto sm:right-[-1.5rem] sm:translate-x-0 sm:text-left">
        <p className="text-sm font-semibold text-gray-900">{profile.role}</p>
        <p className="mt-0.5 text-xs text-gray-500">
          {profile.stack.slice(0, 3).join(' · ')}
        </p>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-white px-5 pb-16 pt-28 sm:px-8"
    >
      {/* Subtle dotted texture, fades out toward the bottom */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm text-gray-600 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>
              {profile.availability}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">
              Hello, I&apos;m {profile.name}
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <h1 className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
              Building digital
              <span className="text-blue-600"> experiences </span>
              that make a difference.
            </h1>
          </Reveal>

          <Reveal delay={0.24}>
            <p className="mt-7 max-w-xl text-base leading-8 text-gray-500 sm:text-lg">
              {profile.tagline}
            </p>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3.5 font-medium text-white transition duration-200 hover:bg-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                View My Work
                <ArrowRight
                  size={18}
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#contact"
                className="rounded-full border border-gray-300 bg-white px-7 py-3.5 font-medium text-gray-800 transition duration-200 hover:border-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Contact Me
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <SocialLinks className="mt-10" />
          </Reveal>
        </div>

        <Reveal delay={0.2} className="order-first pb-6 lg:order-last lg:justify-self-end">
          <ProfilePhoto />
        </Reveal>
      </div>
    </section>
  );
}

export default Hero;
