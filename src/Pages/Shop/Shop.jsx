import React from 'react';
import Hero from '../../components/Hero/Hero';
import Logos from '../../components/Logos/Logos';
import Categories from '../../components/Categories/Categories';
import Benefits from '../../components/Benefits/Benefits';
import Arrivals from '../../components/Arrivals/Arrivals';
import Footer from '../../components/Footer/Footer';

const Shop = ({ title, img, button }) => {
  return (
    <>
      <main>
        <Hero title={title} img={img} button={button} />
        <Benefits />
        <Categories />
        <Logos />
        <Arrivals />
      </main>
      <Footer />
    </>
  );
};

export default Shop;
