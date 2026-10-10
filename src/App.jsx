import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import ProductCatalog from './components/ProductCatalog';
import ShopByCategory from './components/ShopByCategory';
import SnapshotOfExcellence from './components/SnapshotOfExcellence';
import IndustriesWeServe from './components/IndustriesWeServe';
import OurHappyCustomers from './components/OurHappyCustomers';
import BrandLogos from './components/BrandLogos';
import FAQSection from './components/FAQSection';
import GetInTouchSection from './components/GetInTouchSection';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import RentalEstimatorModal from './components/RentalEstimatorModal';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';
import ProductDetailPage from './components/ProductDetailPage';

function App() {
  const [theme, setTheme] = useState('light');
  const [activeCategory, setActiveCategory] = useState('all');
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Apple MacBook Pro 16" (M3 Max, 36GB RAM, 1TB SSD)',
      price: 3299,
      quantity: 1,

      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80'
    }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isRentModalOpen, setIsRentModalOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
  const isContactPage = currentPath === '/contact-us';
  const isAboutPage = currentPath === '/about-us';
  const productRoute = currentPath.match(/^\/product\/([^/]+)$/);
  const productId = productRoute ? decodeURIComponent(productRoute[1]) : null;

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  const handleAddToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id);
    } else {
      setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity: newQty } : item));
    }
  };

  const handleRemoveItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleScrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="sky-app-root">
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        cartCount={cartItems.reduce((acc, i) => acc + i.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
        onOpenRentModal={() => setIsRentModalOpen(true)}
      />

      {isContactPage ? <ContactPage /> : isAboutPage ? <AboutPage /> : productId ? (
        <ProductDetailPage productId={productId} onAddToCart={handleAddToCart} />
      ) : <main>
        <HeroBanner
          onOpenRentModal={() => setIsRentModalOpen(true)}
          onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          onExploreCatalog={() => handleScrollToSection('shop')}
        />
        <ProductCatalog activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        <ShopByCategory onSelectCategory={setActiveCategory} />

        <SnapshotOfExcellence />

        <IndustriesWeServe />

        <OurHappyCustomers />

        <BrandLogos />

        <FAQSection />

        <GetInTouchSection />
      </main>}

      <Footer
        onOpenRentModal={() => setIsRentModalOpen(true)}
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
      />

      <RentalEstimatorModal
        isOpen={isRentModalOpen}
        onClose={() => setIsRentModalOpen(false)}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        onOrderComplete={() => {
          setCartItems([]);
          setIsCheckoutOpen(false);
        }}
      />
    </div>
  );
}

export default App;
