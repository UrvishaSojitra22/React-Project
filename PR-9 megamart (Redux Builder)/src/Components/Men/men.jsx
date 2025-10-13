import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import { deleteProduct, getAllProducts } from "../../Services/Action/Action";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MenCardData = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } = useSelector((state) => state);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  const handleEdit = (id) => {
    navigate(`/edit-product/${id}`);
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
  const applyFilters = (brands, sizes) => {
    let filtered = products;

    if (brands.length > 0) {
      filtered = filtered.filter((item) => {
        if (Array.isArray(item.brand)) {
          return item.brand.some((b) => brands.includes(b));
        } else {
          return brands.includes(item.brand);
        }
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


  const allSizes = [
    ...new Set(
      products.flatMap((p) =>
        Array.isArray(p.size)
          ? p.size.map((s) => s.trim().toUpperCase())
          : [p.size?.trim().toUpperCase()]
      )
    ),
  ].filter(Boolean);

  const allBrands = [
    ...new Set(
      products.flatMap((p) =>
        Array.isArray(p.brand) ? p.brand : [p.brand]
      )
    ),
  ].filter(Boolean);

  return (
    <Container fluid className="p-4">
      <Row>

        <Col md={3} sm={12} className="border-end p-3">
          <h5 className="mb-3">Filter by Brand</h5>
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
              setFilteredProducts(products);
            }}
          >
            Clear Filters
          </Button>
        </Col>

        <Col md={9} sm={12}>
          <div className="d-flex flex-wrap gap-4 justify-content-start">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((item) => (
                <Card key={item.id} style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={item.image}
                    alt={item.productName}
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title>{item.productName}</Card.Title>
                    <Card.Text>
                      <strong>Brand:</strong>{" "}
                      {Array.isArray(item.brand)
                        ? item.brand.join(", ")
                        : item.brand}{" "}
                      <br />
                      <strong>Color:</strong> {item.color} <br />
                      <strong>Size:</strong> {item.size} <br />
                      <strong>Price:</strong> ₹{item.price}
                    </Card.Text>
                    <div className="d-flex justify-content-between">
                      <Button
                        variant="warning"
                        onClick={() => handleEdit(item.id)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              ))
            ) : (
              <h5 className="text-center w-100 mt-5">No products found</h5>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MenCardData;
