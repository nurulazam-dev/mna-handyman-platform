import { Row, Col, Card } from "react-bootstrap";

const Testimonials = () => {
  return (
    <section className="bg-light p-5">
      <h2 className="text-center">What Our Clients Say</h2>
      <Row className="mt-4">
        <Col md={4}>
          <Card className="p-3">
            <Card.Text>
              Excellent service! The technician was professional and efficient.
            </Card.Text>
            <Card.Footer>- Sarah L.</Card.Footer>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-3">
            <Card.Text>
              Highly recommend! They fixed my plumbing issue quickly.
            </Card.Text>
            <Card.Footer>- John D.</Card.Footer>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-3">
            <Card.Text>
              Affordable and reliable services. Will use again!
            </Card.Text>
            <Card.Footer>- Emily R.</Card.Footer>
          </Card>
        </Col>
      </Row>
    </section>
  );
};

export default Testimonials;
