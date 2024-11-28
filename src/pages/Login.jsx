import { Form, Button } from "react-bootstrap";

const Login = () => {
  const pageStyle = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    padding: "20px",
  };

  const cardStyle = {
    width: "100%",
    maxWidth: "900px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "row",
  };

  const imageSectionStyle = {
    width: "50%",
    backgroundImage: "url(https://via.placeholder.com/450x600)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "none",
  };

  const formSectionStyle = {
    padding: "40px",
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
    marginBottom: "20px",
  };

  const inputStyle = {
    fontSize: "1rem",
    padding: "10px",
    marginBottom: "20px",
  };

  const buttonStyle = {
    backgroundColor: "#007bff",
    border: "none",
    padding: "10px",
    fontSize: "1rem",
    marginTop: "10px",
    width: "100%",
    borderRadius: "5px",
  };

  const linkStyle = {
    marginTop: "15px",
    fontSize: "0.9rem",
    color: "#6c757d",
    textDecoration: "none",
  };

  const linkHoverStyle = {
    textDecoration: "underline",
  };

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        {/* Image Section for Large Devices */}
        <div style={imageSectionStyle} className="d-none d-lg-block"></div>

        {/* Form Section */}
        <div style={formSectionStyle}>
          <h2 style={titleStyle}>Welcome Back!</h2>
          <p>Please login to your account.</p>

          <Form>
            {/* Email Input */}
            <Form.Group controlId="formEmail">
              <Form.Control
                type="email"
                placeholder="Enter your email"
                style={inputStyle}
                required
              />
            </Form.Group>

            {/* Password Input */}
            <Form.Group controlId="formPassword">
              <Form.Control
                type="password"
                placeholder="Enter your password"
                style={inputStyle}
                required
              />
            </Form.Group>

            {/* Login Button */}
            <Button type="submit" style={buttonStyle}>
              Login
            </Button>
          </Form>

          {/* Links */}
          <a
            href="/forgot-password"
            style={linkStyle}
            onMouseOver={(e) =>
              (e.target.style = { ...linkStyle, ...linkHoverStyle })
            }
            onMouseOut={(e) => (e.target.style = { ...linkStyle })}
          >
            Forgot your password?
          </a>
          <a
            href="/register"
            style={linkStyle}
            onMouseOver={(e) =>
              (e.target.style = { ...linkStyle, ...linkHoverStyle })
            }
            onMouseOut={(e) => (e.target.style = { ...linkStyle })}
          >
            Don’t have an account? Register here.
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
