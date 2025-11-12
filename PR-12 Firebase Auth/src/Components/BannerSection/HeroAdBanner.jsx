import React from "react";
import "./HeroAdBanner.css";

const HeroAdBanner = () => {
  return (
    <div className="hero-banner-container">
      {/* Banner Image */}
      <img
        src="public/img/U.S.Polo"
        alt="U.S. Polo Assn. Banner"
        className="hero-banner-image"
      />

      {/* Brand Strip */}
      <div className="hero-brand-strip">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/5/59/U.S._Polo_Assn._logo.png"
          alt="U.S. Polo Assn."
          className="hero-brand-logo"
        />
      </div>

      {/* Offer + Button */}
      <div className="hero-bottom-section">
        <div className="hero-offer-text">UP TO 60% OFF</div>
        <button className="hero-shop-btn">SHOP NOW</button>
      </div>
    </div>
  );
};

export default HeroAdBanner;
