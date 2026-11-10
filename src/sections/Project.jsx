
const projects = [
  {
    number: '01',
    title: 'Expense Tracker',
    category: 'Python Development',
    description:
      'A personal expense management application to add, track, delete and summarize expenses with data export functionality.',
    technologies: ['Python', 'CLI', 'CSV'],
    github: 'https://github.com/yourusername/expense-tracker',
  },
  {
    number: '02',
    title: 'Roster Planner',
    category: 'Full Stack Development',
    description:
      'An employee scheduling application to manage shifts, employee assignments and roster information.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/yourusername/roster-planner',
  },
  {
    number: '03',
    title: 'Leave Management',
    category: 'Web Application',
    description:
      'A leave management system for submitting leave requests, tracking applications and managing approvals.',
    technologies: ['React', 'Express', 'MongoDB'],
    github: 'https://github.com/yourusername/leave-management',
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-gray-50 px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <p className="mb-4 font-semibold text-blue-600">
          MY WORK
        </p>

        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <h2 className="max-w-xl text-4xl font-bold text-gray-900 md:text-5xl">
            Selected projects I've worked on.
          </h2>

          <p className="max-w-sm text-gray-500">
            A collection of projects showcasing my development
            skills and problem-solving abilities.
          </p>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-blue-600">
                  PROJECT {project.number}
                </span>

                <span className="text-2xl text-gray-400 transition group-hover:text-blue-600">
                  ↗
                </span>
              </div>

              <p className="mt-10 text-sm font-medium text-gray-400">
                {project.category}
              </p>

              <h3 className="mt-2 text-2xl font-bold text-gray-900">
                {project.title}
              </h3>

              <p className="mt-4 min-h-24 leading-7 text-gray-500">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-gray-900 transition hover:text-blue-600"
              >
                View GitHub <span>↗</span>
              </a>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;

