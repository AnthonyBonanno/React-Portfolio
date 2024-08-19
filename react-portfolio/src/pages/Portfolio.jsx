import ProjectCard from "../components/Project/ProjectCard";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Logo Generator",
      description: "An app that can create a small logo with text and colour.",
      imageSrc: "./src/assets/Captuasdasdre.PNG",
      link: "https://github.com/AnthonyBonanno/Logo-Generator",
    },
    {
      id: 2,
      title: "Weather Application",
      description: "A web app that uses third-party APIs to display weather.",
      imageSrc: "./img/tech-blog.png",
      link: "https://github.com/AnthonyBonanno/Weather-App",
    },
    {
      id: 3,
      title: "E-Commerce Back End",
      description: "Back end for an e-commerce web app that uses Sequelize.",
      imageSrc: "./img/weather-app.png",
      link: "https://github.com/AnthonyBonanno/E-Commerce-Back-End",
    },
    {
      id: 4,
      title: "Employee Tracker CLI",
      description: "A CLI application for managing your employees.",
      imageSrc: "./img/employee-db.png",
      link: "https://github.com/eddiespag-hetti/EmployeeDB_CLI",
    },
    {
      id: 5,
      title: "Readme Generator",
      description: "Generates readme file based off of user input.",
      imageSrc: "./img/employee-db.png",
      link: "https://github.com/AnthonyBonanno/Readme-Generator",
    },
  ];

  return (
    <Container>
      <h1>Portfolio</h1>
      <div>
        <p>Here is what I have been working on:</p>
        <Row>
          {projects.map((project) => (
            <Col key={project.id}>
              <ProjectCard
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
                link={project.link}
              />
            </Col>
          )
        )
    }
        </Row>
      </div>
    </Container>
  );
};

export default Portfolio;
