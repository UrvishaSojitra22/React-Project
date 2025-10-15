import Carousel from 'react-bootstrap/Carousel';

function Banner() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-90 mx-auto"
          src="public/img/7th img.png"
          alt="First slide"
        />
        </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-90 mx-auto"
          src="public/img/8th img.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-90 mx-auto"
          src="public/img/9th img.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
export default Banner;