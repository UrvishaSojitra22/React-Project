import React from "react";
import "./ExploreMore.css";

const categories = [
  {
    name: "Megapass",
    image: "public/img/12th img.png",
    active: true,
  },
  {
    name: "Topwear",
    image: "public/img/10th img.png",
  },
  {
    name: "Bottomwear",
    image: "public/img/11th img.png",
  },
  {
    name: "Womenswear",
    image: "public/img/13th.png",
  },
  {
    name: "Kidswear",
    image: "public/img/14th.png",
  },
  {
    name: "Innerwear",
    image: "public/img/15th.png",
  },
];

const ExploreMore = () => {
  return (
    <div className="explore-container">
      <h2 className="explore-title">EXPLORE MORE</h2>
      <div className="explore-grid">
        {categories.map((item, index) => (
          <div className="explore-card" key={index}>
            <img src={item.image} alt={item.name} className="explore-img" />
            <p
              className={`explore-name ${item.active ? "active" : ""}`}
            >
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMore;
