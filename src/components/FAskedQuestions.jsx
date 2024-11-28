import { Accordion } from "react-bootstrap";

const FAskedQuestions = () => {
  return (
    <section className="container sectionClass">
      <h1 className="headingClass">Frequently Asked Questions</h1>
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
            You can book a service online through our platform or call us at our
            toll-free number.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Are your technicians certified?</Accordion.Header>
          <Accordion.Body>
            Yes, all our technicians are certified and have years of experience
            in their respective fields.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  );
};

export default FAskedQuestions;
