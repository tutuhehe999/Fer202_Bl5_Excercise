import ExerciseSection from './ExerciseSection';

function ExerciseNavbar() {
  return (
    <ExerciseSection
      number="03"
      title="Navbar with JSX"
      description="Navigation elements composed directly in JSX."
      id="navbar"
    >
      <nav className="exercise-navbar" aria-label="Exercise navigation example">
        <a className="active" href="#hello">Home</a>
        <a href="#companies">Search</a>
        <a href="#classes">Contact</a>
        <a className="login" href="#promise">Login</a>
      </nav>
    </ExerciseSection>
  );
}

export default ExerciseNavbar;
