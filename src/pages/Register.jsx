import { Form, Button } from "react-bootstrap";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
import bgImg from "../assets/images/login.png";

const Register = () => {
  const pageStyle = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const cardStyle = {
    width: "100%",
    maxWidth: "750px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "row",
  };

  const imageSectionStyle = {
    width: "50%",
    backgroundImage: `url(${bgImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "none",
  };

  const formSectionStyle = {
    padding: "30px 20px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  };

  const titleStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#007bff",
    marginBottom: "15px",
  };

  const inputStyle = {
    fontSize: "1rem",
    padding: "10px",
    marginBottom: "15px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    fontSize: "1.1rem",
  };

  const linkStyle = {
    marginTop: "15px",
    fontSize: "0.9rem",
    color: "#6c757d",
  };

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <div style={imageSectionStyle} className="d-none d-lg-block"></div>

        <div style={formSectionStyle}>
          <h2 style={titleStyle}>Create Account</h2>

          <Form>
            <Form.Group controlId="formFullName">
              <Form.Control
                type="text"
                placeholder="Full Name"
                style={inputStyle}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Control
                type="email"
                placeholder="Email Address"
                style={inputStyle}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                style={inputStyle}
                required
              />
            </Form.Group>

            <Form.Group controlId="formConfirmPassword">
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                style={inputStyle}
                required
              />
            </Form.Group>

            <Button
              type="submit"
              style={buttonStyle}
              className="secondCustomBtn"
            >
              Register
              <FiLogIn className="ms-2" />
            </Button>
          </Form>

          <div style={linkStyle}>
            Already have an account?{" "}
            <Link to="/login" className="text-decoration-none">
              <small className="text-primary">Login Here</small>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
