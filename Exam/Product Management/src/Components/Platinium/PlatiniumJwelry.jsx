import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useEffect, useState, useMemo } from "react";
import { deleteProductAsync, getAllProductsAsync } from "../../Services/Action/Action";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const PlatiniumJwelryData = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.productReducer);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);

  useEffect(() => {
    dispatch(getAllProductsAsync());
  }, [dispatch]);

  // ✅ FIXED: CATEGORY FILTER
  const jewelryCategoryProducts = useMemo(() => {
    if (!Array.isArray(products)) return [];
    return products.filter((product) => {
      const category = (product.category || "").toLowerCase();
      return category.includes("jewel"); // FIX
    });
  }, [products]);

  useEffect(() => {
    setFilteredProducts(jewelryCategoryProducts);
  }, [jewelryCategoryProducts]);

  const handleDelete = (id, e) => {
    e.stopPropagation();
    dispatch(deleteProductAsync(id));
  };

  const handleEdit = (id, e) => {
    e.stopPropagation();
    navigate(`/edit-product/${id}`);
  };

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  // FILTERS
  const handleBrandFilter = (brand) => {
    const updated = selectedBrands.includes(brand)
      ? selectedBrands.filter((b) => b !== brand)
      : [...selectedBrands, brand];

    setSelectedBrands(updated);
    applyFilters(updated, selectedSizes);
  };

  const handleSizeFilter = (size) => {
    const updated = selectedSizes.includes(size)
      ? selectedSizes.filter((s) => s !== size)
      : [...selectedSizes, size];

    setSelectedSizes(updated);
    applyFilters(selectedBrands, updated);
  };

  const applyFilters = (brands, sizes) => {
    let filtered = jewelryCategoryProducts;

    // BRAND FILTER
    if (brands.length > 0) {
      filtered = filtered.filter((item) => {
        const brandValues = Array.isArray(item.brand) ? item.brand : [item.brand];
        return brandValues.some((b) => brands.includes(b));
      });
    }

    // SIZE FILTER
    if (sizes.length > 0) {
      filtered = filtered.filter((item) => {
        const sizeValues = Array.isArray(item.size)
          ? item.size.map((s) => s.trim().toUpperCase())
          : [item.size?.trim().toUpperCase()];
        return sizeValues.some((s) => sizes.includes(s));
      });
    }

    setFilteredProducts(filtered);
  };

  // All Sizes
  const allSizes = useMemo(
    () =>
      [
        ...new Set(
          jewelryCategoryProducts.flatMap((p) =>
            Array.isArray(p.size)
              ? p.size.map((s) => s.trim().toUpperCase())
              : [p.size?.trim().toUpperCase()]
          )
        ),
      ].filter(Boolean),
    [jewelryCategoryProducts]
  );

  // All Brands
  const allBrands = useMemo(
    () =>
      [
        ...new Set(
          jewelryCategoryProducts.flatMap((p) =>
            Array.isArray(p.brand) ? p.brand : [p.brand]
          )
        ),
      ].filter(Boolean),
    [jewelryCategoryProducts]
  );

  return (
    <Container fluid className="p-4">
      <Row>
        {/* Sidebar Filters */}
        <Col md={3} sm={12} className="border-end p-3">
          <h5 className="mb-3">Jewellery</h5>

          {/* Brand Filter */}
          {allBrands.length > 0 ? (
            allBrands.map((brand, i) => (
              <Form.Check
                key={i}
                type="checkbox"
                label={brand}
                checked={selectedBrands.includes(brand)}
                onChange={() => handleBrandFilter(brand)}
              />
            ))
          ) : (
            <p>No brands available</p>
          )}

          <h5 className="mt-4 mb-3">Filter by Size</h5>
          {allSizes.length > 0 ? (
            allSizes.map((size, i) => (
              <Form.Check
                key={i}
                type="checkbox"
                label={size}
                checked={selectedSizes.includes(size)}
                onChange={() => handleSizeFilter(size)}
              />
            ))
          ) : (
            <p>No sizes available</p>
          )}

          <Button
            variant="secondary"
            size="sm"
            className="mt-3"
            onClick={() => {
              setSelectedBrands([]);
              setSelectedSizes([]);
              setFilteredProducts(jewelryCategoryProducts);
            }}
          >
            Clear Filters
          </Button>
        </Col>

        {/* Product Cards */}
        <Col md={9} sm={12}>
          <div className="d-flex flex-wrap gap-4 justify-content-start">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((item) => {
                const id = item._id || item.id; // Works for both MongoDB & JSON

                return (
                  <Card
                    key={id}
                    style={{ width: "18rem", cursor: "pointer" }}
                    onClick={() => handleProductClick(id)}
                  >
                    <Card.Img
                      variant="top"
                      src={item.image}
                      alt={item.productName}
                      style={{ height: "260px", objectFit: "cover" }}
                    />
                    <Card.Body>
                      <Card.Title>{item.productName}</Card.Title>
                      <Card.Text>
                        <strong>Category:</strong> {item.category} <br />
                        <strong>Brand:</strong>{" "}
                        {Array.isArray(item.brand) ? item.brand.join(", ") : item.brand}
                        <br />
                        <strong>Color:</strong> {item.color} <br />
                        <strong>Size:</strong> {item.size} <br />
                        <strong>Price:</strong> ₹{item.price}
                      </Card.Text>

                      <div className="d-flex justify-content-between">
                        <Button variant="warning" onClick={(e) => handleEdit(id, e)}>
                          Edit
                        </Button>
                        <Button variant="danger" onClick={(e) => handleDelete(id, e)}>
                          Delete
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                );
              })
            ) : (
              <h5 className="text-center w-100 mt-5">No Jewellery products found</h5>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PlatiniumJwelryData;
