import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "#FAF8ED" }}
    >
      <div className="container">
        <a className="navbar-brand nav-link-item" href="#">
          NirajanBekoju
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">NirajanBekoju</span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item nav-link-item">
              <Link className="nav-link active pl0" aria-current="page" to="/">
                About
              </Link>
            </li>
            <li className="nav-item nav-link-item">
              <Link className="nav-link" to={`/projects`}>
                Projects
              </Link>
            </li>
            <li className="nav-item nav-link-item">
              <Link className="nav-link" to="/lr">
                Literature Review
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
