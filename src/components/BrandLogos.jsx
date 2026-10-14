import { brandLogosData } from '../data/mockData';

const BrandLogos = () => {
  return (
    <section className="py-5 py-lg-6" style={{ backgroundColor: 'var(--bg-color)' }}>
      <div className="container py-3">
        {/* Section Header */}
        <div className="text-center mx-auto mb-4 mb-lg-5" style={{ maxWidth: '44rem' }}>
          <span className="badge badge-gold text-uppercase mb-2">Enterprise Partnerships</span>
          <h2 className="display-6 fw-bold text-main mt-1">
            Working Alongside <span className="text-warning">Global Brands</span>
          </h2>
          <p className="text-secondary lead fs-6 mb-0">
            Authorized procurement and certified hardware compatibility for tier-1 IT brands.
          </p>
        </div>

        {/* Brand Grid Container */}
        <div className="mx-auto sky-card border rounded-4 overflow-hidden bg-white shadow-sm" style={{ maxWidth: '960px' }}>
          <div className="row g-0">
            {brandLogosData.map((brand, idx) => (
              <div
                key={idx}
                className="col-6 col-md-3 p-3 d-flex align-items-center justify-content-center border-end border-bottom"
                style={{ height: '95px', backgroundColor: 'var(--card-color)' }}
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
