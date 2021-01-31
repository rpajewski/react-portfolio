import React from 'react'
import headshot from '../../assets/selfie.jpg'

function About() {
    return (
        <section className="bio">
            <div className="flex-row">
                <div className="col-auto">
                    <img src={headshot} style={{ width: "50%" }} alt="headshot" />
                    <h2>Bio:</h2>
                    <p className="bio-text">I am a perfectionist so writing code is my dream job. <br /><br />Although I recently began this new career, I have fallen in love with writing code and developing high-quality, user-friendly websites. Coding is a perfect fit for my personality: I am extremely detail oriented, organized, creative and thoughtful. A career in coding would allow me to solve common problems for businesses, connect individuals all over the world, and produce high-quality products to consumers. <br /><br />It has been a long journey for me to get here; I grew up in the service industry and recently left my accomplished position as the owner of a local restaurant. I am originally from Milwaukee, WI where my father introduced me to a career in hospitality early on. I officially joined the service industry in high school and never gave up, honing my his customer service skills through banquet serving and quickly finding my home behind the bar. From there, I grew into an ownership role and devoted my life to managing a thriving business. I developed high-level skills in teamwork, time management, working under pressure, multitasking, communication, and flexibility. <br /><br />Yet after over 5 years and many significant life changes, I felt that I had outgrown the hospitality industry and was ready for a new challenge. I have always greatly enjoyed working with computers and fondly remembered coding classes from high school so pursuing a certificate in coding felt like a natural fit. Once I formally began the training through a six month boot camp with the University of Wisconsin Extended Campus, my understanding of coding was broadened; I learned that coding can be used as a tool to supplement any passion in life. As someone who's livelihood used to depend on providing efficient, high-quality solutions for people, I became extremely excited about the possibilities that coding offered. Interested in cars? I can create a superior program to maximize a car's engine and power. Fascinated by photography and editing? With coding, I can create programs for rendering images. The possibilities are endless and I cannot wait to see what else is out there.</p>
                </div>
            </div> 
        </section>
    )
}

export default About