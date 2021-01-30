import React, { useState } from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import Sections from './components/Sections'
import ContactForm from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [navigation] = useState([ { name: 'About Me' }, { name: 'Portfolio' }, { name: 'Resume' } ])

  const [currentNavigation, setCurrentNavigation] = useState(navigation[0])

  return (
    <div>
      <Header />
      <Nav
        navigation={navigation}
        setCurrentNavigation={setCurrentNavigation}
        currentNavigation={currentNavigation}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        <div>
          {!contactSelected ? (
            <Sections currentNavigation={currentNavigation} />
            ) : (
            <ContactForm />
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
