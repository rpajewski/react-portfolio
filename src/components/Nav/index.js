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
            <nav>
                <ul>
                    {navigation.map((nav) => (
                    <li className={`${currentNavigation.name === nav.name && !contactSelected && `navActive`}`} key={nav.name}>
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
                </ul>
            </nav>
    )
}

export default Nav