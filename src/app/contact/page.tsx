export default function ContactPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center  py-12 px-4">
      <div className="w-full max-w-2xl bg-white/10 rounded-xl shadow-lg p-8 backdrop-blur-md">
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-400 mb-2 text-center">
          Contact Me
        </h1>
        <p className="text-gray-300 mb-8 text-center">
          Feel free to reach out for collaborations, project inquiries, or just
          to say hello!
        </p>
        <form className="space-y-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-gray-200 font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="rounded-md px-4 py-2 bg-gray-800 text-gray-100 border border-gray-700 focus:ring-2 focus:ring-indigo-400 outline-none"
              placeholder="Your Name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-gray-200 font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="rounded-md px-4 py-2 bg-gray-800 text-gray-100 border border-gray-700 focus:ring-2 focus:ring-indigo-400 outline-none"
              placeholder="you@email.com"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-gray-200 font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="rounded-md px-4 py-2 bg-gray-800 text-gray-100 border border-gray-700 focus:ring-2 focus:ring-indigo-400 outline-none resize-none"
              placeholder="Type your message here..."
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded-md bg-indigo-500 hover:bg-indigo-600 text-white font-semibold text-lg transition-colors shadow-md"
          >
            Send Message
          </button>
        </form>
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-300">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <span className="font-semibold text-indigo-300">Email:</span>{" "}
            <a
             href="https://mail.google.com/mail/?view=cm&fs=1&to=blunty.hadid@gmail.com.com&su=Contact%20from%20Portfolio&body=Hi%20Hadid%2C%20I%20would%20like%20to%20connect%20with%20you%20regarding..."
              className="hover:text-indigo-400 transition"
            >
              blunty.hadid@gmail.com
            </a>
            <span className="font-semibold text-indigo-300">Phone:</span>{" "}
            <a
              href="tel:+1234567890"
              className="hover:text-indigo-400 transition"
            >
              +92 343 0847484
            </a>
          </div>
          <div className="flex gap-4 justify-center md:justify-end mt-4 md:mt-0">
            <a
              href="https://www.linkedin.com/in/hadid-ali/?jobid=1234"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition"
              title="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" />
              </svg>
            </a>
            <a
              href="https://github.com/your-github"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition"
              title="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
              title="WhatsApp"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.26-1.64A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.68-.5-5.26-1.44l-.38-.22-3.72.98.99-3.62-.25-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-1 2.43s1.02 2.82 1.16 3.02c.14.2 2.01 3.08 4.88 4.2.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
