import { useState } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

const initialProducts = [
  { id: 1, name: 'Áo sơ mi nam', price: 199000, image: '/Images/nam1.jpg', status: 'Hàng mới', stock: 5 },
  { id: 2, name: 'Áo thun nam', price: 249000, image: '/Images/nam2.jpg', status: 'Giảm giá', stock: 3 },
  { id: 3, name: 'Áo khoác nam', price: 399000, image: '/Images/nam3.jpg', status: 'Hàng hot', stock: 0 },
  { id: 4, name: 'Váy nữ', price: 299000, image: '/Images/Nu1.jpg', status: 'Hàng mới', stock: 4 },
  { id: 5, name: 'Áo nữ', price: 189000, image: '/Images/Nu2.jpg', status: 'Còn hàng', stock: 6 },
  { id: 6, name: 'Đầm nữ', price: 349000, image: '/Images/Nu3.jpg', status: 'Giảm giá', stock: 2 },
];

function App() {
  const [products, setProducts] = useState(initialProducts);
  const [cartCount, setCartCount] = useState(0);
  const [toast, setToast] = useState({ show: false, message: '', id: 0 });

  const handleAddToCart = (productId) => {
    const product = products.find((item) => item.id === productId);

    if (!product || product.stock === 0) return;

    setProducts((currentProducts) =>
      currentProducts.map((item) =>
        item.id === productId ? { ...item, stock: item.stock - 1 } : item
      )
    );
    setCartCount((count) => count + 1);
    setToast({
      show: true,
      message: `Đã thêm ${product.name} vào giỏ hàng`,
      id: Date.now(),
    });
  };

  return (
    <>
      <Header cartCount={cartCount} />
      <HeroBanner />
      <ProductList products={products} onAddToCart={handleAddToCart} />
      <div style={{ height: '130px' }} />
      <Footer />

      <ToastContainer position="top-end" className="p-3" style={{ position: 'fixed' }}>
        <Toast
          key={toast.id}
          show={toast.show}
          onClose={() => setToast((current) => ({ ...current, show: false }))}
          delay={3000}
          autohide
        >
          <Toast.Header>
            <strong className="me-auto">Thông báo</strong>
          </Toast.Header>
          <Toast.Body>{toast.message}</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
}

export default App;
