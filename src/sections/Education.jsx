import { GraduationCap } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { Timeline, TimelineItem } from '../components/Timeline';
import { education } from '../data/portfolio';

function Education() {
  return (
    <section id="education" className="bg-gray-50 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Education"
          title="Academic background."
          description="The education and training that built the foundation of my development skills."
        />

        <Timeline>
          {education.map((item, index) => (
            <TimelineItem
              key={`${item.institution}-${item.degree}`}
              icon={GraduationCap}
              delay={index * 0.08}
            >
              <div className="rounded-2xl border border-gray-200 bg-white p-6 transition duration-300 hover:border-blue-200 hover:shadow-lg sm:p-8">
                <div className="flex flex-col justify-between gap-3 md:flex-row">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                      {item.degree}
                    </h3>

                    <p className="mt-1.5 font-medium text-blue-600">
                      {item.institution}
                    </p>
                  </div>

                  <span className="h-fit w-fit rounded-full bg-gray-100 px-4 py-1.5 text-sm text-gray-600">
                    {item.duration}
                  </span>
                </div>

                {item.description && (
                  <p className="mt-5 leading-7 text-gray-600">
                    {item.description}
                  </p>
                )}
              </div>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
}

export default Education;
