import { Row, Col, Form, Button, Card } from "react-bootstrap";
import { BsFillSendFill } from "react-icons/bs";
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
    padding: "10px 30px",
    backgroundColor: "#fff",
  };

  return (
    <section className="container sectionClass mt-5 pt-2">
      <h1 className="headingClass">Contact Us</h1>
      <Row>
        <Col md={4} className="mb-4">
          <Card style={contactCardStyle}>
            <div>
              <FaPhoneAlt style={iconStyle} />
              <p>+88 01712 345678</p>
            </div>
            <div className="mt-4">
              <FaEnvelope style={iconStyle} />
              <p>info@mnahandyman.com</p>
            </div>
            <div className="mt-4">
              <FaMapMarkerAlt style={iconStyle} />
              <p>Raozan, Chittagong, Bangladesh</p>
            </div>
            <div className="mt-4">
              <FaClock style={iconStyle} />
              <p>Sun - Thu : 10:00 AM - 6:00 PM</p>
            </div>
          </Card>
        </Col>

        {/* Contact Form */}
        <Col md={8}>
          <Form style={formStyle}>
            <h3 className="text-center">Send Us a Message</h3>

            <div className="d-flex justify-content-between my-3">
              <Col md={6} className="me-1">
                <Form.Group controlId="formFullName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your full name"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </Form.Group>
              </Col>
            </div>
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

            <Button className="secondCustomBtn" type="submit">
              Send Message <BsFillSendFill className="ms-1" />
            </Button>
          </Form>
        </Col>
      </Row>
    </section>
  );
};

export default Contact;
