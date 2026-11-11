import { ArrowUp } from 'lucide-react';
import SocialLinks from '../components/SocialLinks';
import { navLinks, profile } from '../data/portfolio';

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 md:flex-row">
        {/* Brand */}
        <div className="text-center md:text-left">
          <p className="text-xl font-bold tracking-tight text-gray-900">
            {profile.shortName}
            <span className="text-blue-600">.</span>
          </p>
          <p className="mt-1 text-sm text-gray-500">{profile.role}</p>
        </div>

        {/* Navigation */}
        <nav aria-label="Footer">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-gray-500">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className="transition hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <SocialLinks />
      </div>

      {/* Copyright */}
      <div className="mx-auto mt-8 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-gray-100 pt-6 sm:flex-row">
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>

        <a
          href="#home"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 transition hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
        >
          Back to top
          <ArrowUp size={14} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
