import { useEffect, useState } from "react";
import { Button, Container, Row, Form, Col, Card } from "react-bootstrap";
import { getStorageData, setStorageData } from "./storageData";
import { useNavigate, useParams } from "react-router";

const EditMovie = () => {
  const initialState = {
    id: "",
    title: "",
    desc: "",
    price: "",
    category: "",
    image: ""
  };

  const [inputForm, setInputForm] = useState(initialState);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    let data = getStorageData();
    let record = data.find((movie) => movie.id == id);
    if (record) setInputForm(record);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = getStorageData();
    let updatedData = data.map((movie) =>
      movie.id == inputForm.id ? inputForm : movie
    );
    setStorageData(updatedData);
    navigate("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputForm({ ...inputForm, [name]: value });
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-lg p-4">
            <h2 className="text-center mb-4 text-success">✏️ Edit Movie</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Movie Name</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={inputForm.title}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  name="desc"
                  value={inputForm.desc}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Ticket Price</Form.Label>
                <Form.Control
                  type="number"
                  name="price"
                  value={inputForm.price}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Select
                  name="category"
                  value={inputForm.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Category</option>
                  <option value="Comedy">Comedy</option>
                  <option value="Drama">Drama</option>
                  <option value="Romantic">Romantic</option>
                  <option value="Horror">Horror</option>
                  <option value="Suspense">Suspense</option>
                  <option value="Thriller">Thriller</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Movie Image URL</Form.Label>
                <Form.Control
                  type="text"
                  name="image"
                  value={inputForm.image}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <div className="text-center">
                <Button variant="success" type="submit">
                  Update Movie
                </Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EditMovie;
