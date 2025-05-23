"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CodeBlockProps {
  code: string
  language: string
  filename?: string
}

export default function CodeBlock({ code, language, filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative my-6 rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white shadow-sm overflow-hidden">
      {filename && (
        <div className="flex items-center justify-between border-b border-gray-200 bg-gradient-to-r from-gray-100 to-gray-50 px-6 py-3">
          <span className="font-medium text-gray-700">{filename}</span>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-xs text-gray-500 bg-white px-2 py-1 rounded-full">
              <div className="w-2 h-2 bg-google-green rounded-full"></div>
              <span>{language}</span>
            </div>
          </div>
        </div>
      )}
      <div className="relative">
        <pre
          className={cn(
            "overflow-x-auto p-6 text-sm leading-relaxed",
            language === "bash" && "bg-gradient-to-br from-gray-900 to-black text-green-400",
            language === "dart" && "bg-gradient-to-br from-blue-900 to-blue-800 text-blue-100",
            language === "yaml" && "bg-gradient-to-br from-purple-900 to-purple-800 text-purple-100",
            !["bash", "dart", "yaml"].includes(language) && "bg-gradient-to-br from-gray-800 to-gray-900 text-gray-100",
          )}
        >
          <code className="font-mono">{code}</code>
        </pre>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-3 top-3 h-8 w-8 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20"
          onClick={copyToClipboard}
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          <span className="sr-only">Copy code</span>
        </Button>
        {copied && (
          <div className="absolute right-3 top-12 rounded-lg bg-green-500 px-3 py-1 text-xs text-white shadow-lg">
            Copied!
          </div>
        )}
      </div>
    </div>
  )
}
