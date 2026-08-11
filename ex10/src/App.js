import { Breadcrumb, Container } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import StudentList from './components/StudentList';
import Footer from './components/Footer';
import studentOne from './assets/student-de160182.png';
import studentTwo from './assets/student-de160377.png';
import studentThree from './assets/student-de160547.png';
import studentFour from './assets/student-de170049.png';

const students = [
  { id: 'DE160182', name: 'Nguyễn Hữu Quốc Khánh', location: 'DaNang', image: studentOne },
  { id: 'DE160377', name: 'Chợ Vĩnh Thiên', location: 'QuangNam', image: studentTwo },
  { id: 'DE160547', name: 'Đỗ Nguyễn Phúc', location: 'QuangNam', image: studentThree },
  { id: 'DE170049', name: 'Lê Hoàng Minh', location: 'DaNang', image: studentFour },
];

function App() {
  return (
    <div className="fpt-page" id="top">
      <Header />
      <main>
        <Hero />
        <Container fluid className="fpt-content-width">
          <Breadcrumb className="fpt-breadcrumb">
            <Breadcrumb.Item href="#top">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Students</Breadcrumb.Item>
          </Breadcrumb>
          <StudentList students={students} />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
