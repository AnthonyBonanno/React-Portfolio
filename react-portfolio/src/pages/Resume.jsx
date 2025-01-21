import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <Container>
      <h1>Resume</h1>
      <p>
        If you'd like to view my resume,
        <Link to="https://docs.google.com/document/d/1Iy4Mgi5Ms6x_XmQSgi7fIQ_C5Xzk4HbrWpZS-9p-b6s/edit?usp=sharing"> click here!</Link>
      </p>

      <>
        <h2>Front-end Proficiencies:</h2>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Apollo</li>
          <li>React</li>
          <li>Bootstrap</li>
        <h2>Back-end Proficiencies:</h2>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
      </>
    </Container>
  );
}
