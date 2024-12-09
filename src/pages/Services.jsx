import { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import plumSerImg from "../assets/images/blog-2.jpg";
import elcSerImg from "../assets/images/9.png";
import carSerImg from "../assets/images/carSerImg.jpeg";
import cleSerImg from "../assets/images/blog-1.jpg";
import winCleSerImg from "../assets/images/winCleSerImg.webp";
import painSerImg from "../assets/images/blog-3.jpg";
import hvacSerImg from "../assets/images/hvacSerImg.avif";
import rooSerImg from "../assets/images/rooSerImg.jpg";
import landSerImg from "../assets/images/blog-4.jpg";
import pestSerImg from "../assets/images/pestSerImg.webp";
import furSerImg from "../assets/images/furSerImg.jpg";
import apSerImg from "../assets/images/apSerImg.png";
import floSerImg from "../assets/images/floSerImg.webp";
import { MdOutlineExpandMore } from "react-icons/md";

const Services = () => {
  const allServices = [
    {
      id: 1,
      title: "Plumbing",
      description: "Expert plumbing solutions for your home.",
      image: plumSerImg,
    },
    {
      id: 2,
      title: "Electrical Repair",
      description: "Reliable electrical services for safety.",
      image: elcSerImg,
    },
    {
      id: 3,
      title: "Carpentry",
      description: "Professional carpentry for custom needs.",
      image: carSerImg,
    },
    {
      id: 4,
      title: "Cleaning",
      description: "Efficient and thorough cleaning services.",
      image: cleSerImg,
    },
    {
      id: 5,
      title: "Painting",
      description: "High-quality painting for interiors and exteriors.",
      image: painSerImg,
    },
    {
      id: 6,
      title: "HVAC Services",
      description: "Heating and cooling system maintenance.",
      image: hvacSerImg,
    },
    {
      id: 7,
      title: "Roofing",
      description: "Durable roofing and repair services.",
      image: rooSerImg,
    },
    {
      id: 8,
      title: "Landscaping",
      description: "Beautiful landscaping for your garden.",
      image: landSerImg,
    },
    {
      id: 9,
      title: "Pest Control",
      description: "Effective pest control solutions.",
      image: pestSerImg,
    },
    {
      id: 10,
      title: "Furniture Assembly",
      description: "Quick and easy furniture assembly.",
      image: furSerImg,
    },
    {
      id: 11,
      title: "Window Cleaning",
      description: "Sparkling windows, inside and out.",
      image: winCleSerImg,
    },
    {
      id: 12,
      title: "Appliance Repair",
      description: "Fast and reliable appliance repair.",
      image: apSerImg,
    },
    {
      id: 13,
      title: "Flooring",
      description: "Expert flooring installation and repairs.",
      image: floSerImg,
    },
  ];

  const [visibleServices, setVisibleServices] = useState(8);

  const handleSeeMore = () => {
    setVisibleServices((prev) => Math.min(prev + 4, allServices.length));
  };

  return (
    <section className="container mt-4">
      <h1 className="headingClass  mt-5 pt-2">Our Services</h1>
      <Row>
        {allServices.slice(0, visibleServices).map((service) => (
          <Col
            key={service.id}
            xs={12}
            sm={6}
            lg={3}
            className="mb-4"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              style={{
                width: "100%",
                maxWidth: "300px",
                border: "none",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Card.Img
                variant="top"
                src={service.image}
                alt={service.title}
                style={{
                  borderRadius: "4px 4px 0 0",
                  height: "180px",
                  objectFit: "cover",
                }}
              />
              <Card.Body>
                <Card.Title
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                  }}
                >
                  {service.title}
                </Card.Title>
                <Card.Text style={{ fontSize: "0.9rem", color: "#6c757d" }}>
                  {service.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* See More Button */}
      {visibleServices < allServices.length && (
        <div
          className="mt-1"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button
            onClick={handleSeeMore}
            className="secondCustomBtn text-center"
            type="button"
            style={{
              textDecoration: "none",
              width: "25%",
            }}
          >
            See More <MdOutlineExpandMore style={{ fontSize: "1.5rem" }} />
          </button>
        </div>
      )}
    </section>
  );
};

export default Services;
