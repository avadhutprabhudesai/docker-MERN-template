import logo from './logo.svg';
import './App.css';

import { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('http://localhost:4000/tasks')
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="App">
      <h1>Dockerized MERN app</h1>
    </div>
  );
}

export default App;
