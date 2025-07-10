import "./Header.css";
import barbellSkull from "../assets/barbellskull.jpg";
import { Auth } from "./Auth";

function Header() {
  return (
    <div>
      <div className="header">
        <img src={barbellSkull} alt="StrongBand Logo" className="header-img" />
        <h1>StrongBand</h1>
        <ul className="header-nav">
          <li><a href="">Home</a></li>
          <li><a href="">Workout</a></li>
          <li><a href="">Stats</a></li>
          <Auth />
        </ul>
      </div>
      <div className="header-border-line"></div>
    </div>
  );
}

export default Header;
