import './Banner.css';

function Banner() {
  return (
    <>
      <section>
        <div className="banner">
          <div className="container-fluid">
            <div className="row align-items-center">
         
              <div className="col-12 col-md-6 mb-3 mb-md-0">
                <div className="out">
                  <h1>Checkout</h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6">
                <ul className="breadcrumb justify-content-md-end justify-content-center mt-3 mt-md-0">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>Checkout</li>
                </ul>
              </div>

              <div className="banner-img">
                <div className="onion-img">
                  <img src="img/onion.png" alt="onion" />
                </div>
                <div className="tometo-img">
                  <img src="img/tamato.png" alt="tomato" />
                </div>
                <div className="leaf-img">
                  <img src="img/banner-leaf.png" alt="leaf" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
