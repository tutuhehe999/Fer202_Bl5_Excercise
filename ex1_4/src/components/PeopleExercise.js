import { people } from '../data/exerciseData';
import {
  areAllTeenagers,
  findAllTeenagers,
  findFirstTeenager,
  hasTeenager,
} from '../utils/exerciseUtils';
import ExerciseSection from './ExerciseSection';

function PersonBadge({ person }) {
  return <span className="person-badge">{person.name} ({person.age})</span>;
}

function PeopleExercise() {
  const firstTeenager = findFirstTeenager(people);
  const teenagers = findAllTeenagers(people);

  return (
    <ExerciseSection
      number="06"
      title="People array methods"
      description="Finding and checking teenage people with ES6 array methods."
      id="people"
    >
      <div className="result-grid people-results">
        <article className="result-card">
          <code>find()</code>
          <h3>First teenager</h3>
          <PersonBadge person={firstTeenager} />
        </article>

        <article className="result-card">
          <code>filter()</code>
          <h3>All teenagers</h3>
          <div className="badge-row">
            {teenagers.map((person) => <PersonBadge key={person.name} person={person} />)}
          </div>
        </article>

        <article className="result-card">
          <code>every()</code>
          <h3>Is everyone a teenager?</h3>
          <strong className="boolean-value false">{String(areAllTeenagers(people))}</strong>
        </article>

        <article className="result-card">
          <code>some()</code>
          <h3>Is anyone a teenager?</h3>
          <strong className="boolean-value true">{String(hasTeenager(people))}</strong>
        </article>
      </div>
    </ExerciseSection>
  );
}

export default PeopleExercise;
