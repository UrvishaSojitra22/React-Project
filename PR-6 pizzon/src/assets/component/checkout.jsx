import Form from 'react-bootstrap/Form';
import './checkout.css';

function Checkout() {
  return (
    <>
      <div className="checkout">
        <div className="container-fluid">
          <div className="row">
      
            <div className="col-12 col-lg-8 pe-lg-5 mb-4 mb-lg-0">
              <h3>Billing Details</h3>
              <br />

              <div className="row">
                <div className="col-12 col-md-6 mb-3 pb-4 ">
                  <Form.Control className='pb-3 fs-10' style={{fontSize:18}}  type="text" placeholder="First Name" />
                </div>
                <div className="col-12 col-md-6 mb-3 pb-4">
                  <Form.Control  className='pb-3 fs-10' style={{fontSize:18}} type="text" placeholder="Last Name" />
                </div>
                <div className="col-12 col-md-6 mb-3 pb-4">
                  <Form.Control className='pb-3 fs-10' style={{fontSize:18}}
                  
                    type="text"
                    placeholder="Company Name"
                  />
                </div>
                <div className="col-12 col-md-6 mb-3 pb-4">
                  <Form.Control className='pb-3 fs-10' style={{fontSize:18}}
               
                    type="text"
                    placeholder="Email Address"
                  />
                </div>
                <div className="col-12 col-md-6 mb-3 pb-4">
                  <Form.Control className='pb-3 fs-10' style={{fontSize:18}}  placeholder="Phone No" />
                </div>
                <div className="col-12 col-md-6 mb-3 pb-4">
                  <Form.Control className='pb-3 fs-10' style={{fontSize:18}} type="text" placeholder="Country" />
                </div>
                <div className="col-12 col-md-6 mb-3 pb-4">
                  <Form.Control
                    className='pb-3 fs-10' style={{fontSize:18}}
                    type="text"
                    placeholder="House number and street name"
                  />
                </div>
                <div className="col-12  col-md-6 mb-3 pb-4">
                  <Form.Control
                   className='pb-3 fs-10' style={{fontSize:18}}
                    type="text"
                    placeholder="Apartment, suit, unit, etc."
                  />
                </div>
                <div className="col-12 col-md-6 mb-3 pb-4">
                  <Form.Control className='pb-3 fs-10' style={{fontSize:18}}  placeholder="Postcode / Zip" />
                </div>
                <div className="col-12 col-md-6 mb-3 pb-4">
                  <Form.Control className='pb-3 fs-10' style={{fontSize:18}} type="text" placeholder="Town / City" />
                </div>
              </div>

              <div className="check-box " >
                <input
                  className="form-input-check"
                  type="checkbox"
                  id="createAccount"
                />
                <label htmlFor="createAccount" className="ms-2">
                  Create an Account?
                </label>
              </div>

              <div className="add-info md-mb-40">
                <h4 className="mb-3">Additional Information</h4>
                <div className="form-group p-1">
                  <textarea
                    className="form-control"
                    placeholder="Order Notes"
                  ></textarea>
                </div>
              </div>
            </div>

             <div className="col-12 col-lg-4">
              <h4 className="mb-3" style={{ marginLeft: '10px' }}>
                Your Order
              </h4>

              <div className="product-box">
                <div className="product-img d-flex">
                  <a href="#">
                    <img src="img/pizza-1.png" alt="pizza-1" />
                  </a>
                  <div className="qty-box">
                    <h5>Shrimp pizza</h5>
                    <span className="price">$35.00</span>
                    <span className="qty">× 3</span>
                  </div>
                </div>
              </div>

          
              <div className="product-box">
                <div className="product-img d-flex">
                  <a href="#">
                    <img src="img/pizza-2.png" alt="pizza-2" />
                  </a>
                  <div className="qty-box">
                    <h5>Cheese pizza</h5>
                    <span className="price">$45.00</span>
                    <span className="qty">× 2</span>
                  </div>
                </div>
              </div>

              <div className="checkout-total">
                <ul className='p-0'>
                  <li>
                    <span className="subtotal">Subtotal</span>
                    <span className="subtotal-amount">$160.00</span>
                  </li>
                  <li>
                    <span className="subtotal">Shipping Cost</span>
                    <span className="subtotal-amount">$04.00</span>
                  </li>
                  <li>
                    <span className="subtotal-T">Total</span>
                    <span className="subtotal-amount-T">$164.00</span>
                  </li>
                </ul>
              </div>

              <div className="pay-method mt-3 ">
                <h4 className="mb-3 p-0">Payment Method</h4>
                <ul>
                  <li>
                    <div className="form-check p-0">
                      <input
                        type="radio"
                        name="payment"
                        className="form-check-input p-2"
                        id="bank_transfer"
                      />
                      <label
                        className="form-check-label   "
                        htmlFor="bank_transfer"
                      >
                        Direct bank transfer
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check p-0">
                      <input
                        type="radio"
                        name="payment"
                        className="form-check-input p-2"
                        id="check_payments"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="check_payments"
                      >
                        Check payments
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check p-0">
                      <input
                        type="radio"
                        name="payment"
                        className="form-check-input p-2"
                        id="cash_delivery"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="cash_delivery"
                      >
                        Cash on delivery
                      </label>
                    </div>
                  </li>
                  <li>
                    <button className="btn-ct mt-3">Place Order</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
