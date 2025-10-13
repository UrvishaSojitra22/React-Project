import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProduct, updateProduct } from "../../Services/Action/Action";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const EditProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { product } = useSelector((state) => state);

  const [form, setForm] = useState({
    id: "",
    productName: "",
    price: "",
    image: "",
    color: "",
    brand: "",
    size: "",
  });

  // Load single product from Redux state
  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  // When product is loaded, fill the form
  useEffect(() => {
    if (product) setForm(product);
  }, [product]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct(form));
    navigate("/MenCard"); // Go back to product list
  };

  return (
    <Container className="my-4">
      <h2 className="mb-4 text-center">Edit Product</h2>
      <Form onSubmit={handleSubmit}>
        {/* Product Name */}
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Product Name</Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              name="productName"
              value={form.productName}
              onChange={handleChange}
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
              value={form.price}
              onChange={handleChange}
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
              value={form.image}
              onChange={handleChange}
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
              value={form.color}
              onChange={handleChange}
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
              value={form.brand}
              onChange={handleChange}
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
              value={form.size}
              onChange={handleChange}
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
            Update Product
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default EditProduct;
