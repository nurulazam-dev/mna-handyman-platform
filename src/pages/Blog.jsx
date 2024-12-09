import { Row, Col, Card, Button } from "react-bootstrap";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { blogData } from "../assets/data/data";

const Blog = () => {
  return (
    <section className="container mt-4 pt-2 mb-0">
      <h1 className="headingClass ">Latest Blogs</h1>
      <Row>
        {blogData.map((blog) => (
          <Col md={6} lg={4} className="mb-4" key={blog.id}>
            <Card
              style={{
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "10px",
                overflow: "hidden",
              }}
              className="h-100"
            >
              <Card.Img
                variant="top"
                src={blog.image}
                alt={blog.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title
                  className="text-center"
                  style={{ fontSize: "1.25rem", fontWeight: "bold" }}
                >
                  {blog.title}
                </Card.Title>
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

                <Button
                  className="secondCustomBtn"
                  type="button"
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
