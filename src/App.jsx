import { useState, useEffect } from 'react';
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
import ServicesPage from './components/ServicesPage';
import ProductDetailPage from './components/ProductDetailPage';

function getCleanRoute() {
  const hash = window.location.hash || '';
  if (hash.startsWith('#/')) {
    const cleanHash = hash.slice(1).split('?')[0];
    return cleanHash.replace(/\/$/, '') || '/';
  }

  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  let path = window.location.pathname.replace(/\/$/, '') || '/';
  if (base && path.startsWith(base)) {
    path = path.slice(base.length) || '/';
  }
  return path.replace(/\/$/, '') || '/';
}

function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentRoute, setCurrentRoute] = useState(getCleanRoute);

  useEffect(() => {
    const handleRouteChange = () => {
      const nextRoute = getCleanRoute();
      setCurrentRoute(nextRoute);

      const hash = window.location.hash;
      if (hash.includes('#shop')) {
        setTimeout(() => {
          document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
        }, 60);
      } else if (hash.includes('#hero')) {
        setTimeout(() => {
          document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
        }, 60);
      } else {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('hashchange', handleRouteChange);
    window.addEventListener('popstate', handleRouteChange);
    return () => {
      window.removeEventListener('hashchange', handleRouteChange);
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  const isContactPage = currentRoute === '/contact-us';
  const isAboutPage = currentRoute === '/about-us';
  const isServicesPage = currentRoute === '/services';
  const productRoute = currentRoute.match(/^\/product\/([^/]+)$/);
  const productId = productRoute ? decodeURIComponent(productRoute[1]) : null;

  return (
    <div className="sky-app-root">
      <Navbar currentRoute={currentRoute} />

      {isContactPage ? (
        <ContactPage />
      ) : isAboutPage ? (
        <AboutPage />
      ) : isServicesPage ? (
        <ServicesPage />
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
