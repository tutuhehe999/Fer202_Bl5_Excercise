import { Badge, Container, Nav, Navbar } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';

export default function Header({ cartCount }) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="/Images/logo.jpg"
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="Shop logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#men">Men</Nav.Link>
            <Nav.Link href="#women">Women</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>

          <div aria-label={`Cart with ${cartCount} items`}>
            <FaShoppingCart size={22} />{' '}
            <Badge bg="secondary">{cartCount}</Badge>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
