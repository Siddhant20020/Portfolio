import React, { useState } from "react";
import { FaBars, FaReact } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./styles.scss";

const data = [
  { label: "HOME", to: "/" },
  { label: "ABOUT ME", to: "/about" },
  { label: "SKILLS", to: "/skills" },
  { label: "PORTFOLIO", to: "/portfolio" },
  { label: "CONTACT", to: "/contact" },
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  const closeMobileMenu = () => {
    setToggleIcon(false);
  };

  return (
    <header className="navbar">
      <div className="navbar__container">
        <Link to={"/"} className="navbar__logo" onClick={closeMobileMenu}>
          <FaReact size={30} />
        </Link>

        <ul className={`navbar__menu ${toggleIcon ? "active" : ""}`}>
          {data.map((item, key) => (
            <li key={key} className="navbar__item">
              <Link
                className="navbar__link"
                to={item.to}
                onClick={closeMobileMenu}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="navbar__icon" onClick={handleToggleIcon} aria-label="Toggle navigation menu">
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
