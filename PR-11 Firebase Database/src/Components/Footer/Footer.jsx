import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaCommentDots, FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer style={{ backgroundColor: "#fff", padding: "50px 0", borderTop: "1px solid #ddd" }}>
            <Container>
                <Row>
                    {/* TOP CATEGORIES */}
                    <Col md={3} sm={6}>
                        <h6 className="fw-bold mb-3 ">TOP CATEGORIES</h6>
                        <ul className="list-unstyled text-muted pt-1">
                            <li className="mb-3">Men</li>
                            <li className="mb-3">Women</li>
                            <li className="mb-3">Women</li>
                            <li className="mb-3">Kids</li>
                            <li className="mb-3">Footwear</li>
                            <li className="mb-3">Innerwear</li>
                            <li className="mb-3">Accessories</li>
                        </ul>
                    </Col>

                    {/* TOP BRANDS */}
                    <Col md={3} sm={6}>
                        <h6 className="fw-bold mb-3">TOP BRANDS</h6>
                        <ul className="list-unstyled text-muted">
                            <li className="mb-3">U.S. Polo Assn.</li>
                            <li className="mb-3">Arrow</li>
                            <li className="mb-3">Flying Machine</li>
                            <li className="mb-3">Tommy Hilfiger</li>
                            <li className="mb-3">Calvin Klein</li>
                            <li className="mb-3">AD By Arvind</li>
                        </ul>
                    </Col>

                    {/* USEFUL LINKS */}
                    <Col md={3} sm={6}>
                        <h6 className="fw-bold mb-3">USEFUL LINKS</h6>
                        <ul className="list-unstyled text-muted">
                            <li className="mb-3">About Us</li>
                            <li className="mb-3">Privacy Policy</li>
                            <li className="mb-3">Terms and Conditions</li>
                            <li className="mb-3">Returns and Cancellation policy</li>
                            <li className="mb-3">Help and FAQ’s</li>
                            <li className="mb-3">Delivery and Shipping Policy</li>
                        </ul>
                    </Col>

                    {/* CONTACT US */}
                    <Col md={3} sm={6}>
                        <h6 className="fw-bold mb-3">CONTACT US</h6>
                        <ul className="list-unstyled text-muted">
                            <li className="d-flex align-items-center mb-3">
                                <FaPhoneAlt className="me-2 mb-3"/> +91-9740542174
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <FaEnvelope className="me-2" /> care@megamartfashions.com
                            </li>
                            <li className="d-flex align-items-center">
                                <FaCommentDots className="me-2" /> Message Us
                            </li>
                        </ul>
                    </Col>
                    {/* DOWNLOAD THE APP */}
                    <Col md={6} className="mb-4 mb-md-0 pt-5">
                        <h6 className="fw-bold mb-3">DOWNLOAD THE APP</h6>
                        <div className="d-flex align-items-center gap-3 flex-wrap">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                alt="Google Play"
                                width="140"
                            />
                            <img
                                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                                alt="App Store"
                                width="130"
                            />
                        </div>

                        <h6 className="fw-bold mb-3 pt-5">FOLLOW US</h6>
                        <div className="d-flex align-items-center gap-4 fs-4">
                            <FaInstagram />
                            <FaYoutube />
                            <FaXTwitter />
                            <FaFacebookF />
                        </div>
                    </Col>

                </Row>
            </Container>
        </footer>
    );
};

export default Footer;







// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { FaPhoneAlt, FaEnvelope, FaCommentDots, FaInstagram, FaYoutube, FaXTwitter, FaFacebookF } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer style={{ backgroundColor: "#fff", borderTop: "1px solid #ddd" }}>
//       {/* -------- TOP FOOTER -------- */}
//       <Container style={{ padding: "40px 0" }}>
//         <Row>
//           {/* TOP CATEGORIES */}
//           <Col md={3} sm={6}>
//             <h6 className="fw-bold mb-3">TOP CATEGORIES</h6>
//             <ul className="list-unstyled text-muted">
//               <li>Men</li>
//               <li>Women</li>
//               <li>Kids</li>
//               <li>Footwear</li>
//               <li>Innerwear</li>
//               <li>Accessories</li>
//             </ul>
//           </Col>

//           {/* TOP BRANDS */}
//           <Col md={3} sm={6}>
//             <h6 className="fw-bold mb-3">TOP BRANDS</h6>
//             <ul className="list-unstyled text-muted">
//               <li>U.S. Polo Assn.</li>
//               <li>Arrow</li>
//               <li>Flying Machine</li>
//               <li>Tommy Hilfiger</li>
//               <li>Calvin Klein</li>
//               <li>AD By Arvind</li>
//             </ul>
//           </Col>

//           {/* USEFUL LINKS */}
//           <Col md={3} sm={6}>
//             <h6 className="fw-bold mb-3">USEFUL LINKS</h6>
//             <ul className="list-unstyled text-muted">
//               <li>About Us</li>
//               <li>Privacy Policy</li>
//               <li>Terms and Conditions</li>
//               <li>Returns and Cancellation policy</li>
//               <li>Help and FAQ’s</li>
//               <li>Delivery and Shipping Policy</li>
//             </ul>
//           </Col>

//           {/* CONTACT US */}
//           <Col md={3} sm={6}>
//             <h6 className="fw-bold mb-3">CONTACT US</h6>
//             <ul className="list-unstyled text-muted">
//               <li className="d-flex align-items-center mb-2">
//                 <FaPhoneAlt className="me-2" /> +91-9740542174
//               </li>
//               <li className="d-flex align-items-center mb-2">
//                 <FaEnvelope className="me-2" /> care@megamartfashions.com
//               </li>
//               <li className="d-flex align-items-center">
//                 <FaCommentDots className="me-2" /> Message Us
//               </li>
//             </ul>
//           </Col>
//         </Row>
//       </Container>

//       <hr className="m-0" />

//       {/* -------- BOTTOM FOOTER -------- */}
//       <Container style={{ padding: "30px 0" }}>
//         <Row className="align-items-center">
//           {/* DOWNLOAD THE APP */}
//           <Col md={6} className="mb-4 mb-md-0">
//             <h6 className="fw-bold mb-3">DOWNLOAD THE APP</h6>
//             <div className="d-flex align-items-center gap-3 flex-wrap">
//               <img
//                 src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
//                 alt="Google Play"
//                 width="140"
//               />
//               <img
//                 src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
//                 alt="App Store"
//                 width="130"
//               />
//             </div>
//           </Col>

//           {/* FOLLOW US */}
//           <Col md={6}>
//             <h6 className="fw-bold mb-3">FOLLOW US</h6>
//             <div className="d-flex align-items-center gap-4 fs-4">
//               <FaInstagram />
//               <FaYoutube />
//               <FaXTwitter />
//               <FaFacebookF />
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;
