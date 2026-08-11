import fptLogo from '../assets/fpt-logo.jpg';

export default function AboutMe() {
  return (
    <main className="about-me-page">
      <article className="profile-card">
        <img src={fptLogo} alt="FPT Education - FPT University" />
        <div className="profile-copy">
          <h1>Hoai Nguyen - FPT DaNang</h1>
          <p>Moblie: 0982827763</p>
        </div>
      </article>
    </main>
  );
}
