import ProjectCard from "../components/Project/ProjectCard";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Portfolio = () => {
  const projects = [
    {
      title: "Logo Generator",
      description: "An app that can create a small logo with text and colour.",
      repo: "https://github.com/AnthonyBonanno/Logo-Generator",
      imageSrc: "/images/sample.PNG",
    },
    {
      title: "Weather Application",
      description: "A web app that uses third-party APIs to display weather.",
      repo: "https://github.com/AnthonyBonanno/Weather-App",
      imageSrc: "/images/sample.PNG",
    },
    {
      title: "E-Commerce Back End",
      description: "Back end for an e-commerce web app that uses Sequelize.",
      repo: "https://github.com/AnthonyBonanno/E-Commerce-Back-End",
      imageSrc: "/images/sample.PNG",
    },
    {
      title: "Employee Tracker CLI",
      description: "A CLI application for managing your employees.",
      repo: "https://github.com/eddiespag-hetti/EmployeeDB_CLI",
      imageSrc: "/images/sample.PNG",
    },
    {
      title: "Readme Generator",
      description: "Generates readme file based off of user input.",
      repo: "https://github.com/AnthonyBonanno/Readme-Generator",
      imageSrc: "/images/sample.PNG",
    },
  ];

  return (
    <Container>
      <h1>Portfolio</h1>
      <p>Here is what I have been working on:</p>
      <Row>
        {projects.map((project, index) => (
          <Col md={6} lg={4} className="mb-4">
            <ProjectCard project={project} key={"project" + index} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Portfolio;
