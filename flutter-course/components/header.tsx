"use client"

import { Menu, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Sidebar from "./sidebar"
import { useMobile } from "@/hooks/use-mobile"

export default function Header() {
  const isMobile = useMobile()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="mr-2 border-google-blue text-google-blue hover:bg-google-blue hover:text-white"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] sm:w-[320px] bg-gradient-to-b from-white to-blue-50">
              <Sidebar />
            </SheetContent>
          </Sheet>
        </div>
        <div className="flex items-center justify-between w-full">
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
      </div>
    </header>
  )
}
