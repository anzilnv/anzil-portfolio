
const skills = [
  'React.js',
  'JavaScript',
  'HTML5',
  'CSS3',
  'Tailwind CSS',
  'Node.js',
  'Express.js',
  'MongoDB',
  'REST APIs',
  'Git & GitHub',
];

function Skills() {
  return (
    <section id="skills" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 font-semibold text-blue-600">
          MY EXPERTISE
        </p>

        <h2 className="text-4xl font-bold text-gray-900">
          Technologies I work with.
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-xl border border-gray-200 p-5 text-center font-medium text-gray-700 transition hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
