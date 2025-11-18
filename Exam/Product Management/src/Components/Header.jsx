import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsSearch } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { LuUser } from "react-icons/lu";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import './Header.css';
import { signOutAsync } from '../Services/Action/authentication';

const navMenu = [
  {
    id: "beauty",
    label: "Beauty",
    path: "/beauty",
    columns: [
      { title: "Skincare", items: ["Serums", "Moisturisers", "Sunscreen", "Eye Creams"] },
      { title: "Makeup", items: ["Lipsticks", "Foundations", "Blush", "Setting Sprays"] },
      { title: "Hair & Bath", items: ["Hair Masks", "Styling Tools", "Bath & Body", "Fragrance"] }
    ],
    banner: {
      title: "Glow Studio",
      subtitle: "Buy 2 Get 1",
      image: "https://images.unsplash.com/photo-1509048950372-105b84af55c8?auto=format&fit=crop&w=800&q=60"
    }
  },
  {
    id: "electronics",
    label: "Electronics",
    path: "/electronics",
    columns: [
      { title: "Mobiles & Tablets", items: ["5G Phones", "Tablets", "Power Banks", "Wearables"] },
      { title: "Audio", items: ["Headphones", "Soundbars", "Bluetooth Speakers", "Record Players"] },
      { title: "Smart Living", items: ["Smart Home", "Cameras", "Laptops", "Gaming"] }
    ],
    banner: {
      title: "Tech Upgrade Days",
      subtitle: "Exchange + No Cost EMI",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=60"
    }
  },
  {
    id: "clothing",
    label: "Clothing",
    path: "/clothing",
    columns: [
      { title: "Topwear", items: ["Shackets", "Premium Tees", "Blazers", "Knits"] },
      { title: "Bottomwear", items: ["Relaxed Jeans", "Cargo Pants", "Trousers", "Shorts"] },
      { title: "Occasion", items: ["Workwear", "Athleisure", "Lounge Sets", "Party Edit"] }
    ],
    banner: {
      title: "Wardrobe Refresh",
      subtitle: "Min 50% Off",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=60"
    }
  }
];

function Header() {
  const [activeMenu, setActiveMenu] = useState(null);
  const { user } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  const activeConfig = navMenu.find((menu) => menu.id === activeMenu);

  const handleLogout = () => {
    dispatch(signOutAsync());
  };

  return (
    <header className="fk-header" onMouseLeave={() => setActiveMenu(null)}>
      <div className="fk-top-bar">
        <Link to="/" className="fk-brand">
          <span>Flipkart</span>
          <span className="fk-tagline">
            Explore <span>Plus</span>
          </span>
        </Link>

        <div className="fk-search">
          <BsSearch size={18} color="#9aa0b1" />
          <input type="search" placeholder="Search for products, brands and more" />
        </div>

        <div className="fk-top-actions">
          {!user ? (
            <Link to="/SignIn" className="fk-login-btn">
              Login
            </Link>
          ) : (
            <div className="fk-user-chip">
              <LuUser size={18} />
              <span>{user.email?.split("@")[0]}</span>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}

          <Link to="/Add" className="fk-outline-btn">
            Add Product
          </Link>

          <Link to="/beauty" className="fk-icon-link">
            <IoMdHeartEmpty size={20} />
            <span>Wishlist</span>
          </Link>

          <Link to="/clothing" className="fk-icon-link">
            <HiOutlineShoppingBag size={20} />
            <span>Bag</span>
          </Link>
        </div>
      </div>

      <div className="fk-nav-wrapper">
        <div className="fk-nav-bar">
          {navMenu.map((menu) => (
            <div
              key={menu.id}
              className={`fk-nav-item ${activeMenu === menu.id ? "active" : ""}`}
              onMouseEnter={() => setActiveMenu(menu.id)}
            >
              <Link to={menu.path}>{menu.label}</Link>
              <MdOutlineKeyboardArrowDown size={18} />
            </div>
          ))}
        </div>
      </div>

      {activeConfig && (
        <div className="fk-mega-panel" onMouseEnter={() => setActiveMenu(activeConfig.id)}>
          <div className="fk-mega-columns">
            {activeConfig.columns.map((col, index) => (
              <div className="fk-mega-column" key={col.title + index}>
                <h6>{col.title.toUpperCase()}</h6>
                <ul>
                  {col.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="fk-mega-banner">
            <span className="fk-chip fk-chip--warning">{activeConfig.banner.subtitle}</span>
            <h5>{activeConfig.banner.title}</h5>
            <img src={activeConfig.banner.image} alt={activeConfig.banner.title} />
            <Link to={activeConfig.path} className="fk-pill-btn">
              Explore
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;