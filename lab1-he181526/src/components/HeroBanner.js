import { Carousel } from 'react-bootstrap';

const slides = [
  '/Images/banner1.jpg',
  '/Images/banner2.jpg',
  '/Images/banner3.jpg',
];

export default function HeroBanner() {
  return (
    <Carousel id="home">
      {slides.map((image, index) => (
        <Carousel.Item key={image}>
          <img
            className="d-block w-100"
            src={image}
            alt={`Banner ${index + 1}`}
            style={{ height: '400px', objectFit: 'cover', filter: 'brightness(65%)' }}
          />
          <Carousel.Caption>
            <h1>SUMMER SALE UP TO 50%</h1>
            <p>Khám phá các sản phẩm mới với mức giá ưu đãi.</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
