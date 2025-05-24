"use client"

import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Sidebar from "./sidebar"
import { useMobile } from "@/hooks/use-mobile"
import { useState, useEffect } from "react"

export default function Header() {
  const isMobile = useMobile()
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down and past 50px threshold
        setIsHeaderVisible(false)
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsHeaderVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <header className={`sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm transition-transform duration-300 ease-in-out ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container flex h-16 items-center justify-center md:justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-google-gradient flex items-center justify-center">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold bg-gradient-to-r from-google-blue via-google-green to-google-red bg-clip-text text-transparent">
              GDG Moi University
            </h1>
            <p className="text-sm text-gray-600">Flutter with AI</p>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-2">
          <div className="px-3 py-1 bg-gradient-to-r from-golden-400 to-golden-600 text-black text-xs font-semibold rounded-full">
            Google Developer Group
          </div>
        </div>
      </div>
    </header>
  )
}