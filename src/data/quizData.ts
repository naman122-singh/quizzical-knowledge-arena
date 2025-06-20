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
  },
  {
    id: "jee-physics",
    title: "JEE Physics",
    description: "Mechanics, Thermodynamics, Waves & Optics",
    category: "JEE/NEET",
    icon: "⚛️",
    totalQuestions: 15,
    questions: [
      {
        question: "A ball is thrown vertically upward with velocity 20 m/s. What is the maximum height reached? (g = 10 m/s²)",
        options: ["10 m", "20 m", "30 m", "40 m"],
        correctOptionIndex: 1
      },
      {
        question: "The unit of electric field is:",
        options: ["N/C", "C/N", "J/C", "C·m"],
        correctOptionIndex: 0
      },
      {
        question: "What is the escape velocity from Earth's surface? (g = 10 m/s², R = 6400 km)",
        options: ["7.9 km/s", "11.2 km/s", "15.0 km/s", "25.0 km/s"],
        correctOptionIndex: 1
      },
      {
        question: "The frequency of alternating current in India is:",
        options: ["25 Hz", "50 Hz", "60 Hz", "100 Hz"],
        correctOptionIndex: 1
      },
      {
        question: "According to Newton's second law, F = ma. The dimensional formula of force is:",
        options: ["[MLT⁻²]", "[ML²T⁻²]", "[MLT⁻¹]", "[M²LT⁻²]"],
        correctOptionIndex: 0
      },
      {
        question: "The wavelength of visible light ranges from:",
        options: ["100-200 nm", "200-400 nm", "400-700 nm", "700-900 nm"],
        correctOptionIndex: 2
      },
      {
        question: "In simple harmonic motion, the acceleration is:",
        options: ["Constant", "Proportional to velocity", "Proportional to displacement", "Zero"],
        correctOptionIndex: 2
      },
      {
        question: "The SI unit of magnetic flux is:",
        options: ["Tesla", "Weber", "Henry", "Gauss"],
        correctOptionIndex: 1
      },
      {
        question: "For a projectile motion, the range is maximum when the angle of projection is:",
        options: ["30°", "45°", "60°", "90°"],
        correctOptionIndex: 1
      },
      {
        question: "The work done in moving a charge in an electric field depends on:",
        options: ["The path taken", "Only initial position", "Only final position", "Initial and final positions"],
        correctOptionIndex: 3
      },
      {
        question: "Young's modulus has the same dimension as:",
        options: ["Force", "Pressure", "Energy", "Power"],
        correctOptionIndex: 1
      },
      {
        question: "The efficiency of a Carnot engine operating between 400K and 300K is:",
        options: ["25%", "33%", "50%", "75%"],
        correctOptionIndex: 0
      },
      {
        question: "In uniform circular motion, which quantity remains constant?",
        options: ["Velocity", "Acceleration", "Speed", "Displacement"],
        correctOptionIndex: 2
      },
      {
        question: "The refractive index of water is approximately:",
        options: ["1.0", "1.33", "1.5", "2.4"],
        correctOptionIndex: 1
      },
      {
        question: "For interference to occur, the light sources must be:",
        options: ["Bright", "Coherent", "Monochromatic", "Both coherent and monochromatic"],
        correctOptionIndex: 3
      }
    ]
  },
  {
    id: "jee-chemistry",
    title: "JEE Chemistry",
    description: "Organic, Inorganic & Physical Chemistry",
    category: "JEE/NEET",
    icon: "🧪",
    totalQuestions: 15,
    questions: [
      {
        question: "The electronic configuration of carbon is:",
        options: ["1s² 2s² 2p²", "1s² 2s² 2p⁴", "1s² 2s¹ 2p³", "1s² 2s³ 2p¹"],
        correctOptionIndex: 0
      },
      {
        question: "The IUPAC name of CH₃-CH(CH₃)-CH₂-CH₃ is:",
        options: ["2-methylbutane", "3-methylbutane", "2-methylpentane", "3-methylpentane"],
        correctOptionIndex: 0
      },
      {
        question: "The pH of pure water at 25°C is:",
        options: ["0", "7", "14", "1"],
        correctOptionIndex: 1
      },
      {
        question: "Which of the following is the strongest acid?",
        options: ["HF", "HCl", "HBr", "HI"],
        correctOptionIndex: 3
      },
      {
        question: "The number of moles in 22.4 L of any gas at STP is:",
        options: ["0.5", "1", "2", "22.4"],
        correctOptionIndex: 1
      },
      {
        question: "Benzene has how many π electrons?",
        options: ["3", "6", "9", "12"],
        correctOptionIndex: 1
      },
      {
        question: "The oxidation state of Mn in KMnO₄ is:",
        options: ["+4", "+5", "+6", "+7"],
        correctOptionIndex: 3
      },
      {
        question: "Which reaction is used to convert alkyl halides to alcohols?",
        options: ["SN1 reaction", "SN2 reaction", "Both SN1 and SN2", "Neither"],
        correctOptionIndex: 2
      },
      {
        question: "The first law of thermodynamics is based on:",
        options: ["Conservation of energy", "Conservation of mass", "Conservation of momentum", "Ideal gas law"],
        correctOptionIndex: 0
      },
      {
        question: "Which element has the highest electronegativity?",
        options: ["Oxygen", "Nitrogen", "Fluorine", "Chlorine"],
        correctOptionIndex: 2
      },
      {
        question: "The hybridization of carbon in methane (CH₄) is:",
        options: ["sp", "sp²", "sp³", "sp³d"],
        correctOptionIndex: 2
      },
      {
        question: "Which gas is evolved when zinc reacts with dilute HCl?",
        options: ["Oxygen", "Hydrogen", "Chlorine", "Nitrogen"],
        correctOptionIndex: 1
      },
      {
        question: "The molecular formula of glucose is:",
        options: ["C₆H₁₂O₆", "C₆H₁₀O₅", "C₅H₁₀O₅", "C₁₂H₂₂O₁₁"],
        correctOptionIndex: 0
      },
      {
        question: "Which catalyst is used in Haber's process?",
        options: ["Platinum", "Iron", "Nickel", "Copper"],
        correctOptionIndex: 1
      },
      {
        question: "The bond angle in ammonia (NH₃) is approximately:",
        options: ["90°", "107°", "109.5°", "120°"],
        correctOptionIndex: 1
      }
    ]
  },
  {
    id: "jee-mathematics",
    title: "JEE Mathematics",
    description: "Algebra, Calculus, Coordinate Geometry",
    category: "JEE/NEET",
    icon: "📐",
    totalQuestions: 15,
    questions: [
      {
        question: "The derivative of sin(x) is:",
        options: ["cos(x)", "-cos(x)", "sin(x)", "-sin(x)"],
        correctOptionIndex: 0
      },
      {
        question: "If log₂(8) = x, then x =",
        options: ["2", "3", "4", "8"],
        correctOptionIndex: 1
      },
      {
        question: "The sum of first n natural numbers is:",
        options: ["n(n+1)", "n(n+1)/2", "n(n-1)/2", "n²"],
        correctOptionIndex: 1
      },
      {
        question: "The equation of a circle with center (0,0) and radius r is:",
        options: ["x² + y² = r", "x² + y² = r²", "x + y = r", "(x-r)² + (y-r)² = 1"],
        correctOptionIndex: 1
      },
      {
        question: "∫ 1/x dx =",
        options: ["x + C", "1/x² + C", "ln|x| + C", "-1/x + C"],
        correctOptionIndex: 2
      },
      {
        question: "The roots of x² - 5x + 6 = 0 are:",
        options: ["2, 3", "1, 6", "-2, -3", "2, -3"],
        correctOptionIndex: 0
      },
      {
        question: "If A = {1, 2, 3} and B = {3, 4, 5}, then A ∩ B =",
        options: ["{1, 2}", "{4, 5}", "{3}", "{1, 2, 3, 4, 5}"],
        correctOptionIndex: 2
      },
      {
        question: "The limit of (sin x)/x as x approaches 0 is:",
        options: ["0", "1", "∞", "Does not exist"],
        correctOptionIndex: 1
      },
      {
        question: "The number of permutations of 4 objects taken 2 at a time is:",
        options: ["6", "8", "12", "24"],
        correctOptionIndex: 2
      },
      {
        question: "If matrix A is 3×2 and matrix B is 2×4, then AB is:",
        options: ["3×4", "2×2", "3×2", "Not defined"],
        correctOptionIndex: 0
      },
      {
        question: "The domain of f(x) = √(x-1) is:",
        options: ["x ≥ 0", "x ≥ 1", "x > 1", "All real numbers"],
        correctOptionIndex: 1
      },
      {
        question: "tan(45°) =",
        options: ["0", "1/2", "1", "√3"],
        correctOptionIndex: 2
      },
      {
        question: "The area of a triangle with vertices (0,0), (3,0), (0,4) is:",
        options: ["6", "7", "12", "24"],
        correctOptionIndex: 0
      },
      {
        question: "If f(x) = x³, then f'(2) =",
        options: ["6", "8", "12", "18"],
        correctOptionIndex: 2
      },
      {
        question: "The equation x² + y² + 2x - 4y + 1 = 0 represents:",
        options: ["A point", "A circle", "A line", "An ellipse"],
        correctOptionIndex: 1
      }
    ]
  },
  {
    id: "neet-biology",
    title: "NEET Biology",
    description: "Botany, Zoology, Human Physiology",
    category: "JEE/NEET",
    icon: "🧬",
    totalQuestions: 15,
    questions: [
      {
        question: "The powerhouse of the cell is:",
        options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic reticulum"],
        correctOptionIndex: 1
      },
      {
        question: "Photosynthesis occurs in:",
        options: ["Mitochondria", "Nucleus", "Chloroplasts", "Ribosomes"],
        correctOptionIndex: 2
      },
      {
        question: "The basic unit of heredity is:",
        options: ["Chromosome", "Gene", "DNA", "RNA"],
        correctOptionIndex: 1
      },
      {
        question: "How many chambers does a human heart have?",
        options: ["2", "3", "4", "5"],
        correctOptionIndex: 2
      },
      {
        question: "The process of cell division that produces gametes is:",
        options: ["Mitosis", "Meiosis", "Binary fission", "Budding"],
        correctOptionIndex: 1
      },
      {
        question: "Which blood group is called universal donor?",
        options: ["A", "B", "AB", "O"],
        correctOptionIndex: 3
      },
      {
        question: "The largest organ in the human body is:",
        options: ["Liver", "Brain", "Skin", "Lungs"],
        correctOptionIndex: 2
      },
      {
        question: "Darwin's theory is based on:",
        options: ["Inheritance", "Natural selection", "Mutation", "Genetic drift"],
        correctOptionIndex: 1
      },
      {
        question: "The study of fungi is called:",
        options: ["Mycology", "Virology", "Bacteriology", "Bryology"],
        correctOptionIndex: 0
      },
      {
        question: "Which hormone regulates blood sugar?",
        options: ["Thyroxine", "Insulin", "Adrenaline", "Growth hormone"],
        correctOptionIndex: 1
      },
      {
        question: "The structural and functional unit of kidney is:",
        options: ["Neuron", "Nephron", "Alveoli", "Villus"],
        correctOptionIndex: 1
      },
      {
        question: "Double circulation is found in:",
        options: ["Fish", "Frog", "Birds", "All vertebrates"],
        correctOptionIndex: 2
      },
      {
        question: "The site of protein synthesis is:",
        options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"],
        correctOptionIndex: 2
      },
      {
        question: "Which of the following is not a greenhouse gas?",
        options: ["CO₂", "CH₄", "N₂O", "O₂"],
        correctOptionIndex: 3
      },
      {
        question: "The normal human body temperature is:",
        options: ["96.8°F", "97.8°F", "98.6°F", "99.6°F"],
        correctOptionIndex: 2
      }
    ]
  },
  {
    id: "neet-physics",
    title: "NEET Physics",
    description: "Mechanics, Optics, Modern Physics",
    category: "JEE/NEET",
    icon: "🔬",
    totalQuestions: 15,
    questions: [
      {
        question: "The SI unit of force is:",
        options: ["Joule", "Newton", "Watt", "Pascal"],
        correctOptionIndex: 1
      },
      {
        question: "A body at rest will remain at rest unless acted upon by:",
        options: ["Balanced forces", "Unbalanced forces", "Gravitational force", "No force"],
        correctOptionIndex: 1
      },
      {
        question: "The acceleration due to gravity on Earth is approximately:",
        options: ["9.8 m/s", "9.8 m/s²", "98 m/s²", "0.98 m/s²"],
        correctOptionIndex: 1
      },
      {
        question: "Sound travels fastest in:",
        options: ["Air", "Water", "Steel", "Vacuum"],
        correctOptionIndex: 2
      },
      {
        question: "The human eye can see light with wavelength approximately:",
        options: ["400-700 nm", "200-400 nm", "700-900 nm", "100-200 nm"],
        correctOptionIndex: 0
      },
      {
        question: "A convex lens is used to correct:",
        options: ["Myopia", "Hypermetropia", "Astigmatism", "Color blindness"],
        correctOptionIndex: 1
      },
      {
        question: "The principle of conservation of energy states that:",
        options: ["Energy can be created", "Energy can be destroyed", "Energy can neither be created nor destroyed", "Energy is always kinetic"],
        correctOptionIndex: 2
      },
      {
        question: "Electric current is measured in:",
        options: ["Volts", "Amperes", "Ohms", "Watts"],
        correctOptionIndex: 1
      },
      {
        question: "The focal length of a plane mirror is:",
        options: ["Zero", "Infinity", "Positive", "Negative"],
        correctOptionIndex: 1
      },
      {
        question: "Which of the following is a vector quantity?",
        options: ["Mass", "Speed", "Velocity", "Temperature"],
        correctOptionIndex: 2
      },
      {
        question: "The frequency of ultrasonic waves is:",
        options: ["Less than 20 Hz", "20 Hz to 20 kHz", "More than 20 kHz", "Exactly 20 kHz"],
        correctOptionIndex: 2
      },
      {
        question: "X-rays were discovered by:",
        options: ["Curie", "Roentgen", "Becquerel", "Einstein"],
        correctOptionIndex: 1
      },
      {
        question: "The energy stored in a capacitor is proportional to:",
        options: ["V", "V²", "1/V", "1/V²"],
        correctOptionIndex: 1
      },
      {
        question: "In which medium does light travel the fastest?",
        options: ["Water", "Glass", "Air", "Vacuum"],
        correctOptionIndex: 3
      },
      {
        question: "The unit of electric charge is:",
        options: ["Ampere", "Coulomb", "Volt", "Farad"],
        correctOptionIndex: 1
      }
    ]
  },
  {
    id: "neet-chemistry",
    title: "NEET Chemistry",
    description: "Basic Chemistry for Medical Entrance",
    category: "JEE/NEET",
    icon: "⚗️",
    totalQuestions: 15,
    questions: [
      {
        question: "The atomic number of carbon is:",
        options: ["4", "6", "8", "12"],
        correctOptionIndex: 1
      },
      {
        question: "Which gas is most abundant in Earth's atmosphere?",
        options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"],
        correctOptionIndex: 2
      },
      {
        question: "The pH scale ranges from:",
        options: ["0 to 7", "0 to 14", "1 to 10", "1 to 14"],
        correctOptionIndex: 1
      },
      {
        question: "Water has the molecular formula:",
        options: ["H₂O", "H₂O₂", "HO", "H₃O"],
        correctOptionIndex: 0
      },
      {
        question: "The most electronegative element is:",
        options: ["Oxygen", "Chlorine", "Fluorine", "Nitrogen"],
        correctOptionIndex: 2
      },
      {
        question: "Table salt is chemically known as:",
        options: ["NaCl", "KCl", "CaCl₂", "MgCl₂"],
        correctOptionIndex: 0
      },
      {
        question: "An acid solution has pH:",
        options: ["Greater than 7", "Equal to 7", "Less than 7", "Equal to 0"],
        correctOptionIndex: 2
      },
      {
        question: "The number of valence electrons in chlorine is:",
        options: ["5", "6", "7", "8"],
        correctOptionIndex: 2
      },
      {
        question: "Which of the following is a noble gas?",
        options: ["Hydrogen", "Helium", "Oxygen", "Nitrogen"],
        correctOptionIndex: 1
      },
      {
        question: "The process of rusting involves:",
        options: ["Reduction", "Oxidation", "Neutralization", "Precipitation"],
        correctOptionIndex: 1
      },
      {
        question: "Organic compounds always contain:",
        options: ["Oxygen", "Nitrogen", "Carbon", "Hydrogen"],
        correctOptionIndex: 2
      },
      {
        question: "The hardest natural substance is:",
        options: ["Gold", "Iron", "Diamond", "Quartz"],
        correctOptionIndex: 2
      },
      {
        question: "Which acid is present in vinegar?",
        options: ["Citric acid", "Acetic acid", "Formic acid", "Lactic acid"],
        correctOptionIndex: 1
      },
      {
        question: "The symbol for potassium is:",
        options: ["P", "Po", "K", "Pt"],
        correctOptionIndex: 2
      },
      {
        question: "Isotopes have the same:",
        options: ["Mass number", "Atomic number", "Number of neutrons", "Physical properties"],
        correctOptionIndex: 1
      }
    ]
  }
];
