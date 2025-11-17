import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.productReducer);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <Container className="text-center my-5">
        <h2>Product not found 😢</h2>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <Button
        variant="secondary"
        className="mb-5"
        onClick={() => navigate(-1)} >
        ← Back
      </Button>

      <Row className="align-items-center">
        <Col md={6}>
          <Image src={product.image} alt={product.productName} fluid rounded />
        </Col>

        <Col md={6}>
          <h2>{product.productName}</h2>
          <h4 className="text-primary">₹{product.price}</h4>

          <p><strong>Color:</strong> {product.color || "N/A"}</p>

          <p><strong>Brand:</strong> {product.brand}</p>

          <p><strong>Size:</strong> {product.size}</p>

          <p><strong>Category:</strong> {product.category}</p>

          {/* 👇 These fields only show IF they exist */}
          {product.material && (
            <p><strong>Material:</strong> {product.material}</p>
          )}

          {product.weight && (
            <p><strong>Weight:</strong> {product.weight} gm</p>
          )}

          {product.purity && (
            <p><strong>Purity:</strong> {product.purity}</p>
          )}

          {product.type && (
            <p><strong>Jewelry Type:</strong> {product.type}</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default SingleProduct;
  