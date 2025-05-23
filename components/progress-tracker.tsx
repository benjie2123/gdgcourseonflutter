"use client"

import { useEffect, useState } from "react"

interface ProgressTrackerProps {
  section: string
  onComplete?: () => void
}

export default function ProgressTracker({ section, onComplete }: ProgressTrackerProps) {
  const [isCompleted, setIsCompleted] = useState(false)

  useEffect(() => {
    // Check if this section is already completed
    const completedSections = JSON.parse(localStorage.getItem("completedSections") || "[]")
    setIsCompleted(completedSections.includes(section))
  }, [section])

  const markAsCompleted = () => {
    if (isCompleted) return

    // Update completed sections in localStorage
    const completedSections = JSON.parse(localStorage.getItem("completedSections") || "[]")
    if (!completedSections.includes(section)) {
      const updatedSections = [...completedSections, section]
      localStorage.setItem("completedSections", JSON.stringify(updatedSections))

      // Update progress percentage
      const totalSections = 7 // Total number of main sections
      const progress = Math.round((updatedSections.length / totalSections) * 100)
      localStorage.setItem("courseProgress", progress.toString())

      setIsCompleted(true)
      if (onComplete) onComplete()
    }
  }

  return (
    <div className="mt-8 flex justify-end">
      <button
        onClick={markAsCompleted}
        disabled={isCompleted}
        className={`px-4 py-2 rounded-md text-sm font-medium ${
          isCompleted
            ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 cursor-default"
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
      >
        {isCompleted ? "✓ Marked as Complete" : "Mark as Complete"}
      </button>
    </div>
  )
}
