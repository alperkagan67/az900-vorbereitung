import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle, XCircle, Trophy, BookCheck, XSquare, RefreshCw, List, AlertCircle } from 'lucide-react';
import { format } from 'date-fns';
import { de } from 'date-fns/locale';
import { questions } from './questions';
import { supabase } from './supabase';
import type { Question, QuestionState, ExamResult, QuestionHistoryEntry } from './types';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questionStates, setQuestionStates] = useState<{ [key: string]: QuestionState }>({});
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [completedQuestions, setCompletedQuestions] = useState<Question[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [examMode, setExamMode] = useState<'practice' | 'exam' | 'results' | 'history' | 'completed' | 'list' | 'wrong'>('practice');
  const [examResults, setExamResults] = useState<ExamResult[]>([]);
  const [currentExamAnswers, setCurrentExamAnswers] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(true);
  const [questionHistory, setQuestionHistory] = useState<QuestionHistoryEntry[]>([]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    if (questions.length > 0) {
      const shuffled = [...questions].map(q => ({ ...q, correctCount: 0, completed: false }))
        .sort(() => Math.random() - 0.5);
      setActiveQuestions(shuffled);
      setCompletedQuestions([]);
      setWrongAnswers({});
    }
    loadExamResults();
    setIsLoading(false);
  }, []);

  const loadExamResults = async () => {
    const { data, error } = await supabase
      .from('exam_results')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setExamResults(data);
    }
  };

  const resetAllProgress = () => {
    if (window.confirm('Möchten Sie wirklich den gesamten Fortschritt zurücksetzen? Diese Aktion kann nicht rückgängig gemacht werden.')) {
      const resetQuestions = [...questions].map(q => ({ ...q, correctCount: 0, completed: false }))
        .sort(() => Math.random() - 0.5);
      setActiveQuestions(resetQuestions);
      setCompletedQuestions([]);
      setCurrentQuestionIndex(0);
      setSelectedAnswer(null);
      setShowAnswer(false);
      setQuestionStates({});
      setQuestionHistory([]);
      setWrongAnswers({});
      setExamMode('practice');
    }
  };

  const currentQuestion = activeQuestions[currentQuestionIndex];

  const addToHistory = (question: Question, userAnswer: string, isCorrect: boolean) => {
    const historyEntry: QuestionHistoryEntry = {
      questionId: question.id,
      question: question.question,
      userAnswer,
      correctAnswer: question.options.find(opt => opt.isCorrect)?.text || '',
      isCorrect,
      answeredAt: new Date(),
      streakAtTime: question.correctCount || 0
    };

    setQuestionHistory(prev => {
      const newHistory = [historyEntry, ...prev].slice(0, 3);
      return newHistory;
    });
  };

  const checkAnswer = () => {
    if (!selectedAnswer || !currentQuestion) return;

    const isCorrect = currentQuestion.options.find(opt => opt.text === selectedAnswer)?.isCorrect || false;
    setShowAnswer(true);

    if (examMode === 'practice') {
      setQuestionStates(prev => ({
        ...prev,
        [currentQuestion.id]: {
          selectedAnswer,
          isCorrect,
          submitted: true,
          answeredAt: new Date()
        }
      }));

      addToHistory(currentQuestion, selectedAnswer, isCorrect);

      if (isCorrect) {
        const updatedQuestions = [...activeQuestions];
        const questionIndex = updatedQuestions.findIndex(q => q.id === currentQuestion.id);
        const newCorrectCount = (currentQuestion.correctCount || 0) + 1;

        if (newCorrectCount >= 3) {
          const completedQuestion = {
            ...currentQuestion,
            correctCount: newCorrectCount,
            completed: true
          };
          setCompletedQuestions(prev => [...prev, completedQuestion]);
          updatedQuestions.splice(questionIndex, 1);
        } else {
          updatedQuestions[questionIndex] = {
            ...currentQuestion,
            correctCount: newCorrectCount,
            completed: false
          };
        }

        setActiveQuestions(updatedQuestions);
        
        if (questionIndex <= currentQuestionIndex && updatedQuestions.length < activeQuestions.length) {
          setCurrentQuestionIndex(prev => Math.max(0, Math.min(prev, updatedQuestions.length - 1)));
        }
      } else {
        setWrongAnswers(prev => ({
          ...prev,
          [currentQuestion.id]: (prev[currentQuestion.id] || 0) + 1
        }));

        const updatedQuestions = [...activeQuestions];
        const questionIndex = updatedQuestions.findIndex(q => q.id === currentQuestion.id);
        updatedQuestions[questionIndex] = {
          ...currentQuestion,
          correctCount: 0,
          completed: false
        };
        setActiveQuestions(updatedQuestions);
      }
    } else {
      setCurrentExamAnswers(prev => ({
        ...prev,
        [currentQuestion.id]: selectedAnswer
      }));
      nextQuestion();
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < activeQuestions.length - 1) {
      setSelectedAnswer(null);
      setShowAnswer(false);
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setSelectedAnswer(null);
      setShowAnswer(false);
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const submitExam = async () => {
    const correctAnswers = activeQuestions.filter(
      q => currentExamAnswers[q.id] === q.options.find(opt => opt.isCorrect)?.text
    ).length;
    
    const percentage = (correctAnswers / activeQuestions.length) * 100;
    const passed = percentage >= 70;

    const result: ExamResult = {
      date: format(new Date(), 'PPP', { locale: de }),
      totalQuestions: activeQuestions.length,
      correctAnswers,
      percentage,
      passed
    };

    const { error } = await supabase
      .from('exam_results')
      .insert([result]);

    if (!error) {
      await loadExamResults();
      setExamMode('results');
    }
  };

  const startNewExam = () => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setActiveQuestions(shuffled.slice(0, 33));
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowAnswer(false);
    setCurrentExamAnswers({});
    setExamMode('exam');
  };

  const exitExam = () => {
    if (window.confirm('Möchten Sie die Prüfung wirklich beenden? Ihr Fortschritt geht dabei verloren.')) {
      const shuffled = [...questions].map(q => ({ ...q, correctCount: 0, completed: false }))
        .sort(() => Math.random() - 0.5);
      setActiveQuestions(shuffled);
      setCurrentQuestionIndex(0);
      setSelectedAnswer(null);
      setShowAnswer(false);
      setCurrentExamAnswers({});
      setExamMode('practice');
    }
  };

  const renderProgressBar = () => {
    const totalQuestions = questions.length;
    const completedCount = completedQuestions.length;
    const progressPercentage = (completedCount / totalQuestions) * 100;

    return (
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg">
        <div className="max-w-4xl mx-auto p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">
              Gesamtfortschritt
            </span>
            <span className="text-sm font-medium text-gray-700">
              {completedCount} von {totalQuestions} Fragen ({progressPercentage.toFixed(1)}%)
            </span>
          </div>
          <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-500 transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </div>
    );
  };

  const renderWrongAnswers = () => {
    const wrongQuestions = [...activeQuestions, ...completedQuestions]
      .filter(q => wrongAnswers[q.id] && wrongAnswers[q.id] > 0)
      .sort((a, b) => (wrongAnswers[b.id] || 0) - (wrongAnswers[a.id] || 0));

    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Falsch beantwortete Fragen</h2>
          <button
            onClick={() => setExamMode('practice')}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Zurück zur Übung
          </button>
        </div>

        {wrongQuestions.length > 0 ? (
          <div className="space-y-4">
            {wrongQuestions.map((question) => (
              <div
                key={question.id}
                className="border rounded-lg p-4 bg-red-50"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-sm font-medium text-red-600">
                      {wrongAnswers[question.id]}×
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">Frage {question.id}</h3>
                    <p className="mt-1 text-gray-600">{question.question}</p>
                    <p className="mt-2 text-sm text-green-600">
                      <span className="font-medium">Richtige Antwort:</span>{' '}
                      {question.options.find(opt => opt.isCorrect)?.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 py-8">
            Keine falsch beantworteten Fragen vorhanden.
          </p>
        )}
      </div>
    );
  };

  const renderQuestionList = () => {
    const allQuestions = [...activeQuestions, ...completedQuestions]
      .sort((a, b) => a.id - b.id);

    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Alle Fragen</h2>
          <div className="flex gap-4">
            <span className="text-gray-600">
              {completedQuestions.length} von {questions.length} Fragen gemeistert
            </span>
            <button
              onClick={() => setExamMode('practice')}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Zurück zur Übung
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {allQuestions.map((question) => (
            <div
              key={question.id}
              className={`border rounded-lg p-4 ${
                question.completed ? 'bg-green-50' : 'bg-white'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  {question.completed ? (
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-gray-600">
                      {question.correctCount || 0}
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3 className="font-medium text-gray-900">Frage {question.id}</h3>
                    {wrongAnswers[question.id] > 0 && (
                      <span className="text-red-600 text-sm">
                        {wrongAnswers[question.id]}× falsch beantwortet
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-gray-600">{question.question}</p>
                  <p className="mt-2 text-sm text-green-600">
                    <span className="font-medium">Richtige Antwort:</span>{' '}
                    {question.options.find(opt => opt.isCorrect)?.text}
                  </p>
                  {!question.completed && (
                    <p className="mt-1 text-sm text-gray-500">
                      Richtig beantwortet: {question.correctCount || 0}/3
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderCompletedQuestions = () => {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Gelernte Fragen</h2>
          <div className="flex gap-4">
            <span className="text-gray-600">
              {completedQuestions.length} von {questions.length} Fragen gemeistert
            </span>
            <button
              onClick={() => setExamMode('practice')}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Zurück zur Übung
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {completedQuestions.map((question) => (
            <div
              key={question.id}
              className="border rounded-lg p-4 bg-green-50"
            >
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <div className="flex justify-between">
                    <h3 className="font-medium text-gray-900">Frage {question.id}</h3>
                    {wrongAnswers[question.id] > 0 && (
                      <span className="text-red-600 text-sm">
                        {wrongAnswers[question.id]}× falsch beantwortet
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-gray-600">{question.question}</p>
                  <p className="mt-2 text-sm text-green-600">
                    <span className="font-medium">Richtige Antwort:</span>{' '}
                    {question.options.find(opt => opt.isCorrect)?.text}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {completedQuestions.length === 0 && (
            <p className="text-center text-gray-500 py-8">
              Noch keine Fragen gemeistert. Beantworte Fragen dreimal richtig, um sie hier zu sehen.
            </p>
          )}
        </div>
      </div>
    );
  };

  const renderHistory = () => {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Verlauf</h2>
          <button
            onClick={() => setExamMode('practice')}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Zurück zur Übung
          </button>
        </div>

        <div className="space-y-4">
          {questionHistory.map((entry, index) => (
            <div
              key={`${entry.questionId}-${entry.answeredAt.getTime()}`}
              className="flex items-start gap-4 border-b pb-4"
            >
              <div className={`flex-shrink-0 w-6 h-6 rounded-full ${entry.isCorrect ? 'bg-green-500' : 'bg-red-500'}`} />
              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="font-medium text-gray-900">Frage {entry.questionId}</h3>
                  <span className="text-sm text-gray-500">
                    {format(entry.answeredAt, 'PPP HH:mm', { locale: de })}
                  </span>
                </div>
                <p className="mt-1 text-gray-600">{entry.question}</p>
                <div className="mt-2">
                  <p className="text-sm">
                    <span className="font-medium">Deine Antwort:</span>{' '}
                    <span className={entry.isCorrect ? 'text-green-600' : 'text-red-600'}>
                      {entry.userAnswer}
                    </span>
                  </p>
                  {!entry.isCorrect && (
                    <p className="text-sm mt-1">
                      <span className="font-medium">Richtige Antwort:</span>{' '}
                      <span className="text-green-600">{entry.correctAnswer}</span>
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="text-gray-600 text-center">Lade Fragen...</p>
        </div>
      );
    }

    if (activeQuestions.length === 0 && examMode === 'practice') {
      return (
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <Trophy className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Gratulation!</h2>
          <p className="text-gray-600 mb-6">
            Du hast alle Fragen erfolgreich gemeistert.
          </p>
          <button
            onClick={() => setExamMode('completed')}
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Gelernte Fragen anzeigen
          </button>
        </div>
      );
    }

    if (examMode === 'history') {
      return renderHistory();
    }

    if (examMode === 'completed') {
      return renderCompletedQuestions();
    }

    if (examMode === 'list') {
      return renderQuestionList();
    }

    if (examMode === 'wrong') {
      return renderWrongAnswers();
    }

    if (examMode === 'results') {
      return (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Prüfungsergebnisse</h2>
          <div className="space-y-4">
            {examResults.map((result, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-600">{result.date}</p>
                    <p className="text-lg font-semibold">
                      {result.correctAnswers} von {result.totalQuestions} richtig ({result.percentage.toFixed(1)}%)
                    </p>
                  </div>
                  <div className={`flex items-center ${result.passed ? 'text-green-600' : 'text-red-600'}`}>
                    {result.passed ? (
                      <>
                        <Trophy className="w-6 h-6 mr-2" />
                        Bestanden
                      </>
                    ) : (
                      <>
                        <XCircle className="w-6 h-6 mr-2" />
                        Nicht bestanden
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={startNewExam}
            className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Neue Prüfung starten
          </button>
        </div>
      );
    }

    if (!currentQuestion) {
      return (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="text-gray-600 text-center">Keine Frage verfügbar.</p>
        </div>
      );
    }

    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-700">
            Frage {currentQuestionIndex + 1} von {activeQuestions.length}
          </h2>
          <div className="flex items-center gap-4">
            {examMode === 'exam' ? (
              <button
                onClick={exitExam}
                className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors flex items-center gap-2"
              >
                <XSquare className="w-4 h-4" />
                Prüfung beenden
              </button>
            ) : (
              <>
                <div className="text-sm text-gray-500">
                  Richtig in Folge: {currentQuestion.correctCount || 0}/3
                </div>
                <button
                  onClick={resetAllProgress}
                  className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors flex items-center gap-2"
                >
                  <RefreshCw className="w-4 h-4" />
                  Fortschritt zurücksetzen
                </button>
                <button
                  onClick={() => setExamMode('wrong')}
                  className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors flex items-center gap-2"
                >
                  <AlertCircle className="w-4 h-4" />
                  Falsche Antworten
                </button>
                <button
                  onClick={() => setExamMode('list')}
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors flex items-center gap-2"
                >
                  <List className="w-4 h-4" />
                  Alle Fragen
                </button>
                <button
                  onClick={() => setExamMode('completed')}
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors flex items-center gap-2"
                >
                  <BookCheck className="w-4 h-4" />
                  Gelernte Fragen
                </button>
                <button
                  onClick={() => setExamMode('history')}
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Verlauf anzeigen
                </button>
              </>
            )}
          </div>
        </div>

        <div className="mb-8">
          <p className="text-lg text-gray-700 mb-6">
            {currentQuestion.question}
          </p>
          
          <div className="space-y-3">
            {currentQuestion.options.map((option) => {
              const isSelected = selectedAnswer === option.text;
              const showCorrect = showAnswer && option.isCorrect;
              const showIncorrect = showAnswer && isSelected && !option.isCorrect;

              return (
                <button
                  key={option.text}
                  onClick={() => !showAnswer && setSelectedAnswer(option.text)}
                  disabled={showAnswer}
                  className={`w-full p-4 text-left rounded-lg border transition-colors ${
                    showCorrect
                      ? 'border-green-500 bg-green-50'
                      : showIncorrect
                      ? 'border-red-500 bg-red-50'
                      : isSelected
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{option.text}</span>
                    {showCorrect && <CheckCircle className="w-5 h-5 text-green-600" />}
                    {showIncorrect && <XCircle className="w-5 h-5 text-red-600" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <button
            onClick={previousQuestion}
            disabled={currentQuestionIndex === 0}
            className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Vorherige
          </button>

          {examMode === 'practice' ? (
            showAnswer ? (
              <button
                onClick={() => {
                  setShowAnswer(false);
                  setSelectedAnswer(null);
                  nextQuestion();
                }}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Nächste Frage
              </button>
            ) : (
              <button
                onClick={checkAnswer}
                disabled={!selectedAnswer}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Antwort überprüfen
              </button>
            )
          ) : (
            <button
              onClick={submitExam}
              disabled={Object.keys(currentExamAnswers).length < activeQuestions.length}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Prüfung abgeben
            </button>
          )}

          <button
            onClick={nextQuestion}
            disabled={currentQuestionIndex === activeQuestions.length - 1}
            className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            Nächste
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {examMode === 'practice' && (
          <div className="mt-6 flex justify-center">
            <button
              onClick={startNewExam}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Prüfung starten
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 pb-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          AZ-900 Prüfungsvorbereitung
        </h1>
        {renderContent()}
      </div>
      {renderProgressBar()}
    </div>
  );
}

export default App;