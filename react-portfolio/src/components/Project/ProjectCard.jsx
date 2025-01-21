import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  const { title, description, repo, imageSrc } = project;

  return (
    <div className="project-card">
      <div>
        {imageSrc && (
          <img src={imageSrc} alt={title} className="project-image" />
        )}
        <div className="project-text">
          <h2>{title}</h2>
          <p>{description}</p>
          <a href={repo}>
            <i className="fab fa-github" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
