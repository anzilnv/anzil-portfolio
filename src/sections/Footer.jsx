
function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">

        {/* Brand */}
        <div className="text-center sm:text-left">
          <h3 className="text-xl font-bold text-gray-900">
            Anzil<span className="text-blue-600">.</span>
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Full Stack Developer
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-gray-500">
          <a href="#home" className="transition hover:text-blue-600">Home</a>
          <a href="#about" className="transition hover:text-blue-600">About</a>
          <a href="#projects" className="transition hover:text-blue-600">Projects</a>
          <a href="#contact" className="transition hover:text-blue-600">Contact</a>
        </nav>

      </div>

      {/* Copyright */}
      <div className="mx-auto mt-7 max-w-7xl border-t border-gray-100 pt-5 text-center">
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Anzil Muhammed. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
