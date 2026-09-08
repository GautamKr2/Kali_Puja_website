import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <h1> Kali Puja Frontend </h1>
    </>
  )
}

export default App
