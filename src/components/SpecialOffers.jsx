import { useState, useEffect } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { FaClock, FaTag, FaGift } from "react-icons/fa";

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

  const headerStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "20px",
  };

  const subHeaderStyle = {
    fontSize: "1.2rem",
    color: "#6c757d",
    textAlign: "center",
    marginBottom: "40px",
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
    marginBottom: "30px",
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#d9534f",
  };

  return (
    <section>
      <h2 style={headerStyle}>Special Offers & Promotions</h2>
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

      <Row className="mt-4">
        {/* Offer 1 */}
        <Col md={4} className="mb-4">
          <Card style={cardStyle} className="offer-card">
            <img
              src="https://via.placeholder.com/400x200"
              alt="Seasonal Discount"
              style={cardImageStyle}
            />
            <Card.Body>
              <FaTag style={iconStyle} />
              <Card.Title>25% Off All Services</Card.Title>
              <Card.Text>
                Enjoy a 25% discount on all handyman services this season. Offer
                valid until the end of the month!
              </Card.Text>
              <Button variant="primary">Claim Offer</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Offer 2 */}
        <Col md={4} className="mb-4">
          <Card style={cardStyle} className="offer-card">
            <img
              src="https://via.placeholder.com/400x200"
              alt="First-Time Customer"
              style={cardImageStyle}
            />
            <Card.Body>
              <FaGift style={iconStyle} />
              <Card.Title>First-Time Customer Bonus</Card.Title>
              <Card.Text>
                New customers get a $20 voucher for their first booking. Use it
                for any of our services!
              </Card.Text>
              <Button variant="primary">Get Started</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Offer 3 */}
        <Col md={4} className="mb-4">
          <Card style={cardStyle} className="offer-card">
            <img
              src="https://via.placeholder.com/400x200"
              alt="Referral Bonus"
              style={cardImageStyle}
            />
            <Card.Body>
              <FaTag style={iconStyle} />
              <Card.Title>Referral Rewards</Card.Title>
              <Card.Text>
                Refer a friend and both of you receive $15 off your next
                service. It&apos,s a win-win!
              </Card.Text>
              <Button variant="primary">Refer Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </section>
  );
};

export default SpecialOffers;
