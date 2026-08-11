import ExerciseSection from './ExerciseSection';

function JsxText() {
  return (
    <ExerciseSection
      number="04"
      title="Display text"
      description="Text content rendered by a JSX expression."
      id="jsx-text"
    >
      <div className="jsx-text-preview">This is JSX</div>
    </ExerciseSection>
  );
}

export default JsxText;
