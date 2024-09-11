import Form from "react-bootstrap/Form";
import { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import Container from "react-bootstrap/esm/Container";

function Contact() {
  // const [contactForm, setContactForm] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  // const [error, setError] = useState("");
  // const { name, email, message } = contactForm;

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!error) {
  //     console.log("form submitted", contactForm);
  //   }
  // };

  // const handleChange = (e) => {
  //   if (e.target.name === "email") {
  //     const validEmail = validateEmail(e.target.name);
  //     if (!validEmail) {
  //       setErrorMessage("Invalid Email.");
  //     } else {
  //       setErrorMessage("");
  //     }
  //   } else {
  //     if (!e.target.value.length) {
  //       setErrorMessage(`${e.target.name} is required.`);
  //     } else {
  //       setErrorMessage("");
  //     }
  //   }
  //   if (!setErrorMessage) {
  //     setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  //     console.log("Handle Form", contactForm);
  //   }
  // }

  return (
    // <Container>

    // </Container>
    <Form>
      <h1>Contact Me!</h1>
      <Form.Group className="mb-3">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="name" placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email address:</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Message:</Form.Label>
        <Form.Control type="name" placeholder="Enter message" />
      </Form.Group>
      <button id="submit">Submit</button>
    </Form>
  );
}

export default Contact();
