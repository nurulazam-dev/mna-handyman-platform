import { Row, Col } from "react-bootstrap";
import { FaTools, FaThumbsUp, FaShieldAlt, FaUsers } from "react-icons/fa";

const Features = () => {
  const wcuData = [
    {
      id: 1,
      title: "Expert Technicians",
      desc: "Our professionals are skilled and experienced.",
      icon: <FaTools size={50} className="mb-3 text-primary" />,
    },
    {
      id: 2,
      title: "Quality Service",
      desc: "We guarantee top-notch work for every job.",
      icon: <FaThumbsUp size={50} className="mb-3 text-primary" />,
    },
    {
      id: 3,
      title: "Safe & Secure",
      desc: "Your safety is our priority, every step of the way.",
      icon: <FaShieldAlt size={50} className="mb-3 text-primary" />,
    },
    {
      id: 4,
      title: "Customer Support",
      desc: "We’re here for you 24/7 to answer your questions.",
      icon: <FaUsers size={50} className="mb-3 text-primary" />,
    },
  ];

  return (
    <section className="sectionClass container text-center">
      <h1 className="headingClass">Why Choose Us?</h1>
      <Row className="mt-4">
        {wcuData.map((data) => (
          <Col md={3} key={data.id}>
            {data.icon}
            <h5>{data.title}</h5>
            <p>{data.desc}</p>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Features;
