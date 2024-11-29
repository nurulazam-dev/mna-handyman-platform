import { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const ServicesPage = () => {
  // Total services data with images
  const allServices = [
    {
      id: 1,
      title: "Plumbing",
      description: "Expert plumbing solutions for your home.",
      image: "https://via.placeholder.com/300?text=Plumbing",
    },
    {
      id: 2,
      title: "Electrical Repair",
      description: "Reliable electrical services for safety.",
      image: "https://via.placeholder.com/300?text=Electrical+Repair",
    },
    {
      id: 3,
      title: "Carpentry",
      description: "Professional carpentry for custom needs.",
      image: "https://via.placeholder.com/300?text=Carpentry",
    },
    {
      id: 4,
      title: "Cleaning",
      description: "Efficient and thorough cleaning services.",
      image: "https://via.placeholder.com/300?text=Cleaning",
    },
    {
      id: 5,
      title: "Painting",
      description: "High-quality painting for interiors and exteriors.",
      image: "https://via.placeholder.com/300?text=Painting",
    },
    {
      id: 6,
      title: "HVAC Services",
      description: "Heating and cooling system maintenance.",
      image: "https://via.placeholder.com/300?text=HVAC+Services",
    },
    {
      id: 7,
      title: "Roofing",
      description: "Durable roofing and repair services.",
      image: "https://via.placeholder.com/300?text=Roofing",
    },
    {
      id: 8,
      title: "Landscaping",
      description: "Beautiful landscaping for your garden.",
      image: "https://via.placeholder.com/300?text=Landscaping",
    },
    {
      id: 9,
      title: "Pest Control",
      description: "Effective pest control solutions.",
      image: "https://via.placeholder.com/300?text=Pest+Control",
    },
    {
      id: 10,
      title: "Furniture Assembly",
      description: "Quick and easy furniture assembly.",
      image: "https://via.placeholder.com/300?text=Furniture+Assembly",
    },
    {
      id: 11,
      title: "Window Cleaning",
      description: "Sparkling windows, inside and out.",
      image: "https://via.placeholder.com/300?text=Window+Cleaning",
    },
    {
      id: 12,
      title: "Appliance Repair",
      description: "Fast and reliable appliance repair.",
      image: "https://via.placeholder.com/300?text=Appliance+Repair",
    },
    {
      id: 13,
      title: "Flooring",
      description: "Expert flooring installation and repairs.",
      image: "https://via.placeholder.com/300?text=Flooring",
    },
    {
      id: 14,
      title: "Fencing",
      description: "Strong and secure fencing solutions.",
      image: "https://via.placeholder.com/300?text=Fencing",
    },
    {
      id: 15,
      title: "Masonry",
      description: "Quality masonry work for your home.",
      image: "https://via.placeholder.com/300?text=Masonry",
    },
    {
      id: 16,
      title: "Interior Design",
      description: "Creative and functional interior design.",
      image: "https://via.placeholder.com/300?text=Interior+Design",
    },
    {
      id: 17,
      title: "Handyman Services",
      description: "General handyman services for all needs.",
      image: "https://via.placeholder.com/300?text=Handyman+Services",
    },
    {
      id: 18,
      title: "Moving Help",
      description: "Assistance with packing and moving.",
      image: "https://via.placeholder.com/300?text=Moving+Help",
    },
    {
      id: 19,
      title: "Garage Door Repair",
      description: "Quick and reliable garage door fixes.",
      image: "https://via.placeholder.com/300?text=Garage+Door+Repair",
    },
    {
      id: 20,
      title: "Pool Maintenance",
      description: "Keep your pool clean and functional.",
      image: "https://via.placeholder.com/300?text=Pool+Maintenance",
    },
  ];

  // State to track the number of services to display
  const [visibleServices, setVisibleServices] = useState(12);

  // Function to load more services
  const handleSeeMore = () => {
    setVisibleServices((prev) => Math.min(prev + 4, allServices.length));
  };

  return (
    <Container style={{ padding: "60px 20px" }}>
      <h2
        className="headingClass"
        style={{ fontWeight: "bold", fontSize: "2.5rem" }}
      >
        Our Services
      </h2>
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
                  borderRadius: "10px 10px 0 0",
                  height: "180px",
                  objectFit: "cover",
                }}
              />
              <Card.Body>
                <Card.Title style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
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
              padding: "10px 20px",
              fontSize: "1rem",
              borderRadius: "5px",
            }}
          >
            See More
          </Button>
        </div>
      )}
    </Container>
  );
};

export default ServicesPage;
