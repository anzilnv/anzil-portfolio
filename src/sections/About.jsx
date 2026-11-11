import CategoryIcon from '../components/CategoryIcon';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { about } from '../data/portfolio';

function About() {
  return (
    <section id="about" className="bg-gray-50 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="About me" title={about.heading} />

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-5 text-base leading-8 text-gray-600 sm:text-lg">
            {about.paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph} delay={index * 0.08}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <ul className="grid gap-4">
            {about.focus.map((item, index) => (
              <Reveal as="li" key={item.title} delay={index * 0.08}>
                <div className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <CategoryIcon name={item.icon} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-gray-500">
                      {item.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
