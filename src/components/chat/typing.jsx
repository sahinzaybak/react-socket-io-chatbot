import React, { useEffect, useState } from 'react';

const Typing = () => {
  const [dotsCount, setDots] = useState(1);
  const increaseDots = () => {
    setDots(dotsCount === 3 ? 1 : dotsCount + 1);
  };
  useEffect(() => {
    const timeout = setTimeout(increaseDots, 500);
    return () => { clearTimeout(timeout) }
  }, [dotsCount]);

  return (
    <p className="message-item">
      {`Typing${''.padStart(dotsCount, '.')}`}
    </p>
  );
}

export default Typing;
