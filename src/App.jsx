import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import Konsultasi from './components/Konsultasi'
import Fitur from './components/Fitur'
import Marimas from './components/Marimas'
import Solusi from './components/Solusi'
import Efisiensi from './components/Efisiensi'
import Informasi from './components/Informasi'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-[url('../public/assets/image/marimas.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <Navbar />
      <Dashboard />
      <Konsultasi />
      <Fitur />
      <Marimas />
      <Solusi />
      {/* <Efisiensi /> */}
      <Informasi />
      <Footer />
    </div>
  )
}

export default App
