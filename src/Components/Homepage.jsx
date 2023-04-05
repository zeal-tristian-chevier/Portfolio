import React from "react";
import "../static/styles/Homepage.css";
import Projects from "./Projects";

const AboutSection = () => {
    return (
        <>
            <h1>About</h1>
            <p>
                My name is Tristian Chevier and I am a Full-Stack developer
                living in Aurora, Colorado.
            </p>
            <h2>How I learned to code</h2>
            <p>
                After learning a bit of Java in High School, I became inspired
                to developing more with code.
            </p>
            <p>
                I spent a few months watching Udemy courses on creating websites
                because I had always wanted to create websites for the
                businesses local to me. I believe this is my way of helping
                those around me.
            </p>
            <p>
                Unfortunately, I became stuck in the infinite tutorial loop. I
                wasn't going to give up so I decided to join Coding Dojo.
            </p>
            <p>
                Coding Dojo taught me the ins and outs of Full-Stack
                development. Below I have listed all of my projects from each
                stack.
            </p>
        </>
    );
};

const Homepage = () => {

    return (
        <>
            <div className="row d-flex justify-content-center">
                <div className="col-lg-6">
                    <div className="text-start">
                        <AboutSection />
                        <Projects />
                    </div>
                </div>
            </div>
        </>
    );
};
export default Homepage;
