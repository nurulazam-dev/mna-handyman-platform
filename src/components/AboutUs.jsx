import { Row, Col, Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import logo from "../assets/images/brandLogo.png";

const AboutUs = () => {
  const textStyle = {
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "#333",
    marginBottom: "20px",
  };

  return (
    <section className="container sectionClass">
      <h1 className="headingClass">About Us</h1>

      <Row className="align-items-center">
        <Col md={6}>
          <img
            src={logo}
            alt="MNA HandyMan"
            style={{
              borderRadius: "10px",
              width: "100%",
              height: "auto",
              // boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Col>
        <Col md={6}>
          <p style={textStyle}>
            <strong>MNA HandyMan</strong> Services has been providing top-notch
            repair and maintenance solutions since 2010. Our mission is to
            simplify home repairs and ensure our clients receive the highest
            quality of service, on time and on budget.
          </p>
          <p style={textStyle}>
            With a dedicated team of skilled professionals, we’ve completed over
            15,000 successful projects, making us a trusted partner for homes
            and businesses alike. From plumbing to carpentry, we handle it all
            with care and precision.
          </p>
          <Button className="secondCustomBtn" href="/contact">
            Get in Touch <FaArrowRight className="ms-1" />
          </Button>
        </Col>
      </Row>
    </section>
  );
};

export default AboutUs;
