const Projects = () => {
    const projects = [
        {
            name: "PickUpPro",
            description:
                "A website created to allow parents to easily pick up their kids from school without the headache of trying to find them. Admins will wait with the students until parents request to pickup their child.",
            image: require("../static/images/PickUpPro.png"),
            link: "",
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
    ];
    return (
        <>
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

export default Projects