import React from 'react';
import {
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  MessageSquare
} from 'lucide-react';

const YellowDotIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" className="flex-shrink-0 me-2" style={{ verticalAlign: 'middle' }}>
    <circle cx="8" cy="8" r="6" stroke="#fecf07" strokeWidth="2" fill="none" />
    <circle cx="8" cy="8" r="2.2" fill="#fecf07" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);

const WhatsappIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 2C6.477 2 2 6.477 2 12c0 2.137.672 4.116 1.817 5.74L2.5 21.5l3.896-1.272A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.954 7.954 0 01-4.225-1.21l-.303-.18-2.316.756.77-2.257-.197-.315A7.958 7.958 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const YoutubeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="skytech-footer-section py-5 position-relative">
      <div className="container">
        <div className="row gy-4 align-items-start">
          {/* Left Column - SkyTech Systems Card */}
          <div className="col-lg-4">
            <div className="skytech-footer-card text-center">
              {/* White SkyTech Logo Badge */}
              <div className="skytech-logo-badge mb-3">
                <div className="d-flex align-items-center gap-2">
                  <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="20" r="10" stroke="#d94e16" strokeWidth="2.5" fill="none" />
                    <circle cx="20" cy="20" r="5" fill="#fecf07" />
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                      <line
                        key={i}
                        x1={20 + 12 * Math.cos((angle * Math.PI) / 180)}
                        y1={20 + 12 * Math.sin((angle * Math.PI) / 180)}
                        x2={20 + 16 * Math.cos((angle * Math.PI) / 180)}
                        y2={20 + 16 * Math.sin((angle * Math.PI) / 180)}
                        stroke="#d94e16"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    ))}
                  </svg>
                  <div className="text-start">
                    <div className="fw-extrabold text-uppercase lh-1" style={{ color: '#d94e16', fontSize: '1.2rem', letterSpacing: '0.04em' }}>
                      SKYTECH<sup style={{ fontSize: '0.55rem', top: '-0.5em' }}>™</sup>
                    </div>
                    <div className="fw-bold text-uppercase tracking-widest lh-1" style={{ color: '#ca8a04', fontSize: '0.62rem', marginTop: '3px', letterSpacing: '0.22em' }}>
                      SYSTEMS
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="fs-7 text-muted mb-4 px-2" style={{ lineHeight: '1.65', color: '#52453c' }}>
                SkyTech Systems, is based out of Ahmedabad and having customer base across India, we are serving more than 1200+ Corporate and SME customers in Gujarat.
              </p>

              {/* Social Icons Row */}
              <div className="pt-3 border-top border-secondary border-opacity-10 d-flex justify-content-center gap-2">
                <a href="#" className="skytech-social-btn" title="Facebook"><FacebookIcon /></a>
                <a href="https://wa.me/919726450900" target="_blank" rel="noreferrer" className="skytech-social-btn" title="WhatsApp"><WhatsappIcon /></a>
                <a href="#" className="skytech-social-btn" title="LinkedIn"><LinkedinIcon /></a>
                <a href="#" className="skytech-social-btn" title="Instagram"><InstagramIcon /></a>
                <a href="#" className="skytech-social-btn" title="YouTube"><YoutubeIcon /></a>
              </div>
            </div>
          </div>

          {/* Right Section (Phone Bar + 4 Columns) */}
          <div className="col-lg-8">
            {/* Top Phone Header Bar & ALL PRODUCTS Button */}
            <div className="d-flex flex-wrap align-items-center justify-content-between pb-3 mb-4 border-bottom border-secondary border-opacity-10 gap-3">
              <div className="d-flex align-items-center gap-3">
                <div className="skytech-footer-phone-icon">
                  <PhoneCall size={20} />
                </div>
                <div className="fw-bold fs-5 text-main font-mono">
                  +91- 97264 50900 | +91-99255 27533
                </div>
              </div>

              <a href="#shop" className="btn-skytech-all-products">
                ALL PRODUCTS
              </a>
            </div>

            {/* 4 Footer Columns */}
            <div className="row g-3 g-md-4">
              {/* Column 1: Quick Links */}
              <div className="col-6 col-md-3">
                <h6 className="skytech-footer-title">Quick Links</h6>
                <ul className="skytech-footer-links">
                  <li><a href="#hero" className="skytech-footer-link-item"><YellowDotIcon />About us</a></li>
                  <li><a href="#catalog" className="skytech-footer-link-item"><YellowDotIcon />Refurbished Systems</a></li>
                  <li><a href="#shop" className="skytech-footer-link-item"><YellowDotIcon />Shop</a></li>
                  <li><a href="/contact-us" className="skytech-footer-link-item"><YellowDotIcon />Contact Us</a></li>
                </ul>
              </div>

              {/* Column 2: Find It Fast */}
              <div className="col-6 col-md-3">
                <h6 className="skytech-footer-title">Find It Fast</h6>
                <ul className="skytech-footer-links">
                  <li><a href="#shop" className="skytech-footer-link-item"><YellowDotIcon />Laptops</a></li>
                  <li><a href="#shop" className="skytech-footer-link-item"><YellowDotIcon />Server</a></li>
                  <li><a href="#shop" className="skytech-footer-link-item"><YellowDotIcon />Desktop System</a></li>
                  <li><a href="#shop" className="skytech-footer-link-item"><YellowDotIcon />All In One</a></li>
                  <li><a href="#shop" className="skytech-footer-link-item"><YellowDotIcon />Apple MacBook</a></li>
                  <li><a href="#shop" className="skytech-footer-link-item"><YellowDotIcon />Accessories</a></li>
                </ul>
              </div>

              {/* Column 3: Contact Info */}
              <div className="col-12 col-md-6">
                <h6 className="skytech-footer-title fs-5 mb-3">Contact Info</h6>
                <ul className="skytech-footer-links d-flex flex-column gap-3">
                  <li className="d-flex align-items-start gap-3 fs-6 text-muted">
                    <Mail size={22} className="text-warning flex-shrink-0 mt-1" aria-hidden="true" />
                    <a
                      href="mailto:info@sunraysystems.in"
                      className="text-decoration-none fw-bold text-main fs-6"
                    >
                      info@sunraysystems.in
                    </a>
                  </li>

                  <li className="d-flex align-items-start gap-3 fs-6 text-muted">
                    <MapPin size={22} className="text-warning flex-shrink-0 mt-1" aria-hidden="true" />
                    <span className="fw-semibold text-main fs-6">
                      Sepal Olivia 101, 1st Floor, Beside Iscon Platinum, S.P. Ring Road,
                      Bopal Cross Road, Ahmedabad, Gujarat – 380058
                    </span>
                  </li>

                  <li className="d-flex align-items-start gap-3 fs-6 text-muted">
                    <Clock size={22} className="text-warning flex-shrink-0 mt-1" aria-hidden="true" />
                    <span className="fw-semibold text-main fs-6">
                      Monday - Saturday: 11:00 AM – 7:00 PM,
                      <br />
                      Sunday: Closed
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="mt-4 pt-2">
          <div className="skytech-copyright-pill">
            Copyright © 2026 SkyTech Systems. All rights reserved.
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Action Button */}
      <a
        href="https://wa.me/919726450900?text=Hello%20SkyTech%20Systems%2C%20I%20want%20to%20inquire%20about%20products"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float shadow-lg"
        title="Chat with Us on WhatsApp"
      >
        <WhatsappIcon size={28} />
      </a>
    </footer>
  );
};

export default Footer;
