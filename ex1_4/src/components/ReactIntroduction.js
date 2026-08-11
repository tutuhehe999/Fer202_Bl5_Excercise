import logo from '../logo.svg';
import ExerciseSection from './ExerciseSection';

function ReactIntroduction() {
  return (
    <ExerciseSection
      number="02"
      title="The React logo"
      description="A simple introduction card based on the reference image."
      id="react-introduction"
    >
      <div className="react-preview">
        <img src={logo} alt="React logo" />
        <div className="logo-divider" aria-hidden="true">
          <span />
        </div>
        <p className="logo-caption">This is the React logo!</p>
        <p className="logo-note">(I don't know why it is here either)</p>
        <p className="react-description">The library for web and native user interfaces</p>
      </div>
    </ExerciseSection>
  );
}

export default ReactIntroduction;
