import React, { useContext, useEffect, useState } from 'react';
import './Product.css';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalContext';
import Footer from '../../components/Footer/Footer';

const Product = () => {
  const { id } = useParams();
  const [productById, setProductById] = useState([]);

  const { getProductById, addToCart } = useContext(GlobalContext);

  const { name, imgUrl, price, size } = productById;

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(productById);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProductById(id);
      if (data) setProductById(data);
    };
    fetchProducts();
  }, [id]);

  return (
    <>
      <section className='flex-center product-details'>
        <article className='flex-column container'>
          <h1 className='section-subtitle'>Product Details</h1>
          <div className='flex-center product-details__content'>
            <div className='flex-column img-container'>
              <img src={imgUrl} alt='' />
            </div>
            <div className='flex-column column product-details__text'>
              <div className='flex-center'>
                <h2>{name}</h2>
                <span className='price'>${price}.00</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu velit non
                dui mollis pharetra vel nec turpis. Quisque euismod ultricies ligula nec
                posuere. Praesent dapibus felis ullamcorper sapien porta, ac sollicitudin
                ex tincidunt. Nulla et urna sed orci elementum tempor sit amet ut justo.
                Quisque ac mattis eros. Pellentesque.
              </p>
              <div className='flex-center'>
                <span>Size:</span>
                {size?.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
              <a className='action-btn' onClick={handleAddToCart}>
                Buy Now
              </a>
            </div>
          </div>
        </article>
      </section>
      <Footer />
    </>
  );
};

export default Product;
