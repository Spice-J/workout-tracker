import "./Header.css";

function Header() {
  return (
    <div>
      <div className="header">
        <img src="../../public/barbellskull.jpg" alt="" />
        <h1>StrongBand</h1>
        <ul>
          <li>Home</li>
          <li>Workout</li>
          <li>Stats</li>
          <li>Logout</li>
        </ul>
      </div>
      <div className="header-border-line"></div>
    </div>
  );
}

export default Header;
