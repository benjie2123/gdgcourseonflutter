import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to Flutter for Android Development</h1>
        <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
          <div className="flex-1">
            <p className="mb-4">
              Flutter is Google's UI toolkit for building beautiful, natively compiled applications for mobile, web, and
              desktop from a single codebase. In this course, we'll focus on Android app development with Flutter,
              leveraging AI tools to enhance your learning experience.
            </p>
            <p className="mb-4">
              Whether you're a beginner with basic programming knowledge or an intermediate developer looking to expand
              your skills, this course will guide you through Flutter's widget-based architecture and core concepts to
              build practical Android applications.
            </p>
          </div>
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="bg-blue-100 p-6 rounded-lg">
              <svg viewBox="0 0 48 48" className="w-full h-auto">
                <path fill="#40C4FF" d="M8,41L8,7l15,15L8,41z" />
                <path fill="#40C4FF" d="M23,22L8,7h26.9L23,22z" />
                <path fill="#29B6F6" d="M23,22l12,12H8L23,22z" />
                <path fill="#01579B" d="M23,22l12,12l12-12L23,22z" />
                <path fill="#01579B" d="M35,34l-5,5h13L35,34z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg border">
            <h3 className="font-medium mb-2">Flutter Fundamentals</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Setting up Flutter & Android Studio</li>
              <li>Understanding widgets and layouts</li>
              <li>Building responsive UIs</li>
              <li>Handling user input</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <h3 className="font-medium mb-2">Practical Skills</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>State management techniques</li>
              <li>Navigation between screens</li>
              <li>Working with lists and data</li>
              <li>Building a complete To-Do app</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Course Structure</h2>
        <div className="space-y-3">
          <div className="bg-white p-4 rounded-lg border">
            <h3 className="font-medium">1. Setup Guide</h3>
            <p className="text-gray-700">Step-by-step instructions for installing Flutter and Android Studio</p>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <h3 className="font-medium">2. Core Concepts</h3>
            <p className="text-gray-700">Essential Flutter concepts for beginners</p>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <h3 className="font-medium">3. Intermediate Concepts</h3>
            <p className="text-gray-700">Advanced topics for building better apps</p>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <h3 className="font-medium">4. Hands-on Project</h3>
            <p className="text-gray-700">Build a complete To-Do List app from scratch</p>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <h3 className="font-medium">5. Quizzes & Exercises</h3>
            <p className="text-gray-700">Test your knowledge and practice your skills</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">AI-Enhanced Learning</h2>
        <p className="mb-4">
          This course is part of the "Building Using AI Tools" event, emphasizing how AI can enhance the learning
          process. Throughout the course, we'll highlight how AI tools can help you:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Debug common Flutter errors</li>
          <li>Generate boilerplate code</li>
          <li>Understand complex concepts through visualizations</li>
          <li>Receive personalized learning recommendations</li>
        </ul>
      </section>

      <div className="flex justify-center mt-8">
        <Link
          href="/setup"
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Get Started <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  )
}
