import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from './ProductCard';

export default function ProductList({ products, onAddToCart }) {
  return (
    <Container id="products" className="py-4">
      <h2 className="text-center mb-4">Featured Products</h2>
      <Row>
        {products.map((product) => (
          <Col md={4} className="mb-4" key={product.id}>
            <ProductCard product={product} onAddToCart={onAddToCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
