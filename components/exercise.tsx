"use client"

import { useState } from "react"
import CodeBlock from "./code-block"

interface ExerciseProps {
  title: string
  description: string
  starterCode?: string
  solutionCode: string
}

export default function Exercise({ title, description, starterCode, solutionCode }: ExerciseProps) {
  const [showSolution, setShowSolution] = useState(false)

  return (
    <div className="border rounded-lg p-4 my-6">
      <h3 className="font-medium text-lg">{title}</h3>
      <p className="my-2">{description}</p>

      {starterCode && (
        <>
          <h4 className="font-medium mt-4 mb-2">Starter Code:</h4>
          <CodeBlock code={starterCode} language="dart" />
        </>
      )}

      <button
        onClick={() => setShowSolution(!showSolution)}
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        {showSolution ? "Hide Solution" : "Show Solution"}
      </button>

      {showSolution && (
        <div className="mt-4">
          <h4 className="font-medium mb-2">Solution:</h4>
          <CodeBlock code={solutionCode} language="dart" />
        </div>
      )}
    </div>
  )
}
