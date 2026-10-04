import './App.css'
import { Routes, Route } from 'react-router-dom'

import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Home from './components/Home'
import Main_Menu from './components/Main_Menu'
import Members from './components/Members'
import NavBar from './components/NavBar'

import Collaborator from './components/members/Colaborator'
import Login from './components/members/Login'
import Signup from './components/members/Signup'

import Protected from './components/Protected'

import AdminSection from './components/admin/adminSection'
import MemberList from './components/admin/member_list'
import LoginMember from './components/admin/login_member'
import CollaboratorsList from './components/admin/collaborators_list'

function App() {

  return (
    <>
      <Main_Menu />
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="#about" element={<About />}/>
        <Route path="/members" element={<Members />}/>
        <Route path="/gallery" element={<Gallery />}/>
        <Route path="#contact" element={<Contact />}/>

        <Route path="/member">
          <Route path="signup" element={<Signup />}/>
          <Route path="login" element={<Login />}/>
          <Route path="collab" element={<Protected> <Collaborator /> </Protected>}/>
        </Route>

        <Route path="/admin">
          <Route index element={<AdminSection />}/>
          <Route path="member-list" element={<MemberList />}/>
          <Route path="login-member-list" element={<LoginMember />}/>
          <Route path="collaborators-list" element={<CollaboratorsList />}/>
        </Route>
      </Routes>

      <Footer />
    </>
  )
}

export default App
