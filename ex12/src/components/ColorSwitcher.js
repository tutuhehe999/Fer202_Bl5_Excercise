import { useState } from 'react';

function ColorSwitcher() {
  const [color, setColor] = useState('red');

  return (
    <section>
      <h2>Color Switcher</h2>
      <select value={color} onChange={(event) => setColor(event.target.value)}>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
      </select>
      <div style={{ backgroundColor: color }}>Selected color: {color}</div>
    </section>
  );
}

export default ColorSwitcher;
