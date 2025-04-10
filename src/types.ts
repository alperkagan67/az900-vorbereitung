export interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    isCorrect: boolean;
  }[];
  correctCount?: number;
  completed?: boolean;
}

export interface QuestionState {
  selectedAnswer: string | null;
  isCorrect: boolean;
  submitted: boolean;
  answeredAt: Date;
}

export interface ExamResult {
  id?: string;
  date: string;
  totalQuestions: number;
  correctAnswers: number;
  percentage: number;
  passed: boolean;
  created_at?: string;
}

export interface QuestionHistoryEntry {
  questionId: number;
  question: string;
  userAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
  answeredAt: Date;
  streakAtTime: number;
}

// Question pool configuration
export const QUESTION_POOL_CONFIG = {
  EXAM_QUESTIONS: 33, // Number of questions in exam mode
  REQUIRED_CORRECT: 3, // Number of correct answers needed to master a question
  PASS_PERCENTAGE: 70, // Percentage needed to pass the exam
  MAX_HISTORY: 3 // Maximum number of history entries to show
};