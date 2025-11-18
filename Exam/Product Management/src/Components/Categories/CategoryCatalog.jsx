import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { deleteProductAsync, getAllProductsAsync } from "../../Services/Action/Action";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

const deriveRating = (seed) => {
  if (!seed) return "4.2";
  const numeric = seed
    .toString()
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return (3.8 + (numeric % 8) * 0.15).toFixed(1);
};

const getShippingLabel = (price, { threshold, baseFee }) => {
  const numericPrice = Number(price);
  if (!Number.isNaN(numericPrice) && numericPrice >= threshold) {
    return "Free Delivery";
  }
  return `Delivery ₹${baseFee}`;
};

const catalogConfigs = {
  beauty: {
    name: "Beauty Studio",
    description: "Skincare, haircare, and glam essentials",
    emptyHelper: "Add beauty essentials to see them listed.",
    shipping: { threshold: 699, baseFee: 39 },
  },
  electronics: {
    name: "Electronics Hub",
    description: "Gadgets, audio, and smart accessories",
    emptyHelper: "Upload the latest tech drops to populate this aisle.",
    shipping: { threshold: 1499, baseFee: 79 },
  },
  clothing: {
    name: "Clothing Collective",
    description: "Layer-ready fits for every season",
    emptyHelper: "Bring in new fits to showcase them here.",
    shipping: { threshold: 999, baseFee: 59 },
  },
};

