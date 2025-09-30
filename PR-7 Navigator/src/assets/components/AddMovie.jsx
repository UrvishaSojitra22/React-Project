import { useState } from "react";
import { Button, Row, Form, Col, Container, Card } from "react-bootstrap";
import generateUniqeId from "generate-unique-id";
import { getStorageData, setStorageData } from "./storageData";
import { useNavigate } from "react-router";

const AddMovie = () => {
  const initialState = {
    id: "",
    title: "",
    desc: "",
    price: "",
    category: "",
    image: ""
  };

  let [inputForm, setInputForm] = useState(initialState);
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const validationform = () => {
    let formError = {};
    if (inputForm.title === "") formError.title = "Please enter title";
    if (inputForm.desc === "") formError.desc = "Please enter description";
    if (inputForm.price === "") formError.price = "Please enter price";
    if (inputForm.category === "") formError.category = "Please select category";
    if (inputForm.image === "") formError.image = "Please enter image url";
    setError(formError);
    return Object.keys(formError).length !== 0;
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setInputForm({ ...inputForm, [name]: value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if (!validationform()) {
      inputForm.id = generateUniqeId({ length: 5, useLetters: false });
      let oldData = getStorageData();
      oldData.push(inputForm);
      setStorageData(oldData);
      setInputForm(initialState);
      navigate("/");
    }
  };

  return (
    <Container className="py-5" >
      <Row className="justify-content-center " style={{marginTop:'20px', backgroundColor:'#8c67a133'}}>
        <Col md={8}>
          <Card className="shadow-lg p-4"  style={{marginTop:'20px', backgroundColor:'#8c67a133'}}>
            <h2 className="text-center mb-4 text-primary">➕ Add Movie</h2>
            <Form onSubmit={handelSubmit}>
              <Form.Group className="mb-3" >
                <Form.Label>Movie Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Movie Name"
                  name="title"
                  value={inputForm.title}
                  onChange={handleChange}
                  style={{ borderColor: error.title ? "red" : "" }}
                />
                {error.title && <span className="text-danger">{error.title}</span>}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Description"
                  name="desc"
                  value={inputForm.desc}
                  onChange={handleChange}
                  style={{ borderColor: error.desc ? "red" : "" }}
                />
                {error.desc && <span className="text-danger">{error.desc}</span>}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Ticket Price</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Price"
                  name="price"
                  value={inputForm.price}
                  onChange={handleChange}
                  style={{ borderColor: error.price ? "red" : "" }}
                />
                {error.price && <span className="text-danger">{error.price}</span>}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Select
                  name="category"
                  value={inputForm.category}
                  onChange={handleChange}
                  style={{ borderColor: error.category ? "red" : "" }}
                >
                  <option value="">Select Category</option>
                  <option value="Comedy">Comedy</option>
                  <option value="Drama">Drama</option>
                  <option value="Romantic">Romantic</option>
                  <option value="Horror">Horror</option>
                  <option value="Suspense">Suspense</option>
                  <option value="Thriller">Thriller</option>
                </Form.Select>
                {error.category && (
                  <span className="text-danger">{error.category}</span>
                )}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Movie Image URL</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Image URL"
                  name="image"
                  value={inputForm.image}
                  onChange={handleChange}
                  style={{ borderColor: error.image ? "red" : "" }}
                />
                {error.image && <span className="text-danger">{error.image}</span>}
              </Form.Group>

              <div className="text-center">
                <Button type="submit" variant="primary">
                  Add Movie
                </Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddMovie;
