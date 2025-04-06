import React from 'react'
import './App.css'
import { Githubglobe } from "./pages/Githubglobe"
import WorldMapDemo from "./pages/WorldMap"

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Githubglobe />
      <WorldMapDemo />
    </div>
  )
}

export default App