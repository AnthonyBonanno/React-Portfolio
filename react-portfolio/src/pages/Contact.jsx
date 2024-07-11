import Form from "react-bootstrap/Form";

export default function Contact() {
  return (
    <Form>
      <h2>Contact Me!</h2>
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
