import React, { useContext } from 'react';
import './ProductCard.css';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalContext';

const ProductCard = ({ id, imgUrl, name, price, sizes }) => {
  const { addToCart } = useContext(GlobalContext);

  const handleAddToCart = (e) => {
    e.preventDefault();
    const product = {
      id,
      imgUrl,
      name,
      price,
    };
    console.log(product);
    addToCart(product);
  };

  return (
    <Link to={`/products/${id}`} className='flex-column product-card'>
      <button className='flex-center product-card__btn' onClick={handleAddToCart}>
        <span>ADD TO CART</span>
        <ShoppingCart />
      </button>
      <img src={imgUrl} alt={`${name} product image`} />
      <div className='flex-column product-card__content'>
        <h5>{name}</h5>
        <div className='flex product-card__block'>
          <div className='flex product-card-sizes'>
            {sizes.map((size, index) => (
              <span key={index}>{size}</span>
            ))}
          </div>
          <span>${price}.00</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
