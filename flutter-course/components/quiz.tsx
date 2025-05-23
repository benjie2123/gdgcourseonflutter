"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { CheckCircle, XCircle, HelpCircle } from "lucide-react"

export interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

interface QuizProps {
  question: QuizQuestion
  onComplete?: () => void
}

export default function Quiz({ question, onComplete }: QuizProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  const handleSubmit = () => {
    if (selectedOption === null) return

    const correct = selectedOption === question.correctAnswer
    setIsCorrect(correct)
    setIsSubmitted(true)

    if (correct && onComplete) {
      onComplete()
    }
  }

  const handleReset = () => {
    setSelectedOption(null)
    setIsSubmitted(false)
  }

  return (
    <Card className="my-8 border-0 shadow-lg bg-gradient-to-br from-white to-blue-50 rounded-2xl overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-google-blue to-google-green text-white">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
            <HelpCircle className="h-6 w-6" />
          </div>
          <div>
            <CardTitle className="text-xl">Quiz Question</CardTitle>
            <CardDescription className="text-blue-100">Test your Flutter knowledge</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-8">
        <div className="space-y-6">
          <div className="font-semibold text-lg text-gray-800">{question.question}</div>
          <RadioGroup
            value={selectedOption?.toString()}
            onValueChange={(value) => setSelectedOption(Number.parseInt(value))}
            disabled={isSubmitted}
            className="space-y-4"
          >
            {question.options.map((option, index) => (
              <div
                key={index}
                className={cn(
                  "flex items-center space-x-3 p-4 rounded-xl border-2 transition-all duration-200",
                  isSubmitted && index === question.correctAnswer && "border-green-500 bg-green-50",
                  isSubmitted &&
                    selectedOption === index &&
                    selectedOption !== question.correctAnswer &&
                    "border-red-500 bg-red-50",
                  !isSubmitted && "border-gray-200 hover:border-google-blue hover:bg-blue-50",
                )}
              >
                <RadioGroupItem value={index.toString()} id={`option-${question.id}-${index}`} className="border-2" />
                <Label
                  htmlFor={`option-${question.id}-${index}`}
                  className={cn(
                    "flex-1 cursor-pointer font-medium",
                    isSubmitted && index === question.correctAnswer && "text-green-700",
                    isSubmitted &&
                      selectedOption === index &&
                      selectedOption !== question.correctAnswer &&
                      "text-red-700",
                  )}
                >
                  {option}
                </Label>
                {isSubmitted && index === question.correctAnswer && <CheckCircle className="h-5 w-5 text-green-500" />}
                {isSubmitted && selectedOption === index && selectedOption !== question.correctAnswer && (
                  <XCircle className="h-5 w-5 text-red-500" />
                )}
              </div>
            ))}
          </RadioGroup>

          {isSubmitted && (
            <div
              className={cn(
                "mt-6 p-6 rounded-xl border-l-4",
                isCorrect ? "bg-green-50 border-green-500 text-green-800" : "bg-red-50 border-red-500 text-red-800",
              )}
            >
              <div className="flex items-center space-x-2 mb-2">
                {isCorrect ? (
                  <CheckCircle className="h-5 w-5 text-green-600" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-600" />
                )}
                <p className="font-bold">{isCorrect ? "Correct!" : "Incorrect"}</p>
              </div>
              <p className="text-sm leading-relaxed">{question.explanation}</p>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-8 pt-0">
        {!isSubmitted ? (
          <Button
            onClick={handleSubmit}
            disabled={selectedOption === null}
            className="bg-gradient-to-r from-google-blue to-google-green hover:from-google-blue/90 hover:to-google-green/90 text-white font-semibold px-8 py-3 rounded-xl"
          >
            Submit Answer
          </Button>
        ) : (
          <Button
            onClick={handleReset}
            variant="outline"
            className="border-2 border-gray-300 hover:border-google-blue hover:text-google-blue font-semibold px-8 py-3 rounded-xl"
          >
            Try Another Question
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
