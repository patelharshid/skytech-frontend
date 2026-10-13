import { useState } from 'react';
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
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';
import ProductDetailPage from './components/ProductDetailPage';

function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
  const isContactPage = currentPath === '/contact-us';
  const isAboutPage = currentPath === '/about-us';
  const productRoute = currentPath.match(/^\/product\/([^/]+)$/);
  const productId = productRoute ? decodeURIComponent(productRoute[1]) : null;

  return (
    <div className="sky-app-root">
      <Navbar />

      {isContactPage ? (
        <ContactPage />
      ) : isAboutPage ? (
        <AboutPage />
      ) : productId ? (
        <ProductDetailPage productId={productId} />
      ) : (
        <main>
          <HeroBanner />
          <ProductCatalog activeCategory={activeCategory} />
          <ShopByCategory onSelectCategory={setActiveCategory} />
          <SnapshotOfExcellence />
          <IndustriesWeServe />
          <FAQSection />
          <OurHappyCustomers />
          <BrandLogos />
          <GetInTouchSection />
        </main>
      )}

      <Footer />
    </div>
  );
}

export default App;
