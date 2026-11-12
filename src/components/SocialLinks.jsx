import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { profile, socials } from '../data/portfolio';

function SocialLinks({ className = '' }) {
  const linkClass =
    'flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <a
        href={socials.github}
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub profile"
        className={linkClass}
      >
        <GithubIcon size={18} />
      </a>

      <a
        href={socials.linkedin}
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn profile"
        className={linkClass}
      >
        <LinkedinIcon size={18} />
      </a>

      <a
        href={`mailto:${profile.email}`}
        aria-label="Send an email"
        className={linkClass}
      >
        <Mail size={18} aria-hidden="true" />
      </a>
    </div>
  );
}

export default SocialLinks;
