// app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-br from-blue-100 to-blue-50">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 mb-6">
          Welcome to Your Community
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Connect with like-minded stay-at-home parents and partners. Share your experiences, get advice, and build lasting relationships.
        </p>
        <a
          href="/login"
          className="inline-block px-10 py-4 bg-blue-600 text-white font-semibold rounded shadow-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Get Started
        </a>
      </div>
    </main>
  )
}