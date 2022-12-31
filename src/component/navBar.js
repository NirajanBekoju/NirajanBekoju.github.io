import { Link } from "react-router-dom";
import cv from '../assets/cv/resume.pdf';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
            <div class="container">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link active pl0" aria-current="page" to="/">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to={`/projects`}>Projects</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/lr">Literature Review</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/blogs">Blogs</Link>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <a href={cv} target="_blank" class="btn btn-success">Download CV</a>
                    </form>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;