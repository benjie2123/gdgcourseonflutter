"use client"

import { useState } from "react"
import { CheckCircle, XCircle } from "lucide-react"

export interface QuizQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

interface QuizProps {
  question: QuizQuestion
}

export default function Quiz({ question }: QuizProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)

  const handleOptionSelect = (index: number) => {
    setSelectedOption(index)
    setShowFeedback(true)

    // Update progress in localStorage (simplified approach)
    if (index === question.correctAnswer) {
      const currentProgress = Number.parseInt(localStorage.getItem("courseProgress") || "0")
      const newProgress = Math.min(currentProgress + 5, 100) // Increment by 5% per correct answer
      localStorage.setItem("courseProgress", newProgress.toString())
    }
  }

  const isCorrect = selectedOption === question.correctAnswer

  return (
    <div className="bg-white border rounded-lg p-4 my-6">
      <h3 className="font-medium text-lg mb-3">{question.question}</h3>

      <div className="space-y-2">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionSelect(index)}
            disabled={showFeedback}
            className={`w-full text-left p-3 rounded-md border ${
              showFeedback && selectedOption === index
                ? isCorrect
                  ? "bg-green-100 border-green-500"
                  : "bg-red-100 border-red-500"
                : "hover:bg-gray-100"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {showFeedback && (
        <div className={`mt-4 p-3 rounded-md ${isCorrect ? "bg-green-100" : "bg-red-100"}`}>
          <div className="flex items-center gap-2">
            {isCorrect ? (
              <CheckCircle className="text-green-600" size={20} />
            ) : (
              <XCircle className="text-red-600" size={20} />
            )}
            <span className="font-medium">{isCorrect ? "Correct!" : "Incorrect!"}</span>
          </div>
          <p className="mt-1 text-sm">{question.explanation}</p>
        </div>
      )}
    </div>
  )
}
