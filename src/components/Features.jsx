import { Row, Col } from "react-bootstrap";
import { FaTools, FaThumbsUp, FaShieldAlt, FaUsers } from "react-icons/fa";

const Features = () => {
  return (
    <section className="text-center my-5">
      <h2>Why Choose Us?</h2>
      <Row className="mt-4">
        <Col md={3}>
          <FaTools size={50} className="mb-3 text-primary" />
          <h5>Expert Technicians</h5>
          <p>Our professionals are skilled and experienced.</p>
        </Col>
        <Col md={3}>
          <FaThumbsUp size={50} className="mb-3 text-primary" />
          <h5>Quality Service</h5>
          <p>We guarantee top-notch work for every job.</p>
        </Col>
        <Col md={3}>
          <FaShieldAlt size={50} className="mb-3 text-primary" />
          <h5>Safe & Secure</h5>
          <p>Your safety is our priority, every step of the way.</p>
        </Col>
        <Col md={3}>
          <FaUsers size={50} className="mb-3 text-primary" />
          <h5>Customer Support</h5>
          <p>We’re here for you 24/7 to answer your questions.</p>
        </Col>
      </Row>
    </section>
  );
};

export default Features;
