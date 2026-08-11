import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <main className="counter-page">
      <section className="counter-card">
        <h1>Counter</h1>
        <p aria-live="polite">{count}</p>
        <div>
          <button type="button" onClick={() => setCount((value) => value - 1)}>Decrement</button>
          <button type="button" onClick={() => setCount((value) => value + 1)}>Increment</button>
        </div>
      </section>
    </main>
  );
}
