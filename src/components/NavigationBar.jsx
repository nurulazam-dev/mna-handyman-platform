import { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.style.backgroundColor = darkMode ? "#f8f9fa" : "#212529";
    document.body.style.color = darkMode ? "#212529" : "#f8f9fa";
  };

  const logoStyle = {
    fontSize: "1.8rem",
    fontWeight: "bold",
    color: darkMode ? "#fff" : "#007bff",
    textDecoration: "none",
  };

  const navLinkStyle = {
    fontSize: "1.1rem",
    margin: "0 15px",
    color: darkMode ? "#ccc" : "#333",
    textDecoration: "none",
  };

  const buttonStyle = {
    marginLeft: "10px",
  };

  return (
    <Navbar
      expand="lg"
      style={{
        backgroundColor: darkMode ? "#343a40" : "#fff",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
      fixed="top"
    >
      <Container>
        {/* Logo Section */}
        <Navbar.Brand href="/" style={logoStyle}>
          HandyMan
        </Navbar.Brand>

        {/* Toggle Button for Mobile */}
        <Navbar.Toggle aria-controls="navbar-content" />

        {/* Navigation Links and Buttons */}
        <Navbar.Collapse id="navbar-content">
          <Nav className="mx-auto">
            {/* Center Navigation Links */}
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

          {/* Theme Toggle and Login/Sign Up Buttons */}
          <div className="d-flex align-items-center">
            {/* Dark/Light Mode Toggle */}
            <Button
              variant={darkMode ? "light" : "dark"}
              className="me-2"
              onClick={toggleDarkMode}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </Button>

            {/* Login and Sign Up Buttons */}
            <Link to="/login">
              <Button
                variant={darkMode ? "outline-light" : "outline-primary"}
                style={buttonStyle}
              >
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button
                variant={darkMode ? "light" : "primary"}
                style={buttonStyle}
              >
                Sign Up
              </Button>
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
