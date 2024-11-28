import { Card, Container } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const headerStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "20px",
  };

  const cardStyle = {
    border: "none",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    margin: "0px 12px 10px 12px",
    textAlign: "justify",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const avatarStyle = {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    margin: "5px auto",
    objectFit: "cover",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const testimonials = [
    {
      name: "John Doe",
      feedback:
        "HandyMan Services made my life so much easier! The team was professional, timely, and delivered exceptional results.",
      image: "https://via.placeholder.com/80",
    },
    {
      name: "Sarah Parker",
      feedback:
        "I am extremely satisfied with the plumbing services. The technician was knowledgeable and resolved the issue efficiently.",
      image: "https://via.placeholder.com/80",
    },
    {
      name: "Michael Lee",
      feedback:
        "Highly recommend HandyMan Services! The carpenter did an amazing job on my custom furniture. Great attention to detail.",
      image: "https://via.placeholder.com/80",
    },
    {
      name: "Emily Clark",
      feedback:
        "The best handyman service I’ve ever used! Affordable pricing and excellent customer service.",
      image: "https://via.placeholder.com/80",
    },
    {
      name: "Chris Evans",
      feedback:
        "Quick and reliable! I needed an urgent repair, and they came through without a hitch.",
      image: "https://via.placeholder.com/80",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="container">
      <h2 style={headerStyle}>What Our Clients Say</h2>
      <Container>
        <Slider {...sliderSettings}>
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <Card style={cardStyle}>
                <Card.Body>
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name}'s avatar`}
                    style={avatarStyle}
                  />
                  <Card.Text
                    className="mt-3"
                    style={{ fontSize: "1rem", color: "#555" }}
                  >
                    {testimonial.feedback}
                  </Card.Text>
                  <Card.Title
                    className="mt-3"
                    style={{ fontWeight: "bold", fontSize: "1.1rem" }}
                  >
                    {testimonial.name}
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default Testimonials;