const createCatalogComponent = (categoryKey) => {
  const config = catalogConfigs[categoryKey];

  const CatalogComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { products } = useSelector((state) => state.productReducer);

    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedSizes, setSelectedSizes] = useState([]);

    useEffect(() => {
      dispatch(getAllProductsAsync());
    }, [dispatch]);

    const categoryProducts = useMemo(() => {
      if (!Array.isArray(products)) return [];
      return products.filter(
        (product) =>
          product.category &&
          product.category.toString().trim().toLowerCase() === categoryKey
      );
    }, [products]);

    useEffect(() => {
      setFilteredProducts(categoryProducts);
    }, [categoryProducts]);

    const handleDelete = (id) => {
      dispatch(deleteProductAsync(id));
    };

    const handleEdit = (id) => {
      navigate(`/edit-product/${id}`);
    };

    const handleProductClick = (id) => {
      navigate(`/product/${id}`);
    };

    const applyFilters = (brands, sizes) => {
      let filtered = categoryProducts;

      if (brands.length > 0) {
        filtered = filtered.filter((item) => {
          if (Array.isArray(item.brand)) {
            return item.brand.some((b) => brands.includes(b));
          }
          return brands.includes(item.brand);
        });
      }

      if (sizes.length > 0) {
        filtered = filtered.filter((item) => {
          if (Array.isArray(item.size)) {
            return item.size.some((s) =>
              sizes.includes(s.trim().toUpperCase())
            );
          } else if (typeof item.size === "string") {
            return sizes.includes(item.size.trim().toUpperCase());
          }
          return false;
        });
      }

      setFilteredProducts(filtered);
    };

    const handleBrandFilter = (brand) => {
      let updatedBrands = [...selectedBrands];
      if (updatedBrands.includes(brand)) {
        updatedBrands = updatedBrands.filter((b) => b !== brand);
      } else {
        updatedBrands.push(brand);
      }
      setSelectedBrands(updatedBrands);
      applyFilters(updatedBrands, selectedSizes);
    };

    const handleSizeFilter = (size) => {
      let updatedSizes = [...selectedSizes];
      if (updatedSizes.includes(size)) {
        updatedSizes = updatedSizes.filter((s) => s !== size);
      } else {
        updatedSizes.push(size);
      }
      setSelectedSizes(updatedSizes);
      applyFilters(selectedBrands, updatedSizes);
    };

    const allSizes = useMemo(
      () =>
        [
          ...new Set(
            categoryProducts.flatMap((p) =>
              Array.isArray(p.size)
                ? p.size.map((s) => s.trim().toUpperCase())
                : [p.size?.trim().toUpperCase()]
            )
          ),
        ].filter(Boolean),
      [categoryProducts]
    );

    const allBrands = useMemo(
      () =>
        [
          ...new Set(
            categoryProducts.flatMap((p) =>
              Array.isArray(p.brand) ? p.brand : [p.brand]
            )
          ),
        ].filter(Boolean),
      [categoryProducts]
    );

    return (
      <Container className="fk-shell fk-product-page">
        <div className="fk-section-heading">
          <div>
            <h3>{config.name}</h3>
            <p className="text-muted mb-0">{config.description}</p>
          </div>
        </div>
        <Row className="g-4">
          <Col md={3} sm={12}>
            <div className="fk-filter-panel">
              <h5 className="mb-3">Filter by Brand</h5>
              {allBrands.length > 0 ? (
                allBrands.map((brand, i) => (
                  <Form.Check
                    key={brand + i}
                    type="checkbox"
                    label={brand}
                    checked={selectedBrands.includes(brand)}
                    onChange={() => handleBrandFilter(brand)}
                  />
                ))
              ) : (
                <p className="text-muted">No brands available</p>
              )}

              <h5 className="mt-4 mb-3">Filter by Size</h5>
              {allSizes.length > 0 ? (
                allSizes.map((size, i) => (
                  <Form.Check
                    key={size + i}
                    type="checkbox"
                    label={size}
                    checked={selectedSizes.includes(size)}
                    onChange={() => handleSizeFilter(size)}
                  />
                ))
              ) : (
                <p className="text-muted">No sizes available</p>
              )}

              <Button
                variant="light"
                size="sm"
                className="mt-3 fk-btn-ghost"
                onClick={() => {
                  setSelectedBrands([]);
                  setSelectedSizes([]);
                  setFilteredProducts(categoryProducts);
                }}
              >
                Clear Filters
              </Button>
            </div>
          </Col>

          <Col md={9} sm={12}>
            <div className="d-flex flex-wrap gap-4">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((item) => (
                  <Card
                    key={item.id}
                    className="fk-product-card"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleProductClick(item.id)}
                  >
                    <Card.Img
                      variant="top"
                      src={item.image}
                      alt={item.productName}
                    />
                    <Card.Body>
                      <span className="fk-rating">
                        {deriveRating(item.id)} ★
                      </span>
                      <Card.Title>{item.productName}</Card.Title>
                      <Card.Text>
                        <div className="fk-price">
                          ₹{item.price}
                          <span>₹{Number(item.price || 0) + 900}</span>
                        </div>
                        <small className="text-muted d-block mb-2">
                          Brand:{" "}
                          {Array.isArray(item.brand)
                            ? item.brand.join(", ")
                            : item.brand}{" "}
                          · Size: {item.size}
                        </small>
                        <strong className="text-success">
                          {getShippingLabel(item.price, config.shipping)}
                        </strong>
                      </Card.Text>
                      <div className="fk-card-actions">
                        <Button
                          variant="primary"
                          className="fk-btn-primary flex-fill"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleEdit(item.id);
                          }}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="light"
                          className="fk-btn-ghost flex-fill"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDelete(item.id);
                          }}
                        >
                          Delete
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                ))
              ) : (
                <div className="fk-empty-state w-100">
                  <h5>No {config.name.toLowerCase()} products found</h5>
                  <p>{config.emptyHelper}</p>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    );
  };

  CatalogComponent.displayName = `${config.name.replace(/\s/g, "")}Catalog`;
  return CatalogComponent;
};

export const BeautyCatalog = createCatalogComponent("beauty");
export const ElectronicsCatalog = createCatalogComponent("electronics");
export const ClothingCatalog = createCatalogComponent("clothing");

export default ClothingCatalog;

