import { createContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';

export const GlobalContext = createContext();

const API_ENDPOINTS = {
  allProducts: 'https://fullstack-ecommerce-backend-production.up.railway.app/products',
  recentProducts:
    'https://fullstack-ecommerce-backend-production.up.railway.app/products/recent',
  catProducts:
    'https://fullstack-ecommerce-backend-production.up.railway.app/products/category',
};

const handlerApiErrors = (error, customMsg) => {
  console.error(`${customMsg}: `, error);
  return null;
};

const GlobalContextProvider = ({ children }) => {
  const [arrivals, setArrivals] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const fetchData = async (url, id = '') => {
    try {
      const apiUrl = id ? `${url}/${id}` : url;
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      return handlerApiErrors(error, 'Error fetching data');
    }
  };

  const getNewArrivals = async () => {
    const data = await fetchData(API_ENDPOINTS.recentProducts);
    if (data) {
      const newArrivals = data.slice(0, 4);
      setArrivals(newArrivals);
    }
  };

  const getProductsByCat = async (categoryId) => {
    return await fetchData(API_ENDPOINTS.catProducts, categoryId);
  };

  const getProductById = async (productId) => {
    return await fetchData(API_ENDPOINTS.allProducts, productId);
  };

  const addToCart = (product) => {
    Swal.fire({
      position: 'top-end',
      title: 'Product Added',
      showConfirmButton: false,
      timer: 1000,
      customClass: {
        title: 'swal-title',
        popup: 'swal-popup',
      },
    });

    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const getTotalCartItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const removeFromCart = (productId) => {
    return setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const purchase = async (cartItems) => {
    if (cartItems.length > 0) {
      try {
        await Swal.fire({
          title: 'purchase successfully completed',
          icon: 'success',
          timer: 3000,
          showConfirmButton: false,
        });
        setCartItems([]);
        window.location.href = '/';
      } catch (error) {
        handlerApiErrors(error, 'Error diring purchase');
      }
    } else {
      await Swal.fire({
        title: 'Please add some products to continue',
        icon: 'error',
        timer: 3000,
        showConfirmButton: false,
      });
    }
  };

  useEffect(() => {
    getNewArrivals();
  }, []);

  const contextValue = {
    arrivals,
    getProductsByCat,
    getProductById,
    addToCart,
    cartItems,
    getTotalCartItems,
    removeFromCart,
    purchase,
  };

  return <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>;
};

export default GlobalContextProvider;
