function Footer() {
  return (
    <footer className="w-full text-gray-300 py-6 mt-8 border-t border-gray-600">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Hadid Ali. All rights reserved.
        </div>
        <div className="flex gap-4 text-sm justify-center md:justify-end">
          <a
            href="mailto:your.email@example.com"
            className="hover:text-indigo-400 transition-colors"
          >
            Contact
          </a>
          <a
            href="https://www.linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
