import { Row, Col, Card, Button } from "react-bootstrap";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import blogImg1 from "../assets/images/blog-1.jpg";
import blogImg2 from "../assets/images/blog-2.jpg";
import blogImg3 from "../assets/images/blog-3.jpg";
import blogImg4 from "../assets/images/blog-4.jpg";
import blogImg5 from "../assets/images/blog-5.jpg";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "5 Tips for a Clean Home",
      summary:
        "Maintaining a clean home can seem overwhelming, but with these 5 practical tips, you can easily keep your living space tidy and organized. Learn how to establish a routine and prioritize tasks for a spotless home.",
      image: blogImg1,
    },
    {
      id: 2,
      title: "DIY Plumbing Fixes",
      summary:
        "Tired of waiting for a plumber? Discover simple plumbing fixes you can handle on your own, from unclogging drains to fixing minor leaks. These tips will save you time and money while keeping your home functional.",
      image: blogImg2,
    },
    {
      id: 3,
      title: "Choosing the Right Paint Colors",
      summary:
        "Picking the perfect paint colors for your home can set the tone for any room. Learn from experts about color psychology, matching shades to your decor, and achieving a professional look with ease.",
      image: blogImg3,
    },
    {
      id: 4,
      title: "Benefits of Professional Landscaping",
      summary:
        "Transform your outdoor space with professional landscaping. Discover how experts can improve your garden’s aesthetics, boost property value, and create a sustainable and beautiful environment.",
      image: blogImg4,
    },
    {
      id: 5,
      title: "How to Improve Energy Efficiency",
      summary:
        "Cut your energy bills and reduce your carbon footprint with these proven energy-saving techniques. Learn how to insulate your home, upgrade to energy-efficient appliances, and adopt simple daily habits.",
      image: blogImg5,
    },
  ];

  return (
    <section className="container mt-4 pt-2 mb-0">
      <h1 className="headingClass ">Latest Blogs</h1>
      <Row>
        {blogs.map((blog) => (
          <Col md={6} lg={4} className="mb-4" key={blog.id}>
            <Card
              style={{
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "10px",
                overflow: "hidden",
              }}
              className="h-100"
            >
              {/* Blog Image */}
              <Card.Img
                variant="top"
                src={blog.image}
                alt={blog.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                {/* Blog Title */}
                <Card.Title
                  className="text-center"
                  style={{ fontSize: "1.25rem", fontWeight: "bold" }}
                >
                  {blog.title}
                </Card.Title>

                {/* Blog Summary */}
                <Card.Text
                  style={{
                    fontSize: "0.90rem",
                    color: "#6c757d",
                    textAlign: "justify",
                    marginBottom: "20px",
                  }}
                >
                  {blog.summary}
                </Card.Text>

                {/* Read More Button */}
                <Button
                  className="secondCustomBtn"
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "5px",
                  }}
                >
                  Read More
                  <FaArrowUpRightFromSquare className="ms-2" />
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Blog;
