import React, { useContext } from 'react';
import './Cart.css';
import { GlobalContext } from '../../context/GlobalContext';
import { CircleX } from 'lucide-react';
import Footer from '../../components/Footer/Footer';

const Cart = () => {
  const { cartItems, removeFromCart, purchase } = useContext(GlobalContext);

  const totalCost = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <>
      <section className='flex-center site-cart'>
        <article className='flex-center container'>
          <div className='flex-column cart-list__container'>
            <div className='flex-center cart-list__text'>
              <h2>Shopping Cart</h2>
              <span>{`${cartItems.length} Items`}</span>
            </div>
            <div className='flex-column cart-list__content'>
              {cartItems.length === 0 ? (
                <div className='flex-column empty-animation'>
                  <img src='/emptyCart-animation.gif' alt='' />
                  <div className='flex-column'>
                    <span>Your cart is empty...</span>
                    <p>please add some products to your cart!</p>
                  </div>
                </div>
              ) : (
                <table className='cart-list'>
                  <thead>
                    <tr>
                      <th scope='col' style={{ textAlign: 'start' }}>
                        PRODUCT DETAILS
                      </th>
                      <th scope='col'>QUANTITY</th>
                      <th scope='col'>PRICE</th>
                      <th scope='col'>TOTAL</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <tr key={index} className='item-row'>
                        <td className='flex-center product-img'>
                          <img src={item.imgUrl} alt='' />
                          <span>{item.name}</span>
                        </td>
                        <td>{item.quantity}</td>
                        <td>{`$${item.price}.00`}</td>
                        <td>{`$${item.price * item.quantity}.00`}</td>
                        <td>
                          <CircleX
                            className='close'
                            onClick={() => removeFromCart(item.id)}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
          <div className='flex-column order-sumary'>
            <div className='flex-center cart-list__text'>
              <h3>Order Summary</h3>
            </div>
            <div className='flex-column total-price__container'>
              <div className='flex-center cart-price'>
                <span>TOTAL COST</span>
                <h4>${totalCost()}.00</h4>
              </div>
              <button className='action-btn' onClick={() => purchase(cartItems)}>
                CHECKOUT
              </button>
            </div>
          </div>
        </article>
      </section>
      <Footer />
    </>
  );
};

export default Cart;
