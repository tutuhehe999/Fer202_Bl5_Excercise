import { useState } from 'react';

function ControlledInput() {
  const [text, setText] = useState('');

  return (
    <section>
      <h2>Controlled Input Field</h2>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Type something"
      />
      <p>{text}</p>
    </section>
  );
}

export default ControlledInput;
