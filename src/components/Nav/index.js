import React, { useEffect } from 'react'
import { capitalizeFirstLetter } from '../../utils/helpers'

function Nav(props) {
    const {
        navigation = [],
        setCurrentNavigation,
        currentNavigation,
        contactSelected,
        setContactSelected
    } = props

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentNavigation.name)
    }, [currentNavigation])

    return (
        <header className="flex-row px-1">
            <nav>
                <ul className="flex-row">

                    {navigation.map((nav) => (
                        <li
                            className={`mx-1 ${
                                currentNavigation.name === nav.name && !contactSelected && `navActive`
                                }`}
                            key={nav.name}
                        >

                            <span
                                onClick={() => {
                                setCurrentNavigation(nav)
                                setContactSelected(false)
                                }}
                            >
                                {capitalizeFirstLetter(nav.name)}
                            </span>
                        </li>
                    ))}

                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => setContactSelected(true)}>Contact</span>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav