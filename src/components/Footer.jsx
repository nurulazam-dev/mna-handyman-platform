import { Row, Col } from "react-bootstrap";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white ">
      <Row className="px-5 pt-4">
        {/* About Section */}
        <Col md={4}>
          <h5 className="text-warning">About HandyMan Services</h5>
          <p>
            We provide top-notch handyman and repair services, ensuring your
            home and office are always in perfect shape.
          </p>
        </Col>

        {/* Quick Links Section */}
        <Col md={2} className="text-start">
          <h5 className="text-warning">Quick Links</h5>
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
        {/* Quick Links Section */}
        <Col md={2} className="text-start">
          <h5 className="text-warning">Quick Links</h5>
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
        <Col md={4}>
          <h5 className="text-warning">Contact Us</h5>
          <p className="m-0">
            <FaEnvelope className="me-2" /> info@handymanservices.com
          </p>
          <p className="m-0">
            <FaPhone className="me-2" /> +88 01712 345678
          </p>
          <div className="mt-3">
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

      <hr className="border-light m-0" />
      <Row className="py-1">
        <Col className="text-center">
          <small className="text-warning mb-0">
            &copy; {new Date().getFullYear()} HandyMan Services. All Rights
            Reserved.
          </small>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
