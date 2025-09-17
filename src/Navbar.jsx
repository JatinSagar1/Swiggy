import React, { useState } from 'react';
import img from "./assets/image.png";
import "./css/Navbar.css";
import search from "./assets/search.png";
import categories from  "./assets/categories.png"; 
import offers from "./assets/discount.png";
import help from "./assets/info-circle.png";
import signin from "./assets/user-square.png";
import cart from "./assets/cart.png";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <div className='Navbar'>
        <img src={img} alt="" className='logo' />
        <div className='menu'>
          <div className='hmm'>
            <img src={categories} alt="" />
            <a href="">Categories</a>
          </div>
          <div className='hmm'>
            <img src={offers} alt="" />
            <a href="">Offers</a>
          </div>
          <div className='hmm search-hmm'>
            <img src={search} alt="" onClick={() => setSearchOpen((v) => !v)} style={{cursor:'pointer'}} />
            {searchOpen ? (
              <input
                type="text"
                className="search-input"
                placeholder="Search..."
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                autoFocus
                onBlur={() => setSearchOpen(false)}
              />
            ) : (
              <a href="#" onClick={e => {e.preventDefault(); setSearchOpen(true);}}>Search</a>
            )}
          </div>
          <div className='hmm'>        
            <img src={help} alt="" />
            <a href="">Help</a>
          </div>
          <div className='hmm'>
            <img src={signin} alt="" />
            <a href="">Sign in</a>
          </div>
          <div className='hmm'>
            <img src={cart} alt="" />
            <a href="">Cart</a>
          </div>
        </div>
      </div>
      <div className='gap'></div>
    </>
  )
}

export default Navbar