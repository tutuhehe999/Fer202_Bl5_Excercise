import React from 'react';
import AnimalCard from './AnimalCard';
import animals from './data';

function App() {
  return (
    <div>
      <h1>Animal Cards - PropTypes Demo</h1>
      <div>
        {animals.map((animal, index) => (
          <AnimalCard
            key={index}
            name={animal.name}
            scientificName={animal.scientificName}
            size={animal.size}
            diet={animal.diet}
            additional={animal.additional}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
