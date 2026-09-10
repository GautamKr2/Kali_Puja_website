import './App.css'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <div className="relative h-3/4 bg-red-500">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>}/>
        <Route path="/about" element={<h1>About Page</h1>}/>
        <Route path="/members" element={<h1>Members Page</h1>}/>
        <Route path="/gallery" element={<h1>Gallery Page</h1>}/>
        <Route path="/contact" element={<h1>Contact Page</h1>}/>
      </Routes>
      <h1>Home Page</h1>
      <h1>About Page</h1>
      <h1>Members Page</h1>
      <h1>Gallery Page</h1>
      <h1>Contact Page</h1>
    </>
  )
}

export default App
