
export interface Question {
  question: string;
  options: string[];
  correctOptionIndex: number;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  questions: Question[];
  totalQuestions: number;
}

export const quizData: Quiz[] = [
  {
    id: "general-knowledge",
    title: "General Knowledge",
    description: "Test your knowledge across various topics",
    category: "Mixed",
    icon: "🧠",
    totalQuestions: 10,
    questions: [
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Jupiter", "Saturn", "Venus"],
        correctOptionIndex: 0
      },
      {
        question: "What year did World War II end?",
        options: ["1950", "1945", "1948", "1943"],
        correctOptionIndex: 1
      },
      {
        question: "What is the result of 22 + 34?",
        options: ["59", "56", "61", "58"],
        correctOptionIndex: 1
      },
      {
        question: "Who wrote the book 'Hamlet'?",
        options: ["Shakespeare", "Tolkien", "Rowling", "Hemingway"],
        correctOptionIndex: 0
      },
      {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Hydrogen", "Oxygen", "Nitrogen", "Carbon"],
        correctOptionIndex: 1
      },
      {
        question: "Which planet is known as the Ringed Planet?",
        options: ["Mars", "Jupiter", "Saturn", "Venus"],
        correctOptionIndex: 2
      },
      {
        question: "What is the capital of Spain?",
        options: ["Madrid", "London", "Rome", "Berlin"],
        correctOptionIndex: 0
      },
      {
        question: "Who wrote the book 'The Hobbit'?",
        options: ["Shakespeare", "Tolkien", "Rowling", "Hemingway"],
        correctOptionIndex: 1
      },
      {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Rome", "Berlin"],
        correctOptionIndex: 0
      },
      {
        question: "Which element has the chemical symbol 'H'?",
        options: ["Hydrogen", "Oxygen", "Nitrogen", "Carbon"],
        correctOptionIndex: 0
      }
    ]
  },
  {
    id: "programming",
    title: "Programming Basics",
    description: "Essential programming concepts and languages",
    category: "Technology",
    icon: "💻",
    totalQuestions: 10,
    questions: [
      {
        question: "Which language is primarily used for web development?",
        options: ["Python", "Java", "C", "JavaScript"],
        correctOptionIndex: 3
      },
      {
        question: "What year did the Fall of Berlin Wall occur?",
        options: ["1987", "1992", "1994", "1989"],
        correctOptionIndex: 3
      },
      {
        question: "Who wrote the book 'Hamlet'?",
        options: ["Shakespeare", "Tolkien", "Rowling", "Hemingway"],
        correctOptionIndex: 0
      },
      {
        question: "Which element has the chemical symbol 'H'?",
        options: ["Hydrogen", "Oxygen", "Nitrogen", "Carbon"],
        correctOptionIndex: 0
      },
      {
        question: "What year did the Moon Landing occur?",
        options: ["1974", "1967", "1972", "1969"],
        correctOptionIndex: 3
      },
      {
        question: "Which element has the chemical symbol 'N'?",
        options: ["Hydrogen", "Oxygen", "Nitrogen", "Carbon"],
        correctOptionIndex: 2
      },
      {
        question: "Which language is primarily used for data science?",
        options: ["Python", "Java", "C", "JavaScript"],
        correctOptionIndex: 0
      },
      {
        question: "Who developed the theory of Gravity?",
        options: ["Einstein", "Newton", "Tesla", "Galileo"],
        correctOptionIndex: 1
      },
      {
        question: "Which language is primarily used for system programming?",
        options: ["Python", "Java", "C", "JavaScript"],
        correctOptionIndex: 2
      },
      {
        question: "Which language is primarily used for mobile apps?",
        options: ["Swift/Kotlin", "Java", "C", "JavaScript"],
        correctOptionIndex: 0
      }
    ]
  },
  {
    id: "science",
    title: "Science",
    description: "Physics, Chemistry, and Biology fundamentals",
    category: "Education",
    icon: "🔬",
    totalQuestions: 10,
    questions: [
      {
        question: "Who developed the theory of Relativity?",
        options: ["Einstein", "Newton", "Tesla", "Galileo"],
        correctOptionIndex: 0
      },
      {
        question: "Which planet is known as the Ringed Planet?",
        options: ["Mars", "Jupiter", "Saturn", "Venus"],
        correctOptionIndex: 2
      },
      {
        question: "What is the capital of Italy?",
        options: ["Paris", "London", "Rome", "Berlin"],
        correctOptionIndex: 2
      },
      {
        question: "What is the result of 50 + 25?",
        options: ["80", "75", "79", "77"],
        correctOptionIndex: 1
      },
      {
        question: "What year did the Fall of Berlin Wall occur?",
        options: ["1992", "1987", "1989", "1994"],
        correctOptionIndex: 2
      },
      {
        question: "What is the result of 41 + 47?",
        options: ["89", "88", "91", "92"],
        correctOptionIndex: 1
      },
      {
        question: "Which element has the chemical symbol 'C'?",
        options: ["Hydrogen", "Oxygen", "Nitrogen", "Carbon"],
        correctOptionIndex: 3
      },
      {
        question: "Who developed the theory of Gravity?",
        options: ["Einstein", "Newton", "Tesla", "Galileo"],
        correctOptionIndex: 1
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Jupiter", "Saturn", "Venus"],
        correctOptionIndex: 0
      },
      {
        question: "What is the speed of light?",
        options: ["299,792,458 m/s", "300,000,000 m/s", "250,000,000 m/s", "350,000,000 m/s"],
        correctOptionIndex: 0
      }
    ]
  },
  {
    id: "history",
    title: "History",
    description: "Important historical events and figures",
    category: "Education",
    icon: "📚",
    totalQuestions: 10,
    questions: [
      {
        question: "What year did World War II end?",
        options: ["1943", "1945", "1950", "1948"],
        correctOptionIndex: 1
      },
      {
        question: "What year did the Moon Landing occur?",
        options: ["1974", "1967", "1972", "1969"],
        correctOptionIndex: 3
      },
      {
        question: "What year did the Fall of Berlin Wall occur?",
        options: ["1994", "1987", "1989", "1992"],
        correctOptionIndex: 2
      },
      {
        question: "Who was the first President of the United States?",
        options: ["Thomas Jefferson", "George Washington", "John Adams", "Benjamin Franklin"],
        correctOptionIndex: 1
      },
      {
        question: "In which year did the Titanic sink?",
        options: ["1912", "1914", "1910", "1916"],
        correctOptionIndex: 0
      },
      {
        question: "Which empire was ruled by Julius Caesar?",
        options: ["Greek Empire", "Roman Empire", "Persian Empire", "Egyptian Empire"],
        correctOptionIndex: 1
      },
      {
        question: "What year did World War I begin?",
        options: ["1912", "1914", "1916", "1918"],
        correctOptionIndex: 1
      },
      {
        question: "Who was known as the Iron Lady?",
        options: ["Queen Elizabeth", "Margaret Thatcher", "Angela Merkel", "Golda Meir"],
        correctOptionIndex: 1
      },
      {
        question: "Which civilization built Machu Picchu?",
        options: ["Aztecs", "Mayans", "Incas", "Olmecs"],
        correctOptionIndex: 2
      },
      {
        question: "What year did the American Civil War end?",
        options: ["1863", "1865", "1867", "1869"],
        correctOptionIndex: 1
      }
    ]
  },
  {
    id: "geography",
    title: "Geography",
    description: "Countries, capitals, and world landmarks",
    category: "Education",
    icon: "🌍",
    totalQuestions: 10,
    questions: [
      {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Rome", "Berlin"],
        correctOptionIndex: 0
      },
      {
        question: "What is the capital of Italy?",
        options: ["Paris", "London", "Rome", "Berlin"],
        correctOptionIndex: 2
      },
      {
        question: "What is the capital of Spain?",
        options: ["Madrid", "London", "Rome", "Berlin"],
        correctOptionIndex: 0
      },
      {
        question: "Which is the largest continent?",
        options: ["Africa", "Asia", "North America", "Europe"],
        correctOptionIndex: 1
      },
      {
        question: "What is the longest river in the world?",
        options: ["Amazon", "Nile", "Mississippi", "Yangtze"],
        correctOptionIndex: 1
      },
      {
        question: "Which country has the most natural lakes?",
        options: ["Russia", "Canada", "USA", "Finland"],
        correctOptionIndex: 1
      },
      {
        question: "What is the smallest country in the world?",
        options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
        correctOptionIndex: 1
      },
      {
        question: "Which mountain range contains Mount Everest?",
        options: ["Alps", "Andes", "Himalayas", "Rocky Mountains"],
        correctOptionIndex: 2
      },
      {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Perth"],
        correctOptionIndex: 2
      },
      {
        question: "Which desert is the largest in the world?",
        options: ["Sahara", "Gobi", "Antarctic", "Arabian"],
        correctOptionIndex: 2
      }
    ]
  }
];
