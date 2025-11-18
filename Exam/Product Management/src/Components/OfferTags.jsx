import { Link } from "react-router-dom";
import { FiSmartphone } from "react-icons/fi";
import { LuShirt } from "react-icons/lu";
import { GiRunningShoe, GiLipstick } from "react-icons/gi";
import { TbDeviceGamepad2 } from "react-icons/tb";
import { PiStudent } from "react-icons/pi";
import { MdOutlineBabyChangingStation } from "react-icons/md";
import { HiMiniHomeModern } from "react-icons/hi2";

const quickTiles = [
  { label: "Beauty Steals", desc: "Under ₹499", icon: GiLipstick, path: "/beauty" },
  { label: "Pro Grooming", desc: "Glow Kits", icon: MdOutlineBabyChangingStation, path: "/beauty" },
  { label: "Mobiles & Audio", desc: "From ₹9,999", icon: FiSmartphone, path: "/electronics" },
  { label: "Gaming Gear", desc: "Fresh Drops", icon: TbDeviceGamepad2, path: "/electronics" },
  { label: "Wardrobe Staples", desc: "Min 60% Off", icon: LuShirt, path: "/clothing" },
  { label: "Sneaker Studio", desc: "Buy 2 Get 1", icon: GiRunningShoe, path: "/clothing" },
  { label: "Work Essentials", desc: "Laptop Bags", icon: PiStudent, path: "/electronics" },
  { label: "Home Lounge", desc: "Cozy Fits", icon: HiMiniHomeModern, path: "/clothing" }
];

const OfferTags = () => {
  return (
    <section className="fk-category-rail">
      {quickTiles.map((tile) => {
        const Icon = tile.icon;
        return (
          <Link key={tile.label} to={tile.path} className="fk-category-card">
            <Icon />
            <span>{tile.label}</span>
            <small>{tile.desc}</small>
          </Link>
        );
      })}
    </section>
  );
};

export default OfferTags;
