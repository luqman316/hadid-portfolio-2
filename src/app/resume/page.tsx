export default function ResumePage() {
  return (
    <div className="min-h-screen flex flex-col  text-white">
      <main className="flex-1 flex flex-col items-center justify-center py-12 px-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-indigo-200">
          My Resume
        </h1>
        <p className="mb-6 text-gray-300 text-center max-w-xl">
          Download my latest resume in PDF format. Click the button below to get
          your copy.
        </p>
        <a
          href="/profile.pdf"
          download
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-colors duration-200"
        >
          Download Resume
        </a>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
