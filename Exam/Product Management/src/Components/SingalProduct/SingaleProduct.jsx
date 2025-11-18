import React, { useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Button, Image } from "react-bootstrap";

const categoryLabels = {
  beauty: "Beauty",
  electronics: "Electronics",
  clothing: "Clothing",
};

const formatCategory = (value) => {
  const normalized = value?.toString().trim().toLowerCase();
  return categoryLabels[normalized] || (value ? value.toString() : "N/A");
};

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.productReducer);
  const product = useMemo(() => products.find((p) => p.id === id), [products, id]);

  if (!product) {
    return (
      <section className="fk-detail-page">
        <Container className="fk-shell">
          <div className="fk-empty-state">
            <h5>Product not found</h5>
            <p>This item might have moved or been deleted.</p>
            <Button variant="primary" className="fk-btn-primary" onClick={() => navigate("/")}>
              Browse Products
            </Button>
          </div>
        </Container>
      </section>
    );
  }

  const highlights = [
    `Color: ${product.color || "Assorted"}`,
    `Brand: ${Array.isArray(product.brand) ? product.brand.join(", ") : product.brand}`,
    `Size: ${product.size || "Free Size"}`,
    `Category: ${formatCategory(product.category)}`
  ];

  return (
    <section className="fk-detail-page">
      <Container className="fk-shell">
        <Button variant="link" className="text-decoration-none mb-3" onClick={() => navigate(-1)}>
          ← Back to results
        </Button>

        <div className="fk-detail-shell">
          <div className="fk-detail-hero">
            <Image src={product.image} alt={product.productName} fluid rounded />
          </div>

          <div className="fk-detail-info">
            <span className="fk-rating">4.5 ★ Assured</span>
            <h2>{product.productName}</h2>
            <div className="fk-price">
              ₹{product.price}
              <span>₹{Number(product.price || 0) + 1000}</span>
            </div>
            <p className="text-success fw-semibold">Inclusive of all taxes · {product.size ? `${product.size} ready` : "Ready to ship"}</p>

            <ul className="fk-detail-list">
              {highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>

            <div className="fk-detail-actions">
              <Button className="btn-primary">Add to Bag</Button>
              <Button variant="light" className="btn-outline">Wishlist</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SingleProduct;
