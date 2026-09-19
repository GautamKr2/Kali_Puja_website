import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Home from './components/Home'
import Main_Menu from './components/Main_Menu'
import Members from './components/Members'
import Collaborator from './components/members/Colaborator'
import Login from './components/members/Login'
import Signup from './components/members/Signup'
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
        <Route path="/members" element={<Members />}/>
        <Route path="/gallery" element={<Gallery />}/>
        <Route path="/contact" element={<Contact />}/>

        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/collab" element={<Collaborator />}/>
      </Routes>

      <Footer />
    </>
  )
}

export default App
