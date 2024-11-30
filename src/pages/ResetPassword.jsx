import { Form, Button, Col } from "react-bootstrap";

const ResetPassword = () => {
  const pageStyle = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const cardStyle = {
    width: "100%",
    maxWidth: "450px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "20px 30px",
    textAlign: "center",
  };

  const inputStyle = {
    fontSize: "1rem",
    padding: "10px",
    marginBottom: "20px",
  };

  return (
    <section style={pageStyle}>
      <div style={cardStyle}>
        <h1 className="headingClass">Reset Password</h1>

        <Form>
          {/* Email Input */}
          <Form.Group className="text-start" controlId="formEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email address"
              style={inputStyle}
              required
            />
          </Form.Group>

          {/* Reset Password Button */}
          <Button
            type="submit"
            className="secondCustomBtn"
            style={{ width: "100%", padding: "10px 0" }}
          >
            Send Reset Link
          </Button>
        </Form>

        <Form>
          <div className="d-flex justify-content-between mt-4">
            <Col md={6} className="me-1">
              <Form.Group className="text-start" controlId="formNewPassword">
                <Form.Label>New Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter new password"
                  style={inputStyle}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group
                controlId="formConfirmPassword"
                className="text-start"
              >
                <Form.Label>Confirm New Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm new password"
                  style={inputStyle}
                  required
                />
              </Form.Group>
            </Col>
          </div>

          <Button
            type="submit"
            className="secondCustomBtn"
            style={{ width: "100%", padding: "10px 0" }}
          >
            Set New Password
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default ResetPassword;
