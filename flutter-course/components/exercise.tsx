"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import CodeBlock from "./code-block"

interface ExerciseProps {
  title: string
  description: string
  task: string
  starterCode?: string
  solutionCode: string
  language?: string
}

export default function Exercise({
  title,
  description,
  task,
  starterCode,
  solutionCode,
  language = "dart",
}: ExerciseProps) {
  const [showSolution, setShowSolution] = useState(false)

  return (
    <Card className="my-6">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-medium mb-2">Task:</h4>
          <p>{task}</p>
        </div>

        {starterCode && (
          <div>
            <h4 className="font-medium mb-2">Starter Code:</h4>
            <CodeBlock code={starterCode} language={language} />
          </div>
        )}

        {showSolution && (
          <div>
            <h4 className="font-medium mb-2">Solution:</h4>
            <CodeBlock code={solutionCode} language={language} />
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button
          onClick={() => setShowSolution(!showSolution)}
          variant={showSolution ? "outline" : "default"}
          className={!showSolution ? "bg-blue-600 hover:bg-blue-700" : ""}
        >
          {showSolution ? "Hide Solution" : "Show Solution"}
        </Button>
      </CardFooter>
    </Card>
  )
}
