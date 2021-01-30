import React from 'react'
import About from '../About'
import Portfolio from '../Portfolio'
import Resume from '../Resume'
import ContactForm from '../Contact'

function Sections({ currentNavigation }) {
    const { name } = currentNavigation

    const renderPage = () => {
        switch(name) {
            case 'About Me':
                return <About />
            case 'Portfolio':
                return <Portfolio />
            case 'Resume':
                return <Resume />
            case 'Contact Me':
                return <ContactForm />
            default:
                break
        }
    }

    return (
        <section>
            {renderPage(name)}
        </section>
    )
}

export default Sections