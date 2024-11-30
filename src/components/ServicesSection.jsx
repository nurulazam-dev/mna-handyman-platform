import { Link } from "react-router-dom";
import { Card, Button, Row, Col } from "react-bootstrap";
import s1 from "../assets/images/service-1.jpg";
import s2 from "../assets/images/service-2.jpg";
import s3 from "../assets/images/service-3.jpg";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

const ServicesSection = () => {
  const imgStyle = {
    height: "200px",
    width: "300px",
  };

  const services = [
    {
      id: 1,
      title: "Plumbing",
      img: s1,
      description: "Fix your pipes and leaks.",
    },
    {
      id: 2,
      title: "Electrical",
      img: s2,
      description: "Resolve electrical issues.",
    },
    {
      id: 3,
      title: "Carpentry",
      img: s3,
      description: "Custom woodwork and repairs.",
    },
  ];

  return (
    <section className="container sectionClass">
      <h2 className="headingClass">Our Services</h2>
      <Row>
        {services.map((service) => (
          <Col key={service.id} sm={12} md={6} lg={4}>
            <Card>
              <Card.Img style={imgStyle} variant="top" src={service.img} />
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
                <Link to={`/services/${service.id}`}>
                  <Button className="secondCustomBtn">
                    Learn More
                    <FaArrowRight className="ms-1" />
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Link
        to="/services"
        style={{
          display: "flex",
          justifyContent: "center",
          textDecoration: "none",
        }}
      >
        <Button className="secondCustomBtn mt-4" style={{ width: "25%" }}>
          See Our All Services <FaArrowUpRightFromSquare className="ms-1" />
        </Button>
      </Link>
    </section>
  );
};

export default ServicesSection;
