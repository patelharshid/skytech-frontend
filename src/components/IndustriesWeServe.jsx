import {
  GraduationCap,
  Zap,
  Server,
  Building2,
  Hotel,
  Video,
  Plane,
  Store,
  Building,
  Activity,
  Sparkles
} from 'lucide-react';
import { useIndustriesWeServe } from '../hooks/useData';
import industryBanner from '../assets/Industry-banner.png';

const iconMap = {
  GraduationCap: GraduationCap,
  Zap: Zap,
  Server: Server,
  Building2: Building2,
  Hotel: Hotel,
  Video: Video,
  Plane: Plane,
  Store: Store,
  Building: Building,
  HeartPulse: Activity
};

const IndustriesWeServe = () => {
  const { data: industries, loading } = useIndustriesWeServe();

  return (
    <section
      className="industries-serve-section py-5 py-lg-6 position-relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(14, 39, 59, 0.88), rgba(18, 59, 93, 0.92)), url(${industryBanner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container position-relative z-1 py-3">
        {/* Section Header */}
        <div className="text-center mx-auto mb-4 mb-md-5" style={{ maxWidth: '44rem' }}>
          <div
            className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3"
            style={{
              background: 'color-mix(in srgb, var(--secondary-color) 20%, transparent)',
              border: '1px solid color-mix(in srgb, var(--secondary-color) 45%, transparent)'
            }}
          >
            <Sparkles size={16} className="text-warning" />
            <span className="small fw-bold text-uppercase tracking-wider text-light">
              Nationwide Reach
            </span>
          </div>

          <h2 className="display-6 fw-bold text-white mt-1">
            Industries We <span className="text-warning">Serve</span>
          </h2>
          <p className="lead text-light opacity-90 fs-6 mb-0">
            Delivering robust enterprise IT infrastructure across diverse business sectors.
          </p>
        </div>

        {loading ? (
          <div className="py-4 text-center">
            <div className="spinner-border text-warning" role="status">
              <span className="visually-hidden">Loading Industries...</span>
            </div>
          </div>
        ) : (
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-3 g-md-4 justify-content-center">
            {industries && industries.map((item) => {
              const IconComponent = iconMap[item.iconKey] || Building2;
              return (
                <div key={item.id} className="col">
                  <div className="sky-card h-100 d-flex align-items-center gap-3 p-3 px-3 px-md-4 rounded-4 bg-white shadow-sm border">
                    <div
                      className="home-icon-bubble rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{ width: '42px', height: '42px' }}
                    >
                      <IconComponent size={22} className="text-warning" strokeWidth={2} />
                    </div>
                    <span className="fw-bold text-dark fs-6 mb-0 text-nowrap">
                      {item.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default IndustriesWeServe;
