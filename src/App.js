import React from 'react'
import { Navbar } from './components'
import { Header } from "./containers"
import "./App.css"

const App = () => {
  return (
    <div className="App">
        <Navbar />
    <div className="gradient__bg">
        <Header />
    </div>
    </div>
  )
}

export default App
