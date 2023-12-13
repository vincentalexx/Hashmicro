import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Dashboard from './Dashboard'
import Konsultasi from './Konsultasi'
import Fitur from './Fitur'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Dashboard />
      <Konsultasi />
      <Fitur />
    </div>
  )
}

export default App
