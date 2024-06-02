import ProjectCard from "../components/Project/ProjectCard";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Logo Generator",
      description: "An app that can create a small logo with text and colour.",
      imageSrc: "./img/secure-scribe.png",
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
      description: "A CLI application for managing your employees",
      imageSrc: "./img/employee-db.png",
      link: "https://github.com/eddiespag-hetti/EmployeeDB_CLI",
    },
    {
      id: 5,
      title: "Employee Tracker CLI",
      description: "A CLI application for managing your employees",
      imageSrc: "./img/employee-db.png",
      link: "https://github.com/AnthonyBonanno/Readme-Generator",
    },
  ];

  return (
    <section>
      <h1 className="portfolio-heading">Portfolio</h1>
      <div className="project-cards">
        <p className="port-para">Here is what I have been working on</p>
        <div className="row">
          {projects.map((project) => (
            <div className="col" key={project.id}>
              <ProjectCard
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
                link={project.link}
              />
            </div>
          )
        )
    }
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
