import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          {/* About Section */}
          <Col md={4} className="mb-3">
            <h5>About HandyMan Services</h5>
            <p>
              We provide top-notch handyman and repair services, ensuring your
              home and office are always in perfect shape.
            </p>
          </Col>

          {/* Quick Links Section */}
          <Col md={4} className="mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-white text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className="text-white text-decoration-none">
                  Services
                </a>
              </li>
              <li>
                <a href="/about" className="text-white text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </Col>

          {/* Contact Section */}
          <Col md={4} className="mb-3">
            <h5>Contact Us</h5>
            <p>
              <FaEnvelope className="me-2" /> info@handymanservices.com
            </p>
            <p>
              <strong>Phone:</strong> +1 234 567 890
            </p>
            <div>
              <a href="https://facebook.com" className="text-white me-3">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" className="text-white me-3">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" className="text-white me-3">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" className="text-white">
                <FaLinkedin size={24} />
              </a>
            </div>
          </Col>
        </Row>

        <hr className="border-light" />
        <Row>
          <Col className="text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} HandyMan Services. All Rights
              Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
