import { useState } from 'react';

function Calculator() {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState(null);

  function calculate() {
    const first = Number(firstNumber);
    const second = Number(secondNumber);

    if (operator === '+') {
      setResult(first + second);
    } else if (operator === '-') {
      setResult(first - second);
    } else if (operator === '*') {
      setResult(first * second);
    } else if (second === 0) {
      setResult('Cannot divide by zero');
    } else {
      setResult(first / second);
    }
  }

  return (
    <section>
      <h2>Calculator</h2>
      <input
        type="number"
        value={firstNumber}
        onChange={(event) => setFirstNumber(event.target.value)}
        placeholder="First number"
      />
      <select value={operator} onChange={(event) => setOperator(event.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input
        type="number"
        value={secondNumber}
        onChange={(event) => setSecondNumber(event.target.value)}
        placeholder="Second number"
      />
      <button type="button" onClick={calculate}>
        Calculate
      </button>
      {result !== null && <p>Result: {result}</p>}
    </section>
  );
}

export default Calculator;
