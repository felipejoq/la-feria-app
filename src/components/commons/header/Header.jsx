import {Container, Navbar} from "react-bootstrap";
import {NavBarLinks} from "./navbar/NavBarLinks.jsx";
import {Logo} from "./logo/Logo.jsx";

export const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary nav-header">
      <Container>
        <Logo />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <NavBarLinks />
      </Container>
    </Navbar>
  );
};