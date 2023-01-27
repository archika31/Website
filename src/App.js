import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom' 

import "./styles/App.scss"
import "./styles/Header.scss"
import "./styles/home.scss"
import "./styles/footer.scss"
import "./styles/contact.scss"
import "./styles/services.scss"
import "./styles/mediaquery.scss"
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Services from './components/Services'

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/contact" element={<Contact/>}/>
       <Route path="/services" element={<Services/>}/>
       <Route path="*" element={<>Sorry page Not Found</>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
