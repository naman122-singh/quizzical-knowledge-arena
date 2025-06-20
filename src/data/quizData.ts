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
  },
  {
    id: "upsc-polity",
    title: "UPSC Polity",
    description: "Indian Constitution, Governance & Political System",
    category: "UPSC",
    icon: "🏛️",
    totalQuestions: 15,
    questions: [
      {
        question: "Which article of the Indian Constitution deals with the Right to Equality?",
        options: ["Article 14-18", "Article 19-22", "Article 25-28", "Article 29-30"],
        correctOptionIndex: 0
      },
      {
        question: "The President of India is elected by:",
        options: ["Direct election", "Electoral College", "Parliament", "Supreme Court"],
        correctOptionIndex: 1
      },
      {
        question: "How many fundamental rights are guaranteed by the Indian Constitution?",
        options: ["5", "6", "7", "8"],
        correctOptionIndex: 1
      },
      {
        question: "Which amendment is known as the 'Mini Constitution'?",
        options: ["42nd Amendment", "44th Amendment", "73rd Amendment", "74th Amendment"],
        correctOptionIndex: 0
      },
      {
        question: "The concept of 'Basic Structure' was established in which case?",
        options: ["Golaknath Case", "Kesavananda Bharati Case", "Minerva Mills Case", "Maneka Gandhi Case"],
        correctOptionIndex: 1
      },
      {
        question: "Who is known as the 'Father of the Indian Constitution'?",
        options: ["Mahatma Gandhi", "Jawaharlal Nehru", "B.R. Ambedkar", "Sardar Patel"],
        correctOptionIndex: 2
      },
      {
        question: "The Rajya Sabha can have a maximum of how many members?",
        options: ["238", "245", "250", "252"],
        correctOptionIndex: 2
      },
      {
        question: "Which article deals with the abolition of untouchability?",
        options: ["Article 15", "Article 16", "Article 17", "Article 18"],
        correctOptionIndex: 2
      },
      {
        question: "The term 'Constitutional Morality' was coined by:",
        options: ["B.R. Ambedkar", "A.V. Dicey", "Granville Austin", "M.P. Jain"],
        correctOptionIndex: 1
      },
      {
        question: "Which part of the Constitution deals with Directive Principles?",
        options: ["Part III", "Part IV", "Part V", "Part VI"],
        correctOptionIndex: 1
      },
      {
        question: "The doctrine of 'Colorable Legislation' is related to:",
        options: ["Fundamental Rights", "Legislative competence", "Judicial Review", "Emergency provisions"],
        correctOptionIndex: 1
      },
      {
        question: "Who appoints the Chief Justice of India?",
        options: ["Prime Minister", "President", "Parliament", "Chief Justice of India"],
        correctOptionIndex: 1
      },
      {
        question: "The concept of 'Rule of Law' is borrowed from:",
        options: ["USA", "UK", "France", "Germany"],
        correctOptionIndex: 1
      },
      {
        question: "Which commission recommended the creation of Lokpal?",
        options: ["Santhanam Committee", "Administrative Reforms Commission", "Law Commission", "Election Commission"],
        correctOptionIndex: 1
      },
      {
        question: "The Indian Constitution came into effect on:",
        options: ["15th August 1947", "26th November 1949", "26th January 1950", "2nd October 1950"],
        correctOptionIndex: 2
      }
    ]
  },
  {
    id: "upsc-history",
    title: "UPSC History",
    description: "Ancient, Medieval & Modern Indian History",
    category: "UPSC",
    icon: "📜",
    totalQuestions: 15,
    questions: [
      {
        question: "The Indus Valley Civilization belonged to which period?",
        options: ["2500-1500 BCE", "3000-2000 BCE", "1500-1000 BCE", "2000-1500 BCE"],
        correctOptionIndex: 0
      },
      {
        question: "Who founded the Mauryan Empire?",
        options: ["Ashoka", "Chandragupta Maurya", "Bindusara", "Bimbisara"],
        correctOptionIndex: 1
      },
      {
        question: "The Battle of Plassey was fought in:",
        options: ["1757", "1764", "1761", "1775"],
        correctOptionIndex: 0
      },
      {
        question: "Who was the first Governor-General of India?",
        options: ["Warren Hastings", "Lord Cornwallis", "Lord Wellesley", "Lord Dalhousie"],
        correctOptionIndex: 0
      },
      {
        question: "The Quit India Movement was launched in:",
        options: ["1940", "1942", "1944", "1946"],
        correctOptionIndex: 1
      },
      {
        question: "The Kalinga War was fought by:",
        options: ["Chandragupta Maurya", "Ashoka", "Harsha", "Samudragupta"],
        correctOptionIndex: 1
      },
      {
        question: "Who founded the Indian National Congress?",
        options: ["A.O. Hume", "Dadabhai Naoroji", "Bal Gangadhar Tilak", "Gopal Krishna Gokhale"],
        correctOptionIndex: 0
      },
      {
        question: "The doctrine of lapse was introduced by:",
        options: ["Lord Wellesley", "Lord Dalhousie", "Lord Hastings", "Lord Cornwallis"],
        correctOptionIndex: 1
      },
      {
        question: "Who was known as the 'Iron Man of India'?",
        options: ["Jawaharlal Nehru", "Subhash Chandra Bose", "Sardar Vallabhbhai Patel", "Lala Lajpat Rai"],
        correctOptionIndex: 2
      },
      {
        question: "The Sepoy Mutiny began from:",
        options: ["Delhi", "Meerut", "Lucknow", "Kanpur"],
        correctOptionIndex: 1
      },
      {
        question: "Who wrote 'Hind Swaraj'?",
        options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Bal Gangadhar Tilak", "Lala Lajpat Rai"],
        correctOptionIndex: 1
      },
      {
        question: "The Mughal Empire was founded by:",
        options: ["Akbar", "Babur", "Humayun", "Shah Jahan"],
        correctOptionIndex: 1
      },
      {
        question: "The Khilafat Movement was led by:",
        options: ["Maulana Abul Kalam Azad", "Ali Brothers", "Khan Abdul Ghaffar Khan", "Ashfaqullah Khan"],
        correctOptionIndex: 1
      },
      {
        question: "The Poona Pact was signed between:",
        options: ["Gandhi and Jinnah", "Gandhi and Ambedkar", "Nehru and Patel", "Congress and Muslim League"],
        correctOptionIndex: 1
      },
      {
        question: "Who was the last Mughal Emperor?",
        options: ["Aurangzeb", "Shah Alam II", "Bahadur Shah Zafar", "Akbar Shah II"],
        correctOptionIndex: 2
      }
    ]
  },
  {
    id: "ssc-gk",
    title: "SSC General Knowledge",
    description: "General Knowledge for SSC Examinations",
    category: "SSC",
    icon: "📚",
    totalQuestions: 15,
    questions: [
      {
        question: "Which planet is known as the Morning Star?",
        options: ["Mars", "Venus", "Jupiter", "Mercury"],
        correctOptionIndex: 1
      },
      {
        question: "The currency of Japan is:",
        options: ["Yuan", "Won", "Yen", "Ringgit"],
        correctOptionIndex: 2
      },
      {
        question: "Who invented the telephone?",
        options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Benjamin Franklin"],
        correctOptionIndex: 1
      },
      {
        question: "The largest state in India by area is:",
        options: ["Maharashtra", "Uttar Pradesh", "Rajasthan", "Madhya Pradesh"],
        correctOptionIndex: 2
      },
      {
        question: "Which vitamin is produced when skin is exposed to sunlight?",
        options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        correctOptionIndex: 3
      },
      {
        question: "The capital of Australia is:",
        options: ["Sydney", "Melbourne", "Canberra", "Perth"],
        correctOptionIndex: 2
      },
      {
        question: "Who is known as the Missile Man of India?",
        options: ["A.P.J. Abdul Kalam", "Vikram Sarabhai", "Homi Bhabha", "C.V. Raman"],
        correctOptionIndex: 0
      },
      {
        question: "The study of earthquakes is called:",
        options: ["Seismology", "Geology", "Meteorology", "Astronomy"],
        correctOptionIndex: 0
      },
      {
        question: "Which river is known as the Ganga of the South?",
        options: ["Krishna", "Godavari", "Cauvery", "Narmada"],
        correctOptionIndex: 1
      },
      {
        question: "The first woman Prime Minister of India was:",
        options: ["Sarojini Naidu", "Indira Gandhi", "Pratibha Patil", "Sushma Swaraj"],
        correctOptionIndex: 1
      },
      {
        question: "Which gas is known as laughing gas?",
        options: ["Nitrogen dioxide", "Nitrous oxide", "Carbon dioxide", "Methane"],
        correctOptionIndex: 1
      },
      {
        question: "The Tropic of Cancer passes through how many Indian states?",
        options: ["6", "7", "8", "9"],
        correctOptionIndex: 2
      },
      {
        question: "Who wrote the Indian National Anthem?",
        options: ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Sarojini Naidu", "Muhammad Iqbal"],
        correctOptionIndex: 1
      },
      {
        question: "The headquarters of UNESCO is located in:",
        options: ["New York", "Geneva", "Paris", "London"],
        correctOptionIndex: 2
      },
      {
        question: "Which is the smallest bone in the human body?",
        options: ["Stapes", "Malleus", "Incus", "Fibula"],
        correctOptionIndex: 0
      }
    ]
  },
  {
    id: "ssc-reasoning",
    title: "SSC Reasoning",
    description: "Logical Reasoning for SSC Examinations",
    category: "SSC",
    icon: "🧩",
    totalQuestions: 15,
    questions: [
      {
        question: "If BOOK is coded as CPPL, then GAME is coded as:",
        options: ["HBNF", "GBNF", "HBMF", "GBNR"],
        correctOptionIndex: 0
      },
      {
        question: "Find the odd one out: 3, 5, 7, 12, 17",
        options: ["3", "5", "12", "17"],
        correctOptionIndex: 2
      },
      {
        question: "In a certain code, CHAIR is written as 12345 and CHEAP is written as 12678. How is REACH written?",
        options: ["56712", "57612", "58712", "56812"],
        correctOptionIndex: 1
      },
      {
        question: "If Monday is the 1st day, what day will be the 61st day?",
        options: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        correctOptionIndex: 0
      },
      {
        question: "Complete the series: 2, 6, 12, 20, 30, ?",
        options: ["40", "42", "44", "46"],
        correctOptionIndex: 1
      },
      {
        question: "A is B's sister. C is B's mother. D is C's father. E is D's mother. How is A related to D?",
        options: ["Granddaughter", "Daughter", "Niece", "Sister"],
        correctOptionIndex: 0
      },
      {
        question: "Which number comes next: 1, 4, 9, 16, 25, ?",
        options: ["30", "35", "36", "49"],
        correctOptionIndex: 2
      },
      {
        question: "If WATER is coded as 12345, what is the code for TEAR?",
        options: ["4215", "4251", "4315", "4351"],
        correctOptionIndex: 1
      },
      {
        question: "Find the missing number: 8, 15, 22, 29, ?",
        options: ["35", "36", "37", "38"],
        correctOptionIndex: 1
      },
      {
        question: "In a row of boys, if A is 10th from the left and 15th from the right, how many boys are there?",
        options: ["24", "25", "26", "27"],
        correctOptionIndex: 0
      },
      {
        question: "If CAR is coded as XZI, then BIKE is coded as:",
        options: ["YRPV", "YROV", "YRQV", "YSPV"],
        correctOptionIndex: 0
      },
      {
        question: "Complete the pattern: A1B2, C3D4, E5F6, ?",
        options: ["G7H8", "G8H9", "H7I8", "G6H7"],
        correctOptionIndex: 0
      },
      {
        question: "Which one is different: Square, Rectangle, Triangle, Circle",
        options: ["Square", "Rectangle", "Triangle", "Circle"],
        correctOptionIndex: 3
      },
      {
        question: "If 2×3 = 8, 3×4 = 15, 4×5 = 24, then 5×6 = ?",
        options: ["30", "35", "33", "31"],
        correctOptionIndex: 1
      },
      {
        question: "Find the odd one: Dog, Cat, Elephant, Car",
        options: ["Dog", "Cat", "Elephant", "Car"],
        correctOptionIndex: 3
      }
    ]
  },
  {
    id: "ese-mechanical",
    title: "ESE Mechanical",
    description: "Mechanical Engineering for ESE",
    category: "ESE",
    icon: "⚙️",
    totalQuestions: 15,
    questions: [
      {
        question: "The efficiency of Otto cycle depends on:",
        options: ["Compression ratio", "Cut-off ratio", "Pressure ratio", "Heat addition"],
        correctOptionIndex: 0
      },
      {
        question: "In a four-stroke engine, power stroke occurs at:",
        options: ["1st stroke", "2nd stroke", "3rd stroke", "4th stroke"],
        correctOptionIndex: 2
      },
      {
        question: "The unit of kinematic viscosity is:",
        options: ["m²/s", "kg/m³", "N·s/m²", "Pa·s"],
        correctOptionIndex: 0
      },
      {
        question: "For maximum power transmission in belt drives, the belt tension ratio should be:",
        options: ["2", "e^μθ", "3", "π"],
        correctOptionIndex: 1
      },
      {
        question: "The COP of a heat pump is always:",
        options: ["Less than 1", "Equal to 1", "Greater than 1", "Zero"],
        correctOptionIndex: 2
      },
      {
        question: "In a steam power plant, the function of economizer is to:",
        options: ["Superheat steam", "Preheat feedwater", "Condense steam", "Generate steam"],
        correctOptionIndex: 1
      },
      {
        question: "The stress concentration factor depends on:",
        options: ["Material properties", "Geometry of the component", "Applied load", "Temperature"],
        correctOptionIndex: 1
      },
      {
        question: "For steady flow through a pipe, the continuity equation is:",
        options: ["ρ₁A₁V₁ = ρ₂A₂V₂", "P₁ + ρV₁² = P₂ + ρV₂²", "A₁V₁ = A₂V₂", "ρ₁V₁ = ρ₂V₂"],
        correctOptionIndex: 0
      },
      {
        question: "The Poisson's ratio for steel is approximately:",
        options: ["0.25", "0.3", "0.35", "0.4"],
        correctOptionIndex: 1
      },
      {
        question: "In machining, the cutting speed is defined as:",
        options: ["Feed rate", "Depth of cut", "Peripheral speed of workpiece", "Speed of tool movement"],
        correctOptionIndex: 2
      },
      {
        question: "The coefficient of performance (COP) of a refrigerator is:",
        options: ["Always less than 1", "Always greater than 1", "Can be less than or greater than 1", "Always equal to 1"],
        correctOptionIndex: 2
      },
      {
        question: "For a simply supported beam with point load at center, maximum bending moment is:",
        options: ["WL/4", "WL/8", "WL/2", "WL"],
        correctOptionIndex: 0
      },
      {
        question: "The critical temperature for steel is approximately:",
        options: ["723°C", "910°C", "1148°C", "1539°C"],
        correctOptionIndex: 0
      },
      {
        question: "In gear trains, the velocity ratio is equal to:",
        options: ["Product of driver teeth/Product of driven teeth", "Product of driven teeth/Product of driver teeth", "Sum of all teeth", "Difference of teeth"],
        correctOptionIndex: 1
      },
      {
        question: "The thermal efficiency of Carnot cycle is:",
        options: ["1 - T₁/T₂", "1 - T₂/T₁", "T₁/T₂", "T₂/T₁"],
        correctOptionIndex: 1
      }
    ]
  },
  {
    id: "gate-cse",
    title: "GATE Computer Science",
    description: "Computer Science & Engineering for GATE",
    category: "GATE",
    icon: "💻",
    totalQuestions: 15,
    questions: [
      {
        question: "The time complexity of binary search is:",
        options: ["O(n)", "O(log n)", "O(n log n)", "O(n²)"],
        correctOptionIndex: 1
      },
      {
        question: "Which data structure is used for implementing recursion?",
        options: ["Queue", "Stack", "Array", "Linked List"],
        correctOptionIndex: 1
      },
      {
        question: "In a B-tree of order m, each node can have at most:",
        options: ["m keys", "m-1 keys", "m+1 keys", "2m keys"],
        correctOptionIndex: 1
      },
      {
        question: "The number of edges in a complete graph with n vertices is:",
        options: ["n", "n-1", "n(n-1)/2", "n²"],
        correctOptionIndex: 2
      },
      {
        question: "Which algorithm is used for finding shortest path in weighted graphs?",
        options: ["BFS", "DFS", "Dijkstra's", "Kruskal's"],
        correctOptionIndex: 2
      },
      {
        question: "The worst-case time complexity of quicksort is:",
        options: ["O(n log n)", "O(n²)", "O(log n)", "O(n)"],
        correctOptionIndex: 1
      },
      {
        question: "A language is regular if and only if it is accepted by:",
        options: ["Finite Automaton", "Pushdown Automaton", "Turing Machine", "Linear Bounded Automaton"],
        correctOptionIndex: 0
      },
      {
        question: "The space complexity of merge sort is:",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        correctOptionIndex: 2
      },
      {
        question: "Which of the following is NP-Complete?",
        options: ["Sorting", "Matrix Multiplication", "Traveling Salesman Problem", "Binary Search"],
        correctOptionIndex: 2
      },
      {
        question: "In a hash table with n slots and n keys, the expected length of the longest chain is:",
        options: ["O(1)", "O(log n)", "O(log n / log log n)", "O(n)"],
        correctOptionIndex: 2
      },
      {
        question: "The pumping lemma is used to prove that a language is:",
        options: ["Regular", "Context-free", "Not regular", "Decidable"],
        correctOptionIndex: 2
      },
      {
        question: "Which scheduling algorithm can cause starvation?",
        options: ["Round Robin", "FCFS", "Priority Scheduling", "SJF"],
        correctOptionIndex: 2
      },
      {
        question: "The minimum number of comparisons required to find both maximum and minimum of n numbers is:",
        options: ["2n-2", "3n/2-2", "n-1", "2n-3"],
        correctOptionIndex: 1
      },
      {
        question: "In TCP, the sliding window protocol is used for:",
        options: ["Error detection", "Flow control", "Routing", "Addressing"],
        correctOptionIndex: 1
      },
      {
        question: "The height of a balanced binary search tree with n nodes is:",
        options: ["O(n)", "O(log n)", "O(n log n)", "O(√n)"],
        correctOptionIndex: 1
      }
    ]
  },
  {
    id: "gate-ece",
    title: "GATE Electronics",
    description: "Electronics & Communication for GATE",
    category: "GATE",
    icon: "📡",
    totalQuestions: 15,
    questions: [
      {
        question: "The bandwidth of an AM signal is:",
        options: ["Equal to message signal", "Twice the message signal", "Half the message signal", "Four times the message signal"],
        correctOptionIndex: 1
      },
      {
        question: "In a common emitter amplifier, the phase difference between input and output is:",
        options: ["0°", "90°", "180°", "270°"],
        correctOptionIndex: 2
      },
      {
        question: "The Nyquist sampling rate for a signal with maximum frequency fm is:",
        options: ["fm", "2fm", "fm/2", "4fm"],
        correctOptionIndex: 1
      },
      {
        question: "The efficiency of Class A power amplifier is approximately:",
        options: ["25%", "50%", "78.5%", "90%"],
        correctOptionIndex: 0
      },
      {
        question: "In digital communication, QPSK has how many phases?",
        options: ["2", "4", "8", "16"],
        correctOptionIndex: 1
      },
      {
        question: "The unit of noise figure is:",
        options: ["Watts", "dB", "Volts", "Dimensionless"],
        correctOptionIndex: 1
      },
      {
        question: "In a PN junction diode, the depletion region width:",
        options: ["Increases with forward bias", "Decreases with forward bias", "Remains constant", "Becomes zero"],
        correctOptionIndex: 1
      },
      {
        question: "The cut-off frequency of a low-pass RC filter is:",
        options: ["1/(2πRC)", "2πRC", "RC", "1/RC"],
        correctOptionIndex: 0
      },
      {
        question: "In an op-amp, the CMRR stands for:",
        options: ["Common Mode Rejection Ratio", "Common Mode Resistance Ratio", "Current Mode Rejection Ratio", "Capacitive Mode Rejection Ratio"],
        correctOptionIndex: 0
      },
      {
        question: "The modulation index for 100% amplitude modulation is:",
        options: ["0", "0.5", "1", "2"],
        correctOptionIndex: 2
      },
      {
        question: "In antenna theory, the radiation pattern is a plot of:",
        options: ["Electric field vs distance", "Magnetic field vs frequency", "Radiated power vs direction", "Impedance vs frequency"],
        correctOptionIndex: 2
      },
      {
        question: "The characteristic impedance of free space is:",
        options: ["50 Ω", "75 Ω", "377 Ω", "600 Ω"],
        correctOptionIndex: 2
      },
      {
        question: "In digital circuits, a flip-flop is:",
        options: ["Combinational circuit", "Sequential circuit", "Memory element", "Both B and C"],
        correctOptionIndex: 3
      },
      {
        question: "The gain-bandwidth product of an op-amp:",
        options: ["Varies with frequency", "Remains constant", "Increases with frequency", "Decreases with temperature"],
        correctOptionIndex: 1
      },
      {
        question: "In microprocessors, the program counter (PC) contains:",
        options: ["Data being processed", "Address of next instruction", "Result of last operation", "Number of instructions executed"],
        correctOptionIndex: 1
      }
    ]
  }
];
