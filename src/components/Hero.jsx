import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Hero = () => {
  return (
    <section className="text-center bg-primary text-white p-5 mt-2 mb-4">
      <h1 className=" mt-2">
        Welcome to <strong>MNA HandyMan</strong> Services
      </h1>
      <p>Your one-stop platform for all repair and handyman needs.</p>
      <Link to="/services">
        <Button variant="light" className="m-2">
          Explore Services
        </Button>
      </Link>
      <Link to="/contact">
        <Button variant="outline-light">Contact Us</Button>
      </Link>
    </section>
  );
};

export default Hero;
