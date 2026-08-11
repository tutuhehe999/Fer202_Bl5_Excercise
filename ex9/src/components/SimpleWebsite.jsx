import fptLogo from '../assets/fpt-logo.jpg';

export default function SimpleWebsite() {
  return (
    <div className="simple-website-page">
      <header className="website-header">
        <img src={fptLogo} alt="FPT Education - FPT University" />
        <nav aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main className="website-main">
        <section id="about">
          <h1>About</h1>
          <p>This is the about section of the website.</p>
        </section>
        <section id="contact">
          <h1>Contact</h1>
          <p>For any inquiries, please contact us at example@example.com.</p>
        </section>
      </main>
      <footer>© 2023 Website. All rights reserved.</footer>
    </div>
  );
}
