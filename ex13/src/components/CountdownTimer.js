import { useEffect, useState } from 'react';

function CountdownTimer({ initialValue }) {
  const [timeRemaining, setTimeRemaining] = useState(initialValue);

  useEffect(() => {
    if (timeRemaining <= 0) {
      return;
    }

    const timerId = setInterval(() => {
      setTimeRemaining((previousTime) => previousTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeRemaining]);

  return (
    <section>
      <h2>Countdown Timer</h2>
      <p>Time Remaining: {timeRemaining}</p>
    </section>
  );
}

export default CountdownTimer;
