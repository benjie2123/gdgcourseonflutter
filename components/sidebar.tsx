"use client"

import type React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useEffect, useState } from "react"
import { BookOpen, Code, Lightbulb, Trophy, HelpCircle, ExternalLink, Home, Menu, X } from "lucide-react"

interface NavItem {
  title: string
  href: string
  icon: React.ReactNode
}

const navItems: NavItem[] = [
  {
    title: "Introduction",
    href: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Setup Guide",
    href: "/setup",
    icon: <Code className="h-4 w-4" />,
  },
  {
    title: "Core Concepts",
    href: "/core-concepts",
    icon: <BookOpen className="h-4 w-4" />,
  },
  {
    title: "Intermediate Concepts",
    href: "/intermediate-concepts",
    icon: <Lightbulb className="h-4 w-4" />,
  },
  {
    title: "Project: To-Do List App",
    href: "/project",
    icon: <Trophy className="h-4 w-4" />,
  },
  {
    title: "Quizzes & Exercises",
    href: "/quizzes",
    icon: <HelpCircle className="h-4 w-4" />,
  },
  {
    title: "Resources",
    href: "/resources",
    icon: <ExternalLink className="h-4 w-4" />,
  },
]

export default function Sidebar() {
  const pathname = usePathname()
  const [progress, setProgress] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const savedProgress = localStorage.getItem("courseProgress")
    if (savedProgress) {
      setProgress(Number.parseInt(savedProgress))
    }
  }, [])

  return (
    <>
      {/* Enhanced Mobile Menu Toggle Button */}
      <Button
        variant="outline"
        size="icon"
        className={cn(
          "fixed top-4 left-4 z-50 md:hidden",
          "h-12 w-12 rounded-xl",
          "bg-white/95 backdrop-blur-sm",
          "border-2 border-blue-200/50",
          "shadow-lg shadow-blue-500/10",
          "hover:shadow-xl hover:shadow-blue-500/20",
          "hover:scale-105 active:scale-95",
          "transition-all duration-300 ease-out",
          "group",
          isOpen ? "opacity-0 pointer-events-none" : "opacity-100",
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="relative">
          <Menu className="h-5 w-5 text-blue-600 group-hover:text-blue-700 transition-colors duration-200" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-300" />
        </div>
        <span className="sr-only">Open navigation menu</span>
      </Button>

      {/* Sidebar Container */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-[280px] flex-shrink-0",
          "bg-gradient-to-b from-white via-gray-50/50 to-white",
          "border-r border-gray-200/80 backdrop-blur-sm",
          "transform transition-all duration-500 ease-out",
          "md:translate-x-0 md:static md:block h-full",
          "shadow-2xl md:shadow-none",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        {/* Enhanced Header with Close Button */}
        <div className="px-6 py-6 border-b border-gray-200/80 bg-gradient-to-r from-blue-600 via-blue-500 to-green-500 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16" />
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full translate-x-12 translate-y-12" />
          </div>

          <div className="flex items-center justify-between relative z-10">
            <div className="text-white">
              <div className="font-bold text-lg tracking-tight">Google Developer Group</div>
              <div className="font-medium text-blue-100 text-sm">Moi University</div>
            </div>

            {/* Enhanced Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "md:hidden h-10 w-10 rounded-xl",
                "bg-white/10 hover:bg-white/20",
                "border border-white/20 hover:border-white/30",
                "backdrop-blur-sm",
                "hover:scale-110 active:scale-95",
                "transition-all duration-300 ease-out",
                "group shadow-lg",
              )}
              onClick={() => setIsOpen(false)}
            >
              <X className="h-5 w-5 text-white group-hover:text-white group-hover:rotate-90 transition-all duration-300" />
              <span className="sr-only">Close navigation menu</span>
            </Button>
          </div>
        </div>

        {/* Sidebar Content */}
        <ScrollArea className="h-[calc(100vh-5rem)] py-6">
          <div className="px-4 py-2">
            {/* Progress Section */}
            <div className="mb-8 px-2">
              <div className="text-sm font-semibold text-gray-700 mb-3">Course Progress</div>
              <div className="relative">
                <div className="h-3 w-full rounded-full bg-gray-200 overflow-hidden shadow-inner">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 transition-all duration-700 ease-out shadow-sm"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="mt-2 text-xs text-gray-600 text-right font-medium">{progress}% Complete</div>
              </div>
            </div>

            {/* Navigation Items */}
            <div className="space-y-2">
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  variant={pathname === item.href ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start text-left h-12 px-4 rounded-xl transition-all duration-200",
                    pathname === item.href
                      ? "bg-gradient-to-r from-blue-50 to-green-50 text-blue-700 border border-blue-200/50 shadow-sm font-medium"
                      : "hover:bg-gray-100 text-gray-700 hover:text-blue-600 hover:shadow-sm",
                  )}
                  asChild
                >
                  <Link href={item.href} className="flex items-center space-x-3" onClick={() => setIsOpen(false)}>
                    <span
                      className={cn(
                        "transition-colors duration-200",
                        pathname === item.href ? "text-blue-600" : "text-gray-500",
                      )}
                    >
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.title}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </ScrollArea>
      </div>

      {/* Enhanced Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 md:hidden transition-all duration-500 ease-out"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}