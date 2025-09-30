



import { useEffect, useState } from "react";
import { getStorageData, setStorageData } from "./storageData";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router";

const Home = () => {
  const [movie, setMovie] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let data = getStorageData();
    setMovie(data);
  }, []);

  const handleDelete = (id) => {
    let data = getStorageData();
    let updated = data.filter((pro) => pro.id !== id);
    setMovie(updated);
    setStorageData(updated);
  };

  const handleEdit = (id) => {
    navigate(`/EditMovie/${id}`);
  };

  return (
    <Container className="py-4" style={{backgroundColor:'#e099d15b'}}>
      <h2 className="text-center mb-4">🎥 Movie Collection</h2>
      <Row>
        {movie.length > 0 ? (
          movie.map((product) => (
            <Col md={4} lg={3} key={product.id} className="mb-4">
              <Card className="shadow h-100 border-0">
                <Card.Img
                  variant="top"
                  src={product.image}
                  height="250"
                  style={{ objectFit: "cover" }}
                />
                <Card.Body style={{backgroundColor:'#beaebb5b'
                }}>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.desc}</Card.Text>
                  <Card.Text>
                    <b>Price:</b> ₹{product.price}
                  </Card.Text>
                  <Card.Text>
                    <b>Category:</b> {product.category}
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <Button
                      variant="success"
                       style={{backgroundColor:'#88db73ff'}}
                      size="sm"
                      onClick={() => handleEdit(product.id)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      style={{backgroundColor:'#dd9a97ff'}}
                      size="sm"
                      onClick={() => handleDelete(product.id)}>
                      Delete
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <h5 className="text-center text-muted">No movies added yet 🎬</h5>
        )}
      </Row>
    </Container>
  );
};

export default Home;
