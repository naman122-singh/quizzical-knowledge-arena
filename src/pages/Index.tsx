
import { useState } from "react";
import { quizData, Quiz } from "@/data/quizData";
import QuizHome from "@/components/QuizHome";
import QuizInterface from "@/components/QuizInterface";

const Index = () => {
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);

  const handleSelectQuiz = (quiz: Quiz) => {
    setSelectedQuiz(quiz);
  };

  const handleGoHome = () => {
    setSelectedQuiz(null);
  };

  if (selectedQuiz) {
    return <QuizInterface quiz={selectedQuiz} onGoHome={handleGoHome} />;
  }

  return <QuizHome quizzes={quizData} onSelectQuiz={handleSelectQuiz} />;
};

export default Index;
