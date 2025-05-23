import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold">
          <Link href="/">Learn Flutter for Android with AI</Link>
        </h1>
        <p className="text-sm opacity-90">Part of the "Building Using AI Tools" event</p>
      </div>
    </header>
  )
}
