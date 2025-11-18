import Banner from "../banner";
import ExploreMore from "../Collections/ExploreMore";
import OfferTags from "../OfferTags";

const curatedDeals = [
    {
        title: "Deals of the Day",
        subtitle: "Smart TVs, Soundbars & More",
        badge: "Top Rated",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=60",
        cta: "View Deals"
    },
    {
        title: "Sneaker Studio",
        subtitle: "Hype Drops · Under ₹2999",
        badge: "Trending",
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=60",
        cta: "Shop Sneakers"
    },
    {
        title: "Kitchen Upgrade",
        subtitle: "Appliances & Cookware",
        badge: "New Arrivals",
        image: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=900&q=60",
        cta: "Upgrade Now"
    },
    {
        title: "Designer Sarees",
        subtitle: "Festive Curation • Min 55%",
        badge: "Handpicked",
        image: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?auto=format&fit=crop&w=900&q=60",
        cta: "Explore Ethnic"
    }
];

const spotlightStories = [
    {
        title: "Campus Essentials",
        copy: "Backpacks • Stationery • Activewear",
        tag: "Students' Pick",
        image: "https://images.unsplash.com/photo-1617396900799-f4ec2b23030d?auto=format&fit=crop&w=600&q=60"
    },
    {
        title: "Wellness Store",
        copy: "Smartwatches • Protein • Massagers",
        tag: "Wellbeing",
        image: "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?auto=format&fit=crop&w=600&q=60"
    },
    {
        title: "Luxe Lounge",
        copy: "Co-ord sets • Wraps • Loungewear",
        tag: "Off-Duty",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=60"
    }
];

const Home = () => {
    return (
        <>
            <OfferTags />
            <Banner />

            <section className="fk-section">
                <div className="fk-shell">
                    <div className="fk-section-heading">
                        <h3>Handpicked For You</h3>
                        <span className="fk-link">See All</span>
                    </div>
                    <div className="fk-card-grid">
                        {curatedDeals.map((deal) => (
                            <article
                                className="fk-promo-card"
                                key={deal.title}
                            >
                                <div
                                    className="fk-promo-card__img"
                                    style={{ backgroundImage: `url(${deal.image})` }}
                                />
                                <div className="fk-promo-card__body">
                                    <span className="fk-chip fk-chip--success">{deal.badge}</span>
                                    <h4>{deal.title}</h4>
                                    <p>{deal.subtitle}</p>
                                    <button className="fk-pill-btn">{deal.cta}</button>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="fk-section">
                <div className="fk-shell">
                    <div className="fk-section-heading">
                        <h3>Trending Right Now</h3>
                        <span className="fk-link">Curated Stories</span>
                    </div>
                    <div className="fk-spotlight-grid">
                        {spotlightStories.map((story) => (
                            <article className="fk-spotlight-card" key={story.title}>
                                <img src={story.image} alt={story.title} />
                                <div>
                                    <span className="fk-chip fk-chip--warning">{story.tag}</span>
                                    <h4>{story.title}</h4>
                                    <p>{story.copy}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <ExploreMore />
        </>
    );
};

export default Home;