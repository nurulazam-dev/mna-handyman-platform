import { Link } from "react-router-dom";
import { Card, Button, Row, Col } from "react-bootstrap";

const services = [
  { id: 1, title: "Plumbing", description: "Fix your pipes and leaks." },
  { id: 2, title: "Electrical", description: "Resolve electrical issues." },
  { id: 3, title: "Carpentry", description: "Custom woodwork and repairs." },
];

const Services = () => {
  return (
    <section>
      <h2 className="text-center">Our Services</h2>
      <Row className="mt-4">
        {services.map((service) => (
          <Col key={service.id} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/300x200"
              />
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
                <Link to={`/services/${service.id}`}>
                  <Button variant="primary">Learn More</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Services;
