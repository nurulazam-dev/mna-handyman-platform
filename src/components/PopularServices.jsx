import { Link } from "react-router-dom";
import { Button, Row, Col, Card } from "react-bootstrap";

const PopularServices = () => {
  return (
    <section className="my-5">
      <h2 className="text-center">Our Popular Services</h2>
      <Row className="mt-4">
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
            <Card.Body>
              <Card.Title>Plumbing</Card.Title>
              <Card.Text>Fix your pipes and leaks with ease.</Card.Text>
              <Link to="/services/1">
                <Button variant="primary">Learn More</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
            <Card.Body>
              <Card.Title>Electrical</Card.Title>
              <Card.Text>Resolve electrical issues in no time.</Card.Text>
              <Link to="/services/2">
                <Button variant="primary">Learn More</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
            <Card.Body>
              <Card.Title>Carpentry</Card.Title>
              <Card.Text>Custom woodwork and repairs.</Card.Text>
              <Link to="/services/3">
                <Button variant="primary">Learn More</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </section>
  );
};

export default PopularServices;
