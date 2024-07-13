import React, { useState, useMemo } from 'react';

const factorial = (n) => {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
};

function Factorial() {
  const [number, setNumber] = useState(0);

  const result = useMemo(() => factorial(number), [number]);

  return (
    <div>
      <input 
        type="number" 
        value={number} 
        onChange={(e) => setNumber(Number(e.target.value))} 
      />
      <p>Fatorial de {number} é: {result}</p>
    </div>
  );
}

export default Factorial;