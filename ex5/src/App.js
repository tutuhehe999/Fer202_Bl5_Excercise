import './App.css';
import htmlLogo from './assets/html5-logo.png';
import cssLogo from './assets/css3-logo.png';
import bootstrapLogo from './assets/bootstrap-logo.png';
import fptLogo from './assets/fpt-logo.jpg';
import studentsBanner from './assets/fpt-students-banner.png';
import studentOne from './assets/student-de160182.png';
import studentTwo from './assets/student-de160377.png';
import studentThree from './assets/student-de160547.png';
import studentFour from './assets/student-de170049.png';

const students = [
  {
    id: 'DE160182',
    name: 'Nguyễn Hữu Quốc Khánh',
    location: 'DaNang',
    image: studentOne,
  },
  {
    id: 'DE160377',
    name: 'Chợ Vĩnh Thiên',
    location: 'QuangNam',
    image: studentTwo,
  },
  {
    id: 'DE160547',
    name: 'Đỗ Nguyễn Phúc',
    location: 'QuangNam',
    image: studentThree,
  },
  {
    id: 'DE170049',
    name: 'Lê Hoàng Minh',
    location: 'DaNang',
    image: studentFour,
  },
];

function GridRows() {
  return (
    <div className="grid-demo container-fluid">
      <div className="row g-0">
        <div className="col-6 grid-cell">First col</div>
        <div className="col-6 grid-cell">Second col</div>
      </div>
      <div className="row g-0">
        <div className="col-4 grid-cell">col</div>
        <div className="col-4 grid-cell">col</div>
        <div className="col-4 grid-cell">col</div>
      </div>
      <div className="row g-0">
        <div className="col-3 grid-cell">col</div>
        <div className="col-3 grid-cell">col</div>
        <div className="col-3 grid-cell">col</div>
        <div className="col-3 grid-cell">col</div>
      </div>
    </div>
  );
}

function GridPage({ withNavigation = false }) {
  return (
    <div className="grid-page d-flex flex-column min-vh-100">
      <header className={`grid-jumbotron bg-body-secondary rounded-bottom${withNavigation ? ' compact' : ''}`}>
        <h1 className="display-2 mb-0">Let's test the grid!</h1>
      </header>

      {withNavigation && (
        <nav className="nav grid-nav" aria-label="Demo navigation">
          <a className="nav-link active" aria-current="page" href="#active">Active</a>
          <a className="nav-link" href="#link-one">Link</a>
          <a className="nav-link" href="#link-two">Link</a>
          <span className="nav-link disabled" aria-disabled="true">Disabled</span>
        </nav>
      )}

      <main className={withNavigation ? 'grid-content with-navigation' : 'grid-content'}>
        <GridRows />
      </main>
      <footer className={`grid-footer mt-auto${withNavigation ? '' : ' tall-footer'}`}>Created by ABC!</footer>
    </div>
  );
}

function BootstrapIntroPage() {
  const logos = [
    { src: htmlLogo, alt: 'HTML5' },
    { src: cssLogo, alt: 'CSS3' },
    { src: bootstrapLogo, alt: 'Bootstrap' },
  ];

  return (
    <div className="bootstrap-intro-page">
      <header className="intro-jumbotron bg-body-secondary rounded-bottom text-center">
        <h1 className="display-2 fw-semibold mb-0">My First Bootstrap Page</h1>
      </header>
      <main className="container-fluid intro-logo-row">
        <div className="row align-items-center g-5">
          {logos.map((logo) => (
            <div className="col-4 text-center" key={logo.alt}>
              <img className="img-fluid intro-logo" src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

function SimpleFptPage() {
  return (
    <div className="simple-fpt-page min-vh-100 d-flex flex-column text-center">
      <header className="simple-header">
        <img className="simple-logo d-block mx-auto" src={fptLogo} alt="FPT Education - FPT University" />
        <nav className="simple-nav" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main className="simple-main flex-grow-1">
        <section id="about">
          <h2>About</h2>
          <p>This is the about section of the website.</p>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>For any inquiries, please contact us at example@example.com.</p>
        </section>
      </main>
      <footer className="simple-footer">© 2023 Website. All rights reserved.</footer>
    </div>
  );
}

function StudentCard({ student }) {
  const fieldName = `attendance-${student.id}`;

  return (
    <article className="student-card card rounded-2">
      <img className="card-img-top student-photo" src={student.image} alt={student.name} />
      <div className="card-body student-card-body">
        <p className="student-id">{student.id}</p>
        <div className="student-meta">
          <div className="student-person">
            <span>{student.name}</span>
            <label><input type="radio" name={fieldName} value="absent" /> Absent</label>
          </div>
          <div className="student-location">
            <span>{student.location}</span>
            <label><input type="radio" name={fieldName} value="present" /> Present</label>
          </div>
        </div>
        <button className="btn student-submit" type="button">Submit</button>
      </div>
    </article>
  );
}

function FptStudentPage() {
  return (
    <div className="fpt-page">
      <header className="fpt-navbar">
        <div className="fpt-navbar-inner">
          <a href="#top" className="fpt-brand" aria-label="FPT University home">
            <img src={fptLogo} alt="FPT Education - FPT University" />
          </a>
          <nav className="fpt-nav" aria-label="FPT navigation">
            <a href="#top"><span aria-hidden="true">◆</span>Trang chủ</a>
            <a href="#majors"><span aria-hidden="true">↕</span>Ngành học</a>
            <a href="#admission"><span aria-hidden="true">▣</span>Tuyển sinh</a>
            <a href="#students"><span aria-hidden="true">▤</span>Sinh viên</a>
          </nav>
          <form className="fpt-search" onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="search">Search:</label>
            <input id="search" type="search" />
          </form>
        </div>
      </header>

      <main id="top">
        <section className="fpt-hero">
          <img src={studentsBanner} alt="FPT University students" />
        </section>

        <div className="fpt-content-width">
          <nav className="fpt-breadcrumb" aria-label="Breadcrumb">
            <a href="#top">Home</a>
            <span aria-hidden="true">/</span>
            <span>Students</span>
          </nav>

          <section id="students" className="students-section">
            <h1>Students Detail</h1>
            <div className="students-grid">
              {students.map((student) => <StudentCard key={student.id} student={student} />)}
            </div>
          </section>
        </div>
      </main>

      <footer className="fpt-footer">
        <div className="fpt-content-width footer-content">
          <section className="address-block">
            <h2>Our Address</h2>
            <p>Khu đô thị FPT Đà Nẵng</p>
            <p>☎ +84023111111</p>
            <p>▥ +852 8765 4321</p>
            <p>✉ <a href="mailto:fptudn@fpt.edu.vn">fptudn@fpt.edu.vn</a></p>
          </section>
          <div className="social-links" aria-label="Social links">
            <a href="#google" aria-label="Google Plus">G+</a>
            <a href="#facebook" aria-label="Facebook">f</a>
            <a href="#linkedin" aria-label="LinkedIn">in</a>
            <a href="#twitter" aria-label="Twitter">♥</a>
            <a href="#youtube" aria-label="YouTube">You<br />Tube</a>
            <a href="mailto:fptudn@fpt.edu.vn" aria-label="Email">✉</a>
          </div>
          <p className="copyright">© Copyright 2023</p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  const requestedExercise = new URLSearchParams(window.location.search).get('exercise');

  if (requestedExercise === '1') return <GridPage />;
  if (requestedExercise === '2') return <BootstrapIntroPage />;
  if (requestedExercise === '3') return <GridPage withNavigation />;
  if (requestedExercise === '4') return <SimpleFptPage />;
  return <FptStudentPage />;
}

export default App;
