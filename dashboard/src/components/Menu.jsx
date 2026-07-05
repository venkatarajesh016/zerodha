import React,{useState} from "react";
import {Link} from "react-router-dom"
const Menu = () => {
  const [activeMenu, setActiveMenu] = useState(0);
  const [profileMenu, setProfileMenu] = useState(false);

  let handleMenuClick = (index) => {
    setActiveMenu(index);
  };

  let handleProfileClick = () => {
    setProfileMenu(!profileMenu);
  };

  const menuClass="menu";
  const activeMenuClass="menu selected";
  return (
    <div className="menu-container">
      <img src="./public/logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link to="/" style={{textDecoration:"none"}} onClick={handleMenuClick}>
              <p className={activeMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link to="/orders" style={{textDecoration:"none"}} onClick={handleMenuClick}>
              <p className={activeMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link to="/holdings" style={{textDecoration:"none"}} onClick={handleMenuClick}>
              <p className={activeMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link to="/positions" style={{textDecoration:"none"}} onClick={handleMenuClick}>
              <p className={activeMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link to="/funds" style={{textDecoration:"none"}} onClick={handleMenuClick}>
              <p className={activeMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link to="/apps" style={{textDecoration:"none"}} onClick={handleMenuClick}>
              <p className={activeMenu === 5 ? activeMenuClass : menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
            <div className="avatar">ZU</div>
            <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;