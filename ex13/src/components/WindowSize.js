import { useEffect, useState } from 'react';

function WindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section>
      <h2>Window Size</h2>
      <p>
        Window size: {windowSize.width} x {windowSize.height}
      </p>
    </section>
  );
}

export default WindowSize;
