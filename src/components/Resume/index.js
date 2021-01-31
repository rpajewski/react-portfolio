import React from 'react'
import myResume from '../../assets/fake-resume.docx'

import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Resume() {
    return (
        <section className="info-header">
            <div className="card">
                <div className="card-header">
                    <h2>Resume</h2>
                </div>
                <div className="card-body">
                    <p>Wanna know more? Click the Button!</p>
                    <a href={myResume} target="_blank" rel="noreferrer" download>
                        <button className="btn"><FontAwesomeIcon icon={faDownload} size="2x" /> Download Resume</button>
                    </a>
                </div>
            </div>
            
        </section>
    )
}

export default Resume