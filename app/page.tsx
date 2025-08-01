export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to JobFit AI</h1>
        <p className="text-lg text-gray-600 mb-6">
          Your personal AI career assistant – helping you build your resume and find your dream job.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
    </main>
  );
}
