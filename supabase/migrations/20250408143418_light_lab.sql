/*
  # Create exam results table

  1. New Tables
    - `exam_results`
      - `id` (uuid, primary key)
      - `date` (text)
      - `total_questions` (integer)
      - `correct_answers` (integer)
      - `percentage` (float)
      - `passed` (boolean)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `exam_results` table
    - Add policy for authenticated users to read their own data
*/

CREATE TABLE IF NOT EXISTS exam_results (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  date text NOT NULL,
  total_questions integer NOT NULL,
  correct_answers integer NOT NULL,
  percentage float NOT NULL,
  passed boolean NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE exam_results ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own data"
  ON exam_results
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can insert own data"
  ON exam_results
  FOR INSERT
  TO authenticated
  WITH CHECK (true);