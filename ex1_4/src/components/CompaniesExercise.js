import { useRef, useState } from 'react';
import { ages, companies, person } from '../data/exerciseData';
import {
  collectValues,
  createCompanySummary,
  createCounter,
  getCompaniesStartedAfter,
  getCompanyNamesWithForEach,
  getRetailCompaniesWithIncrementedStart,
  getStreet,
  parseQueryParameters,
  sortAgesDescending,
  sortCompaniesByEnd,
  sumNumbers,
  sumWithReduce,
} from '../utils/exerciseUtils';
import ExerciseSection from './ExerciseSection';

function CompaniesExercise() {
  const companyNames = getCompanyNamesWithForEach(companies);
  const newerCompanies = getCompaniesStartedAfter(companies, 1987);
  const retailCompanies = getRetailCompaniesWithIncrementedStart(companies);
  const sortedCompanies = sortCompaniesByEnd(companies);
  const sortedAges = sortAgesDescending(ages);
  const companySummary = createCompanySummary(companies[0]);
  const collectedValues = collectValues('React', ['JSX', 'ES6'], 2026, ['Promise']);
  const parsedQuery = parseQueryParameters('https://example.com/courses?name=React&level=beginner');
  const counter = useRef(null);
  const [counterValue, setCounterValue] = useState(null);

  if (counter.current === null) {
    counter.current = createCounter();
  }

  return (
    <ExerciseSection
      number="08"
      title="Companies and other ES6 features"
      description="forEach, filter, map, sort, reduce, destructuring, rest, spread and closures."
      id="companies"
    >
      <div className="subsection two-column">
        <div>
          <p className="eyebrow">forEach()</p>
          <h3>All company names</h3>
          <ol className="compact-list">
            {companyNames.map((name) => <li key={name}>{name}</li>)}
          </ol>
        </div>
        <div>
          <p className="eyebrow">filter()</p>
          <h3>Companies started after 1987</h3>
          <ul className="compact-list">
            {newerCompanies.map(({ name, start }) => (
              <li key={name}><span>{name}</span><strong>{start}</strong></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="subsection">
        <p className="eyebrow">filter() + map() + JSX</p>
        <h3>Retail companies with start increased by one</h3>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Start + 1</th>
                <th>End</th>
              </tr>
            </thead>
            <tbody>
              {retailCompanies.map(({ name, category, start, end }) => (
                <tr key={name}>
                  <td>{name}</td>
                  <td><span className="category-pill">{category}</span></td>
                  <td>{start}</td>
                  <td>{end}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="subsection two-column">
        <div>
          <p className="eyebrow">sort()</p>
          <h3>Companies by end date</h3>
          <ol className="compact-list sorted-companies">
            {sortedCompanies.map(({ name, end }) => (
              <li key={name}><span>{name}</span><strong>{end}</strong></li>
            ))}
          </ol>
        </div>
        <div className="stacked-results">
          <div className="mini-result">
            <p className="eyebrow">Descending ages</p>
            <p className="value-line">[{sortedAges.join(', ')}]</p>
          </div>
          <div className="mini-result accent">
            <p className="eyebrow">Sum of ages with reduce()</p>
            <strong className="large-number">{sumWithReduce(ages)}</strong>
          </div>
        </div>
      </div>

      <div className="subsection">
        <p className="eyebrow">More ES6 requirements</p>
        <div className="feature-grid">
          <article className="feature-card">
            <h3>Object destructuring</h3>
            <p>{companySummary.name} · {companySummary.category}</p>
            <small>print(): {companySummary.print()}</small>
          </article>
          <article className="feature-card">
            <h3>Rest parameters</h3>
            <p>sumNumbers(2, 4, 6, 8)</p>
            <strong>{sumNumbers(2, 4, 6, 8)}</strong>
          </article>
          <article className="feature-card">
            <h3>Collect and spread</h3>
            <p>{JSON.stringify(collectedValues)}</p>
          </article>
          <article className="feature-card">
            <h3>Nested destructuring</h3>
            <p>street: <strong>{getStreet(person)}</strong></p>
          </article>
          <article className="feature-card counter-card">
            <h3>Closure counter</h3>
            <p>Starts at 0 and increments on every call.</p>
            <button type="button" onClick={() => setCounterValue(counter.current())}>
              Call counter
            </button>
            <output aria-label="Counter value" aria-live="polite">
              {counterValue === null ? 'Not called yet' : counterValue}
            </output>
          </article>
          <article className="feature-card query-card">
            <h3>URL query parameters</h3>
            <code>?name=React&amp;level=beginner</code>
            <pre>{JSON.stringify(parsedQuery, null, 2)}</pre>
          </article>
        </div>
      </div>
    </ExerciseSection>
  );
}

export default CompaniesExercise;
