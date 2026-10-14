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
import { getRoute, navigateTo } from './utils/navigation';

function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentRoute, setCurrentRoute] = useState(getRoute());

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentRoute(getRoute());
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    window.addEventListener('app-location-change', handleLocationChange);

    // Global click listener to intercept internal link clicks
    const handleGlobalClick = (e) => {
      const anchor = e.target.closest('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href) return;

      // Skip external links, tel, mailto, whatsapp, new tabs
      if (
        href.startsWith('http://') ||
        href.startsWith('https://') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        anchor.getAttribute('target') === '_blank' ||
        anchor.getAttribute('download')
      ) {
        return;
      }

      // Handle section anchor on current page (e.g., #catalog, #hero)
      if (href.startsWith('#') && !href.startsWith('#/')) {
        const route = getRoute();
        if (route === '/') {
          const el = document.querySelector(href);
          if (el) {
            e.preventDefault();
            el.scrollIntoView({ behavior: 'smooth' });
            return;
          }
        }
      }

      // Intercept internal routes (e.g. /about-us, /services, /contact-us, /#hero, /product/1)
      e.preventDefault();
      navigateTo(href);
    };

    document.addEventListener('click', handleGlobalClick);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
      window.removeEventListener('app-location-change', handleLocationChange);
      document.removeEventListener('click', handleGlobalClick);
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
