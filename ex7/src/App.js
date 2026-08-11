import './App.css';
import carImage from './assets/toyota-corolla-cross.png';

const cards = [
  { id: 1, className: 'card-blue' },
  { id: 2, className: 'card-yellow' },
  { id: 3, className: 'card-red' },
];

function CarCard({ className }) {
  return (
    <article className={`car-card card ${className}`}>
      <img className="card-img-top" src={carImage} alt="Toyota Corolla Cross" />
      <div className="card-body">
        <p className="card-text">Some text inside the first card</p>
      </div>
    </article>
  );
}

function App() {
  return (
    <main className="cards-page container-fluid">
      <h1>Cards Columns</h1>
      <div className="row cards-row">
        {cards.map((card) => (
          <div className="col-12 col-md-4" key={card.id}>
            <CarCard className={card.className} />
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
