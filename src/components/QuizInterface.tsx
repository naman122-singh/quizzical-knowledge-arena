
import { useState } from "react";
import { Quiz } from "@/data/quizData";
import QuestionCard from "./QuestionCard";
import QuizResults from "./QuizResults";

interface QuizInterfaceProps {
  quiz: Quiz;
  onGoHome: () => void;
}

const QuizInterface = ({ quiz, onGoHome }: QuizInterfaceProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  // Shuffle questions for variety
  const [shuffledQuestions] = useState(() => {
    const shuffled = [...quiz.questions];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  });

  const handleAnswer = (selectedIndex: number, isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    // Move to next question or complete quiz
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsQuizComplete(true);
    }
  };

  const handleRetry = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setIsQuizComplete(false);
  };

  if (isQuizComplete) {
    return (
      <QuizResults
        quiz={quiz}
        score={score}
        totalQuestions={shuffledQuestions.length}
        onRetry={handleRetry}
        onGoHome={onGoHome}
      />
    );
  }

  return (
    <QuestionCard
      question={shuffledQuestions[currentQuestionIndex]}
      questionNumber={currentQuestionIndex + 1}
      totalQuestions={shuffledQuestions.length}
      onAnswer={handleAnswer}
    />
  );
};

export default QuizInterface;
