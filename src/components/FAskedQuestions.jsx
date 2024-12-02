import { Accordion, Col, Row } from "react-bootstrap";
import { FaQuora } from "react-icons/fa";

const FAskedQuestions = () => {
  const faqData = [
    {
      id: 1,
      title: "What services do you offer?",
      description:
        "We provide a wide range of services including plumbing, electrical repairs, carpentry, painting, cleaning, landscaping, HVAC maintenance, pest control, and more. Our goal is to handle all your home or office repair and improvement needs efficiently and professionally.",
    },
    {
      id: 2,
      title: "How do I book a service?",
      description:
        "Booking a service is simple. Visit our website, navigate to the “Book a Service” section, and select the desired service. Fill in your details, choose a date and time, and confirm the booking. You’ll receive a confirmation email with all the necessary details.",
    },
    {
      id: 3,
      title: "What are your operating hours?",
      description:
        "We operate from Monday to Friday, 9:00 AM to 6:00 PM. For urgent requests or emergency services, we have a 24/7 support line available. Contact us directly for any out-of-hours inquiries, and we’ll do our best to assist you promptly.",
    },
    {
      id: 4,
      title: "Are your technicians certified?",
      description:
        "Yes, all our technicians are certified and highly experienced in their respective fields. We conduct thorough background checks and training to ensure they meet our high standards of service and professionalism, giving you complete peace of mind.",
    },
  ];

  return (
    <section className="container sectionClass">
      <h1 className="headingClass">Frequently Asked Questions</h1>

      <Row className="d-flex justify-content-center">
        <Col className="text-center" style={{ width: "40%" }}>
          {/* <img
            src="https://via.placeholder.com/600x400"
            alt="HandyMan Team"
            style={teamImageStyle}
          /> */}
          <FaQuora
            style={{
              borderRadius: "5px",
              // width: "100%",
              // height: "auto",
              // boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              fontSize: "350px",
            }}
          />
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
