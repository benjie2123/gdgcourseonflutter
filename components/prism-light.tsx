"use client"

import { useEffect } from "react"

export default function PrismLight() {
  useEffect(() => {
    // Initialize Prism.js only on the client side
    const initPrism = async () => {
      try {
        const Prism = await import("prismjs")

        // Load specific languages
        await import("prismjs/components/prism-dart")
        await import("prismjs/components/prism-bash")

        // Load theme
        await import("prismjs/themes/prism-tomorrow.css")

        // Highlight all code blocks
        Prism.default.highlightAll()
      } catch (error) {
        console.error("Failed to initialize Prism:", error)
      }
    }

    initPrism()
  }, [])

  return null
}
