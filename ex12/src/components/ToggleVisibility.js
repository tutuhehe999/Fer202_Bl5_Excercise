import { useState } from 'react';

function ToggleVisibility() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <section>
      <h2>Toggle Visibility</h2>
      {isVisible && <p>This text is visible.</p>}
      <button type="button" onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
    </section>
  );
}

export default ToggleVisibility;
