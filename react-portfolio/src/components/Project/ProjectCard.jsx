import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "./ProjectCard.css";
import * as projects from "../../assets";

const ProjectCard = ({ project }) => {
  const { title, description, repo } = project
  
  return (
    <div className="project-card">
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Link to={repo} target="_blank" rel="noreferrer">
              <Image src={projects[title]} thumbnail />
              <h2>{title}</h2>
              <p>{description}</p>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProjectCard;
