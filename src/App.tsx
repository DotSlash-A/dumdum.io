import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div className="divide">
        <div style={{ flex: '1', backgroundColor: '#e0e0e0', height: '50vh' }}>
          <h1 style={{ fontSize: '300px', textAlign: 'center', fontFamily: 'monospace' }}>Ananya</h1>
        </div>
        <div style={{ flex: '1', backgroundColor: '#f0f0f0', height: '50vh' }}>
          <div style={{ fontSize: '20px', textAlign: 'center', fontFamily: 'monospace' }}>
            <h2>this id the bottom half</h2>
            <h2>i dont know what to write</h2>
            <h2>i lost the dribble</h2>
          </div>
        </div>
      </div >
    </>
  )
}

export default App
