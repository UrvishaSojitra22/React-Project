import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductAsync, updateProductAsync } from "../../Services/Action/Action";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const EditProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { product } = useSelector((state) => state.productReducer);

  const [form, setForm] = useState({
    id: "",
    productName: "",
    price: "",
    image: "",
    color: "",
    brand: "",
    size: "",
    category: "jewelry", // fixed category
  });

  useEffect(() => {
    dispatch(getProductAsync(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (product && product.id) {
      setForm({
        ...product,
        category: "jewelry", // ensure correct category
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedData = {
      ...form,
      category: "jewelry",
    };

    dispatch(updateProductAsync(updatedData));
    navigate("/jewelry");
  };

  return (
    <Container className="my-4">
      <h2 className="mb-4 text-center">Edit Jewelry Product</h2>
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
              placeholder="e.g. Gold, Silver, Rosegold"
            />
          </Col>
        </Form.Group>

        {/* Jewelry Type */}
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Jewelry Type</Form.Label>
          <Col sm="10">
            <Form.Select
              name="brand"
              value={form.brand}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="Bracelet">Bracelet</option>
              <option value="Necklace">Necklace</option>
              <option value="Ring">Ring</option>
              <option value="Earrings">Earrings</option>
              <option value="Chain">Chain</option>
              <option value="Pendant">Pendant</option>
              <option value="Anklet">Anklet</option>
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
              <option value="Free Size">Free Size</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
            </Form.Select>
          </Col>
        </Form.Group>

        {/* Submit Button */}
        <div className="text-center">
          <Button type="submit" variant="primary">
            Update Jewelry
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default EditProduct;
