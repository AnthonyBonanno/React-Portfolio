import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import "./Footer.css";
import Container from "react-bootstrap/esm/Container";
import { IconContext } from "react-icons/lib";

function Footer() {
  return (
    <IconContext.Provider value={{ size: "2em" }}>
      <div className="footer-content">
        <Link to="https://github.com/AnthonyBonanno">
          <FaGithub />
        </Link>
        <Link to="https://stackoverflow.com/users/24758321/anthony-bonanno">
          <FaStackOverflow />
        </Link>
        <Link to="https://www.linkedin.com/in/anthony-bonanno-85b90b148/">
          <FaLinkedin />
        </Link>
      </div>
    </IconContext.Provider>
  );
}

export default Footer;
