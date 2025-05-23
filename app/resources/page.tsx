import Link from "next/link"
import { ExternalLink } from "lucide-react"

export default function ResourcesPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Flutter Resources</h1>

      <p className="mb-6">
        This page provides additional resources to help you continue your Flutter learning journey. These resources
        include official documentation, tutorials, courses, and tools that will help you build better Flutter apps.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Official Documentation</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <a
            href="https://flutter.dev/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border rounded-lg hover:bg-blue-50 transition-colors"
          >
            <div className="flex items-start">
              <div className="flex-1">
                <h3 className="font-medium mb-1">Flutter Documentation</h3>
                <p className="text-sm text-gray-600">
                  The official Flutter documentation, including guides, tutorials, and API references.
                </p>
              </div>
              <ExternalLink className="text-blue-600 flex-shrink-0" size={18} />
            </div>
          </a>

          <a
            href="https://dart.dev/guides"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border rounded-lg hover:bg-blue-50 transition-colors"
          >
            <div className="flex items-start">
              <div className="flex-1">
                <h3 className="font-medium mb-1">Dart Documentation</h3>
                <p className="text-sm text-gray-600">Learn about the Dart programming language used in Flutter.</p>
              </div>
              <ExternalLink className="text-blue-600 flex-shrink-0" size={18} />
            </div>
          </a>

          <a
            href="https://flutter.dev/docs/cookbook"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border rounded-lg hover:bg-blue-50 transition-colors"
          >
            <div className="flex items-start">
              <div className="flex-1">
                <h3 className="font-medium mb-1">Flutter Cookbook</h3>
                <p className="text-sm text-gray-600">
                  Recipes for common Flutter patterns and solutions to common problems.
                </p>
              </div>
              <ExternalLink className="text-blue-600 flex-shrink-0" size={18} />
            </div>
          </a>

          <a
            href="https://api.flutter.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border rounded-lg hover:bg-blue-50 transition-colors"
          >
            <div className="flex items-start">
              <div className="flex-1">
                <h3 className="font-medium mb-1">Flutter API Reference</h3>
                <p className="text-sm text-gray-600">Detailed API documentation for all Flutter classes and methods.</p>
              </div>
              <ExternalLink className="text-blue-600 flex-shrink-0" size={18} />
            </div>
          </a>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Tutorials and Courses</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <a
            href="https://flutter.dev/learn"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border rounded-lg hover:bg-blue-50 transition-colors"
          >
            <div className="flex items-start">
              <div className="flex-1">
                <h3 className="font-medium mb-1">Flutter Learn</h3>
                <p className="text-sm text-gray-600">Official learning resources from the Flutter team.</p>
              </div>
              <ExternalLink className="text-blue-600 flex-shrink-0" size={18} />
            </div>
          </a>

          <a
            href="https://codelabs.developers.google.com/?cat=Flutter"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border rounded-lg hover:bg-blue-50 transition-colors"
          >
            <div className="flex items-start">
              <div className="flex-1">
                <h3 className="font-medium mb-1">Flutter Codelabs</h3>
                <p className="text-sm text-gray-600">Guided, hands-on coding experiences to learn Flutter.</p>
              </div>
              <ExternalLink className="text-blue-600 flex-shrink-0" size={18} />
            </div>
          </a>

          <a
            href="https://www.youtube.com/c/flutterdev"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border rounded-lg hover:bg-blue-50 transition-colors"
          >
            <div className="flex items-start">
              <div className="flex-1">
                <h3 className="font-medium mb-1">Flutter YouTube Channel</h3>
                <p className="text-sm text-gray-600">Official Flutter videos, tutorials, and live events.</p>
              </div>
              <ExternalLink className="text-blue-600 flex-shrink-0" size={18} />
            </div>
          </a>

          <a
            href="https://www.udemy.com/topic/flutter/"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border rounded-lg hover:bg-blue-50 transition-colors"
          >
            <div className="flex items-start">
              <div className="flex-1">
                <h3 className="font-medium mb-1">Udemy Flutter Courses</h3>
                <p className="text-sm text-gray-600">Paid courses on Flutter development for all skill levels.</p>
              </div>
              <ExternalLink className="text-blue-600 flex-shrink-0" size={18} />
            </div>
          </a>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Community and Support</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <a
            href="https://stackoverflow.com/questions/tagged/flutter"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border rounded-lg hover:bg-blue-50 transition-colors"
          >
            <div className="flex items-start">
              <div className="flex-1">
                <h3 className="font-medium mb-1">Stack Overflow</h3>
                <p className="text-sm text-gray-600">Ask questions and find answers from the Flutter community.</p>
              </div>
              <ExternalLink className="text-blue-600 flex-shrink-0" size={18} />
            </div>
          </a>

          <a
            href="https://github.com/flutter/flutter"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border rounded-lg hover:bg-blue-50 transition-colors"
          >
            <div className="flex items-start">
              <div className="flex-1">
                <h3 className="font-medium mb-1">Flutter GitHub Repository</h3>
                <p className="text-sm text-gray-600">
                  The official Flutter repository, where you can report issues and contribute.
                </p>
              </div>
              <ExternalLink className="text-blue-600 flex-shrink-0" size={18} />
            </div>
          </a>

          <a
            href="https://discord.gg/flutter"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border rounded-lg hover:bg-blue-50 transition-colors"
          >
            <div className="flex items-start">
              <div className="flex-1">
                <h3 className="font-medium mb-1">Flutter Discord</h3>
                <p className="text-sm text-gray-600">
                  Join the Flutter community on Discord for real-time discussions.
                </p>
              </div>
              <ExternalLink className="text-blue-600 flex-shrink-0" size={18} />
            </div>
          </a>

          <a
            href="https://twitter.com/FlutterDev"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border rounded-lg hover:bg-blue-50 transition-colors"
          >
            <div className="flex items-start">
              <div className="flex-1">
                <h3 className="font-medium mb-1">Flutter Twitter</h3>
                <p className="text-sm text-gray-600">Follow Flutter on Twitter for the latest news and updates.</p>
              </div>
              <ExternalLink className="text-blue-600 flex-shrink-0" size={18} />
            </div>
          </a>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Tools and Packages</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <a
            href="https://pub.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border rounded-lg hover:bg-blue-50 transition-colors"
          >
            <div className="flex items-start">
              <div className="flex-1">
                <h3 className="font-medium mb-1">pub.dev</h3>
                <p className="text-sm text-gray-600">The official package repository for Dart and Flutter packages.</p>
              </div>
              <ExternalLink className="text-blue-600 flex-shrink-0" size={18} />
            </div>
          </a>

          <a
            href="https://flutterflow.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border rounded-lg hover:bg-blue-50 transition-colors"
          >
            <div className="flex items-start">
              <div className="flex-1">
                <h3 className="font-medium mb-1">FlutterFlow</h3>
                <p className="text-sm text-gray-600">A visual builder for Flutter apps with code export.</p>
              </div>
              <ExternalLink className="text-blue-600 flex-shrink-0" size={18} />
            </div>
          </a>

          <a
            href="https://flutter.github.io/samples/"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border rounded-lg hover:bg-blue-50 transition-colors"
          >
            <div className="flex items-start">
              <div className="flex-1">
                <h3 className="font-medium mb-1">Flutter Samples</h3>
                <p className="text-sm text-gray-600">A collection of Flutter sample apps, demos, and examples.</p>
              </div>
              <ExternalLink className="text-blue-600 flex-shrink-0" size={18} />
            </div>
          </a>

          <a
            href="https://flutter.dev/docs/development/tools/devtools/overview"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border rounded-lg hover:bg-blue-50 transition-colors"
          >
            <div className="flex items-start">
              <div className="flex-1">
                <h3 className="font-medium mb-1">Flutter DevTools</h3>
                <p className="text-sm text-gray-600">A suite of performance and debugging tools for Flutter.</p>
              </div>
              <ExternalLink className="text-blue-600 flex-shrink-0" size={18} />
            </div>
          </a>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">AI Tools for Flutter Development</h2>

        <p className="mb-4">
          As part of the "Building Using AI Tools" theme, here are some AI-powered tools that can help you with Flutter
          development:
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <a
            href="https://github.com/features/copilot"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border rounded-lg hover:bg-blue-50 transition-colors"
          >
            <div className="flex items-start">
              <div className="flex-1">
                <h3 className="font-medium mb-1">GitHub Copilot</h3>
                <p className="text-sm text-gray-600">
                  AI pair programmer that helps you write code faster with suggestions based on context.
                </p>
              </div>
              <ExternalLink className="text-blue-600 flex-shrink-0" size={18} />
            </div>
          </a>

          <a
            href="https://chat.openai.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border rounded-lg hover:bg-blue-50 transition-colors"
          >
            <div className="flex items-start">
              <div className="flex-1">
                <h3 className="font-medium mb-1">ChatGPT</h3>
                <p className="text-sm text-gray-600">
                  AI assistant that can help you debug code, explain concepts, and generate Flutter code snippets.
                </p>
              </div>
              <ExternalLink className="text-blue-600 flex-shrink-0" size={18} />
            </div>
          </a>

          <a
            href="https://www.tabnine.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border rounded-lg hover:bg-blue-50 transition-colors"
          >
            <div className="flex items-start">
              <div className="flex-1">
                <h3 className="font-medium mb-1">Tabnine</h3>
                <p className="text-sm text-gray-600">AI code completion tool that supports Dart and Flutter.</p>
              </div>
              <ExternalLink className="text-blue-600 flex-shrink-0" size={18} />
            </div>
          </a>

          <a
            href="https://www.widgetbook.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border rounded-lg hover:bg-blue-50 transition-colors"
          >
            <div className="flex items-start">
              <div className="flex-1">
                <h3 className="font-medium mb-1">Widgetbook</h3>
                <p className="text-sm text-gray-600">
                  A tool to build, test, and showcase Flutter widgets with AI-assisted features.
                </p>
              </div>
              <ExternalLink className="text-blue-600 flex-shrink-0" size={18} />
            </div>
          </a>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Books</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg">
            <h3 className="font-medium mb-1">Flutter in Action</h3>
            <p className="text-sm text-gray-600 mb-2">By Eric Windmill</p>
            <p className="text-sm">
              A practical guide to Flutter development with hands-on examples and clear explanations.
            </p>
          </div>

          <div className="p-4 border rounded-lg">
            <h3 className="font-medium mb-1">Beginning Flutter: A Hands-On Guide</h3>
            <p className="text-sm text-gray-600 mb-2">By Marco L. Napoli</p>
            <p className="text-sm">A beginner-friendly introduction to Flutter development.</p>
          </div>

          <div className="p-4 border rounded-lg">
            <h3 className="font-medium mb-1">Flutter Cookbook</h3>
            <p className="text-sm text-gray-600 mb-2">By Simone Alessandria and Brian Kayfitz</p>
            <p className="text-sm">Practical recipes for common Flutter development tasks.</p>
          </div>

          <div className="p-4 border rounded-lg">
            <h3 className="font-medium mb-1">Flutter for Beginners</h3>
            <p className="text-sm text-gray-600 mb-2">By Alessandro Biessek</p>
            <p className="text-sm">A step-by-step guide to learning Flutter development from scratch.</p>
          </div>
        </div>
      </section>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
        <h3 className="font-medium text-blue-800">Continuous Learning</h3>
        <p className="text-blue-700">
          Flutter is constantly evolving, with new features and best practices emerging regularly. Make sure to stay
          up-to-date by following the official Flutter blog, attending Flutter events, and participating in the
          community.
        </p>
      </div>

      <div className="text-center mt-10 mb-6">
        <h2 className="text-2xl font-bold mb-4">Ready to Continue Your Flutter Journey?</h2>
        <p className="mb-6">
          Now that you've completed this course, you have a solid foundation in Flutter development for Android. Keep
          practicing, building projects, and exploring the resources above to become a proficient Flutter developer.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Return to Course Home
        </Link>
      </div>
    </div>
  )
}
