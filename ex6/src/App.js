import './App.css';

const products = [
  { id: 1, price: '80.000 vnđ' },
  { id: 2, price: '80.000 vnđ', oldPrice: '100.000 vnđ' },
  { id: 3, price: '80.000 vnđ' },
  { id: 4, price: '80.000 vnđ', sale: true },
];

function Header() {
  return (
    <nav className="shop-navbar navbar navbar-expand-sm navbar-light bg-light border-bottom">
      <div className="container shop-container">
        <a className="navbar-brand" href="#home">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#shopNav" aria-controls="shopNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="shopNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#link">Link</a></li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#dropdown" data-bs-toggle="dropdown">Dropdown</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#action">Action</a></li>
                <li><a className="dropdown-item" href="#another">Another action</a></li>
              </ul>
            </li>
          </ul>
          <form className="d-flex shop-search" onSubmit={(event) => event.preventDefault()}>
            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

function HeroCarousel() {
  return (
    <section id="home" className="hero-carousel" aria-label="Featured products">
      <button className="carousel-arrow previous" type="button" aria-label="Previous slide">‹</button>
      <p>1920 x 530</p>
      <button className="carousel-arrow next" type="button" aria-label="Next slide">›</button>
      <div className="carousel-dots" aria-hidden="true"><span /><span /><span /></div>
    </section>
  );
}

function ProductCard({ product }) {
  return (
    <article className="product-card card rounded-0">
      <div className="product-placeholder">280 x 280</div>
      {product.sale && <span className="sale-ribbon">Sale</span>}
      <div className="card-body">
        <p className="product-name">Product</p>
        <div className="price-row">
          <span className={product.oldPrice ? 'old-price' : 'price-spacer'}>{product.oldPrice || 'price'}</span>
          <span className="current-price">{product.price}</span>
        </div>
        <div className="detail-actions">
          <button className="btn cart-button" type="button" aria-label="Add to cart">▰</button>
          <button className="btn detail-button" type="button">Xem chi tiết</button>
        </div>
      </div>
    </article>
  );
}

function App() {
  return (
    <div className="shop-page">
      <Header />
      <HeroCarousel />
      <main className="container shop-container products-section">
        <h1>NEW PRODUCT</h1>
        <p className="section-description">List product description</p>
        <div className="row g-3">
          {products.map((product) => (
            <div className="col-3" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
