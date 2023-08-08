import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Axio from './Axio'
import { io } from 'socket.io-client';

function App() {
  const [count, setCount] = useState(0)
 useEffect(() => {
  const socket=io('http://localhost:3000/')
  socket.on('connect',()=>
  {
    console.log('server connected');
  })
  socket.on('hello',(data)=>
  {
    console.log(data)
  })
  socket.on('xyz',(data)=>{
    console.log(data)
  })
 })
  return (
    <>
      <Axio/>
    </>
  )
}

export default App
