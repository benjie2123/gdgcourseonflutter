import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t p-4 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Learn Flutter for Android with AI</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <Link href="/resources" className="text-sm text-blue-600 hover:underline">
            Resources
          </Link>
          <a
            href="https://flutter.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:underline"
          >
            Flutter Official
          </a>
        </div>
      </div>
    </footer>
  )
}
