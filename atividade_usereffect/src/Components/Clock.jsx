import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    setShowMessage(true);
    const messageTimerId = setTimeout(() => {
      setShowMessage(false);
    }, 5000);

    return () => clearTimeout(messageTimerId);
  }, []);

  return (
    <div>
      <h2>{time}</h2>
      {showMessage && <p>Esta mensagem desaparecerá em 5 segundos.</p>}
    </div>
  );
}

export default Clock;