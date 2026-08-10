import { numbers } from '../data/exerciseData';
import { productWithReduce, sumWithReduce } from '../utils/exerciseUtils';
import ExerciseSection from './ExerciseSection';

function ReduceExercise() {
  return (
    <ExerciseSection
      number="07"
      title="Reduce and arrow functions"
      description="The accumulator starts at 0 for addition and 1 for multiplication."
      id="reduce"
    >
      <div className="reduce-layout">
        <div className="array-display">[{numbers.join(', ')}]</div>
        <div className="calculation-card">
          <span>Sum</span>
          <strong>{sumWithReduce(numbers)}</strong>
          <code>reduce((total, number) =&gt; total + number, 0)</code>
        </div>
        <div className="calculation-card">
          <span>Product</span>
          <strong>{productWithReduce(numbers)}</strong>
          <code>reduce((product, number) =&gt; product * number, 1)</code>
        </div>
      </div>
    </ExerciseSection>
  );
}

export default ReduceExercise;
