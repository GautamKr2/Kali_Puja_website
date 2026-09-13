import './App.css'
import About from './components/About'
import Home from './components/Home'
import Main_Menu from './components/Main_Menu'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Main_Menu />
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/members" element={<h1>Members Page</h1>}/>
        <Route path="/gallery" element={<h1>Gallery Page</h1>}/>
        <Route path="/contact" element={<h1>Contact Page</h1>}/>
      </Routes>

    </>
  )
}

export default App
