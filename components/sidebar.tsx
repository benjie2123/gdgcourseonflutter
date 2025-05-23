"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const navItems = [
  { href: "/", label: "Introduction" },
  { href: "/setup", label: "Setup Guide" },
  { href: "/core-concepts", label: "Core Concepts" },
  { href: "/intermediate-concepts", label: "Intermediate Concepts" },
  { href: "/project", label: "To-Do List Project" },
  { href: "/quizzes", label: "Quizzes & Exercises" },
  { href: "/resources", label: "Resources" },
]

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const [progress, setProgress] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    // Load progress from localStorage
    const savedProgress = localStorage.getItem("courseProgress")
    if (savedProgress) {
      setProgress(Number.parseInt(savedProgress))
    }
  }, [])

  // Close sidebar when route changes on mobile
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="fixed top-4 right-4 z-50 p-2 bg-blue-600 text-white rounded-md md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 fixed md:static top-0 left-0 z-40 h-full w-64 bg-white border-r transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4">
          <div className="mb-6 mt-12 md:mt-0">
            <div className="bg-blue-100 rounded-lg p-3">
              <div className="text-sm font-medium mb-1">Course Progress</div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
              </div>
              <div className="text-xs text-right mt-1">{progress}% Complete</div>
            </div>
          </div>

          <nav>
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block px-3 py-2 rounded-md ${
                      pathname === item.href
                        ? "bg-blue-100 text-blue-700 font-medium"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  )
}
