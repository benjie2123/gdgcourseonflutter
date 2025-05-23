import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProgressTracker from "@/components/progress-tracker"
import { Sparkles, Code, Users, Trophy, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="container max-w-6xl mx-auto">
      <div className="space-y-12">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-google-blue via-google-green to-google-yellow p-8 md:p-12 text-white">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <Sparkles className="h-4 w-4 text-golden-400" />
                <span className="text-sm font-medium">AI-Powered Learning</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Master Flutter with
                <span className="block bg-gradient-to-r from-golden-300 to-golden-500 bg-clip-text text-transparent">
                  Google Developer Group
                </span>
              </h1>
              <p className="text-lg text-white/90 leading-relaxed">
                Join GDG Moi University's comprehensive Flutter course and build amazing Android apps with the power of
                AI assistance.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-google-blue hover:bg-gray-100 font-semibold px-8 py-3 rounded-xl"
              >
                <Link href="/setup" className="flex items-center space-x-2">
                  <span>Start Your Journey</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop&crop=center"
                alt="Flutter Development"
                className="rounded-2xl shadow-2xl w-full h-80 object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-golden-500 text-black p-4 rounded-xl shadow-lg">
                <Code className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-google-blue/10 to-google-blue/5 p-6 rounded-2xl border border-google-blue/20">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-google-blue rounded-xl flex items-center justify-center">
                <Users className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-google-blue">500+</div>
                <div className="text-sm text-gray-600">Students Enrolled</div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-google-green/10 to-google-green/5 p-6 rounded-2xl border border-google-green/20">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-google-green rounded-xl flex items-center justify-center">
                <Trophy className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-google-green">7</div>
                <div className="text-sm text-gray-600">Course Modules</div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-golden-400/10 to-golden-400/5 p-6 rounded-2xl border border-golden-400/20">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-golden-500 rounded-xl flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-black" />
              </div>
              <div>
                <div className="text-2xl font-bold text-golden-600">AI</div>
                <div className="text-sm text-gray-600">Enhanced Learning</div>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">About This Course</h2>
            <p className="text-gray-600 leading-relaxed">
              Flutter is Google's UI toolkit for building beautiful, natively compiled applications for mobile, web, and
              desktop from a single codebase. This course focuses on Android app development with Flutter, teaching you
              everything from setup to building a complete to-do list application.
            </p>
            <p className="text-gray-600 leading-relaxed">
              What makes Flutter special is its hot reload feature, which lets you experiment, build UIs, add features,
              and fix bugs faster. Experience sub-second reload times without losing state on emulators, simulators, and
              hardware.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=400&fit=crop&crop=center"
              alt="Team collaboration"
              className="rounded-2xl shadow-xl w-full h-80 object-cover"
            />
          </div>
        </div>

        {/* GDG Section */}
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center"
                alt="Google Developer Group"
                className="rounded-2xl shadow-xl w-full h-64 object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">About Google Developer Group Moi University</h2>
              <p className="text-gray-300 leading-relaxed">
                Google Developer Groups (GDGs) are community-led groups that create opportunities for developers to
                learn, connect, and build with Google technologies. GDG Moi University is dedicated to fostering a
                collaborative learning environment and helping students and professionals develop their technical
                skills.
              </p>
              <p className="text-gray-300 leading-relaxed">
                This Flutter course is part of our initiative to promote mobile development skills and prepare
                participants for real-world application development using modern tools and AI assistance.
              </p>
              <div className="inline-flex items-center space-x-2 bg-golden-500 text-black px-4 py-2 rounded-full font-semibold">
                <Sparkles className="h-4 w-4" />
                <span>Community Driven</span>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Outcomes */}
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">What You'll Learn</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Master Flutter development from basics to advanced concepts with hands-on projects and AI assistance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Setting up Flutter and Android Studio",
              "Understanding Flutter's widget architecture",
              "Building responsive layouts",
              "Managing application state",
              "Implementing navigation",
              "Creating complete applications",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-google-blue/30 transition-colors"
              >
                <div className="w-6 h-6 bg-google-blue rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">{index + 1}</span>
                </div>
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Course Structure */}
        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 md:p-12">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">Course Structure</h2>
              <p className="text-gray-600">
                Seven comprehensive modules designed to take you from beginner to Flutter developer
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Setup Guide", desc: "Install and configure development environment", color: "google-blue" },
                { title: "Core Concepts", desc: "Learn Flutter and Dart fundamentals", color: "google-green" },
                { title: "Intermediate Concepts", desc: "State management and navigation", color: "google-yellow" },
                { title: "Hands-on Project", desc: "Build a complete to-do list application", color: "google-red" },
                { title: "Quizzes & Exercises", desc: "Test knowledge and practice skills", color: "golden-500" },
                { title: "Resources", desc: "Additional materials and references", color: "gray-700" },
              ].map((module, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className={`w-12 h-12 bg-${module.color} rounded-xl flex items-center justify-center mb-4`}>
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{module.title}</h3>
                  <p className="text-gray-600 text-sm">{module.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6 py-12">
          <h2 className="text-3xl font-bold text-gray-900">Ready to Start Building?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join hundreds of developers who have already started their Flutter journey with GDG Moi University.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-google-blue to-google-green hover:from-google-blue/90 hover:to-google-green/90 text-white font-semibold px-8 py-4 rounded-xl shadow-lg"
          >
            <Link href="/setup" className="flex items-center space-x-2">
              <span>Begin Your Flutter Journey</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>

        <ProgressTracker section="introduction" />
      </div>
    </div>
  )
}
