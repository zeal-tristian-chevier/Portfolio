import React from 'react'
import '../static/styles/Homepage.css';

const Homepage = () => {

    return (
        <>
        <div className="row d-flex justify-content-center">
            <div className="col-lg-6">
                <div className="text-start">
                    <h1>About</h1>
                    <p>My name is Tristian Chevier and I am a Full-Stack developer living in Aurora, Colorado.</p>
                    <h2>How I learned to code</h2>
                    <p>After learning a bit of Java in High School, I became inspired to developing more with code.</p>
                    <p>I spent a few months watching Udemy courses on creating websites because I had always wanted to create websites for the businesses local to me. I believe this is my way of helping those around me.</p>  
                    <p>Unfortunately, I became stuck in the infinite tutorial loop. I wasn't going to give up so I decided to join Coding Dojo.</p>
                    <p>Coding Dojo taught me the ins and outs of Full-Stack development. Below I have listed all of my projects from each stack.</p>
                    <h1>My Projects</h1>
                    <h2>Flak Official - Python, Flask, MySQL</h2>
                    <p> A Band Promotion Website designed for a local band to promote previous shows and sell merchandise, using the Stripe API.</p>
                    <a href="https://flakofficial.herokuapp.com/" target="_blank" rel="noreferrer noopener">
                    <img src={require('../static/images/Flak.png')} alt="" data-target="animated-image.originalImage" />
                    </a>
                    <h2>Chev's Garage - MERN</h2>
                    <p>An ATV Repair website for a real company in Haslet, Texas made to allow customers contact the owner and display his past projects.</p>
                    <a href="http://chevsgarage.com/" target="_blank" rel="noreferrer noopener">
                    <img src={require('../static/images/Chev.png')} alt="" data-target="animated-image.originalImage" />
                    </a>
                    <h2>PokeMERN - React</h2>
                    <p>A Pokemon battle remake system using the Pokemon API. Choose a pokemon face a random enemy pokemon.</p>
                    <img src={require('../static/images/PokeMERN2.gif')} alt="" data-target="animated-image.originalImage" />
                    <h2>Tire Way - C#, MySQL</h2>
                    <p>A Browser Dealership software designed to handle customer tire orders.</p>
                    <a href="https://github.com/tchevier/tire-way" target="_blank" rel="noreferrer noopener">
                    <img src={require('../static/images/Tire.png')} alt="" data-target="animated-image.originalImage" />
                    </a>
                </div>
            </div>
        </div>
        
        </>
    )
}
export default Homepage;