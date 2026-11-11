import { Briefcase, Check } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { Timeline, TimelineItem } from '../components/Timeline';
import { experiences } from '../data/portfolio';

function Experience() {
  return (
    <section id="experience" className="bg-white px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="My journey"
          title="Professional Experience."
          description="My professional journey, technical responsibilities and experience building software applications."
        />

        <Timeline>
          {experiences.map((experience, index) => (
            <TimelineItem
              key={`${experience.company}-${experience.role}`}
              icon={Briefcase}
              delay={index * 0.08}
            >
              <div className="rounded-2xl border border-gray-200 bg-white p-6 transition duration-300 hover:border-blue-200 hover:shadow-lg sm:p-8">
                <div className="flex flex-col justify-between gap-3 md:flex-row">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                      {experience.role}
                    </h3>

                    <p className="mt-1.5 font-medium text-blue-600">
                      {experience.company}
                    </p>
                  </div>

                  {/* <span className="h-fit w-fit rounded-full bg-gray-100 px-4 py-1.5 text-sm text-gray-600">
                    {experience.duration}
                  </span> */}
                </div>

                <p className="mt-6 leading-7 text-gray-600">
                  {experience.description}
                </p>

                <ul className="mt-5 space-y-3">
                  {experience.responsibilities.map((item) => (
                    <li key={item} className="flex gap-3 text-gray-600">
                      <Check
                        size={18}
                        aria-hidden="true"
                        className="mt-1 shrink-0 text-blue-600"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full bg-blue-50 px-3.5 py-1.5 text-sm font-medium text-blue-700"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
}

export default Experience;
