import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    (async function fetchData() {
      try {
        const response = await fetch('/api/HttpTrigger1');
        if (!response.ok) {
          throw new Error('API request failed');
        }
        const { text } = await response.json();
        console.log(text);
        setData(text);
      } catch (error) {
        setError(error.message);
      }
    })();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <div>Hello {data}</div>;
}

export default App;
