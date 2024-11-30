import { Accordion, Col, Row } from "react-bootstrap";

const FAskedQuestions = () => {
  const teamImageStyle = {
    borderRadius: "5px",
    width: "100%",
    height: "auto",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  return (
    <section className="container sectionClass">
      <h1 className="headingClass">Frequently Asked Questions</h1>

      <Row className="d-flex justify-content-center align-items-center">
        <Col style={{ width: "40%" }}>
          <img
            src="https://via.placeholder.com/600x400"
            alt="HandyMan Team"
            style={teamImageStyle}
          />
        </Col>

        <Col
          style={{
            width: "55%",
            padding: "0",
          }}
        >
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>What areas do you serve?</Accordion.Header>
              <Accordion.Body>
                We provide services in most major cities and surrounding areas.
                Contact us to confirm availability in your location.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>How can I book a service?</Accordion.Header>
              <Accordion.Body>
                You can book a service online through our platform or call us at
                our toll-free number.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Are your technicians certified?
              </Accordion.Header>
              <Accordion.Body>
                Yes, all our technicians are certified and have years of
                experience in their respective fields.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </section>
  );
};

export default FAskedQuestions;
