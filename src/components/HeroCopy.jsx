import Slider from "react-slick";
import { Button } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCopy = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
  };

  const bannerData = [
    {
      id: 1,
      title: "Reliable Handyman Services",
      description:
        "From plumbing to carpentry, we provide top-notch repair and maintenance solutions for your home or business.",
      buttonText: "Explore Services",
      image:
        "https://via.placeholder.com/1920x800/007bff/ffffff?text=Reliable+Handyman+Services",
    },
    {
      id: 2,
      title: "Affordable Home Repairs",
      description:
        "Quality home repairs that fit your budget. Get fast and reliable solutions from our skilled professionals.",
      buttonText: "Get a Free Quote",
      image:
        "https://via.placeholder.com/1920x800/28a745/ffffff?text=Affordable+Home+Repairs",
    },
    {
      id: 3,
      title: "Expert Plumbing Solutions",
      description:
        "Say goodbye to leaks and clogs. Our plumbing experts are here to ensure your home runs smoothly.",
      buttonText: "Book Now",
      image:
        "https://via.placeholder.com/1920x800/dc3545/ffffff?text=Expert+Plumbing+Solutions",
    },
  ];

  const bannerStyle = (image) => ({
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    position: "relative",
  });

  const overlayStyle = {
    backgroundColor: "green",
    border: "2px solid red",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  };

  const contentStyle = {
    zIndex: 2,
    position: "relative",
    textAlign: "center",
    padding: "20px",
    // maxWidth: "800px",
  };

  return (
    <Slider {...sliderSettings}>
      {bannerData.map((banner) => (
        <div key={banner.id} style={bannerStyle(banner.image)}>
          <div style={overlayStyle}></div>
          <div style={contentStyle}>
            <h1
              style={{
                fontSize: "3.5rem",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              {banner.title}
            </h1>
            <p style={{ fontSize: "1.2rem", marginBottom: "30px" }}>
              {banner.description}
            </p>
            <Button
              href="#"
              style={{
                backgroundColor: "#ffc107",
                color: "#000",
                border: "none",
                padding: "10px 20px",
                fontSize: "1.1rem",
                borderRadius: "5px",
              }}
            >
              {banner.buttonText}
            </Button>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default HeroCopy;
