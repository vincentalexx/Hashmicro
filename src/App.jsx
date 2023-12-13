import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Dashboard from './Dashboard'
import Konsultasi from './Konsultasi'
import Fitur from './Fitur'
import Marimas from './Marimas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-[url('../public/assets/image/marimas.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <Navbar />
      <Dashboard />
      <Konsultasi />
      <Fitur />
      <Marimas />
    </div>
  )
}

export default App
