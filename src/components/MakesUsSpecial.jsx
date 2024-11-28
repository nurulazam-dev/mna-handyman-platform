import { Row, Col, Card } from "react-bootstrap";
import { FaUsers, FaAward, FaTools } from "react-icons/fa";

const MakesUsSpecial = () => {
  const highlightCardStyle = {
    border: "none",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    padding: "20px",
    textAlign: "justify",
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
            <FaUsers style={highlightIconStyle} />
            <h5 className="text-center">Skilled Team</h5>
            <p>
              Our team consists of certified professionals with years of
              experience in the field. Our team was built with expert members.
            </p>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={highlightCardStyle}>
            <FaAward style={highlightIconStyle} />
            <h5 className="text-center">Award-Winning Service</h5>
            <p>
              Recognized for excellence, we consistently deliver award-winning
              quality and customer satisfaction.
            </p>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={highlightCardStyle}>
            <FaTools style={highlightIconStyle} />
            <h5 className="text-center">Comprehensive Solutions</h5>
            <p>
              From small repairs to large projects, we offer a wide range of
              handyman services tailored to your needs.
            </p>
          </Card>
        </Col>
      </Row>
    </section>
  );
};

export default MakesUsSpecial;
