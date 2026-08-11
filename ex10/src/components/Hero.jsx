import { Container, Image } from 'react-bootstrap';
import studentsBanner from '../assets/fpt-students-banner.png';

export default function Hero() {
  return (
    <section className="fpt-hero">
      <Container fluid>
        <Image fluid src={studentsBanner} alt="FPT University students" />
      </Container>
    </section>
  );
}
