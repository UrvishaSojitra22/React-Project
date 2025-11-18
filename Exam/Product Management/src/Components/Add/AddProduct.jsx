import { useState } from "react";
import { useDispatch } from "react-redux";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import generateUniqueId from "generate-unique-id";
import { useNavigate } from "react-router-dom";
import { addNewProductAsync } from "../../Services/Action/Action";
import uploadImage from "../../Services/uploadImage/uploadImage";

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
    category: "",
  };

  const [inputForm, setInputForm] = useState(initialState);

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setInputForm({ ...inputForm, [name]: value });
  };

  const handleImage = async (e) => {
    let imageUrl = await uploadImage(e.target.files[0]);
    setInputForm({
      ...inputForm,
      image: `${imageUrl}`
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = generateUniqueId({ length: 5, useLetters: false });

    const normalizedCategory = inputForm.category.trim().toLowerCase();

    const data = {
      ...inputForm,
      id,
      category: normalizedCategory,
    };

    dispatch(addNewProductAsync(data));

    // Navigate based on category
    const pathMap = {
      beauty: "/beauty",
      electronics: "/electronics",
      clothing: "/clothing",
    };
    const navigatePath = pathMap[normalizedCategory] || "/clothing";

    setInputForm(initialState);
    navigate(navigatePath);
  };

  return (
    <section className="fk-section">
      <Container className="fk-shell">
        <div className="fk-form-card">
          <h2 className="mb-4">Add Product</h2>

          <Form onSubmit={handleSubmit}>
        {/* --- Category --- */}
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Category
          </Form.Label>
          <Col sm="10">
            <Form.Select
              name="category"
              value={inputForm.category}
              onChange={handleChanged}
              required
            >
              <option value="">Select Category</option>
              <option value="beauty">Beauty</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
            </Form.Select>
          </Col>
        </Form.Group>

        {/* --- Product Name --- */}
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
              type="file"
              name="image"
              onChange={handleImage}
              placeholder="Enter Product Image URL"
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
              placeholder="Enter Product Color"
            />
          </Col>
        </Form.Group>

        {/* --- Brand --- */}
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
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </Form.Select>
          </Col>
        </Form.Group>

            {/* --- Submit --- */}
            <div className="text-center">
              <Button type="submit" className="fk-btn-primary">
                Add Product
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    </section>
  );
};

export default AddProduct;
