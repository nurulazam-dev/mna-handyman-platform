import { Button } from "react-bootstrap";
import MakesUsSpecial from "../components/MakesUsSpecial";
import OurSpecialists from "../components/OurSpecialists";
import { Link } from "react-router-dom";

const About = () => {
  const heroStyle = {
    backgroundImage: "url(https://via.placeholder.com/1920x600)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
    textAlign: "center",
    padding: "50px 20px",
    position: "relative",
    margin: "40px 0 25px 0",
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

      <MakesUsSpecial />

      {/* Mission and Vision Section */}
      <section className="container sectionClass text-center">
        <h1 className="headingClass">Our Mission & Vision</h1>
        <p style={{ fontSize: "1.1rem", marginTop: "8px" }}>
          Our mission is to provide exceptional services while maintaining high
          standards of quality, integrity, and professionalism. We envision a
          world where our services make lives easier and better.
        </p>
      </section>

      {/* Call to Action */}
      <section
        className="sectionClass "
        style={{
          textAlign: "center",
          padding: "40px 0",
          backgroundColor: "#007bff",
          color: "#fff",
        }}
      >
        <h2>Ready to Work With Us?</h2>
        <Link to="/services">
          <Button
            variant="light"
            size="lg"
            style={{ marginTop: "20px", marginRight: "15px" }}
          >
            Our Services
          </Button>
        </Link>
        <Link to="/contact">
          <Button variant="light" size="lg" style={{ marginTop: "20px" }}>
            Contact Us
          </Button>
        </Link>
      </section>
      <OurSpecialists />
    </div>
  );
};

export default About;
