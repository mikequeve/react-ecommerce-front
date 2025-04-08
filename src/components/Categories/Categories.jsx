import React from 'react';
import './Categories.css';
import { MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <section className='flex-center categories-section'>
      <article className='flex-center container'>
        <div className='flex-column categories categories-left'>
          <div className='flex-column category'>
            <div className='flex-column category-text'>
              <h3>Women</h3>
              <p>All fashion products for girls</p>
            </div>
            <Link to={'/women'} className='flex-center secondary-btn'>
              <MoveRight color='#262626' />
              View Products
            </Link>
          </div>
        </div>
        <div className='flex-column categories categories-right'>
          <div className='flex-column category'>
            <div className='flex-column category-text'>
              <h3>Kids</h3>
              <p>All fashion products for children</p>
            </div>
            <Link to={'/kids'} className='flex-center secondary-btn'>
              <MoveRight color='#262626' />
              View Products
            </Link>
          </div>
          <div className='flex-column category'>
            <div className='flex-column category-text'>
              <h3>Men</h3>
              <p>All fashion products for men</p>
            </div>
            <Link to={'/men'} className='flex-center secondary-btn'>
              <MoveRight color='#262626' />
              View Products
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Categories;
