import React, { useContext, useEffect, useState } from 'react';
import Hero from '../../components/Hero/Hero';
import './ShopCategory.css';
import { useLocation } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import { GlobalContext } from '../../context/GlobalContext';
import Footer from '../../components/Footer/Footer';

const ShopCategory = ({ title, img }) => {
  const category = useLocation().pathname.slice(1);
  const [products, setProducts] = useState([]);

  const { getProductsByCat } = useContext(GlobalContext);

  const getCategoryId = (categoryName) => {
    switch (categoryName) {
      case 'men':
        return 1;
      case 'women':
        return 2;
      case 'kids':
        return 3;
      default:
        return 1;
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const categoryId = getCategoryId(category);
      const data = await getProductsByCat(categoryId);
      if (data) setProducts(data);
    };
    fetchProducts();
  }, [category]);

  return (
    <>
      <main>
        <Hero title={title} img={img} />
        <section className='flex-center products-section'>
          <article className='flex-column container'>
            <h2 className='section-subtitle'>Products</h2>
            <div className='flex-center products-content'>
              {products.map((product, index) => (
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
      </main>
      <Footer />
    </>
  );
};

export default ShopCategory;
