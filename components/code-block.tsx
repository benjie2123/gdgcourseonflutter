"use client"

import { useEffect, useRef, useState } from "react"

interface CodeBlockProps {
  code: string
  language: string
}

export default function CodeBlock({ code, language }: CodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null)
  const [isPrismLoaded, setIsPrismLoaded] = useState(false)

  useEffect(() => {
    // Dynamically import Prism.js to avoid WebAssembly loading issues
    const loadPrism = async () => {
      try {
        // Dynamic import of Prism
        const Prism = await import("prismjs")

        // Import language support based on the language prop
        if (language === "dart") {
          await import("prismjs/components/prism-dart")
        } else if (language === "bash") {
          await import("prismjs/components/prism-bash")
        }

        // Import theme
        await import("prismjs/themes/prism-tomorrow.css")

        // Set state to indicate Prism is loaded
        setIsPrismLoaded(true)

        // Highlight the code element if it exists
        if (codeRef.current) {
          Prism.default.highlightElement(codeRef.current)
        }
      } catch (error) {
        console.error("Failed to load Prism:", error)
      }
    }

    loadPrism()
  }, [code, language])

  return (
    <div className="my-4 rounded-md overflow-hidden">
      <pre className="p-4 bg-gray-800 text-white overflow-x-auto">
        <code ref={codeRef} className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  )
}
