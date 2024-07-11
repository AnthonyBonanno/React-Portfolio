import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <Link to="https://github.com/AnthonyBonanno">Github</Link>
        <Link to="https://stackoverflow.com/users/24758321/anthony-bonanno">Stack Overflow</Link>
        <Link to="https://www.linkedin.com/in/anthony-bonanno-85b90b148/">LinkedIn</Link>
      </div>
    </footer>
  );
}

export default Footer;
