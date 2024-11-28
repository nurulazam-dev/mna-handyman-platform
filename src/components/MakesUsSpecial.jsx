import { Row, Col, Card } from "react-bootstrap";
import { FaUsers, FaAward, FaTools } from "react-icons/fa";

const MakesUsSpecial = () => {
  const highlightCardStyle = {
    border: "none",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
  };

  const highlightIconStyle = {
    color: "#007bff",
    fontSize: "4rem",
    marginBottom: "15px",
  };

  return (
    <section className="container sectionClass">
      <h1 className="headingClass">What Makes Us Special</h1>
      <Row>
        <Col md={4}>
          <Card style={highlightCardStyle}>
            <Card.Body className="text-center">
              <FaUsers style={highlightIconStyle} />
              <Card.Title>Skilled Team</Card.Title>
              <Card.Text>
                Our team consists of certified professionals with years of
                experience in the field. Our team was built with expert members.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={highlightCardStyle}>
            <Card.Body className="text-center">
              <FaAward style={highlightIconStyle} />
              <Card.Title>Award-Winning Service</Card.Title>
              <Card.Text>
                Recognized for excellence, we consistently deliver award-winning
                quality and customer satisfaction.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={highlightCardStyle}>
            <Card.Body className="text-center">
              <FaTools style={highlightIconStyle} />
              <Card.Title>Comprehensive Solutions</Card.Title>
              <Card.Text>
                From small repairs to large projects, we offer a wide range of
                handyman services tailored to your needs.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </section>
  );
};

export default MakesUsSpecial;
