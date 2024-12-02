import { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import brandLogo from "../assets/images/brandLogo.png";

const NavigationBar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.style.backgroundColor = darkMode ? "#f8f9fa" : "#212529";
    document.body.style.color = darkMode ? "#212529" : "#f8f9fa";
  };

  const navLinkStyle = {
    fontSize: "1.1rem",
    margin: "0 15px",
    color: darkMode ? "#ccc" : "#333",
    textDecoration: "none",
  };

  return (
    <Navbar
      expand="lg"
      style={{
        backgroundColor: darkMode ? "#343a40" : "#fff",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        padding: "0",
      }}
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="/">
          <img src={brandLogo} alt="" style={{ width: "65px" }} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-content" />

        <Navbar.Collapse id="navbar-content">
          <Nav className="mx-auto">
            <Nav.Link href="/" style={navLinkStyle}>
              Home
            </Nav.Link>
            <Nav.Link href="/services" style={navLinkStyle}>
              Services
            </Nav.Link>
            <Nav.Link href="/about" style={navLinkStyle}>
              About
            </Nav.Link>
            <Nav.Link href="/blog" style={navLinkStyle}>
              Blog
            </Nav.Link>
            <Nav.Link href="/contact" style={navLinkStyle}>
              Contact
            </Nav.Link>
          </Nav>

          <div className="d-flex align-items-center">
            <Button
              variant={darkMode ? "light" : "dark"}
              onClick={toggleDarkMode}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </Button>

            <Link to="/login">
              <Button
                variant={darkMode ? "outline-light" : "outline-primary"}
                className="mx-3"
              >
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button variant={darkMode ? "light" : "primary"}>Sign Up</Button>
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
