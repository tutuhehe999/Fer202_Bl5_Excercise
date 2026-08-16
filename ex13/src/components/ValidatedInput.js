import { useEffect, useState } from 'react';

function ValidatedInput({ validationFunction, errorMessage }) {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    setIsValid(validationFunction(value));
  }, [value, validationFunction]);

  return (
    <section>
      <h2>Form Input Validation</h2>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Enter at least 3 characters"
      />
      {!isValid && <p>{errorMessage}</p>}
    </section>
  );
}

export default ValidatedInput;
