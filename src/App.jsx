import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./components/Home"
import Temp from './components/Temp'
import Register from './components/Register'

function App() {

  return (
    <div>
      <h1>Cafe Frontend</h1>
      <Register />
      <h1>This is Footer</h1>
    </div>
  )
}

export default App
