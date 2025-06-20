
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quiz } from "@/data/quizData";

interface QuizHomeProps {
  quizzes: Quiz[];
  onSelectQuiz: (quiz: Quiz) => void;
}

const QuizHome = ({ quizzes, onSelectQuiz }: QuizHomeProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 pt-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            🎯 Quiz Master
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Test your knowledge across multiple categories. Choose a quiz below to get started!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quizzes.map((quiz) => (
            <Card 
              key={quiz.id} 
              className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group border-0 bg-white/80 backdrop-blur-sm"
              onClick={() => onSelectQuiz(quiz)}
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {quiz.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-800 mb-2">
                  {quiz.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {quiz.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {quiz.category}
                  </span>
                  <span className="text-sm font-medium text-blue-600">
                    {quiz.totalQuestions} Questions
                  </span>
                </div>
                <Button 
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0"
                >
                  Start Quiz
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500">
            💡 Tip: Questions are presented one at a time with instant feedback!
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuizHome;
