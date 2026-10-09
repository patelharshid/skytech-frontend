import React from 'react';
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
  Activity
} from 'lucide-react';
import { useIndustriesWeServe } from '../hooks/useData';

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
    <section className="industries-serve-section py-5 position-relative overflow-hidden">
      {/* Background Overlay Graphics / Tech Image backdrop */}
      <div className="industries-bg-overlay"></div>

      <div className="container position-relative z-1 py-4 py-md-5">
        {/* Title */}
        <h2 className="display-5 fw-extrabold text-white text-center mb-4 mb-md-5 tracking-tight">
          Industry We Serve
        </h2>

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
                  <div className="industry-card h-100 d-flex align-items-center gap-3 p-3 px-3 px-md-4 rounded-4 bg-white shadow-sm transition-all">
                    <div className="industry-icon-box flex-shrink-0 text-orange">
                      <IconComponent size={26} strokeWidth={1.8} className="industry-icon" />
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
