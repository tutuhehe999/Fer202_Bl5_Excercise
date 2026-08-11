import { Col, Container, Row } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="fpt-footer">
      <Container fluid className="footer-content">
        <Row className="w-100 g-0">
          <Col md={6} className="address-block">
            <h2>Our Address</h2>
            <p>Khu đô thị FPT Đà Nẵng</p>
            <p>☎ +84023111111</p>
            <p>▥ +852 8765 4321</p>
            <p>✉ <a href="mailto:fptudn@fpt.edu.vn">fptudn@fpt.edu.vn</a></p>
          </Col>
          <Col md={6} className="social-links" aria-label="Social links">
            <a href="#google">G+</a><a href="#facebook">f</a><a href="#linkedin">in</a>
            <a href="#twitter">♥</a><a href="#youtube" className="youtube">You<br />Tube</a>
            <a href="mailto:fptudn@fpt.edu.vn">✉</a>
          </Col>
        </Row>
        <p className="copyright">© Copyright 2023</p>
      </Container>
    </footer>
  );
}
