import React, { useState, useEffect } from 'react';

function App() {
  const [counter, setCount] = useState(0);

  return (
    <>
      <button type="button" onClick={() => setCount((a) => Number(a) - 1)}>
        Decrease!
      </button>
      <button type="button" onClick={() => setCount((a) => Number(a) + 1)}>
        Increase!
      </button>
      <div>
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
      <br />
      <input type="number" value={counter} onChange={(e) => setCount(e.target.value)} />
      <input type="number" value={Number(counter) + 1} onChange={(e) => setCount(e.target.value - 1)} />
      <div>
        {counter > 0 ? 'Positive' : counter < 0 ? 'Negative' : 'Zero'}
      </div>
    </>
  );
}

export default App;
