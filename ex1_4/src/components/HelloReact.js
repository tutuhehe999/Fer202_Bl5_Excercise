import ExerciseSection from './ExerciseSection';

function HelloReact() {
  return (
    <ExerciseSection
      number="01"
      title="Hello React"
      description="A first React component written with JSX."
      id="hello"
    >
      <div className="hello-preview">
        <span>Hello </span>
        <strong>React</strong>
      </div>
    </ExerciseSection>
  );
}

export default HelloReact;
