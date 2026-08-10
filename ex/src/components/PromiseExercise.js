import { useState } from 'react';
import { createRandomNumberPromise } from '../utils/exerciseUtils';
import ExerciseSection from './ExerciseSection';

function PromiseExercise() {
  const [result, setResult] = useState({ status: 'idle', message: 'Click the button to start.' });

  const generateNumber = () => {
    setResult({ status: 'pending', message: 'Generating a random number…' });

    createRandomNumberPromise()
      .then((number) => {
        setResult({ status: 'success', message: `Success: ${number} is larger than 5.` });
      })
      .catch(() => {
        setResult({ status: 'error', message: 'Error: the number is smaller than or equal to 5.' });
      });
  };

  return (
    <ExerciseSection
      number="10"
      title="Promise"
      description="The Promise resolves for a random number above 5 and rejects otherwise."
      id="promise"
    >
      <div className="promise-demo">
        <div className="promise-rule">
          <span>Random number</span>
          <strong>0–10</strong>
          <span className="rule-arrow">→</span>
          <span><b>&gt; 5</b> resolve · <b>≤ 5</b> reject</span>
        </div>
        <button type="button" onClick={generateNumber} disabled={result.status === 'pending'}>
          Generate number
        </button>
        <output className={`promise-output ${result.status}`} aria-live="polite">
          {result.message}
        </output>
      </div>
    </ExerciseSection>
  );
}

export default PromiseExercise;
