import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const ProjectCard = ({ title, description, link }) => {
  return (
    <div className="project-card">
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Link to={link} target="_blank" rel="noreferrer">
              <Image src="holder.js/171x180" thumbnail />
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
