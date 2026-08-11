import { Rectangle, Triangle } from '../models/shapes';
import ExerciseSection from './ExerciseSection';

function ClassesExercise() {
  const shapes = [
    new Rectangle('blue', 8, 5),
    new Triangle('green', 10, 6),
  ];

  return (
    <ExerciseSection
      number="09"
      title="Shape classes"
      description="Rectangle and Triangle inherit the public behavior defined by Shape."
      id="classes"
    >
      <div className="class-diagram" aria-label="Shape class hierarchy">
        <article className="class-box shape-box">
          <h3>Shape</h3>
          <p>- color: String</p>
          <hr />
          <strong>+ getArea(): number</strong>
          <strong>+ toString(): String</strong>
        </article>
        <div className="inheritance-line" aria-hidden="true" />
        <div className="subclasses">
          <article className="class-box">
            <h3>Rectangle</h3>
            <p>- length: number</p>
            <p>- width: number</p>
            <hr />
            <strong>+ getArea(): number</strong>
            <strong>+ toString(): String</strong>
          </article>
          <article className="class-box">
            <h3>Triangle</h3>
            <p>- base: number</p>
            <p>- height: number</p>
            <hr />
            <strong>+ getArea(): number</strong>
            <strong>+ toString(): String</strong>
          </article>
        </div>
      </div>

      <div className="shape-results">
        {shapes.map((shape) => (
          <article key={shape.constructor.name}>
            <span>{shape.constructor.name}</span>
            <strong>Area = {shape.getArea()}</strong>
            <small>{shape.toString()}</small>
          </article>
        ))}
      </div>
    </ExerciseSection>
  );
}

export default ClassesExercise;
