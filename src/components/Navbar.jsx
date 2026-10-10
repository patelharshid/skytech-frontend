import React, { useState, useEffect } from 'react';
import { Laptop, ShoppingBag, Search, Sun, Moon, PhoneCall, Mail, Menu, X } from 'lucide-react';
import TopMarqueeBar from './TopMarqueeBar';
import { primaryNumber, primaryEmail } from '../constants/constants';

const Navbar = ({ theme, toggleTheme, cartCount, onOpenCart, onOpenQuoteModal, onOpenRentModal }) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const isContactPage = window.location.pathname.replace(/\/$/, '') === '/contact-us';
  const isAboutPage = window.location.pathname.replace(/\/$/, '') === '/about-us';

  // Handle sticky navbar on scroll (Desktop only)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <header className="z-1000 position-relative">
      {/* Top Announcement Bar */}
      <TopMarqueeBar />

      {/* Main Header Bar (Visible at top) */}
      <div className="sky-header py-2 py-md-3 mb-md-4">
        <div className="container">
          <div className="row align-items-center gy-2 gy-md-3">
            {/* Brand Logo */}
            <div className="col-8 col-sm-auto col-lg-3 d-flex align-items-center justify-content-between">
              <a className="navbar-brand d-inline-flex align-items-center gap-2 fw-bold text-decoration-none" href="#">
                <div className="bg-skytech-gold p-2 rounded-3 text-dark d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '40px', height: '40px' }}>
                  <Laptop size={22} />
                </div>
                <div className="text-nowrap">
                  <span className="fs-3 text-main font-bold tracking-tight d-block lh-1">
                    Sky<span className="text-warning">Tech</span>
                  </span>
                </div>
              </a>
            </div>

            {/* Central Search Bar */}
            <div className="col-12 col-sm col-lg-4 order-3 order-sm-2 d-none d-sm-block">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control sky-form-control py-2 small"
                  placeholder="Search Products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="btn btn-skytech-gold px-3 d-flex align-items-center justify-content-center">
                  <Search size={18} />
                </button>
              </div>
            </div>

            {/* Right Quick Actions (Phone, Email, Mobile Toggle) */}
            <div className="col-4 col-sm-auto col-lg-5 order-2 order-sm-3 d-flex align-items-center justify-content-end gap-2 gap-sm-2.5 flex-nowrap ms-auto">
              {/* Phone Helpline */}
              <div className="d-none d-lg-flex align-items-center gap-2 border-end pe-3 text-nowrap flex-shrink-0">
                <div className="bg-surface p-2 rounded-circle text-warning border flex-shrink-0 d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }}>
                  <PhoneCall size={17} />
                </div>
                <div className="text-nowrap">
                  <span className="fw-bold small text-main font-mono text-nowrap">+91 {primaryNumber}</span>
                </div>
              </div>

              {/* Email Address */}
              <div className="d-none d-xl-flex align-items-center gap-2 border-end pe-3 text-nowrap flex-shrink-0">
                <div className="bg-surface p-2 rounded-circle text-info border flex-shrink-0 d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }}>
                  <Mail size={17} />
                </div>
                <div className="text-nowrap">
                  <span className="fw-bold small text-main font-mono text-nowrap">{primaryEmail}</span>
                </div>
              </div>

              {/* Mobile Navbar Menu Toggler */}
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

          {/* Mobile Collapsible Drawer (ONLY shown on Mobile when Hamburger is tapped) */}
          <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse d-lg-none mt-3 border-top pt-3`} id="mobileSkyTechNav">
            <ul className="navbar-nav flex-column gap-2 font-semibold mb-3">
              <li className="nav-item">
                <a className={`nav-link ${isContactPage || isAboutPage ? '' : 'active'}`} href="/#hero" aria-current={isContactPage || isAboutPage ? undefined : 'page'} onClick={() => setIsNavCollapsed(true)}>Home</a>
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
                <a className="nav-link" href="#services" onClick={() => setIsNavCollapsed(true)}>Services</a>
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

      {/* Floating SkyTech Style Navbar Pill (ONLY displayed on Desktop `d-none d-lg-block`) */}
      <div className={`skytech-floating-nav-wrapper d-none d-lg-block ${isScrolled ? 'is-sticky' : ''}`}>
        <div className="container">
          <nav className="navbar navbar-expand-lg skytech-floating-nav py-1">
            <div className="container-fluid p-0">
              {/* Logo inside floating navbar (visible ONLY when sticky on Desktop) */}
              <a className={`navbar-brand align-items-center gap-2 text-decoration-none me-3 ${isScrolled ? 'd-inline-flex' : 'd-none'}`} href="#">
                <div className="bg-skytech-gold p-2 rounded-3 text-dark d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px' }}>
                  <Laptop size={18} />
                </div>
                <span className="fs-5 text-main font-bold tracking-tight">
                  Sky<span className="text-warning">Tech</span>
                </span>
              </a>

              <div className="navbar-collapse justify-content-between align-items-center w-100">
                <ul className="navbar-nav w-100 justify-content-between align-items-center font-semibold py-1">
                  <li className="nav-item">
                    <a className={`nav-link ${isContactPage || isAboutPage ? '' : 'active'}`} href="/#hero" aria-current={isContactPage || isAboutPage ? undefined : 'page'}>Home</a>
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
                    <a className="nav-link" href="#services">Services</a>
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
