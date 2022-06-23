import React from 'react'
import { Navbar,About, Footer, Skills, Header, Testimonial, Work } from './components/index'
import './App.scss'

const App = () => {
  return (
    <>
    <Navbar/>
      <div className="app">
        <Header />
        <About />
        <Work />
        <Skills />
        <Testimonial />
        <Footer/>
      </div>
    </>
  )
}

export default App