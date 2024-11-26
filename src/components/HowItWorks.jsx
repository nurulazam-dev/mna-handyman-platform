import { Row, Col, Card } from "react-bootstrap";
import { FaClipboardList, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";

const HowItWorks = () => {
  const sectionStyle = {
    padding: "40px 0",
  };

  const titleStyle = {
    fontSize: "2.5rem",
    marginBottom: "20px",
  };

  const subtitleStyle = {
    fontSize: "1.1rem",
    color: "#6c757d",
  };

  const cardStyle = {
    border: "none",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease-in-out",
  };

  const cardHoverStyle = {
    transform: "translateY(-5px)",
  };

  const iconStyle = {
    color: "#007bff",
    marginBottom: "15px",
  };

  return (
    <section style={sectionStyle}>
      <div className="text-center">
        <h2 style={titleStyle}>How It Works</h2>
        <p style={subtitleStyle}>
          Follow these simple steps to get your job done effortlessly.
        </p>
      </div>

      <Row className="mt-4">
        {/* Step 1 */}
        <Col md={4} className="mb-4">
          <Card
            className="h-100"
            style={cardStyle}
            onMouseOver={(e) =>
              (e.currentTarget.style = { ...cardStyle, ...cardHoverStyle })
            }
            onMouseOut={(e) => (e.currentTarget.style = { ...cardStyle })}
          >
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
        <Col md={4} className="mb-4">
          <Card
            className="h-100"
            style={cardStyle}
            onMouseOver={(e) =>
              (e.currentTarget.style = { ...cardStyle, ...cardHoverStyle })
            }
            onMouseOut={(e) => (e.currentTarget.style = { ...cardStyle })}
          >
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
        <Col md={4} className="mb-4">
          <Card
            className="h-100"
            style={cardStyle}
            onMouseOver={(e) =>
              (e.currentTarget.style = { ...cardStyle, ...cardHoverStyle })
            }
            onMouseOut={(e) => (e.currentTarget.style = { ...cardStyle })}
          >
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
