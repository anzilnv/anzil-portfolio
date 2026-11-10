
import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const phone = "919605437939";

    const text = `
Hello Anzil!

Name: ${form.name}
Email: ${form.email}
Subject: ${form.subject}

Message:
${form.message}
`;

    const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    window.open(whatsappURL, "_blank");

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const inputStyle =
    "w-full min-w-0 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm sm:text-base outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

  return (
    <section
      id="contact"
      className="overflow-hidden bg-gray-50 px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl">

        {/* Heading */}
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold tracking-wider text-blue-600 sm:mb-4">
            GET IN TOUCH
          </p>

          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
            Have a project in mind?
            <span className="text-blue-600"> Let's talk.</span>
          </h2>

          <p className="mt-4 max-w-xl text-base leading-7 text-gray-500 sm:mt-6 sm:text-lg sm:leading-8">
            I'm always interested in discussing new opportunities,
            exciting projects and ideas. Feel free to reach out.
          </p>
        </div>

        {/* Contact content */}
        <div className="mt-10 grid grid-cols-1 gap-10 sm:mt-14 sm:gap-12 md:grid-cols-2 md:items-start md:gap-10 lg:gap-16">

          {/* Left information */}
          <div className="min-w-0">
            <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
              Let's connect
            </h3>

            <p className="mt-3 max-w-md text-sm leading-7 text-gray-500 sm:mt-4 sm:text-base">
              Whether you're a recruiter, developer or someone
              with an interesting idea, I'd love to hear from you.
            </p>

            <div className="mt-8 space-y-6 sm:mt-10">

              <div>
                <p className="text-xs font-semibold tracking-wider text-gray-400">
                  EMAIL
                </p>
                <a
                  href="mailto:YOUR_EMAIL@gmail.com"
                  className="mt-2 block break-all text-sm font-semibold text-gray-900 transition hover:text-blue-600 sm:text-base"
                >
                  YOUR_EMAIL@gmail.com
                </a>
              </div>

              <div>
                <p className="text-xs font-semibold tracking-wider text-gray-400">
                  LOCATION
                </p>
                <p className="mt-2 text-sm font-semibold text-gray-900 sm:text-base">
                  India
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold tracking-wider text-gray-400">
                  SOCIAL PROFILES
                </p>

                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-3">
                  <a
                    href="https://github.com/YOUR_USERNAME"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-gray-700 transition hover:text-blue-600 sm:text-base"
                  >
                    GitHub ↗
                  </a>

                  <a
                    href="https://linkedin.com/in/YOUR_USERNAME"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-gray-700 transition hover:text-blue-600 sm:text-base"
                  >
                    LinkedIn ↗
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right contact form */}
          <div className="min-w-0 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7 md:p-8">

            <h3 className="mb-6 text-xl font-bold text-gray-900 sm:text-2xl">
              Send me a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">

              <input
                name="name"
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className={inputStyle}
              />

              <input
                name="email"
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className={inputStyle}
              />

              <input
                name="subject"
                type="text"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                required
                className={inputStyle}
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
                className={`${inputStyle} resize-y`}
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-blue-700 active:scale-[0.99] sm:py-4 sm:text-base"
              >
                Send via WhatsApp →
              </button>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;
