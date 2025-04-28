import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClientsList from './components/ClientsList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

       <ClientsList></ClientsList>
    </>
  )
}

export default App
