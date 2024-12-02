import { useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import serImg1 from "../assets/images/6.png";
import serImg2 from "../assets/images/10.png";
import serImg3 from "../assets/images/8.png";
import serImg4 from "../assets/images/5.png";
import serImg5 from "../assets/images/7.png";
import serImg6 from "../assets/images/9.png";

const ServicesPage = () => {
  const allServices = [
    {
      id: 1,
      title: "Plumbing",
      description: "Expert plumbing solutions for your home.",
      image: serImg1,
    },
    {
      id: 2,
      title: "Electrical Repair",
      description: "Reliable electrical services for safety.",
      image: serImg6,
    },
    {
      id: 3,
      title: "Carpentry",
      description: "Professional carpentry for custom needs.",
      image: serImg5,
    },
    {
      id: 4,
      title: "Cleaning",
      description: "Efficient and thorough cleaning services.",
      image: serImg4,
    },
    {
      id: 5,
      title: "Painting",
      description: "High-quality painting for interiors and exteriors.",
      image: serImg3,
    },
    {
      id: 6,
      title: "HVAC Services",
      description: "Heating and cooling system maintenance.",
      image: serImg2,
    },
    {
      id: 7,
      title: "Roofing",
      description: "Durable roofing and repair services.",
      image: serImg1,
    },
    {
      id: 8,
      title: "Landscaping",
      description: "Beautiful landscaping for your garden.",
      image: serImg2,
    },
    {
      id: 9,
      title: "Pest Control",
      description: "Effective pest control solutions.",
      image: serImg5,
    },
    {
      id: 10,
      title: "Furniture Assembly",
      description: "Quick and easy furniture assembly.",
      image: serImg3,
    },
    {
      id: 11,
      title: "Window Cleaning",
      description: "Sparkling windows, inside and out.",
      image: serImg4,
    },
    {
      id: 12,
      title: "Appliance Repair",
      description: "Fast and reliable appliance repair.",
      image: serImg2,
    },
    {
      id: 13,
      title: "Flooring",
      description: "Expert flooring installation and repairs.",
      image: serImg4,
    },
    {
      id: 14,
      title: "Fencing",
      description: "Strong and secure fencing solutions.",
      image: serImg2,
    },
    {
      id: 15,
      title: "Masonry",
      description: "Quality masonry work for your home.",
      image: serImg5,
    },
    {
      id: 16,
      title: "Interior Design",
      description: "Creative and functional interior design.",
      image: serImg1,
    },
    {
      id: 17,
      title: "Handyman Services",
      description: "General handyman services for all needs.",
      image: serImg2,
    },
    {
      id: 18,
      title: "Moving Help",
      description: "Assistance with packing and moving.",
      image: serImg3,
    },
  ];

  const [visibleServices, setVisibleServices] = useState(8);

  const handleSeeMore = () => {
    setVisibleServices((prev) => Math.min(prev + 4, allServices.length));
  };

  return (
    <section className="container mt-5">
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
                  height: "150px",
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
        <div className="text-center mt-4">
          <Button
            onClick={handleSeeMore}
            style={{
              backgroundColor: "#007bff",
              border: "none",
              padding: "8px 20px",
              fontSize: "1rem",
              borderRadius: "5px",
            }}
          >
            See More
          </Button>
        </div>
      )}
    </section>
  );
};

export default ServicesPage;
