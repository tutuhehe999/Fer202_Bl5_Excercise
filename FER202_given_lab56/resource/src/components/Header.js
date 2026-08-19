import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <Navbar >
      <Container>
        <Navbar.Toggle aria-controls="main-navigation" />
        <Navbar.Collapse id="main-navigation">
          <Nav className="me-auto border rounded p-1">
            <Nav.Link as={NavLink} to="/courses">Courses</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#review">Review</Nav.Link>
            <Nav.Link href="#title-confirmation">Title Confirmation</Nav.Link>
            <Nav.Link href="#reference">Reference</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
