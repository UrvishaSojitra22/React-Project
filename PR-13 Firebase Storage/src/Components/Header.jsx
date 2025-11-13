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
  const [activeMenu, setActiveMenu] = useState(null);
  const handleMouseEnter = (menu) => setActiveMenu(menu);
  const handleMouseLeave = () => setActiveMenu(null);
  const { user } = useSelector(state => state.authReducer);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(signOutAsync())
  }

  return (
    <>
      {/* Top Navbar */}
      <Navbar expand="lg" bg="white" className="shadow-sm">
        <Container fluid className="align-items-start">
          <Navbar.Brand as={Link} to="/" className="ms-4">
            <img src="/img/logo (2).png" alt="logo" height={50} />
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
              <IoLocationOutline size={25} className="text-secondary me-2 " />
              <LuUser size={28} className="text-secondary ms-2" />
              <IoMdHeartEmpty size={28} className="text-secondary ms-1" />
              <HiOutlineShoppingBag size={28} className="text-secondary me-1" />
              <Link to="/Add" >
                <Button
                  variant="warning"
                  className='text-secondary me-5'
                  style={{ borderRadius: "20px", height: "50px", color: "black" }}
                >
                  Add Product
                </Button>
              </Link>
              <Navbar.Text>
                {!user ? <Link className='btn btn-warning' to={"/signIn"}>SignIN</Link> : <div>
                  <Link>{user.email}</Link> <button onClick={handleLogout}>Logout</button></div>}
              </Navbar.Text>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Second Navbar (Categories) */}
      <Navbar bg="light" expand="lg" className="shadow-sm position-relative">
        <Container fluid className="justify-content-center">
          <Nav className="mx-auto gap-5">

            {/* MEN */}
            <div
              onMouseEnter={() => handleMouseEnter("men")}
              onMouseLeave={handleMouseLeave}
              className="position-relative nav-item-hover"
            >
              <Nav.Link as={Link} to="/MenCard">Men</Nav.Link>
              {activeMenu === "men" && (
                <div className="dropdown-menu-custom men-dropdown">
                  <div className="dropdown-left">
                    <div>
                      <h6>TOPWEAR</h6>
                      <p>T-Shirts</p>
                      <p>Polo Shirts</p>
                      <p>Casual Shirts</p>
                      <p>Formal Shirts</p>
                      <p>Sweatshirts & Hoodies</p>
                      <p>Jackets</p>
                      <p>Blazers</p>
                      <p>Suits</p>
                    </div>
                    <div>
                      <h6>BOTTOMWEAR</h6>
                      <p>Jeans</p>
                      <p>Chinos</p>
                      <p>Casual Trousers</p>
                      <p>Formal Trousers</p>
                      <p>Shorts</p>
                      <p>Track Pants</p>
                      <p>Cargo Pants</p>
                      <p><strong>View All</strong></p>
                    </div>
                  </div>
                  <div className="dropdown-right">
                    <img src="public/img/1st img.png" alt="Men's Collection" />
                  </div>
                </div>
              )}
            </div>

            {/* WOMEN */}
            <div
              onMouseEnter={() => handleMouseEnter("Women")}
              onMouseLeave={handleMouseLeave}
              className="position-relative nav-item-hover" >
              <Nav.Link as={Link} to="/WomenCard">Women</Nav.Link>
              {activeMenu === "Women" && (
                <div className="dropdown-menu-custom women-dropdown">
                  <div className="dropdown-left">
                    <div>
                      <h6>TOPWEAR</h6>
                      <p>Tops</p>
                      <p>Kurtis</p>
                      <p>Sarees</p>
                      <p>Dresses</p>
                      <p>Blouses</p>
                      <p>Sweaters & Cardigans</p>
                    </div>
                    <div>
                      <h6>BOTTOMWEAR</h6>
                      <p>Jeans</p>
                      <p>Leggings</p>
                      <p>Skirts</p>
                      <p>Palazzos</p>
                      <p>Shorts</p>
                      <p><strong>View All</strong></p>
                    </div>
                  </div>
                  <div className="dropdown-right">
                    <img src="public/img/2nd img.png" alt="Women's Collection" />
                  </div>
                </div>
              )}
            </div>
            {/* Kids */}
            <div
              onMouseEnter={() => handleMouseEnter("kids")}
              onMouseLeave={handleMouseLeave}
              className="position-relative nav-item-hover"
            >
              <Nav.Link as={Link} to="/KidsCard">kids</Nav.Link>
              {activeMenu === "kids" && (
                <div className="dropdown-menu-custom kids-dropdown">
                  <div className="dropdown-left">
                    <div>
                      <h6>TOPWEAR</h6>
                      <p>Tops</p>
                      <p>Kurtis</p>
                      <p>Sarees</p>
                      <p>Dresses</p>
                      <p>Blouses</p>
                      <p>Sweaters & Cardigans</p>
                    </div>
                    <div>
                      <h6>BOTTOMWEAR</h6>
                      <p>Jeans</p>
                      <p>Leggings</p>
                      <p>Skirts</p>
                      <p>Palazzos</p>
                      <p>Shorts</p>
                      <p><strong>View All</strong></p>
                    </div>
                  </div>
                  <div className="dropdown-right">
                    <img src="public/img/3rd img.png" alt="Women's Collection" />
                  </div>
                </div>
              )}
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default Header;