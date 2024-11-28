import { Row, Col, Card, Button } from "react-bootstrap";
import { FaUsers, FaAward, FaTools } from "react-icons/fa";

const AboutUs = () => {
  const highlightCardStyle = {
    border: "none",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    padding: "20px",
    textAlign: "center",
    transition: "transform 0.3s ease-in-out",
  };

  const highlightIconStyle = {
    color: "#007bff",
    fontSize: "3rem",
    marginBottom: "15px",
  };

  const textStyle = {
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "#333",
    marginBottom: "20px",
  };

  const teamImageStyle = {
    borderRadius: "10px",
    width: "100%",
    height: "auto",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  return (
    <section className="container sectionClass">
      <h2 className="headingClass">About Us</h2>

      {/* Main Content */}
      <Row className="align-items-center mb-5">
        {/* Text Section */}
        <Col md={6} className="mb-4">
          <p style={textStyle}>
            HandyMan Services has been providing top-notch repair and
            maintenance solutions since 2010. Our mission is to simplify home
            repairs and ensure our clients receive the highest quality of
            service, on time and on budget.
          </p>
          <p style={textStyle}>
            With a dedicated team of skilled professionals, we’ve completed over
            15,000 successful projects, making us a trusted partner for homes
            and businesses alike. From plumbing to carpentry, we handle it all
            with care and precision.
          </p>
          <Button className="customBtn" href="/contact">
            Get in Touch
          </Button>
        </Col>

        {/* Image Section */}
        <Col md={6} className="mb-4">
          <img
            src="https://via.placeholder.com/600x400"
            alt="HandyMan Team"
            style={teamImageStyle}
          />
        </Col>
      </Row>

      {/* Highlights Section */}
      <div>
        <h3
          style={{
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: "30px",
          }}
        >
          What Makes Us Special
        </h3>
        <Row>
          <Col md={4}>
            <Card style={highlightCardStyle}>
              <FaUsers style={highlightIconStyle} />
              <h5>Skilled Team</h5>
              <p>
                Our team consists of certified professionals with years of
                experience in the field.
              </p>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={highlightCardStyle}>
              <FaAward style={highlightIconStyle} />
              <h5>Award-Winning Service</h5>
              <p>
                Recognized for excellence, we consistently deliver award-winning
                quality and customer satisfaction.
              </p>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={highlightCardStyle}>
              <FaTools style={highlightIconStyle} />
              <h5>Comprehensive Solutions</h5>
              <p>
                From small repairs to large projects, we offer a wide range of
                handyman services tailored to your needs.
              </p>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default AboutUs;
