import './App.scss';
import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Products from './components/Products';
import Gallery from './components/Gallery';
import About from './components/AboutUs';
import Contact from './components/ContactUs';
import CategoryPage from './components/Products/products-category';
import ProductDetail from './components/Products/products-individual';

function App() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top whenever the route changes
    window.scrollTo(0, 0);

    // Dynamic page title mapping based on routes
    const titleMap = {
      '/': "AASH'NIK | Home",
      '/products': "AASH'NIK | Products",
      '/gallery': "AASH'NIK | Gallery",
      '/about': "AASH'NIK | About Us",
      '/contact': "AASH'NIK | Contact Us",
    };

    // Handle dynamic routes for product categories and individual product pages
    const pathParts = location.pathname.split('/').filter(Boolean);
    if (pathParts[0] === 'products') {
      if (pathParts.length === 2) {
        document.title = `AASH'NIK | ${pathParts[1].replace(/-/g, ' ').toUpperCase()}`;
      } else if (pathParts.length === 3) {
        document.title = `AASH'NIK | ${pathParts[2].replace(/-/g, ' ').toUpperCase()}`;
      } else {
        document.title = titleMap[location.pathname] || "AASH'NIK";
      }
    } else {
      document.title = titleMap[location.pathname] || "AASH'NIK";
    }
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:categoryId" element={<CategoryPage />} />
        <Route path="products/:categoryId/:productId" element={<ProductDetail />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
