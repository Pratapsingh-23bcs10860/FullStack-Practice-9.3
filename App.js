import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://<YOUR_BACKEND_PUBLIC_IP>/')
      .then(res => res.text())
      .then(data => setMessage(data))
      .catch(err => setMessage('Backend not connected'));
  }, []);

  return (
    <div style={{textAlign: 'center', marginTop: '50px'}}>
      <h1>Full Stack App</h1>
      <h2>{message}</h2>
    </div>
  );
}

export default App;
