import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Shop from './Pages/Shop/Shop';
import ShopCategory from './Pages/ShopCategory/ShopCategory';
import Product from './Pages/Product/Product';
import Cart from './Pages/Cart/Cart';
import GlobalContextProvider from './context/GlobalContext';

function App() {
  return (
    <>
      <GlobalContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path='/'
              element={
                <Shop
                  title={'Discover your style today!'}
                  img={'./hero_image.png'}
                  button={true}
                />
              }
            />
            <Route
              path='/men'
              element={
                <ShopCategory
                  title={'Dress with confidence, stand out with style!'}
                  img={'./men_img.webp'}
                />
              }
            />
            <Route
              path='/women'
              element={
                <ShopCategory
                  title={'Empower yourself with every outfit!'}
                  img={'./women_img.webp'}
                />
              }
            />
            <Route
              path='/kids'
              element={
                <ShopCategory
                  title={'Comfortable clothing, endless adventures!'}
                  img={'./kid_img.webp'}
                />
              }
            />
            <Route path='/products/:id' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </GlobalContextProvider>
    </>
  );
}

export default App;
