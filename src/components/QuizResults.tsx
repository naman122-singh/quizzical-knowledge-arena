
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quiz } from "@/data/quizData";
import { Trophy, RotateCcw, Home, Target } from "lucide-react";

interface QuizResultsProps {
  quiz: Quiz;
  score: number;
  totalQuestions: number;
  onRetry: () => void;
  onGoHome: () => void;
}

const QuizResults = ({ quiz, score, totalQuestions, onRetry, onGoHome }: QuizResultsProps) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  const incorrectAnswers = totalQuestions - score;

  const getPerformanceMessage = () => {
    if (percentage >= 90) return { message: "Outstanding! 🌟", color: "text-green-600" };
    if (percentage >= 80) return { message: "Excellent work! 🎉", color: "text-blue-600" };
    if (percentage >= 70) return { message: "Good job! 👍", color: "text-purple-600" };
    if (percentage >= 60) return { message: "Not bad! 📈", color: "text-yellow-600" };
    return { message: "Keep practicing! 💪", color: "text-orange-600" };
  };

  const performance = getPerformanceMessage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4 flex items-center justify-center">
      <div className="max-w-lg w-full">
        <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <div className="text-6xl mb-4">
              <Trophy className="h-16 w-16 mx-auto text-yellow-500" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-800 mb-2">
              Quiz Complete!
            </CardTitle>
            <p className="text-gray-600">
              {quiz.title} • {quiz.icon}
            </p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {percentage}%
              </div>
              <p className={`text-lg font-semibold ${performance.color}`}>
                {performance.message}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-green-100 rounded-lg p-4">
                <div className="text-2xl font-bold text-green-600">{score}</div>
                <div className="text-sm text-green-700">Correct</div>
              </div>
              <div className="bg-red-100 rounded-lg p-4">
                <div className="text-2xl font-bold text-red-600">{incorrectAnswers}</div>
                <div className="text-sm text-red-700">Incorrect</div>
              </div>
              <div className="bg-blue-100 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-600">{totalQuestions}</div>
                <div className="text-sm text-blue-700">Total</div>
              </div>
            </div>

            <div className="space-y-3">
              <Button 
                onClick={onRetry}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Try Again
              </Button>
              
              <Button 
                onClick={onGoHome}
                variant="outline"
                className="w-full"
              >
                <Home className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </div>

            <div className="text-center pt-4 border-t">
              <p className="text-sm text-gray-500">
                <Target className="h-4 w-4 inline mr-1" />
                Challenge yourself with more quizzes!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QuizResults;
