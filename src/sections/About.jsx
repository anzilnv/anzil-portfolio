
function About() {
  return (
    <section id="about" className="bg-gray-50 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 font-semibold text-blue-600">
          ABOUT ME
        </p>

        <h2 className="max-w-3xl text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
          Turning ideas into meaningful digital products.
        </h2>

        <div className="mt-10 max-w-3xl space-y-5 text-lg leading-8 text-gray-600">
          <p>
            I'm a Full Stack Developer with experience building
            modern web applications using React, JavaScript,
            Node.js and MongoDB.
          </p>

          <p>
            I enjoy solving real-world problems, developing
            intuitive user interfaces and creating scalable
            backend solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
