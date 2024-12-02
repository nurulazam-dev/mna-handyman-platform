import Slider from "react-slick";
import { Card } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import speImg1 from "../assets/images/6.png";
import speImg2 from "../assets/images/9.png";
import speImg3 from "../assets/images/8.png";
import speImg4 from "../assets/images/7.png";

const OurSpecialists = () => {
  const cardStyle = {
    border: "none",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    textAlign: "center",
    margin: "10px",
    padding: "10px 5px",
    backgroundColor: "#fff",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "relative",
  };

  const avatarStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    margin: "0 auto 2px",
    objectFit: "cover",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const socialIconStyle = {
    color: "#007bff",
    fontSize: "1.5rem",
    transition: "color 0.3s",
  };

  const specialists = [
    {
      name: "John Smith",
      role: "Plumbing Specialist",
      description: "Expert in pipe installations, repairs, and leak fixing.",
      image: speImg1,
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Sarah Johnson",
      role: "Electrical Engineer",
      description:
        "Specialist in wiring, circuit repairs, and energy solutions.",
      image: speImg2,
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Michael Brown",
      role: "Carpentry Expert",
      description: "Crafts custom furniture and repairs wooden fixtures.",
      image: speImg3,
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Emily Davis",
      role: "Cleaning Professional",
      description: "Specializes in deep cleaning and sanitization services.",
      image: speImg4,
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="container sectionClass mb-5">
      <h2 className="headingClass">Meet Our Specialists</h2>
      <Slider {...sliderSettings}>
        {specialists.map((specialist, index) => (
          <div key={index}>
            <Card style={cardStyle}>
              <img
                src={specialist.image}
                alt={`${specialist.name}'s avatar`}
                style={avatarStyle}
              />
              <Card.Body>
                <Card.Title
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    marginBottom: "5px",
                  }}
                >
                  {specialist.name}
                </Card.Title>
                <Card.Subtitle
                  style={{
                    fontSize: "1rem",
                    color: "#6c757d",
                    marginBottom: "8px",
                  }}
                >
                  {specialist.role}
                </Card.Subtitle>
                <Card.Text style={{ fontSize: "15px" }}>
                  {specialist.description}
                </Card.Text>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "10px",
                    marginTop: "15px",
                  }}
                >
                  <a
                    href={specialist.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook style={{ ...socialIconStyle }} />
                  </a>
                  <a
                    href={specialist.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter style={{ ...socialIconStyle }} />
                  </a>
                  <a
                    href={specialist.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin style={{ ...socialIconStyle }} />
                  </a>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default OurSpecialists;
