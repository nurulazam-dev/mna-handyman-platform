import { Accordion, Col, Row } from "react-bootstrap";
import { faqData } from "../assets/data/data";

const FAskedQuestions = () => {
  return (
    <section className="container sectionClass">
      <h1 className="headingClass">Frequently Asked Questions</h1>

      <Row className="d-flex justify-content-center">
        <Col className="text-center" style={{ width: "40%" }}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/NmJ70_O-ARY?si=kve8O6zTmQYbc-w2"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </Col>

        <Col
          style={{
            width: "55%",
            padding: "0",
          }}
        >
          <Accordion>
            {faqData.map((data) => (
              <Accordion.Item key={data?.id} eventKey={data?.id}>
                <Accordion.Header>{data?.title}</Accordion.Header>
                <Accordion.Body>{data?.description}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col>
      </Row>
    </section>
  );
};

export default FAskedQuestions;
