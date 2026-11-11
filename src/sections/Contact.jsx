import { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import SocialLinks from '../components/SocialLinks';
import { profile } from '../data/portfolio';

const emptyForm = { name: '', email: '', subject: '', message: '' };

const fields = [
  { name: 'name', label: 'Your name', type: 'text', autoComplete: 'name' },
  { name: 'email', label: 'Your email', type: 'email', autoComplete: 'email' },
  { name: 'subject', label: 'Subject', type: 'text', autoComplete: 'off' },
];

const inputStyle =
  'w-full min-w-0 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 sm:text-base';

function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((current) => ({ ...current, [name]: value }));
    if (sent) setSent(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = `Hi ${profile.shortName},

${form.message}

— ${form.name} (${form.email})`;

    // Opens the visitor's email app with the message ready to send.
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      form.subject,
    )}&body=${encodeURIComponent(body)}`;

    setForm(emptyForm);
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow="Get in touch"
          title="Have a project in mind?"
          accent="Let's talk."
          description="I'm always interested in discussing new opportunities, exciting projects and ideas. Feel free to reach out."
        />

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start lg:gap-16">
          {/* Contact information */}
          <Reveal className="min-w-0">
            <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
              Let&apos;s connect
            </h3>

            <p className="mt-3 max-w-md text-sm leading-7 text-gray-500 sm:text-base">
              Whether you&apos;re a recruiter, developer or someone with an
              interesting idea, I&apos;d love to hear from you.
            </p>

            <ul className="mt-8 space-y-6">
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Mail size={20} aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Email
                  </p>
                  <a
                    href={`mailto:${profile.email}`}
                    className="mt-1 block break-all text-sm font-semibold text-gray-900 transition hover:text-blue-600 sm:text-base"
                  >
                    {profile.email}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <MapPin size={20} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Location
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-900 sm:text-base">
                    {profile.location}
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                Social profiles
              </p>
              <SocialLinks />
            </div>
          </Reveal>

          {/* Contact form */}
          <Reveal delay={0.1} className="min-w-0">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8">
              <h3 className="mb-6 text-xl font-bold text-gray-900 sm:text-2xl">
                Send me a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                {fields.map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={`contact-${field.name}`}
                      className="mb-1.5 block text-sm font-medium text-gray-700"
                    >
                      {field.label}
                    </label>
                    <input
                      id={`contact-${field.name}`}
                      name={field.name}
                      type={field.type}
                      autoComplete={field.autoComplete}
                      value={form[field.name]}
                      onChange={handleChange}
                      required
                      className={inputStyle}
                    />
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-1.5 block text-sm font-medium text-gray-700"
                  >
                    Your message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                    className={`${inputStyle} resize-y`}
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:scale-[0.99] sm:py-4 sm:text-base"
                >
                  Send Email
                  <Send size={18} aria-hidden="true" />
                </button>

                <p
                  role="status"
                  aria-live="polite"
                  className={`text-center text-sm text-green-600 ${sent ? '' : 'hidden'}`}
                >
                  Your email app should now open with the message ready. Press
                  send there to deliver it.
                </p>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;
