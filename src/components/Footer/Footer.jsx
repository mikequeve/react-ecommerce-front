import React from 'react';
import { Copyright } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='flex-center footer'>
      <article className='flex-center container'>
        <a href='/' className='flex navbar-item site-navbar__logo'>
          <span>S</span>
          <span>SHOPPER</span>
        </a>
        <div className='flex-center copyright'>
          <Copyright />
          All Rights Reserved.
        </div>
      </article>
    </footer>
  );
};

export default Footer;
