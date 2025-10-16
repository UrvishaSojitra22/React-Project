import { useState } from "react";
import { useDispatch } from "react-redux";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import generateUniqueId from "generate-unique-id";
import { useNavigate } from "react-router-dom";
import { addNewProduct } from "../../Services/Action/Action"; 

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
  };



  const [inputForm, setInputForm] = useState(initialState);

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setInputForm({ ...inputForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = generateUniqueId({ length: 5, useLetters: false });
    const data = { ...inputForm, id };
    dispatch(addNewProduct(data));
    setInputForm(initialState);
    navigate("/MenCard");
  };

  return (
    <Container className="my-4">
      <h2 className="mb-4 text-center">Add Product</h2>

      <Form onSubmit={handleSubmit}>
        {/* Product Name */}
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Product Name</Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              name="productName"
              value={inputForm.productName}
              onChange={handleChanged}
              placeholder="Enter Product Name"
              required
            />
          </Col>
        </Form.Group>

        {/* Price */}
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

        {/* Image URL */}
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Image URL</Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              name="image"
              value={inputForm.image}
              onChange={handleChanged}
              placeholder="Enter Product Image URL"
              required
            />
          </Col>
        </Form.Group>

        {/* Color */}
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Color</Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              name="color"
              value={inputForm.color}
              onChange={handleChanged}
              placeholder="Enter Product Color"
            />
          </Col>
        </Form.Group>

        {/* Brand */}
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Brand</Form.Label>
          <Col sm="10">
            <Form.Select
              name="brand"
              value={inputForm.brand}
              onChange={handleChanged}
              required
            >
              <option value="">Select Brand</option>
              <option value="U.S. Polo">U.S. Polo</option>
              <option value="Calvin Klein">Calvin Klein</option>
              <option value="Calvin Klein Jeans">Calvin Klein Jeans</option>
              <option value="Arrow">Arrow</option>
              <option value="Arrow Sport">Arrow Sport</option>
            </Form.Select>
          </Col>
        </Form.Group>

        {/* Size */}
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
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </Form.Select>
          </Col>
        </Form.Group>

        {/* Submit Button */}
        <div className="text-center">
          <Button type="submit" variant="primary">
            Add Product 
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default AddProduct;
