import { useState, useEffect } from 'react';
import { Search, PhoneCall, Mail, Menu, X } from 'lucide-react';
import TopMarqueeBar from './TopMarqueeBar';
import { primaryNumber, primaryEmail } from '../constants/constants';
import logo from '../assets/logo.png';

const Navbar = ({ currentRoute }) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const activeRoute = currentRoute || (typeof window !== 'undefined' ? window.location.pathname : '');
  const isContactPage = activeRoute.includes('/contact-us');
  const isAboutPage = activeRoute.includes('/about-us');
  const isServicesPage = activeRoute.includes('/services');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 95);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <header className="z-1000 position-relative">
      <TopMarqueeBar />

      <div className="sky-header py-2 py-md-3">
        <div className="container">
          <div className="row align-items-center gy-2 gy-md-3">
            <div className="col-8 col-sm-auto col-lg-3 d-flex align-items-center justify-content-between">
              <a className="navbar-brand d-inline-flex align-items-center text-decoration-none" href="/">
                <img
                  src={logo}
                  alt="SKYTECH"
                  style={{ height: '60px', width: 'auto' }}
                />
              </a>
            </div>

            <div className="col-12 col-sm col-lg-4 order-3 order-sm-2 d-none d-sm-block">
              <div className="position-relative d-flex align-items-center">
                <Search
                  size={18}
                  className="position-absolute start-0 ms-3 text-muted"
                  style={{ pointerEvents: 'none' }}
                />
                <input
                  type="text"
                  className="form-control sky-form-control py-2 ps-5 pe-3 small"
                  placeholder="Search Products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="col-4 col-sm-auto col-lg-5 order-2 order-sm-3 d-flex align-items-center justify-content-end gap-2 gap-sm-2.5 flex-nowrap ms-auto">
              <div className="d-none d-lg-flex align-items-center gap-2 pe-3 text-nowrap flex-shrink-0">
                <div className="bg-surface p-2 rounded-circle text-warning border flex-shrink-0 d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }}>
                  <PhoneCall size={17} />
                </div>
                <div className="text-nowrap">
                  <span className="fw-bold small text-main font-mono text-nowrap">+91 {primaryNumber}</span>
                </div>
              </div>

              <div className="d-none d-xl-flex align-items-center gap-2 pe-3 text-nowrap flex-shrink-0">
                <div className="bg-surface p-2 rounded-circle text-info border flex-shrink-0 d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }}>
                  <Mail size={17} />
                </div>
                <div className="text-nowrap">
                  <span className="fw-bold small text-main font-mono text-nowrap">{primaryEmail}</span>
                </div>
              </div>

              <button
                className="navbar-toggler border-0 p-2 d-lg-none flex-shrink-0 text-main"
                type="button"
                onClick={handleNavCollapse}
                aria-label="Toggle navigation"
              >
                {isNavCollapsed ? <Menu size={26} /> : <X size={26} />}
              </button>
            </div>
          </div>

          <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse d-lg-none mt-3 border-top pt-3`} id="mobileSkyTechNav">
            <ul className="navbar-nav flex-column gap-2 font-semibold mb-3">
              <li className="nav-item">
                <a className={`nav-link ${isContactPage || isAboutPage || isServicesPage ? '' : 'active'}`} href="/" aria-current={isContactPage || isAboutPage || isServicesPage ? undefined : 'page'} onClick={() => setIsNavCollapsed(true)}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#catalog" onClick={() => setIsNavCollapsed(true)}>Laptops</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#catalog" onClick={() => setIsNavCollapsed(true)}>Desktop</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#catalog" onClick={() => setIsNavCollapsed(true)}>Apple Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#catalog" onClick={() => setIsNavCollapsed(true)}>Monitor</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#catalog" onClick={() => setIsNavCollapsed(true)}>Server</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#catalog" onClick={() => setIsNavCollapsed(true)}>All In One</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#catalog" onClick={() => setIsNavCollapsed(true)}>Accessories</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${isServicesPage ? 'active about-nav-active' : ''}`} href="/services" aria-current={isServicesPage ? 'page' : undefined} onClick={() => setIsNavCollapsed(true)}>Services</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${isAboutPage ? 'active about-nav-active' : ''}`} href="/about-us" aria-current={isAboutPage ? 'page' : undefined} onClick={() => setIsNavCollapsed(true)}>About Us</a>
              </li>
            </ul>

            <a
              className={`btn btn-skytech-gold w-100 py-2 small fw-bold ${isContactPage ? 'contact-nav-active' : ''}`}
              href="/contact-us"
              aria-current={isContactPage ? 'page' : undefined}
              onClick={() => setIsNavCollapsed(true)}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <div className={`skytech-floating-nav-wrapper d-none d-lg-block ${isScrolled ? 'is-sticky' : ''}`}>
        <div className="container">
          <nav className="navbar navbar-expand-lg skytech-floating-nav py-1">
            <div className="container-fluid p-0 d-flex align-items-center">
              {isScrolled && (
                <a className="navbar-brand d-inline-flex align-items-center text-decoration-none me-3 py-0 flex-shrink-0" href="/">
                  <img
                    src={logo}
                    alt="SKYTECH"
                    style={{ height: '24px', width: 'auto', objectFit: 'contain' }}
                  />
                </a>
              )}
              <div className="navbar-collapse justify-content-between align-items-center w-100">
                <ul className="navbar-nav w-100 justify-content-between align-items-center font-semibold py-1">
                  <li className="nav-item">
                    <a className={`nav-link ${isContactPage || isAboutPage || isServicesPage ? '' : 'active'}`} href="/" aria-current={isContactPage || isAboutPage || isServicesPage ? undefined : 'page'}>Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#catalog">Laptops</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#catalog">Desktop</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#catalog">Apple Products</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#catalog">Monitor</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#catalog">Server</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#catalog">All In One</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#catalog">Accessories</a>
                  </li>
                  <li className="nav-item">
                    <a className={`nav-link ${isServicesPage ? 'active about-nav-active' : ''}`} href="/services" aria-current={isServicesPage ? 'page' : undefined}>Services</a>
                  </li>
                  <li className="nav-item">
                    <a className={`nav-link ${isAboutPage ? 'active about-nav-active' : ''}`} href="/about-us" aria-current={isAboutPage ? 'page' : undefined}>About Us</a>
                  </li>
                </ul>

                {/* Right Action Button: Contact Us Golden Pill Button */}
                <a
                  className={`btn btn-skytech-gold px-3 py-2 small fw-bold text-nowrap flex-shrink-0 ms-lg-3 ${isContactPage ? 'contact-nav-active' : ''}`}
                  href="/contact-us"
                  aria-current={isContactPage ? 'page' : undefined}
                >
                  Contact Us
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
