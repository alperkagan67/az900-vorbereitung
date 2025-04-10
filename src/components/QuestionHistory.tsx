import React, { useState, useMemo } from 'react';
import { format } from 'date-fns';
import { de } from 'date-fns/locale';
import { 
  CheckCircle, 
  XCircle, 
  Calendar, 
  Filter, 
  ArrowUpDown, 
  Download,
  Flame,
  Trophy,
  Target
} from 'lucide-react';
import type { QuestionHistoryEntry, SortOption, FilterOption } from '../types';

interface QuestionHistoryProps {
  history: QuestionHistoryEntry[];
  onClose: () => void;
  onReviewQuestion: (questionId: number) => void;
}

export function QuestionHistory({ history, onClose, onReviewQuestion }: QuestionHistoryProps) {
  const [sortBy, setSortBy] = useState<SortOption>('date');
  const [filterBy, setFilterBy] = useState<FilterOption>('all');

  const stats = useMemo(() => {
    const currentStreak = history.reduce((streak, entry, index) => {
      if (!entry.isCorrect) return 0;
      return streak + 1;
    }, 0);

    const longestStreak = history.reduce((longest, entry) => {
      return Math.max(longest, entry.streakAtTime);
    }, 0);

    const totalCorrect = history.filter(entry => entry.isCorrect).length;

    return {
      currentStreak,
      longestStreak,
      totalCorrect,
      totalAttempts: history.length
    };
  }, [history]);

  const sortedAndFilteredHistory = useMemo(() => {
    let filtered = [...history];

    // Apply filters
    if (filterBy === 'correct') {
      filtered = filtered.filter(entry => entry.isCorrect);
    } else if (filterBy === 'incorrect') {
      filtered = filtered.filter(entry => !entry.isCorrect);
    }

    // Apply sorting
    return filtered.sort((a, b) => {
      if (sortBy === 'date') {
        return b.answeredAt.getTime() - a.answeredAt.getTime();
      } else if (sortBy === 'correctness') {
        return (b.isCorrect ? 1 : 0) - (a.isCorrect ? 1 : 0);
      } else {
        return b.streakAtTime - a.streakAtTime;
      }
    });
  }, [history, sortBy, filterBy]);

  const exportHistory = () => {
    const csv = [
      ['Question', 'Your Answer', 'Correct Answer', 'Result', 'Date', 'Streak'],
      ...sortedAndFilteredHistory.map(entry => [
        entry.question,
        entry.userAnswer,
        entry.correctAnswer,
        entry.isCorrect ? 'Correct' : 'Incorrect',
        format(entry.answeredAt, 'PPP HH:mm', { locale: de }),
        entry.streakAtTime.toString()
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'question-history.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        <div className="p-6 border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">Question History</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-4 gap-4 mt-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-blue-600" />
                <span className="text-sm text-blue-600">Current Streak</span>
              </div>
              <p className="text-2xl font-bold text-blue-700">{stats.currentStreak}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-green-600" />
                <span className="text-sm text-green-600">Longest Streak</span>
              </div>
              <p className="text-2xl font-bold text-green-700">{stats.longestStreak}</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-purple-600" />
                <span className="text-sm text-purple-600">Success Rate</span>
              </div>
              <p className="text-2xl font-bold text-purple-700">
                {Math.round((stats.totalCorrect / stats.totalAttempts) * 100)}%
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-gray-600" />
                <span className="text-sm text-gray-600">Total Correct</span>
              </div>
              <p className="text-2xl font-bold text-gray-700">
                {stats.totalCorrect}/{stats.totalAttempts}
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex gap-4 mt-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="border rounded px-2 py-1"
              >
                <option value="date">Sort by Date</option>
                <option value="correctness">Sort by Correctness</option>
                <option value="streak">Sort by Streak</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              <select
                value={filterBy}
                onChange={(e) => setFilterBy(e.target.value as FilterOption)}
                className="border rounded px-2 py-1"
              >
                <option value="all">Show All</option>
                <option value="correct">Show Correct</option>
                <option value="incorrect">Show Incorrect</option>
              </select>
            </div>
            <button
              onClick={exportHistory}
              className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded hover:bg-gray-200"
            >
              <Download className="w-4 h-4" />
              Export CSV
            </button>
          </div>
        </div>

        {/* History List */}
        <div className="overflow-y-auto max-h-[calc(90vh-280px)]">
          {sortedAndFilteredHistory.map((entry, index) => (
            <div
              key={`${entry.questionId}-${entry.answeredAt.getTime()}`}
              className="p-4 border-b hover:bg-gray-50"
            >
              <div className="flex items-start gap-4">
                <div className={`mt-1 ${
                  entry.isCorrect ? 'text-green-500' : 'text-red-500'
                }`}>
                  {entry.isCorrect ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <XCircle className="w-5 h-5" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-medium text-gray-900">
                      Question {entry.questionId}
                    </h3>
                    <div className="text-sm text-gray-500">
                      {format(entry.answeredAt, 'PPP HH:mm', { locale: de })}
                    </div>
                  </div>
                  <p className="mt-1 text-gray-600">{entry.question}</p>
                  <div className="mt-2 space-y-1">
                    <p className="text-sm">
                      <span className="font-medium">Your answer:</span>{' '}
                      <span className={entry.isCorrect ? 'text-green-600' : 'text-red-600'}>
                        {entry.userAnswer}
                      </span>
                    </p>
                    {!entry.isCorrect && (
                      <p className="text-sm">
                        <span className="font-medium">Correct answer:</span>{' '}
                        <span className="text-green-600">{entry.correctAnswer}</span>
                      </p>
                    )}
                    <p className="text-sm text-gray-500">
                      Streak at time: {entry.streakAtTime}
                    </p>
                  </div>
                  <button
                    onClick={() => onReviewQuestion(entry.questionId)}
                    className="mt-2 text-sm text-blue-600 hover:text-blue-800"
                  >
                    Review Question
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}