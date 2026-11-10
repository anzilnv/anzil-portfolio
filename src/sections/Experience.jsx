
const experiences = [
  {
    role: 'Full Stack Developer Intern',
    company: 'Your Company Name',
    duration: 'Add your employment dates',
    description:
      'Worked on developing and maintaining web applications, building reusable UI components and integrating backend APIs.',
    responsibilities: [
      'Developed responsive interfaces using React.js and Tailwind CSS.',
      'Integrated REST APIs using RTK Query.',
      'Worked with Node.js, Express.js and MongoDB.',
      'Fixed bugs and improved application functionality.',
    ],
    technologies: ['React', 'JavaScript', 'Node.js', 'MongoDB'],
  },
];

function Experience() {
  return (
    <section id="experience" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <p className="mb-4 font-semibold text-blue-600">
          MY JOURNEY
        </p>

        <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
          Professional Experience.
        </h2>

        <p className="mt-5 max-w-2xl text-lg text-gray-500">
          My professional journey, technical responsibilities
          and experience building software applications.
        </p>

        <div className="mt-14 space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 p-8 transition hover:shadow-lg md:p-10"
            >
              <div className="flex flex-col justify-between gap-4 md:flex-row">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {experience.role}
                  </h3>

                  <p className="mt-2 font-medium text-blue-600">
                    {experience.company}
                  </p>
                </div>

                <span className="h-fit rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-600">
                  {experience.duration}
                </span>
              </div>

              <p className="mt-7 leading-7 text-gray-600">
                {experience.description}
              </p>

              <ul className="mt-6 space-y-3">
                {experience.responsibilities.map((item) => (
                  <li key={item} className="flex gap-3 text-gray-600">
                    <span className="text-blue-600">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;
