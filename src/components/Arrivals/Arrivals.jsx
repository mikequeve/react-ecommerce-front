import React, { useContext } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './Arrivals.css';
import { GlobalContext } from '../../context/GlobalContext';

const Arrivals = () => {
  const { arrivals } = useContext(GlobalContext);
  return (
    <section className='flex-center arrivals-section'>
      <article className='flex-column container'>
        <h2 className='section-subtitle'>New Arrivals</h2>
        <div className='flex-center arrivals-products__container'>
          {arrivals.map((product, index) => (
            <ProductCard
              key={index}
              id={product.productId}
              imgUrl={product.imgUrl}
              name={product.name}
              price={product.price}
              sizes={product.size}
            />
          ))}
        </div>
      </article>
    </section>
  );
};

export default Arrivals;
