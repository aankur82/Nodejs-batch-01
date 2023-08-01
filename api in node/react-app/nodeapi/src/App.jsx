import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Axio from './Axio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Axio/>
    </>
  )
}

export default App
