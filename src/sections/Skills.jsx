import CategoryIcon from '../components/CategoryIcon';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { skillGroups } from '../data/portfolio';

function Skills() {
  return (
    <section id="skills" className="bg-white px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="My expertise"
          title="Technologies I work with."
          description="The languages, frameworks and tools I use to design, build and ship web applications."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.07}>
              <div className="h-full rounded-2xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <CategoryIcon name={group.icon} />
                </span>

                <h3 className="mt-5 text-lg font-semibold text-gray-900">
                  {group.title}
                </h3>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-700"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
