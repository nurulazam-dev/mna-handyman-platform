import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
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

      {/* Map Section */}
      <Container style={{ padding: "40px 20px" }}>
        <h3 className="text-center mb-4">Find Us Here</h3>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.619263424039!2d144.95373531563385!3d-37.81627944231996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xb09b7bca54d3428e!2sFederation+Square!5e0!3m2!1sen!2sau!4v1562801176787!5m2!1sen!2sau"
          style={{
            width: "100%",
            height: "300px",
            border: "0",
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </Container>
    </div>
  );
};

export default Contact;
