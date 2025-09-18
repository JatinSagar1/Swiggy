import React, { useState, useContext } from 'react';
import img from "./assets/image.png";
import "./css/Navbar.css";
import search from "./assets/search.png";
import categories from "./assets/categories.png"; 
import offers from "./assets/discount.png";
import help from "./assets/info-circle.png";
import signin from "./assets/user-square.png";
import cart from "./assets/cart.png";
import { Context } from './Context';

const Navbar = () => {
  const { restData, setFiltered } = useContext(Context);

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">
      {/* Logo */}
      <img src={img} alt="logo" className="logo" />

      {/* Hamburger (only visible on mobile) */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Menu */}
      <div className={`menu ${menuOpen ? "open" : ""}`}>
        <div className="menu-item">
          <img src={categories} alt="categories" />
          <a href="#">Categories</a>
        </div>

        <div className="menu-item">
          <img src={offers} alt="offers" />
          <a href="#">Offers</a>
        </div>

        <div className="menu-item search-box">
          <img
            src={search}
            alt="search"
            onClick={() => setSearchOpen(v => !v)}
            style={{ cursor: "pointer" }}
          />
          {searchOpen ? (
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={(k) => {
                if (k.key === "Enter") {
                  const data = restData.filter((e) =>
                    e?.info?.name?.toLowerCase()?.includes(searchValue.toLowerCase())
                  );
                  setFiltered(data);
                  setSearchOpen(false);
                }
              }}
              autoFocus
              onBlur={() => setSearchOpen(false)}
            />
          ) : (
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setSearchOpen(true);
              }}
            >
              Search
            </a>
          )}
        </div>

        <div className="menu-item">
          <img src={help} alt="help" />
          <a href="#">Help</a>
        </div>

        <div className="menu-item">
          <img src={signin} alt="signin" />
          <a href="#">Sign in</a>
        </div>

        <div className="menu-item">
          <img src={cart} alt="cart" />
          <a href="#">Cart</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
