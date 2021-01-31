import React from 'react'
import Project from '../Project'

function Portfolio() {
    return (
        <section>
            <h2 className="info-header">Recent Projects:</h2>
            <div className="container">
                <div className="row">
                    <Project />
                </div>
            </div>
        </section>
    )
}

export default Portfolio