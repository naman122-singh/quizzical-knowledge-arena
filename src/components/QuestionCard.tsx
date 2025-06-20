
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Question } from "@/data/quizData";
import { CheckCircle, XCircle } from "lucide-react";

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (selectedIndex: number, isCorrect: boolean) => void;
}

const QuestionCard = ({ question, questionNumber, totalQuestions, onAnswer }: QuestionCardProps) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleOptionSelect = (index: number) => {
    if (showFeedback) return;
    
    setSelectedOption(index);
    const correct = index === question.correctOptionIndex;
    setIsCorrect(correct);
    setShowFeedback(true);
    
    // Auto-advance after showing feedback
    setTimeout(() => {
      onAnswer(index, correct);
      setSelectedOption(null);
      setShowFeedback(false);
    }, 2000);
  };

  const progressPercentage = (questionNumber / totalQuestions) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4 flex items-center justify-center">
      <div className="max-w-2xl w-full">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">
              Question {questionNumber} of {totalQuestions}
            </span>
            <span className="text-sm font-medium text-blue-600">
              {Math.round(progressPercentage)}% Complete
            </span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>

        <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
          <CardHeader className="pb-6">
            <CardTitle className="text-xl font-bold text-gray-800 leading-relaxed">
              {question.question}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {question.options.map((option, index) => {
                let buttonClass = "w-full p-4 text-left border-2 transition-all duration-300 hover:scale-102";
                
                if (showFeedback) {
                  if (index === question.correctOptionIndex) {
                    buttonClass += " bg-green-100 border-green-400 text-green-800";
                  } else if (index === selectedOption && index !== question.correctOptionIndex) {
                    buttonClass += " bg-red-100 border-red-400 text-red-800";
                  } else {
                    buttonClass += " bg-gray-50 border-gray-200 text-gray-500";
                  }
                } else if (selectedOption === index) {
                  buttonClass += " bg-blue-100 border-blue-400 text-blue-800";
                } else {
                  buttonClass += " bg-white border-gray-200 hover:border-blue-300 hover:bg-blue-50";
                }

                return (
                  <Button
                    key={index}
                    onClick={() => handleOptionSelect(index)}
                    className={buttonClass}
                    disabled={showFeedback}
                    variant="outline"
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center space-x-3">
                        <span className="font-semibold text-sm bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center">
                          {String.fromCharCode(65 + index)}
                        </span>
                        <span className="font-medium">{option}</span>
                      </div>
                      {showFeedback && index === question.correctOptionIndex && (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      )}
                      {showFeedback && index === selectedOption && index !== question.correctOptionIndex && (
                        <XCircle className="h-5 w-5 text-red-600" />
                      )}
                    </div>
                  </Button>
                );
              })}
            </div>

            {showFeedback && (
              <div className={`mt-6 p-4 rounded-lg ${isCorrect ? 'bg-green-100 border border-green-200' : 'bg-red-100 border border-red-200'}`}>
                <div className="flex items-center space-x-2">
                  {isCorrect ? (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-600" />
                  )}
                  <span className={`font-semibold ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                    {isCorrect ? "Correct!" : "Incorrect!"}
                  </span>
                </div>
                {!isCorrect && (
                  <p className="mt-2 text-red-700">
                    The correct answer is: <strong>{question.options[question.correctOptionIndex]}</strong>
                  </p>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QuestionCard;
