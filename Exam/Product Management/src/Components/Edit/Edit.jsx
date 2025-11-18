import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductAsync, updateProductAsync } from "../../Services/Action/Action";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import uploadImage from "../../Services/uploadImage/uploadImage";

const EditProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Assuming your state has a 'product' object loaded by getProductAsync
  const { product } = useSelector((state) => state.productReducer); 

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
    if (product && product.id) {
      setForm({
        ...product,
        category: product.category
          ? product.category.toString().trim().toLowerCase()
          : "",
      });
    }
  }, [product]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "category") {
      setForm({ ...form, [name]: value.trim().toLowerCase() });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

   const handleImage = async (e) => {
      let imageUrl = await uploadImage(e.target.files[0]);
      setForm({
        ...form,
        image: `${imageUrl}`
      });
    }
  
  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProductAsync(form));
    
    const normalizedCategory = form.category?.toLowerCase?.() ?? "";
    const pathMap = {
      beauty: "/beauty",
      electronics: "/electronics",
      clothing: "/clothing",
    };
    navigate(pathMap[normalizedCategory] || "/clothing");
  };

  return (
    <section className="fk-section">
      <Container className="fk-shell">
        <div className="fk-form-card">
          <h2 className="mb-4">Edit Product</h2>
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
              <option value="beauty">Beauty</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
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
              type="file"
              name="image"
              onChange={handleImage}
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
              <Button type="submit" className="fk-btn-primary">
                Update Product
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    </section>
  );
};

export default EditProduct;