import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import HeaderContent from './Components/HeaderContent/HeaderContent'
import Values from './Components/Values/Values'
import Benefits from './Components/Benefits/Benefits'
import MetalogicCares from './Components/MetalogicCares/MetalogicCares'
import Opportunities from './Components/Opportunities/Opportunities'
import Subscribe from './Components/Subscribe/Subscribe'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
        <Navbar />
        <HeaderContent />
        <Values />
        <Benefits />
        <MetalogicCares />
        <Opportunities />
        <Subscribe />
        <Footer />
    </>
  )
}

export default App
