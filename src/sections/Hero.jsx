
function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center bg-white px-6 pt-24"
    >
      <div className="mx-auto w-full max-w-7xl">
        <p className="mb-5 font-medium text-blue-600">
          HELLO, I'M ANZIL MUHAMMED
        </p>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight text-gray-900 md:text-7xl">
          Building digital
          <span className="text-blue-600"> experiences </span>
          that make a difference.
        </h1>

        <p className="animate-fade-up animate-delay-1 mt-7 max-w-2xl text-lg leading-8 text-gray-500">
          I'm a Full Stack Developer passionate about building
          modern, scalable and user-friendly web applications.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-gray-900 px-7 py-3.5 font-medium text-white transition hover:bg-blue-600"
          >
            View My Work →
          </a>

          <a
            href="#contact"
            className="rounded-full border border-gray-300 px-7 py-3.5 font-medium text-gray-800 transition hover:border-gray-900"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-16 flex items-center gap-3 text-sm text-gray-500">
          <span className="h-2.5 w-2.5 rounded-full bg-green-500"></span>
          Available for opportunities
        </div>
      </div>
    </section>
  );
}

export default Hero;
