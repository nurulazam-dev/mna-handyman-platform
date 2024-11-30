import { useState, useEffect } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { FaClock, FaTag, FaGift, FaArrowRight } from "react-icons/fa";

const SpecialOffers = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  }

  // Update the countdown every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const subHeaderStyle = {
    fontSize: "1rem",
    color: "#6c757d",
    textAlign: "center",
    marginBottom: "2px",
  };

  const cardStyle = {
    border: "none",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    overflow: "hidden",
    transition: "transform 0.3s ease",
  };

  const cardImageStyle = {
    height: "200px",
    objectFit: "cover",
  };

  const iconStyle = {
    fontSize: "2rem",
    color: "#007bff",
    marginBottom: "10px",
  };

  const countdownStyle = {
    textAlign: "center",
    marginBottom: "10px",
    fontSize: "1.2rem",
    fontWeight: "semibold",
    color: "#d9534f",
  };

  const offerData = [
    {
      id: 1,
      title: "25% Off All Services",
      description:
        "Enjoy a 25% discount on all handyman services until the end of the month!",
      icon: <FaTag style={iconStyle} className="me-2" />,
      btnText: "Claim Offer",
    },
    {
      id: 2,
      title: "First-Time Customer Bonus",
      description:
        "New customers get a $20 voucher for their first booking. Use it for any of our services!",
      icon: <FaGift style={iconStyle} className="me-2" />,
      btnText: "Get Started",
    },
    {
      id: 3,
      title: "Referral Rewards",
      description:
        "Refer a friend and both of you receive $15 off your next service. It&apos,s a win-win!",
      icon: <FaTag style={iconStyle} className="me-2" />,
      btnText: "Refer Now",
    },
  ];

  return (
    <section className="container sectionClass">
      <h1 className="headingClass">Special Offers & Promotions</h1>
      <p style={subHeaderStyle}>
        Don’t miss out on our limited-time discounts and exclusive promotions!
        Act fast before they’re gone.
      </p>

      {/* Countdown Timer */}
      <div style={countdownStyle}>
        <FaClock style={{ marginRight: "10px" }} />
        Limited Time Left: {timeLeft.days || 0}d {timeLeft.hours || 0}h{" "}
        {timeLeft.minutes || 0}m {timeLeft.seconds || 0}s
      </div>

      <Row>
        {offerData.map((data) => (
          <Col md={4} key={data?.id}>
            <Card style={cardStyle} className="offer-card">
              <img
                src="https://via.placeholder.com/400x200"
                alt={data?.title}
                style={cardImageStyle}
              />
              <Card.Body>
                <div className="d-flex justify-content-center">
                  {data?.icon}
                  <Card.Title>{data?.title}</Card.Title>
                </div>
                <Card.Text>{data?.description}</Card.Text>
                <Button className="secondCustomBtn">
                  {data?.btnText}
                  <FaArrowRight className="ms-1" />
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default SpecialOffers;
