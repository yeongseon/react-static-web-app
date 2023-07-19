import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');  

  useEffect(() => {
    (async function () {
      const { text } = await( await fetch('/api/HttpTrigger1')).json();
      console.log(text);
      setData(text);
    })();
  });

  return <div>Hello {data}</div>;
}

export default App;
