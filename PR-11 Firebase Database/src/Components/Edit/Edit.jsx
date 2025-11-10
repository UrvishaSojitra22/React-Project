import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductAsync, updateProductAsync } from "../../Services/Action/Action";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const EditProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Assuming your state has a 'product' object loaded by getProductAsync
  const { product } = useSelector((state) => state); 

  const [form, setForm] = useState({
    id: "",
    productName: "",
    price: "",
    image: "",
    color: "",
    brand: "",
    size: "",
    category: "", // ✅ Added Category field
  });

  // Load single product from Redux state
  useEffect(() => {
    // You should ensure your Redux state property holding the single product is correct. 
    // If it's `state.productReducer.singleProduct`, adjust the useSelector above.
    dispatch(getProductAsync(id));
  }, [dispatch, id]);

  // When product is loaded, fill the form
  useEffect(() => {
    // Ensure 'product' is not null/undefined before setting the form
    if (product && product.id) setForm(product); 
  }, [product]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProductAsync(form));
    
    // ✅ Logic to navigate based on the product's category
    let navigatePath;
    
    switch (form.category) {
      case "Women":
        navigatePath = "/WomenCard";
        break;
      case "Kids":
        navigatePath = "/KidsCard";
        break;
      case "Men":
      default:
        navigatePath = "/MenCard";
        break;
    }
    
    navigate(navigatePath); // Navigate to the correct product list page
  };

  return (
    <Container className="my-4">
      <h2 className="mb-4 text-center">Edit Product</h2>
      <Form onSubmit={handleSubmit}>
        
        {/* --- CATEGORY (New Field) --- */}
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Category
          </Form.Label>
          <Col sm="10">
            <Form.Select
              name="category"
              value={form.category}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </Form.Select>
          </Col>
        </Form.Group>

        {/* Product Name */}
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Product Name</Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              name="productName"
              value={form.productName}
              onChange={handleChange}
              required />
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