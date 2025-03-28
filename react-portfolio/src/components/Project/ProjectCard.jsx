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
          <h3>
            <a href={repo}>{title}</a>
            &nbsp;
            <a href={repo}>
              <i className="fab fa-github" />
            </a>
          </h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
