import React, { useState } from 'react'
import Header from './components/Header'
import Sections from './components/Sections'
import Footer from './components/Footer'

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [navigation] = useState([ { name: 'About Me' }, { name: 'Portfolio' }, { name: 'Resume' }, { name: 'Contact Me'} ])

  const [currentNavigation, setCurrentNavigation] = useState(navigation[0])

  return (
    <div>
      <Header
        navigation={navigation}
        setCurrentNavigation={setCurrentNavigation}
        currentNavigation={currentNavigation}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
       />
      <main>
        <div>
            <Sections currentNavigation={currentNavigation} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
