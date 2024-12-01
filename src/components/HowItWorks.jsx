import { Row, Col, Card } from "react-bootstrap";
import { FaClipboardList, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";

const HowItWorks = () => {
  const cardStyle = {
    border: "none",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease-in-out",
  };

  const iconStyle = {
    color: "#007bff",
    marginBottom: "15px",
  };

  return (
    <section className="container sectionClass">
      <h1 className="headingClass">How It Works</h1>

      <Row>
        {/* Step 1 */}
        <Col md={4}>
          <Card className="h-100" style={cardStyle}>
            <Card.Body className="text-center">
              <FaClipboardList size={50} style={iconStyle} />
              <Card.Title>Select a Service</Card.Title>
              <Card.Text>
                Choose from our wide range of services tailored to meet your
                needs.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Step 2 */}
        <Col md={4}>
          <Card className="h-100" style={cardStyle}>
            <Card.Body className="text-center">
              <FaCalendarAlt size={50} style={iconStyle} />
              <Card.Title>Choose a Schedule</Card.Title>
              <Card.Text>
                Pick a date and time that fits your schedule. We’re flexible!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Step 3 */}
        <Col md={4}>
          <Card className="h-100" style={cardStyle}>
            <Card.Body className="text-center">
              <FaCheckCircle size={50} style={iconStyle} />
              <Card.Title>Get the Job Done</Card.Title>
              <Card.Text>
                Our expert will arrive on time and complete the job to your
                satisfaction.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </section>
  );
};

export default HowItWorks;
