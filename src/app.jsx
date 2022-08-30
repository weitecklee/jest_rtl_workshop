import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [counter, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/loading')
      .then(() => {
        setLoading(false);
      });
  });

  return (
    loading
      ? (
        <div>
          Loading...
        </div>
      )
      : (
        <>
          <button type="button" onClick={() => setCount((a) => Number(a) - 1)}>
            Decrease!
          </button>
          <button type="button" onClick={() => setCount((a) => Number(a) + 1)}>
            Increase!
          </button>
          <div data-testid="counter">
            {counter}
          </div>
          <select value={counter} onChange={(e) => setCount(e.target.value)}>
            {
              Array(10).fill(0).map((a, i) => (
                <option value={counter - 5 + i} key={counter - 5 + i}>
                  {counter - 5 + i}
                </option>
              ))
            }
          </select>
        </>
      )
  );
}

export default App;
