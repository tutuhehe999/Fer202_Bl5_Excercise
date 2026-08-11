import { Container, Form, Image, Nav, Navbar } from 'react-bootstrap';
import fptLogo from '../assets/fpt-logo.jpg';

export default function Header() {
  return (
    <Navbar className="fpt-navbar" expand="lg">
      <Container fluid className="fpt-navbar-inner">
        <Navbar.Brand href="#top" className="fpt-brand">
          <Image src={fptLogo} alt="FPT Education - FPT University" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="fpt-navigation" />
        <Navbar.Collapse id="fpt-navigation">
          <Nav className="fpt-nav me-auto">
            <Nav.Link href="#top">◆Trang chủ</Nav.Link>
            <Nav.Link href="#majors">↕Ngành học</Nav.Link>
            <Nav.Link href="#admission">▣Tuyển sinh</Nav.Link>
            <Nav.Link href="#students">▤Sinh viên</Nav.Link>
          </Nav>
          <Form className="fpt-search" onSubmit={(event) => event.preventDefault()}>
            <Form.Label htmlFor="search">Search:</Form.Label>
            <Form.Control id="search" type="search" />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
