import Link from "next/link"
import { ExternalLink } from "lucide-react"
import ProgressTracker from "@/components/progress-tracker"

export default function ResourcesPage() {
  return (
    <div className="container max-w-4xl mx-auto">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Flutter Resources</h1>
          <p className="text-muted-foreground">
            Additional learning materials and references to continue your Flutter journey
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Official Documentation</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-lg font-semibold">Flutter Documentation</h3>
                <p className="text-sm text-muted-foreground">
                  The official Flutter documentation with guides, tutorials, and API references.
                </p>
              </div>
              <div className="p-6 pt-0">
                <Link
                  href="https://flutter.dev/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 bg-blue-600 hover:bg-blue-700"
                >
                  Visit <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-lg font-semibold">Dart Documentation</h3>
                <p className="text-sm text-muted-foreground">
                  Learn about the Dart programming language used in Flutter development.
                </p>
              </div>
              <div className="p-6 pt-0">
                <Link
                  href="https://dart.dev/guides"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 bg-blue-600 hover:bg-blue-700"
                >
                  Visit <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Free Tutorials and Courses</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-lg font-semibold">Flutter Codelabs</h3>
                <p className="text-sm text-muted-foreground">
                  Guided, hands-on coding experiences to help you learn Flutter development.
                </p>
              </div>
              <div className="p-6 pt-0">
                <Link
                  href="https://flutter.dev/docs/codelabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 bg-blue-600 hover:bg-blue-700"
                >
                  Visit <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-lg font-semibold">Flutter YouTube Channel</h3>
                <p className="text-sm text-muted-foreground">
                  Official Flutter channel with tutorials, widget of the week, and more.
                </p>
              </div>
              <div className="p-6 pt-0">
                <Link
                  href="https://www.youtube.com/c/flutterdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 bg-blue-600 hover:bg-blue-700"
                >
                  Visit <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-lg font-semibold">The Boring Flutter Development Show</h3>
                <p className="text-sm text-muted-foreground">Watch Flutter developers build real apps from scratch.</p>
              </div>
              <div className="p-6 pt-0">
                <Link
                  href="https://www.youtube.com/playlist?list=PLjxrf2q8roU3ahJVrSgAnPjzkpGmL9Czl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 bg-blue-600 hover:bg-blue-700"
                >
                  Visit <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-lg font-semibold">Flutter Crash Course</h3>
                <p className="text-sm text-muted-foreground">
                  A free crash course for beginners to learn Flutter basics quickly.
                </p>
              </div>
              <div className="p-6 pt-0">
                <Link
                  href="https://www.youtube.com/watch?v=1gDhl4leEzA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 bg-blue-600 hover:bg-blue-700"
                >
                  Visit <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Community and Support</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-lg font-semibold">Flutter Community</h3>
                <p className="text-sm text-muted-foreground">
                  Join the Flutter community to get help and share your knowledge.
                </p>
              </div>
              <div className="p-6 pt-0">
                <Link
                  href="https://flutter.dev/community"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 bg-blue-600 hover:bg-blue-700"
                >
                  Visit <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-lg font-semibold">Stack Overflow</h3>
                <p className="text-sm text-muted-foreground">
                  Find answers to your Flutter questions on Stack Overflow.
                </p>
              </div>
              <div className="p-6 pt-0">
                <Link
                  href="https://stackoverflow.com/questions/tagged/flutter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 bg-blue-600 hover:bg-blue-700"
                >
                  Visit <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-lg font-semibold">Flutter Discord</h3>
                <p className="text-sm text-muted-foreground">
                  Join the Flutter Discord server to chat with other developers.
                </p>
              </div>
              <div className="p-6 pt-0">
                <Link
                  href="https://discord.gg/flutter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 bg-blue-600 hover:bg-blue-700"
                >
                  Visit <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-lg font-semibold">Flutter Reddit</h3>
                <p className="text-sm text-muted-foreground">
                  Join the Flutter subreddit to discuss Flutter development.
                </p>
              </div>
              <div className="p-6 pt-0">
                <Link
                  href="https://www.reddit.com/r/FlutterDev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 bg-blue-600 hover:bg-blue-700"
                >
                  Visit <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Useful Packages and Libraries</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-lg font-semibold">pub.dev</h3>
                <p className="text-sm text-muted-foreground">
                  The official package repository for Dart and Flutter packages.
                </p>
              </div>
              <div className="p-6 pt-0">
                <Link
                  href="https://pub.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 bg-blue-600 hover:bg-blue-700"
                >
                  Visit <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-lg font-semibold">Flutter Favorites</h3>
                <p className="text-sm text-muted-foreground">
                  A curated list of high-quality Flutter packages recommended by the Flutter team.
                </p>
              </div>
              <div className="p-6 pt-0">
                <Link
                  href="https://pub.dev/flutter/favorites"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 bg-blue-600 hover:bg-blue-700"
                >
                  Visit <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Books and References</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-lg font-semibold">Flutter in Action</h3>
                <p className="text-sm text-muted-foreground">
                  A comprehensive guide to Flutter development with practical examples.
                </p>
              </div>
              <div className="p-6 pt-0">
                <Link
                  href="https://www.manning.com/books/flutter-in-action"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 bg-blue-600 hover:bg-blue-700"
                >
                  Visit <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-lg font-semibold">Flutter Cookbook</h3>
                <p className="text-sm text-muted-foreground">
                  Recipes for solving common Flutter development problems.
                </p>
              </div>
              <div className="p-6 pt-0">
                <Link
                  href="https://flutter.dev/docs/cookbook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 bg-blue-600 hover:bg-blue-700"
                >
                  Visit <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">AI Tools for Flutter Development</h2>
          <p>
            As part of our "Building Using AI Tools" theme, here are some AI-powered tools that can help you with
            Flutter development:
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-lg font-semibold">GitHub Copilot</h3>
                <p className="text-sm text-muted-foreground">
                  AI-powered code completion that helps you write Flutter code faster.
                </p>
              </div>
              <div className="p-6 pt-0">
                <Link
                  href="https://github.com/features/copilot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 bg-blue-600 hover:bg-blue-700"
                >
                  Visit <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-lg font-semibold">ChatGPT</h3>
                <p className="text-sm text-muted-foreground">
                  Get help with Flutter code, debugging, and learning concepts.
                </p>
              </div>
              <div className="p-6 pt-0">
                <Link
                  href="https://chat.openai.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 bg-blue-600 hover:bg-blue-700"
                >
                  Visit <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-lg font-semibold">Tabnine</h3>
                <p className="text-sm text-muted-foreground">AI code completion tool that integrates with most IDEs.</p>
              </div>
              <div className="p-6 pt-0">
                <Link
                  href="https://www.tabnine.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 bg-blue-600 hover:bg-blue-700"
                >
                  Visit <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-lg font-semibold">FlutterFlow</h3>
                <p className="text-sm text-muted-foreground">
                  Visual builder with AI features to create Flutter apps without code.
                </p>
              </div>
              <div className="p-6 pt-0">
                <Link
                  href="https://flutterflow.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 bg-blue-600 hover:bg-blue-700"
                >
                  Visit <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-8">
          <h3 className="text-lg font-medium text-blue-800 dark:text-blue-300">Next Steps</h3>
          <p className="text-blue-700 dark:text-blue-200">
            Now that you've completed this course, consider building your own Flutter app from scratch. Start with a
            simple idea and gradually add more features as you become more comfortable with Flutter development.
            Remember to leverage AI tools to help you learn and code more efficiently!
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Google Developer Group Resources</h2>
          <p>As part of the Google Developer Group community, you have access to additional resources and events:</p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-lg font-semibold">GDG Community</h3>
                <p className="text-sm text-muted-foreground">
                  Join the global Google Developer Group community to connect with other developers.
                </p>
              </div>
              <div className="p-6 pt-0">
                <Link
                  href="https://developers.google.com/community/gdg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 bg-blue-600 hover:bg-blue-700"
                >
                  Visit <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-lg font-semibold">Google Codelabs</h3>
                <p className="text-sm text-muted-foreground">
                  Hands-on coding tutorials from Google covering various technologies.
                </p>
              </div>
              <div className="p-6 pt-0">
                <Link
                  href="https://codelabs.developers.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 bg-blue-600 hover:bg-blue-700"
                >
                  Visit <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <ProgressTracker section="resources" />
      </div>
    </div>
  )
}
