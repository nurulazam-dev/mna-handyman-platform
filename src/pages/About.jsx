import { Container, Button } from "react-bootstrap";
import MakesUsSpecial from "../components/MakesUsSpecial";
import OurSpecialists from "../components/OurSpecialists";

const About = () => {
  const heroStyle = {
    backgroundImage: "url(https://via.placeholder.com/1920x600)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
    textAlign: "center",
    padding: "150px 20px",
    position: "relative",
  };

  const overlayStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  };

  const heroTextStyle = {
    zIndex: 2,
    position: "relative",
    color: "#fff",
  };

  return (
    <div>
      {/* Hero Section */}
      <div style={heroStyle}>
        <div style={overlayStyle}></div>
        <div style={heroTextStyle}>
          <h1 style={{ fontSize: "3.5rem", fontWeight: "bold" }}>About Us</h1>
          <p style={{ fontSize: "1.2rem", marginTop: "15px" }}>
            Learn more about who we are and what we do.
          </p>
        </div>
      </div>

      {/* Mission and Vision Section */}
      <section className="container sectionClass text-center">
        <h1 className="headingClass">Our Mission & Vision</h1>
        <p style={{ fontSize: "1.2rem", marginTop: "20px" }}>
          Our mission is to provide exceptional services while maintaining high
          standards of quality, integrity, and professionalism. We envision a
          world where our services make lives easier and better.
        </p>
      </section>

      <MakesUsSpecial />
      {/* Call to Action */}
      <Container
        style={{
          textAlign: "center",
          padding: "60px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
        }}
      >
        <h2>Ready to Work With Us?</h2>
        <Button variant="light" size="lg" style={{ marginTop: "20px" }}>
          Contact Us
        </Button>
      </Container>
      <OurSpecialists />
    </div>
  );
};

export default About;
