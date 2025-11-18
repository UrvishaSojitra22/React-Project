import React from "react";
import "./ExploreMore.css";

const collections = [
  {
    title: "Glow Lab",
    copy: "Serums, mists, and pro tools",
    discount: "Flat 40% Off",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "Skin Cycling",
    copy: "Derm-approved routines",
    discount: "From ₹399",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "Sound & Vision",
    copy: "Speakers, turntables, projectors",
    discount: "Up to 55% Off",
    image: "https://images.unsplash.com/photo-1518444028784-719bba5a7ef1?auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "Creator Desk",
    copy: "Monitors, mics, and rigs",
    discount: "No Cost EMI",
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "Tailored Fits",
    copy: "Unstructured blazers & trousers",
    discount: "₹1,499 Store",
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "Off-Duty Layers",
    copy: "Co-ords, knits & lounge edits",
    discount: "Buy 1 Get 1",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=60"
  }
];

const ExploreMore = () => {
  return (
    <section className="explore-container">
      <div className="explore-header">
        <div>
          <p className="explore-kicker">Flipkart Specials</p>
          <h2>Explore More Collections</h2>
        </div>
        <button className="fk-pill-btn">View All</button>
      </div>

      <div className="explore-grid">
        {collections.map((item) => (
          <article className="explore-card" key={item.title}>
            <div
              className="explore-card__img"
              style={{ backgroundImage: `url(${item.image})` }}
            />
            <div className="explore-card__body">
              <h4>{item.title}</h4>
              <p>{item.copy}</p>
              <span>{item.discount}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ExploreMore;

