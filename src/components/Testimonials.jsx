import { Button, Card } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import customerImg1 from "../assets/images/2.png";
import customerImg2 from "../assets/images/3.png";
import customerImg3 from "../assets/images/4.png";

const Testimonials = () => {
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
      image: customerImg1,
    },
    {
      name: "Sarah Parker",
      feedback:
        "I am extremely satisfied with the plumbing services. The technician was knowledgeable and resolved the issue efficiently.",
      image: customerImg2,
    },
    {
      name: "Michael Lee",
      feedback:
        "Highly recommend HandyMan Services! The carpenter did an amazing job on my custom furniture. Great attention to detail.",
      image: customerImg3,
    },
    {
      name: "Emily Clark",
      feedback:
        "The best handyman service I’ve ever used! Affordable pricing and excellent customer service.",
      image: customerImg1,
    },
    {
      name: "Chris Evans",
      feedback:
        "Quick and reliable! I needed an urgent repair, and they came through without a hitch.",
      image: customerImg2,
    },
  ];
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

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
    <section className="container sectionClass">
      <h1 className="headingClass">What Our Clients Say</h1>
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...sliderSettings}
      >
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
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <Button className="secondCustomBtn mx-1" onClick={previous}>
          <FaArrowLeft /> Previous
        </Button>
        <Button className="secondCustomBtn mx-1" onClick={next}>
          Next
          <FaArrowRight className="ms-1" />
        </Button>
      </div>
    </section>
  );
};

export default Testimonials;
