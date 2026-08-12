import { Badge, Button, Card } from 'react-bootstrap';

export default function ProductCard({ product, onAddToCart }) {
  const outOfStock = product.stock === 0;

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={product.image}
        alt={product.name}
        style={{ height: '280px', objectFit: 'cover' }}
      />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text className="mb-2">
          {product.price.toLocaleString('vi-VN')}đ
        </Card.Text>
        <div className="mb-3">
          <Badge bg={outOfStock ? 'secondary' : 'success'}>
            {outOfStock ? 'Hết hàng' : product.status}
          </Badge>{' '}
          <small>Còn lại: {product.stock}</small>
        </div>
        <Button
          variant="primary"
          disabled={outOfStock}
          onClick={() => onAddToCart(product.id)}
        >
          {outOfStock ? 'Out of Stock' : 'Add to cart'}
        </Button>
      </Card.Body>
    </Card>
  );
}
