import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Dashboard from './Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Dashboard />
      <Dashboard />
    </div>
  )
}

export default App
