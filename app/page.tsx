// app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-r from-blue-100 to-blue-50">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-800 mb-6">
          Welcome to Your Community
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          A safe and vibrant space for stay-at-home parents, partners, and like-minded individuals to connect, share experiences, and support one another.
        </p>
        <a
          href="/login"
          className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
        >
          Join Now
        </a>
      </div>
    </main>
  )
}