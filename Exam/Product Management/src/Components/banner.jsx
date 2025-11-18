import Carousel from 'react-bootstrap/Carousel';

const heroSlides = [
  {
    title: "Big Savings on Flagship Phones",
    subtitle: "Exchange + No Cost EMI",
    cta: "Shop Mobiles",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1400&q=70"
  },
  {
    title: "Wardrobe Refresh Sale",
    subtitle: "Streetwear to Ethnic · Min 50% Off",
    cta: "Explore Fashion",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1400&q=70"
  },
  {
    title: "Home Makeover Days",
    subtitle: "Furniture • Decor • Lighting",
    cta: "Upgrade Home",
    image: "https://images.unsplash.com/photo-1484100356142-db6ab6244067?auto=format&fit=crop&w=1400&q=70"
  }
];

function Banner() {
  return (
    <div className="fk-shell fk-hero-carousel">
      <Carousel fade indicators controls={false}>
        {heroSlides.map((slide) => (
          <Carousel.Item key={slide.title}>
            <div
              className="fk-hero-slide"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div>
                <h2>{slide.title}</h2>
                <p>{slide.subtitle}</p>
                <button className="btn">{slide.cta}</button>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Banner;