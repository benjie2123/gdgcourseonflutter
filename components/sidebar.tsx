"use client"

import type React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useEffect, useState } from "react"
import { BookOpen, Code, Lightbulb, Trophy, HelpCircle, ExternalLink, Home } from "lucide-react"

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

  useEffect(() => {
    const savedProgress = localStorage.getItem("courseProgress")
    if (savedProgress) {
      setProgress(Number.parseInt(savedProgress))
    }
  }, [])

  return (
    <div className="relative hidden md:block border-r border-gray-200 w-[280px] flex-shrink-0 bg-gradient-to-b from-white to-gray-50">
      <div className="px-6 py-6 border-b border-gray-200 bg-gradient-to-r from-google-blue to-google-green">
        <div className="text-white">
          <div className="font-bold text-lg">Google Developer Group</div>
          <div className="font-medium text-blue-100">Moi University</div>
        </div>
      </div>
      <ScrollArea className="h-[calc(100vh-5rem)] py-6">
        <div className="px-4 py-2">
          <div className="mb-8 px-2">
            <div className="text-sm font-semibold text-gray-700 mb-3">Course Progress</div>
            <div className="relative">
              <div className="h-3 w-full rounded-full bg-gray-200 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-google-blue via-google-green to-golden-500 transition-all duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="mt-2 text-xs text-gray-600 text-right font-medium">{progress}% Complete</div>
            </div>
          </div>
          <div className="space-y-2">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant={pathname === item.href ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start text-left h-12 px-4 rounded-xl transition-all duration-200",
                  pathname === item.href
                    ? "bg-gradient-to-r from-google-blue/10 to-google-green/10 text-google-blue border border-google-blue/20 shadow-sm"
                    : "hover:bg-gray-100 text-gray-700 hover:text-google-blue",
                )}
                asChild
              >
                <Link href={item.href} className="flex items-center space-x-3">
                  {item.icon}
                  <span className="font-medium">{item.title}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}
