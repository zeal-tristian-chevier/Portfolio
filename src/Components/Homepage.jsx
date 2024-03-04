import React from "react";
import "../static/styles/Homepage.css";

const Projects = () => {
    const projects = [
        {
            name: "PickUpPro",
            description:
                "A website created to allow parents to easily pick up their kids from school without the headache of trying to find them. Admins will wait with the students until parents request to pickup their child.",
            image: require("../static/images/PickUpPro.png"),
            link: "/",
        },
        {
            name: "Code Crackdown",
            description:
                "A game based off the board game 'Mastermind' with implemented User login and registration as well as custom scoring algorithm to allow users to participate on the leaderboard.",
            image: require("../static/images/CodeCrackdown.png"),
            link: "https://www.codecrackdown.com/",
        },
        {
            name: "Flak Store",
            description:
                "A website created for a local band to promote their shows and sell merchandise. This website was created using the Stripe API to allow users to purchase merchandise.",
            image: require("../static/images/Flak.png"),
            link: "https://flak-official.onrender.com/",
        },
        {
            name: "Chev's Garage",
            description:
                "An ATV Repair website for a real company in Haslet, Texas made to allow customers contact the owner and display his past projects.",
            image: require("../static/images/Chev.png"),
            link: "http://chevsgarage.com/",
        },
        {
            name: "PokeMERN",
            description:
                "A Pokemon battle remake system using the Pokemon API. Choose a pokemon face a random enemy pokemon.",
            image: require("../static/images/PokeMERN2.gif"),
            link: "https://github.com/SeanMcNamee86/pokemern/tree/dev-sp",
        },
        {
            name: "Tire Way",
            description:
                "A Browser Dealership software designed to handle customer tire orders.",
            image: require("../static/images/Tire.png"),
            link: "https://github.com/tchevier/tire-way",
        },
        {
            name: "Moovies",
            description:
                "A movie review website that allows users to create reviews and comment on other reviews.",
            image: require("../static/images/Moovies.png"),
            link: "https://charter-spectrum-coding-challenge.vercel.app/",
        },
        {
            name: "Lakeview Marina",
            description:
                "A customer attraction website for a marina on Lake Dallas, Texas",
            image: require("../static/images/LakeviewMarina.png"),
            link: "https://tchevier3.wixsite.com/lakeview-marina",
        },
    ];
    return (
        <>
        <h1>My Projects</h1>
            {projects.map((project, i) => {
                return (
                    <div key={i}>
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <img src={project.image} alt="" />
                        </a>
                    </div>
                );
            })}
        </>
    );
};

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
