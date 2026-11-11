import { ArrowUpRight, ExternalLink } from 'lucide-react';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { projects } from '../data/portfolio';

function Projects() {
  return (
    <section id="projects" className="bg-gray-50 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="My work"
          title="Selected projects I've worked on."
          description="A collection of projects showcasing my development skills and problem-solving abilities."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.number} delay={index * 0.08} className="h-full">
              <article className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold tracking-wider text-blue-600">
                    PROJECT {project.number}
                  </span>

                  <ArrowUpRight
                    size={22}
                    aria-hidden="true"
                    className="text-gray-300 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-600"
                  />
                </div>

                <p className="mt-10 text-sm font-medium text-gray-400">
                  {project.category}
                </p>

                <h3 className="mt-2 text-2xl font-bold tracking-tight text-gray-900">
                  {project.title}
                </h3>

                <p className="mt-4 flex-1 leading-7 text-gray-500">
                  {project.description}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} on GitHub`}
                    className="inline-flex items-center gap-1.5 font-semibold text-gray-900 transition hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
                  >
                    View GitHub
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} live demo`}
                      className="inline-flex items-center gap-1.5 font-semibold text-gray-500 transition hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
                    >
                      Live demo
                      <ExternalLink size={15} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
