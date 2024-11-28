import { Button } from "react-bootstrap";

const NotFound = () => {
  const pageStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    height: "100vh",
    backgroundColor: "#f8f9fa",
    padding: "20px",
  };

  const titleStyle = {
    fontSize: "4rem",
    fontWeight: "bold",
    color: "red",
    marginBottom: "20px",
  };

  const subtitleStyle = {
    fontSize: "1rem",
    color: "#6c757d",
    marginBottom: "15px",
  };

  const buttonStyle = {
    backgroundColor: "#007bff",
    border: "none",
    fontSize: "1rem",
    padding: "10px 20px",
    borderRadius: "5px",
  };

  const illustrationStyle = {
    maxWidth: "500px",
    width: "100%",
    marginBottom: "20px",
  };

  return (
    <section style={pageStyle}>
      {/* SVG Illustration */}
      <img
        src="https://undraw.co/api/illustrations/404_error.svg"
        alt="404 Not Found"
        style={illustrationStyle}
      />

      {/* Main Content */}
      <h1 style={titleStyle}>404 - Page Not Found</h1>
      <p style={subtitleStyle}>
        Sorry, the page you are looking for does not exist or has been moved.
      </p>

      {/* Back to Homepage Button */}
      <Button style={buttonStyle} href="/">
        Go Back to Homepage
      </Button>
    </section>
  );
};

export default NotFound;
