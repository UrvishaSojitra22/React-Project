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
import { useState } from 'react';
import './Header.css';
import { useDispatch, useSelector } from 'react-redux';
import { signOutAsync } from '../Services/Action/authentication';

function Header() {
  const { user } = useSelector(state => state.authReducer);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(signOutAsync());
  };

  return (
    <>
      {/* Top Navbar */}
      <Navbar expand="lg" bg="white" className="shadow-sm">
        <Container fluid className="align-items-start">
          <Navbar.Brand as={Link} to="/" className="ms-4">
            <img src="/img/download.png" alt="logo" height={50} />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex ms-5 me-auto align-items-center position-relative"
              style={{ maxWidth: "400px", width: "100%" }}>
              <Form.Control
                type="search"
                placeholder="Search"
                style={{ borderRadius: "20px" }}
              />
              <BsSearch
                size={20}
                className="position-absolute"
                style={{
                  marginRight: "25px",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "gray"
                }}
              />
            </Form>

            <div className="d-flex align-items-center me-2">
              <IoLocationOutline size={25} className="text-secondary me-2" />
              <LuUser size={28} className="text-secondary ms-2" />
              <IoMdHeartEmpty size={28} className="text-secondary ms-1" />
              <HiOutlineShoppingBag size={28} className="text-secondary me-1" />

              <Link to="/add">
                <Button variant="warning" className="text-secondary me-5"
                  style={{ borderRadius: "20px", height: "50px", color: "black" }}>
                  Add Product
                </Button>
              </Link>

              <Navbar.Text>
                {!user ? (
                  <Link className="btn btn-warning" to="/signin">SignIN</Link>
                ) : (
                  <div>
                    <Link>{user.email}</Link>
                    <button onClick={handleLogout}>Logout</button>
                  </div>
                )}
              </Navbar.Text>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Categories Navbar */}
      <Navbar bg="light" expand="lg" className="shadow-sm position-relative">
        <Container fluid className="justify-content-center">
          <Nav className="mx-auto gap-5">

            <Nav.Link as={Link} to="/goldjewelry">GoldJewelry</Nav.Link>
            <Nav.Link as={Link} to="/silverjewelry">SileverJwelry</Nav.Link>
            <Nav.Link as={Link} to="/platinumjewelry">Platinum</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
