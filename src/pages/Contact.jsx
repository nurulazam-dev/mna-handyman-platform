import { Row, Col, Form, Button, Card } from "react-bootstrap";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const Contact = () => {
  const contactCardStyle = {
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    backgroundColor: "#f8f9fa",
  };

  const iconStyle = {
    fontSize: "2rem",
    color: "#007bff",
    marginBottom: "10px",
  };

  const formStyle = {
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    padding: "30px",
    backgroundColor: "#fff",
  };

  return (
    <div>
      {/* Contact Info and Form Section */}
      <section className="container sectionClass">
        <Row>
          {/* Contact Information */}
          <Col md={4} className="mb-4">
            <Card style={contactCardStyle}>
              <h3>Contact Information</h3>
              <div className="mt-4">
                <FaPhoneAlt style={iconStyle} />
                <p>+1 234 567 890</p>
              </div>
              <div className="mt-4">
                <FaEnvelope style={iconStyle} />
                <p>contact@yourwebsite.com</p>
              </div>
              <div className="mt-4">
                <FaMapMarkerAlt style={iconStyle} />
                <p>123 Main Street, Anytown, USA</p>
              </div>
              <div className="mt-4">
                <FaClock style={iconStyle} />
                <p>Mon - Fri: 9:00 AM - 5:00 PM</p>
              </div>
            </Card>
          </Col>

          {/* Contact Form */}
          <Col md={8}>
            <Form style={formStyle}>
              <h3>Send Us a Message</h3>
              <Form.Group controlId="formName" className="mb-3 mt-4">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your full name"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formSubject" className="mb-3">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="Enter the subject" />
              </Form.Group>

              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Enter your message"
                  required
                />
              </Form.Group>

              <Button
                type="submit"
                style={{ backgroundColor: "#007bff", border: "none" }}
              >
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default Contact;
