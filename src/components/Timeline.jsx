import Reveal from './Reveal';

/** Vertical timeline used by the Experience and Education sections. */
export function Timeline({ children }) {
  return (
    <ol className="relative mt-12 space-y-8 border-l border-gray-200 pl-8 sm:pl-10">
      {children}
    </ol>
  );
}

export function TimelineItem({ icon: Icon, delay = 0, children }) {
  return (
    <Reveal as="li" delay={delay} className="relative">
      <span className="absolute -left-[3.15rem] top-6 flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-blue-600 shadow-sm sm:-left-[3.65rem]">
        <Icon size={18} aria-hidden="true" />
      </span>
      {children}
    </Reveal>
  );
}
