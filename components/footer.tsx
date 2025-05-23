import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gradient-to-r from-gray-50 to-white py-8">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-600 mb-2">
              Built with ❤️ by{" "}
              <span className="font-semibold text-google-blue">Google Developer Group Moi University</span>
            </p>
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} GDG Moi University. Empowering developers with AI.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link
              href="https://flutter.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-google-blue transition-colors font-medium"
            >
              Flutter Docs
            </Link>
            <Link
              href="https://dart.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-google-green transition-colors font-medium"
            >
              Dart Docs
            </Link>
            <Link
              href="https://developers.google.com/community/gdg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-google-red transition-colors font-medium"
            >
              GDG Program
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
