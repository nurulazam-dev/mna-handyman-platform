import { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { MdOutlineExpandMore } from "react-icons/md";
import { servicesData } from "../assets/data/data";

const Services = () => {
  const [visibleServices, setVisibleServices] = useState(8);

  const handleSeeMore = () => {
    setVisibleServices((prev) => Math.min(prev + 4, servicesData.length));
  };

  return (
    <section className="container mt-4">
      <h1 className="headingClass  mt-5 pt-2">Our Services</h1>
      <Row>
        {servicesData.slice(0, visibleServices).map((service) => (
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
      {visibleServices < servicesData.length && (
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
