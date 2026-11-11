import Reveal from './Reveal';

function SectionHeading({ eyebrow, title, description, accent }) {
  return (
    <Reveal className="max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
        {title}
        {accent && <span className="text-blue-600"> {accent}</span>}
      </h2>

      {description && (
        <p className="mt-5 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg sm:leading-8">
          {description}
        </p>
      )}
    </Reveal>
  );
}

export default SectionHeading;
