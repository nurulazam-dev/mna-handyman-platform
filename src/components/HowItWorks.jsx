import { Row, Col, Card } from "react-bootstrap";
import { FaClipboardList, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";

const HowItWorks = () => {
  const cardStyle = {
    border: "none",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease-in-out",
  };

  const iconStyle = {
    color: "#007bff",
    marginBottom: "15px",
  };

  const stepsData = [
    {
      title: "Select a Service",
      desc: "Choose from our wide range of services tailored to meet your needs.",
      icon: <FaClipboardList size={50} style={iconStyle} />,
    },
    {
      title: "Choose a Schedule",
      desc: "Pick a date and time that fits your schedule. We’re flexible!",
      icon: <FaCalendarAlt size={50} style={iconStyle} />,
    },
    {
      title: "Get the Job Done",
      desc: "Our expert will arrive on time and complete the job to your satisfaction.",
      icon: <FaCheckCircle size={50} style={iconStyle} />,
    },
  ];

  return (
    <section className="container sectionClass">
      <h1 className="headingClass">How It Works</h1>

      <Row>
        {stepsData.map((data, index) => (
          <Col md={4} key={index}>
            <Card className="h-100" style={cardStyle}>
              <Card.Body className="text-center">
                {data.icon}
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>{data.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default HowItWorks;
