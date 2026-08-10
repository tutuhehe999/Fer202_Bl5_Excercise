function ExerciseSection({ number, title, children, id }) {
  return (
    <section className="exercise-section" id={id}>
      <h2>{number}. {title}</h2>
      {children}
    </section>
  );
}

export default ExerciseSection;
