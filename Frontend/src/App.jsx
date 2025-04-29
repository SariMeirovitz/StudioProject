import { useState } from 'react';
import './App.css';
import ClientsList from './components/ClientsList';
import AddClient from './components/AddClient'; // ודא שהנתיב נכון

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AddClient />
      <ClientsList />
    </>
  );
}

export default App;
