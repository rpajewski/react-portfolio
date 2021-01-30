import React from 'react'
import headshot from '../../assets/selfie.jpg'

function About() {
    return (
        <section className="my-5">
            <h1 id="about">About Me</h1>
            <img src={headshot} className="my-2" style={{ width: "100%" }} alt="headshot" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat viverra ultricies. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus nec ante id purus sollicitudin lacinia at fermentum ante. Duis egestas pharetra pharetra. Cras nec enim purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas lacinia risus neque, eu porttitor lacus euismod eu. Donec venenatis vel ligula vel vestibulum. Vivamus fringilla urna at ligula pulvinar, non commodo sem luctus. Aenean nunc ipsum, rutrum sit amet rutrum ac, ullamcorper vitae elit. Mauris viverra est in efficitur euismod. Pellentesque consequat semper enim, quis pulvinar nibh dignissim elementum. Integer maximus lectus eget tortor molestie elementum. Cras pulvinar viverra lectus at tincidunt. Suspendisse id lacinia lectus, id pharetra nisl.</p>
        </section>
    )
}

export default About