import React from 'react'

import { faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
    return (
        <footer>
            <a href="https://github.com/rpajewski"><span><FontAwesomeIcon icon={faGithub} size="2x" /></span></a>
            <a href="https://www.linkedin.com/in/ricky-pajewski-a8517b54/"><span><FontAwesomeIcon icon={faLinkedin} size="2x" /></span></a>
            <a href="https://www.facebook.com/ricky.pajewski"><span><FontAwesomeIcon icon={faFacebook} size="2x" /></span></a>
        </footer>
    )
}

export default Footer