import { Form, Button } from "react-bootstrap";

const ResetPassword = () => {
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
    maxWidth: "450px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "30px",
    textAlign: "center",
  };

  const titleStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#007bff",
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

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <h2 style={titleStyle}>Reset Password</h2>
        <p>
          Enter your email address below, and we’ll send you a link to reset
          your password.
        </p>

        <Form>
          {/* Email Input */}
          <Form.Group controlId="formEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email address"
              style={inputStyle}
              required
            />
          </Form.Group>

          {/* Reset Password Button */}
          <Button type="submit" style={buttonStyle}>
            Send Reset Link
          </Button>
        </Form>

        <hr className="my-4" />

        <p>If you already have a reset token, set your new password below:</p>

        <Form>
          {/* New Password Input */}
          <Form.Group controlId="formNewPassword">
            <Form.Label>New Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your new password"
              style={inputStyle}
              required
            />
          </Form.Group>

          {/* Confirm New Password Input */}
          <Form.Group controlId="formConfirmPassword">
            <Form.Label>Confirm New Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm your new password"
              style={inputStyle}
              required
            />
          </Form.Group>

          {/* Set New Password Button */}
          <Button type="submit" style={buttonStyle}>
            Set New Password
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ResetPassword;
