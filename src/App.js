import React, { useState } from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import About from './components/About'
import Portfolio from './components/Portfolio'
import ContactForm from './components/Contact'
import Resume from './components/Resume'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
