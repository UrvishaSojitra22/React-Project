import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaCommentDots,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#fff", borderTop: "1px solid #ddd" }}>
      {/* -------- TOP FOOTER -------- */}
      <Container style={{ padding: "40px 0" }}>
        <Row>
          {/* TOP CATEGORIES */}
          <Col md={3} sm={6}>
            <h6 className="fw-bold mb-3">TOP CATEGORIES</h6>
            <ul className="list-unstyled text-muted">
              <li>Men</li>
              <li>Women</li>
              <li>Kids</li>
              <li>Footwear</li>
              <li>Innerwear</li>
              <li>Accessories</li>
              <li>Jewelry</li> {/* ⭐ Added */}
            </ul>
          </Col>

          {/* TOP BRANDS */}
          <Col md={3} sm={6}>
            <h6 className="fw-bold mb-3">TOP BRANDS</h6>
            <ul className="list-unstyled text-muted">
              <li>U.S. Polo Assn.</li>
              <li>Arrow</li>
              <li>Flying Machine</li>
              <li>Tommy Hilfiger</li>
              <li>Calvin Klein</li>
              <li>AD By Arvind</li>
            </ul>
          </Col>

          {/* USEFUL LINKS */}
          <Col md={3} sm={6}>
            <h6 className="fw-bold mb-3">USEFUL LINKS</h6>
            <ul className="list-unstyled text-muted">
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
              <li>Returns and Cancellation policy</li>
              <li>Help and FAQ’s</li>
              <li>Delivery and Shipping Policy</li>
            </ul>
          </Col>

          {/* CONTACT US */}
          <Col md={3} sm={6}>
            <h6 className="fw-bold mb-3">CONTACT US</h6>
            <ul className="list-unstyled text-muted">
              <li className="d-flex align-items-center mb-2">
                <FaPhoneAlt className="me-2" /> +91-9740542174
              </li>
              <li className="d-flex align-items-center mb-2">
                <FaEnvelope className="me-2" /> care@megamartfashions.com
              </li>
              <li className="d-flex align-items-center">
                <FaCommentDots className="me-2" /> Message Us
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      <hr className="m-0" />

      {/* -------- BOTTOM IMAGE FOOTER (Hostingard Style) -------- */}
      <div
        style={{
          backgroundColor: "#0c0c0c",
          color: "#ccc",
          padding: "60px 0",
        }}
      >
        <Container>
          <Row>
            {/* BRAND DETAILS */}
            <Col md={4}>
              <h4 className="text-light">Hostingard</h4>
              <p className="small">
                Whether you run an e-commerce site or a web business, you want
                to attract as many visitors...
              </p>

              <h6 className="text-light mt-4">We Accepted</h6>
              <div className="d-flex gap-3 fs-5">
                <FaInstagram />
                <FaFacebookF />
                <FaYoutube />
                <FaXTwitter />
              </div>
            </Col>

            {/* COLUMN 1 */}
            <Col md={2}>
              <h6 className="text-light mb-3">Products & Solution</h6>
              <ul className="list-unstyled small">
                <li>WordPress Hosting</li>
                <li>Shared Hosting</li>
                <li>VPS Hosting</li>
                <li>Domain Registration</li>
                <li>Jewelry Hosting</li> {/* ⭐ Added Optional Branding */}
              </ul>
            </Col>

            {/* COLUMN 2 */}
            <Col md={3}>
              <h6 className="text-light mb-3">Company Information</h6>
              <ul className="list-unstyled small">
                <li>About Us</li>
                <li>Partners</li>
                <li>Blog</li>
                <li>Careers</li>
              </ul>
            </Col>

            {/* COLUMN 3 */}
            <Col md={3}>
              <h6 className="text-light mb-3">Help & Support</h6>
              <ul className="list-unstyled small">
                <li>Contact Us</li>
                <li>Knowledge Base</li>
                <li>Live Chat</li>
                <li>Hosting Glossary</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>

      {/* -------- COPYRIGHT -------- */}
      <div className="text-center py-3 small" style={{ background: "#000", color: "#aaa" }}>
        © 2025 MegaMart. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
