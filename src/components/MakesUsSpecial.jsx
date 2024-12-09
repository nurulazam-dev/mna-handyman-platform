import { Row, Col, Card } from "react-bootstrap";
import { FaUsers, FaAward, FaTools } from "react-icons/fa";

const MakesUsSpecial = () => {
  const highlightCardStyle = {
    border: "none",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
  };

  const highlightIconStyle = {
    color: "#007bff",
    fontSize: "4rem",
    marginBottom: "15px",
  };

  const specialData = [
    {
      title: "Skilled Team",
      desc: "Our team consists of certified professionals with years of experience in the field. Our team was built with expert members.",
      icon: <FaUsers style={highlightIconStyle} />,
    },
    {
      title: "Award-Winning Service",
      desc: "Recognized for excellence, we consistently deliver award-winning quality and customer satisfaction.",
      icon: <FaAward style={highlightIconStyle} />,
    },

    {
      title: "Comprehensive Solutions",
      desc: "From small repairs to large projects, we offer a wide range of handyman services tailored to your needs.",
      icon: <FaTools style={highlightIconStyle} />,
    },
  ];

  return (
    <section className="container sectionClass">
      <h1 className="headingClass">What Makes Us Special</h1>
      <Row>
        {specialData.map((data, index) => (
          <Col md={4} key={index}>
            <Card style={highlightCardStyle}>
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

export default MakesUsSpecial;
