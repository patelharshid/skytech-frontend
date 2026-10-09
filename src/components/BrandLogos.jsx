import React from 'react';
import { brandLogosData } from '../data/mockData';

const BrandLogos = () => {
  return (
    <section className="py-5 bg-white border-top border-bottom">
      <div className="container">
        {/* Title */}
        <h3 className="text-center fw-bold fs-4 mb-4 text-main">
          Working Alongside Global Brands
        </h3>

        {/* Brand Grid Container */}
        <div className="max-w-5xl mx-auto border rounded-2 overflow-hidden shadow-sm bg-white">
          <div className="row g-0">
            {brandLogosData.map((brand, idx) => (
              <div
                key={idx}
                className="col-6 col-md-3 p-3.5 d-flex align-items-center justify-content-center border-end border-bottom"
                style={{ height: '95px', backgroundColor: '#ffffff' }}
              >
                {brand.isAppleCombo ? (
                  <div className="d-flex align-items-center gap-2">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      style={{ maxHeight: '28px', maxWidth: '28px', objectFit: 'contain' }}
                      loading="lazy"
                    />
                    <span className="fw-bold fs-6 text-dark" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif' }}>
                      {brand.displayText}
                    </span>
                  </div>
                ) : (
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    style={{
                      maxHeight: '38px',
                      maxWidth: '85%',
                      objectFit: 'contain',
                      filter: 'contrast(1.05)',
                      ...brand.style,
                    }}
                    loading="lazy"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;
