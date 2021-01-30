import React from 'react'
import Nav from '../Nav'
import { capitalizeFirstLetter } from '../../utils/helpers'

function Header(props) {
    const {
        navigation = [],
        setCurrentNavigation,
        currentNavigation,
        contactSelected,
        setContactSelected
    } = props

    const { name } = currentNavigation

    return (
        <header>
            <div className="header-banner"></div>
            <h1>Ricky Pajewski</h1>
            <Nav        
                navigation={navigation}
                setCurrentNavigation={setCurrentNavigation}
                currentNavigation={currentNavigation}
                contactSelected={contactSelected}
                setContactSelected={setContactSelected}
            />
            <div className="hero">
                <div className="hero-statement">
                    <h3>{capitalizeFirstLetter(name)}</h3>
                </div>
            </div>
        </header>
    )
}

export default Header