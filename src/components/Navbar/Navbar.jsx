import React, { useContext, useEffect, useState } from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, CircleUser, AlignJustify, X } from 'lucide-react';
import { GlobalContext } from '../../context/GlobalContext';

const menuItems = [
  {
    name: 'Shop',
    link: '/',
  },
  {
    name: 'Men',
    link: 'men',
  },
  {
    name: 'Women',
    link: 'women',
  },
  {
    name: 'kids',
    link: 'kids',
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const location = useLocation();

  const { getTotalCartItems } = useContext(GlobalContext);

  useEffect(() => {
    location.pathname === '/login' || location.pathname === '/cart'
      ? setActiveLink('')
      : setActiveLink(location.pathname.slice(1) || '/');
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header className='flex-center site-navbar'>
      <article className='flex-between container'>
        <a href='/' className='flex navbar-item site-navbar__logo'>
          <span>S</span>
          <span>SHOPPER</span>
        </a>
        <ul
          className={`flex-center navbar-item site-navbar__menu ${
            isOpen ? 'active' : ''
          }`}
        >
          {menuItems.map((item, index) => (
            <Link
              to={item.link}
              key={index}
              onClick={() => {
                setActiveLink(item.link);
                setIsOpen(false);
              }}
              className={`menu-item ${activeLink === item.link ? 'active' : ''}`}
            >
              {item.name}
            </Link>
          ))}
        </ul>
        <div
          className='flex-center menu-btn__container'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <AlignJustify />}
        </div>
        <div className='flex navbar-item site-navbar__login'>
          <Link to={'/cart'} className='flex-center navbar-cart'>
            <ShoppingBag />
            <div className='flex-center navbar-cart__count'>{getTotalCartItems()}</div>
          </Link>
        </div>
      </article>
    </header>
  );
};

export default Navbar;
