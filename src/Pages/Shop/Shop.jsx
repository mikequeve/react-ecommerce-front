import React from 'react';
import Hero from '../../components/Hero/Hero';
import Logos from '../../components/Logos/Logos';
import Categories from '../../components/Categories/Categories';
import Benefits from '../../components/Benefits/Benefits';
import Arrivals from '../../components/Arrivals/Arrivals';

const Shop = ({title, img, button}) => {
  return (
    <div>
      <Hero title={title} img={img} button={button} />
      <Benefits />
      <Categories />
      <Logos />
      <Arrivals />
    </div>
  );
};

export default Shop;
