import React from 'react'
import About from '../About'
import Portfolio from '../Portfolio'
import Resume from '../Resume'
import { capitalizeFirstLetter } from '../../utils/helpers'

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
            default:
                break
        }
    }

    return (
        <section>
            <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
            {renderPage(name)}
        </section>
    )
}

export default Sections