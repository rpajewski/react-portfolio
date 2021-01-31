import React from 'react'

function Project() {
    const projects = [
        {
            name: "The Planters",
            description: "Full stack development including mySQL database.",
            project_url: "https://blooming-brook-59963.herokuapp.com/",
            image: "planters"
        },
        {
            name: "Budget Tracker",
            description: "PWA implementaion",
            project_url: "https://secure-reef-08802.herokuapp.com/",
            image: "budget-tracker"
        },
        {
            name: "Pizza Hunt",
            description: "MongoDB and Mongoose Library work.",
            project_url: "https://damp-falls-86840.herokuapp.com/",
            image: "pizza-hunt"
        },
        {
            name: "Zoo Keepr",
            description: "Model development with SQLlite",
            project_url: "https://fathomless-plateau-44456.herokuapp.com/",
            image: "zoo-keepr"
        },
        {
            name: "Photo Port",
            description: "React App",
            project_url: "https://rpajewski.github.io/photo-port/",
            image: "photo-port"
        },
        {
            name: "Timed Coding Quiz",
            description: "The power of Javascript",
            project_url: "https://rpajewski.github.io/timed-coding-quiz/",
            image: "timed-quiz"
        }
    ]

    return (
        <div className="col-1">
            {projects.map((project) => (
                <div className="card">
                    <div className="card-header">
                        <h2>{project.name}</h2>
                    </div>
                    <div className="card-body">
                        <a href={project.project_url} target="_blank" rel="noreferrer">
                            <img src={require(`../../assets/${project.image}.png`).default} alt={project.name} className="card-img" style={{ width: "50%" }} />
                        </a>
                        <p>{project.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Project