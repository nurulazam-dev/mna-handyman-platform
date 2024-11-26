import { Row, Col, Card } from "react-bootstrap";
import { FaMedal, FaUsers, FaHandshake } from "react-icons/fa";

const AboutUs = () => {
  const sectionStyle = {
    padding: "50px 0",
    backgroundColor: "#f8f9fa",
  };

  const titleStyle = {
    fontSize: "2.5rem",
    marginBottom: "20px",
    textAlign: "center",
    fontWeight: "bold",
  };

  const subtitleStyle = {
    fontSize: "1.2rem",
    color: "#6c757d",
    marginBottom: "40px",
    textAlign: "center",
  };

  const textStyle = {
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "#333",
    marginBottom: "20px",
  };

  const iconStyle = {
    color: "#007bff",
    marginBottom: "15px",
  };

  const cardStyle = {
    border: "none",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    padding: "20px",
    textAlign: "center",
  };

  const imageStyle = {
    borderRadius: "10px",
    width: "100%",
    height: "auto",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
  };

  return (
    <section style={sectionStyle}>
      <div>
        <h2 style={titleStyle}>About Us</h2>
        <p style={subtitleStyle}>
          Discover our story, our mission, and what makes HandyMan Services your
          trusted partner for all repair and maintenance needs.
        </p>
      </div>

      <Row className="align-items-center mb-5">
        {/* About the Company */}
        <Col md={6} className="mb-4">
          <p style={textStyle}>
            HandyMan Services has been delivering reliable home and office
            repair solutions since 2010. Our mission is to bring peace of mind
            to our customers by offering skilled professionals who get the job
            done right the first time.
          </p>
          <p style={textStyle}>
            With a team of over 50 experts, we handle everything from minor
            repairs to major installations, serving thousands of happy customers
            every year. Our vision is to be the go-to platform for anyone
            seeking trustworthy handyman services.
          </p>
        </Col>

        {/* Team Image */}
        <Col md={6} className="mb-4">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Our Team"
            style={imageStyle}
          />
          <p
            className="text-center"
            style={{ fontSize: "1rem", color: "#6c757d" }}
          >
            Meet our dedicated team of professionals!
          </p>
        </Col>
      </Row>

      {/* Core Values Section */}
      <div>
        <h3
          style={{
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: "30px",
          }}
        >
          Our Core Values
        </h3>
        <Row>
          <Col md={4}>
            <Card style={cardStyle}>
              <FaUsers size={50} style={iconStyle} />
              <h5>Customer Focus</h5>
              <p>
                We prioritize customer satisfaction above all else, ensuring a
                seamless experience from start to finish.
              </p>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={cardStyle}>
              <FaHandshake size={50} style={iconStyle} />
              <h5>Integrity</h5>
              <p>
                Honesty and transparency are the cornerstones of our work. You
                can trust us to deliver what we promise.
              </p>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={cardStyle}>
              <FaMedal size={50} style={iconStyle} />
              <h5>Excellence</h5>
              <p>
                We strive for excellence in every service we provide, from small
                fixes to complex projects.
              </p>
            </Card>
          </Col>
        </Row>
      </div>

      {/* Achievements Section */}
      <div style={{ marginTop: "50px" }}>
        <h3
          style={{
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: "30px",
          }}
        >
          Our Achievements
        </h3>
        <Row className="text-center">
          <Col md={4}>
            <h1 style={{ color: "#007bff", fontWeight: "bold" }}>10+</h1>
            <p>Years in Business</p>
          </Col>
          <Col md={4}>
            <h1 style={{ color: "#007bff", fontWeight: "bold" }}>15,000+</h1>
            <p>Happy Customers</p>
          </Col>
          <Col md={4}>
            <h1 style={{ color: "#007bff", fontWeight: "bold" }}>50+</h1>
            <p>Skilled Professionals</p>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default AboutUs;
