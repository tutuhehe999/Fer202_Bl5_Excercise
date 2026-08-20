import React from 'react';
import PropTypes from 'prop-types';
import './AnimalCard.css';

export default function AnimalCard({
  name,
  scientificName,
  size,
  diet,
  additional,
}) {
  const showAdditional = (additional) => {
    const info = Object.entries(additional)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n');
    alert(info);
  };

  return (
    <div className="animal-card">
      <h2>{name}</h2>
      <p><strong>Scientific Name:</strong> {scientificName}</p>
      <p><strong>Size:</strong> {size} kg</p>
      <p><strong>Diet:</strong> {diet.join(', ')}</p>
      <button onClick={() => showAdditional(additional)}>More Info</button>
    </div>
  );
}

AnimalCard.propTypes = {
  additional: PropTypes.shape({
    link: PropTypes.string,
    notes: PropTypes.string,
  }),
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  scientificName: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

AnimalCard.defaultProps = {
  additional: {
    notes: 'No Additional Information',
  },
};
