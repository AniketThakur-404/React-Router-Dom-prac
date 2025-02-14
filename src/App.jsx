  import React from 'react'
  import Navbar from './navbar/Navbar'
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
  import Home from './navbar/pages/Home.jsx'
  import About from './navbar/pages/About.jsx'
  import Contact from './navbar/pages/Contact.jsx'
  import Services from './navbar/pages/Services.jsx'

  const App = () => {
    return (
      <>
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/Services' element={<Services/>}/>
      </Routes>
      </Router>
      </>
    )
  }

  export default App