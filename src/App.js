import "./App.css";
import Homepage from "./components/homepage";


const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg d-flex justify-content-between">
                <div className="container">
                    <a className="navbar-brand ms-5" href="#">
                        <img
                            src={require("./static/images/TrizyLogoSmall.png")}
                            alt="Logo"
                            width="75"
                            height="100"
                        ></img>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse me-5 justify-content-end"
                        id="navbarNavDropdown"
                    >
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    aria-current="page"
                                    href="https://www.linkedin.com/in/tristian-chevier-61839a249/"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    linkedIn{" "}
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="https://github.com/tchevier"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    github <i className="fab fa-github"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="mailto:tchevier3@gmail.com"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    email <i className="fab fa-google"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};
const Footer = () => {
    return (
        <>
            <footer className="text-center text-white">
                <div className="container p-4 pb-0">
                    <section className="mb-3">
                        <a
                            className="btn btn-outline-light btn-floating m-1"
                            href="https://www.linkedin.com/in/tristian-chevier-61839a249/"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a
                            className="btn btn-outline-light btn-floating m-1"
                            href="https://github.com/tchevier"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                        <a
                            className="btn btn-outline-light btn-floating m-1"
                            href="mailto:tchevier3@gmail.com"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <i className="fab fa-google"></i>
                        </a>
                    </section>
                </div>
                <div className="text-center p-3">© 2022 - Tristian Chevier</div>
            </footer>
        </>
    );
};
function App() {
    return (
        <>
            <Navbar />
            <Homepage />
            <Footer />
        </>
    );
}

export default App;
