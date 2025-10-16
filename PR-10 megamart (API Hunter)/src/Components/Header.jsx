import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsSearch } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { IoMdHeartEmpty } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      {/* Main Navbar */}
      <Navbar expand="lg" bg="white" className="shadow-sm">
        <Container fluid className="align-items-center">
          
          {/* Logo */}
          <Navbar.Brand as={Link} to="/" className="ms-4">
            <img src="/img/logo (2).png" alt="logo" height={50} />
          </Navbar.Brand>

          {/* Toggle button for mobile */}
          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex ms-5 me-auto align-items-center position-relative" style={{ maxWidth: "400px",left:"250px", width: "100%" }}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-3"
                style={{ borderRadius: "20px"}}
              />
              <BsSearch size={20} className="position-absolute" style={{marginRight:"25px", right: "10px", top: "50%", transform: "translateY(-50%)", color: "gray" }} />
            </Form>

            {/* Icons */}
            <div className="d-flex align-items-center me-4">
              <IoLocationOutline size={25} className="text-secondary me-3" />
              <LuUser size={28} className="text-secondary me-3" />
              <IoMdHeartEmpty size={28} className="text-secondary me-3" />
              <HiOutlineShoppingBag size={28} className="text-secondary me-3" />
              <Link to="/Add">
                <Button 
                  variant="warning"
                  style={{ borderRadius: "20px", height: "40px", color: "black" }}
                >
                 Men's Add Product
                </Button>
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Second Navbar for menu items */}
      <Navbar bg="light" expand="lg" className="second-header shadow-sm">
        <Container fluid className="justify-content-center">
          <Nav className="mx-auto gap-5 ">
            <Nav.Link as={Link} to="/MenCard">Men</Nav.Link>
            <Nav.Link as={Link} to="/Women">Women</Nav.Link>
            <Nav.Link as={Link} to="/Kids">Kids</Nav.Link>
            <Nav.Link as={Link} to="/Footwear">Footwear</Nav.Link>
            <Nav.Link as={Link} to="/Accessories">Accessories</Nav.Link>
            <Nav.Link as={Link} to="/Brands">Brands</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
