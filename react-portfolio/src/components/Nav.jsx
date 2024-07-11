import Nav from "react-bootstrap/Nav";

export default function MyNav() {
  // The Navbar UI component will render each of the Link elements in the Links prop
  return (
    <Nav justify variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/">About Me</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Contact">Contact</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Portfolio">Portfolio</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Resume">Resume</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
