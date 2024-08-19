import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <Container>
      <h1>Resume</h1>
      <p>
        If you'd like to view my resume, click
        <Link to="https://docs.google.com/document/d/1Iy4Mgi5Ms6x_XmQSgi7fIQ_C5Xzk4HbrWpZS-9p-b6s/edit?usp=sharing"> here!</Link>
      </p>

      <>
        <h2>Front-end Proficiencies:</h2>
        <p>• React</p>
        <p>• Apollo GraphQL</p>
        <h2>Back-end Proficiencies:</h2>
        <p>• Mongoose</p>
        <p>Vestibulum at eros</p>
      </>
    </Container>
  );
}
