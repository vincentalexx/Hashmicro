import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import Konsultasi from './components/Konsultasi'
import Fitur from './components/Fitur'
import Marimas from './components/Marimas'
import Solusi from './components/Solusi'
import Efisiensi from './components/Efisiensi'
import Informasi from './components/Informasi'

function App() {
  const [count, setCount] = useState(0)

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
    </div>
  )
}

export default App
