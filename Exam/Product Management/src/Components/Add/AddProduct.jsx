import { useState } from "react";
import { useDispatch } from "react-redux";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import generateUniqueId from "generate-unique-id";
import { useNavigate } from "react-router-dom";
import { addNewProductAsync } from "../../Services/Action/Action";

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialState = {
    id: "",
    productName: "",
    price: "",
    image: "",
    color: "",
    brand: "",
    size: "",
    category: "", // dynamic now
  };

  const [inputForm, setInputForm] = useState(initialState);

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setInputForm({ ...inputForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = generateUniqueId({ length: 5, useLetters: false });

    const data = {
      ...inputForm,
      id,
      category: inputForm.brand.toLowerCase(), // category = brand
    };

    dispatch(addNewProductAsync(data));

    setInputForm(initialState);
    navigate(`/${inputForm.brand.toLowerCase()}`); // auto redirect
  };

  return (
    <Container className="my-4">
      <h2 className="mb-4 text-center">Add Jewelry Product</h2>

      <Form onSubmit={handleSubmit}>

        {/* --- Product Name --- */}
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Product Name</Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              name="productName"
              value={inputForm.productName}
              onChange={handleChanged}
              placeholder="Enter Jewelry Name"
              required
            />
          </Col>
        </Form.Group>

        {/* --- Price --- */}
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Price</Form.Label>
          <Col sm="10">
            <Form.Control
              type="number"
              name="price"
              value={inputForm.price}
              onChange={handleChanged}
              placeholder="Enter Price"
              required
            />
          </Col>
        </Form.Group>

        {/* --- Image URL --- */}
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Image URL</Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              name="image"
              value={inputForm.image}
              onChange={handleChanged}
              placeholder="Enter Image URL"
              required
            />
          </Col>
        </Form.Group>

        {/* --- Color --- */}
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Color</Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              name="color"
              value={inputForm.color}
              onChange={handleChanged}
              placeholder="Enter Color (e.g. Gold, Silver, Rosegold)"
            />
          </Col>
        </Form.Group>

        {/* --- Jewelry Type (Brand + Category Mapping) --- */}
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Jewelry Type</Form.Label>
          <Col sm="10">
            <Form.Select
              name="brand"
              value={inputForm.brand}
              onChange={handleChanged}
              required
            >
              <option value="">Select</option>
              <option value="goldjewelry">Gold Jewelry</option>
              <option value="silverjewelry">Silver Jewelry</option>
              <option value="platinumjewelry">Platinum Jewelry</option>
            </Form.Select>
          </Col>
        </Form.Group>

        {/* --- Size --- */}
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Size</Form.Label>
          <Col sm="10">
            <Form.Select
              name="size"
              value={inputForm.size}
              onChange={handleChanged}
              required
            >
              <option value="">Select Size</option>
              <option value="Free Size">Free Size</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
            </Form.Select>
          </Col>
        </Form.Group>

        {/* --- Submit --- */}
        <div className="text-center">
          <Button type="submit" variant="primary">
            Add Jewelry
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default AddProduct;
