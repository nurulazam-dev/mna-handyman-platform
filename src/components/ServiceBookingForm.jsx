import { Form, Button, Row, Col } from "react-bootstrap";
import { FaUser, FaWrench, FaCalendarAlt } from "react-icons/fa";

const ServiceBookingForm = () => {
  const formContainerStyle = {
    maxWidth: "900px",
    margin: "0 auto",
    backgroundColor: "#fff",
    borderRadius: "5px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "30px",
  };

  const iconStyle = {
    color: "#007bff",
    marginRight: "10px",
  };

  return (
    <section className="container sectionClass">
      <h1 className="headingClass">Service Booking</h1>
      <Form style={formContainerStyle}>
        <h5 className="mb-3">
          <FaUser style={iconStyle} /> Information
        </h5>
        <Row>
          <Col md={6} className="mb-3">
            <Form.Group controlId="formFullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your full name"
                required
              />
            </Form.Group>
          </Col>
          <Col md={6} className="mb-3">
            <Form.Group controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                required
              />
            </Form.Group>
          </Col>
          <Col md={6} className="mb-3">
            <Form.Group controlId="formPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                required
              />
            </Form.Group>
          </Col>
          <Col md={6} className="mb-3">
            <Form.Group controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter service location address"
              />
            </Form.Group>
          </Col>
        </Row>

        <h5 className="mt-4 mb-3">
          <FaWrench style={iconStyle} /> Service Details
        </h5>
        <Row>
          <Col md={6} className="mb-3">
            <Form.Group controlId="formServiceType">
              <Form.Label>Service Type</Form.Label>
              <Form.Select required>
                <option value="">Select a service</option>
                <option value="plumbing">Plumbing</option>
                <option value="electrical">Electrical</option>
                <option value="carpentry">Carpentry</option>
                <option value="cleaning">Cleaning</option>
                <option value="other">Other</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={6} className="mb-3">
            <Form.Group controlId="formUrgency">
              <Form.Label>Urgency Level</Form.Label>
              <Form.Select required>
                <option value="">Select urgency</option>
                <option value="emergency">Emergency</option>
                <option value="regular">Regular</option>
                <option value="flexible">Flexible</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="formMessage" className="mb-3">
          <Form.Label>Additional Details</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Provide any specific details or instructions for the service"
          />
        </Form.Group>

        {/* Preferred Schedule */}
        <h5 className="mt-4 mb-3">
          <FaCalendarAlt style={iconStyle} /> Preferred Schedule
        </h5>
        <Row>
          <Col md={6} className="mb-3">
            <Form.Group controlId="formDate">
              <Form.Label>Preferred Date</Form.Label>
              <Form.Control type="date" required />
            </Form.Group>
          </Col>
          <Col md={6} className="mb-3">
            <Form.Group controlId="formTime">
              <Form.Label>Preferred Time</Form.Label>
              <Form.Control type="time" required />
            </Form.Group>
          </Col>
        </Row>

        <div className="text-center mt-4">
          <Button
            type="button"
            className="secondCustomBtn"
            style={{ width: "100%", padding: "12px" }}
          >
            Submit Request
          </Button>
        </div>
      </Form>
    </section>
  );
};

export default ServiceBookingForm;
