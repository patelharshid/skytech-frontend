import {
  CheckCircle2,
  Award,
  ArrowRight,
  Laptop,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { primaryNumber } from '../constants/constants';
import serviceHero from '../assets/service-hero.png';
import {
  servicesTrustHighlightsData,
  servicesListData,
  whyChooseListData,
  processStepsData,
  servicesContactDetailsData
} from '../data/mockData';
import '../css/services-page.css';

const ServicesPage = () => {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getWhatsAppLink = (message) => {
    return `https://wa.me/91${primaryNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <main className="bg-white text-dark">
      <section className="services-hero-section text-white position-relative overflow-hidden py-5 py-lg-6">
        <div className="services-hero-glow" aria-hidden="true" />
        <div className="container position-relative z-1">
          <div className="row align-items-center gy-5">
            <div className="col-lg-7 py-5">
              <div
                className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3"
                style={{
                  background: 'color-mix(in srgb, var(--secondary-color) 15%, transparent)',
                  border: '1px solid color-mix(in srgb, var(--secondary-color) 35%, transparent)'
                }}
              >
                <Sparkles size={16} className="text-warning" />
                <span className="small fw-bold text-uppercase tracking-wider text-light">Professional Laptop Care &amp; IT Services</span>
              </div>

              <h1 className="display-4 fw-bold mb-3 text-white tracking-tight lh-sm">
                Complete Laptop Solutions <span className="text-warning">Under One Roof</span>
              </h1>

              <p className="lead text-light opacity-90 mb-4 pe-lg-4 fs-5 lh-base">
                Laptop sales, repairs, upgrades, and professional IT support.
                Fast turnaround, genuine parts, and certified technician expertise you can trust.
              </p>

              <div className="d-flex flex-wrap align-items-center gap-3 pt-2">
                <button
                  type="button"
                  className="btn btn-skytech-gold px-4 py-2 fw-bold d-inline-flex align-items-center gap-2 shadow"
                  onClick={() => handleScrollTo('services-grid')}
                >
                  Explore Services
                  <ArrowRight size={18} />
                </button>

                <a
                  href="/contact-us"
                  className="btn btn-outline-light px-4 py-2 fw-bold rounded-pill d-inline-flex align-items-center gap-2"
                >
                  Contact Us
                </a>
              </div>

              {/* Trust highlights */}
              <div className="row g-3 mt-4 pt-2 border-top border-secondary text-light small opacity-85">
                {servicesTrustHighlightsData.map((item, idx) => (
                  <div key={idx} className="col-auto d-flex align-items-center gap-2">
                    <CheckCircle2 size={16} className="text-warning" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image Column */}
            <div className="col-lg-5">
              <div className="service-hero-img-wrap position-relative overflow-hidden">
                <img
                  src={serviceHero}
                  alt="SkyTech Professional Laptop Solutions"
                  className="w-100 object-fit-cover d-block"
                  style={{ height: '380px' }}
                />
                <div className="service-hero-floating-badge position-absolute bottom-0 start-0 m-3 p-2 px-3 rounded-3 shadow d-flex align-items-center gap-3">
                  <div className="bg-primary text-white p-2 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '42px', height: '42px' }}>
                    <Award size={22} className="text-warning" />
                  </div>
                  <div>
                    <div className="fw-bold text-white small">10+ Years Experience</div>
                    <div className="text-light opacity-75 small" style={{ fontSize: '0.78rem' }}>10,000+ Laptops Repaired &amp; Serviced</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          02. OUR SERVICES GRID
          ================================================================= */}
      <section id="services-grid" className="py-5 py-lg-6" style={{ backgroundColor: 'var(--bg-color)' }}>
        <div className="container py-3">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '45rem' }}>
            <span className="badge badge-gold text-uppercase mb-2">Our Services Grid</span>
            <h2 className="display-6 fw-bold text-main mt-1">
              Engineered For Speed, Precision &amp; Reliability
            </h2>
            <p className="text-secondary lead fs-6 mb-0">
              From hardware component-level repairs to RAM/SSD speed enhancements and corporate IT support, we handle it all.
            </p>
          </div>

          <div className="row g-4 align-items-stretch">
            {servicesListData.map((service) => (
              <div key={service.id} className="col-12 col-md-6 col-lg-4 d-flex">
                <div className="sky-card p-4 h-100 w-100 d-flex flex-column position-relative overflow-hidden">
                  <div className="rounded-3 overflow-hidden mb-3 bg-surface position-relative flex-shrink-0" style={{ height: '205px' }}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-100 h-100 object-fit-cover"
                    />
                  </div>

                  <div className="d-flex flex-column flex-grow-1">
                    <div className="mb-2">
                      <span className="badge bg-surface text-primary border fw-bold small">
                        {service.badge}
                      </span>
                    </div>

                    <h3 className="h5 fw-bold text-main mb-2">
                      {service.title}
                    </h3>

                    <p className="text-secondary small mb-3 lh-base">
                      {service.description}
                    </p>

                    <div className="mt-auto mb-3 p-3 bg-surface rounded-3 border">
                      <div className="fw-bold small text-main mb-2 text-uppercase tracking-wider" style={{ fontSize: '0.74rem' }}>
                        Included Services:
                      </div>
                      <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                        {service.features.map((feature, fIdx) => (
                          <li key={fIdx} className="small text-main d-flex align-items-center gap-2">
                            <CheckCircle2 size={15} className="text-warning flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={getWhatsAppLink(service.inquiryMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-skytech-gold w-100 d-inline-flex align-items-center justify-content-center gap-2 mt-auto"
                    >
                      <span>Inquire About This Service</span>
                      <ChevronRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          03. WHY CHOOSE SKYTECH?
          ================================================================= */}
      <section className="py-5 py-lg-6 bg-white position-relative">
        <div className="container py-3">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '44rem' }}>
            <span className="badge badge-gold text-uppercase mb-2">Why Choose Skytech?</span>
            <h2 className="display-6 fw-bold text-main mt-1">
              Your Trusted Partner for Laptop Care
            </h2>
            <p className="text-secondary lead fs-6 mb-0">
              We stand apart through genuine transparency, certified engineering expertise, and dedicated post-repair customer support.
            </p>
          </div>

          <div className="row g-4">
            {whyChooseListData.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="col-12 col-sm-6 col-lg-3">
                  <div className="sky-card p-4 h-100">
                    <div className="why-icon-wrap rounded-4 d-flex align-items-center justify-content-center mb-3 text-primary">
                      <IconComp size={28} strokeWidth={2} />
                    </div>
                    <h3 className="h5 fw-bold text-main mb-2">
                      {item.title}
                    </h3>
                    <p className="text-secondary small mb-0 lh-base">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================
          04. SERVICE PROCESS
          ================================================================= */}
      <section className="py-5 py-lg-6 bg-surface">
        <div className="container py-3">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '44rem' }}>
            <span className="badge badge-gold text-uppercase mb-2">Service Process</span>
            <h2 className="display-6 fw-bold text-main mt-1">
              How Our Service Process Works
            </h2>
            <p className="text-secondary lead fs-6 mb-0">
              4 simple steps from diagnosis to delivery. Fast, transparent, and completely stress-free.
            </p>
          </div>

          <div className="row g-4 align-items-stretch">
            {processStepsData.map((step) => {
              const StepIcon = step.icon;
              return (
                <div key={step.number} className="col-12 col-sm-6 col-lg-3 d-flex">
                  <div className="sky-card process-step-card p-4 h-100 w-100 position-relative d-flex flex-column overflow-hidden">
                    <div className="process-step-watermark position-absolute top-0 end-0 mt-2 me-3 font-mono pe-none user-select-none">
                      {step.number}
                    </div>

                    <div className="d-flex align-items-center justify-content-between mb-3 position-relative z-1">
                      <div className="process-step-icon-bubble rounded-4 d-flex align-items-center justify-content-center text-white flex-shrink-0">
                        <StepIcon size={24} strokeWidth={2.2} />
                      </div>
                    </div>

                    <h3 className="h6 fw-bold text-main mb-2" style={{ fontSize: '1.05rem', lineHeight: '1.4' }}>
                      {step.title}
                    </h3>

                    <p className="text-secondary small mb-3 lh-base">
                      {step.description}
                    </p>

                    <div className="mt-auto p-2 px-3 bg-surface rounded-3 border d-flex align-items-center gap-2 small fw-semibold text-main">
                      <CheckCircle2 size={15} className="text-warning flex-shrink-0" />
                      <span>{step.highlight}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================
          05. CONTACT / CTA SECTION
          ================================================================= */}
      <section id="service-contact" className="py-5 py-lg-6 bg-white">
        <div className="container py-3">
          {/* Main CTA Card */}
          <div className="bg-skytech-dark rounded-4 p-4 p-lg-5 text-white position-relative overflow-hidden shadow-lg mb-5 text-center text-lg-start">
            <div className="row align-items-center gy-4">
              <div className="col-lg-8">
                <span className="badge bg-warning text-white text-uppercase px-3 py-1.5 rounded-pill mb-3 fw-bold">
                  Quick Service Booking
                </span>
                <h2 className="display-6 fw-bold text-white mb-3">
                  Need Help With Your Laptop?
                </h2>
                <p className="lead text-light opacity-90 fs-6 mb-0" style={{ maxWidth: '42rem' }}>
                  Speak directly to our senior hardware specialists or schedule your device diagnostics today.
                  We provide doorstep pick-and-drop assistance across Ahmedabad and walk-in express repairs.
                </p>
              </div>

              <div className="col-lg-4 text-center text-lg-end">
                <div className="d-flex flex-column flex-sm-row flex-lg-column gap-3 justify-content-center justify-lg-content-end">
                  <a
                    href={getWhatsAppLink('Hello Skytech, I want to Book a Service for my laptop.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-warning btn-lg fw-bold px-4 py-3 rounded-pill shadow d-inline-flex align-items-center justify-content-center gap-2"
                  >
                    <Laptop size={20} />
                    <span>Book a Service</span>
                  </a>

                  <a
                    href="/contact-us"
                    className="btn btn-outline-light btn-lg fw-bold px-4 py-3 rounded-pill d-inline-flex align-items-center justify-content-center gap-2"
                  >
                    <span>Contact Skytech</span>
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Details Grid */}
          <div className="row g-4">
            {servicesContactDetailsData.map((box) => {
              const BoxIcon = box.icon;
              return (
                <div key={box.id} className="col-12 col-md-4">
                  <div className="sky-card p-4 h-100 d-flex align-items-start gap-3">
                    <div className="p-3 rounded-circle bg-surface text-warning border flex-shrink-0">
                      <BoxIcon size={24} />
                    </div>
                    <div>
                      <h4 className="fw-bold text-main fs-6 mb-1">{box.title}</h4>
                      {box.subtitle && (
                        <div className="small text-muted mb-2">{box.subtitle}</div>
                      )}
                      {box.type === 'phone' && (
                        <div className="d-flex flex-column gap-1">
                          {box.phones.map((phone, pIdx) => (
                            <a
                              key={pIdx}
                              href={`tel:${phone.tel}`}
                              className={`text-decoration-none font-mono ${phone.isPrimary ? 'fw-bold text-primary' : 'fw-semibold text-secondary small'}`}
                            >
                              {phone.label}
                            </a>
                          ))}
                        </div>
                      )}
                      {box.type === 'email' && (
                        <a href={`mailto:${box.email}`} className="text-decoration-none fw-bold text-primary font-mono">
                          {box.email}
                        </a>
                      )}
                      {box.type === 'location' && (
                        <>
                          <p className="small text-secondary mb-2 lh-base">
                            {box.address}
                          </p>
                          <a
                            href={box.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="small fw-bold text-primary text-decoration-none d-inline-flex align-items-center gap-1"
                          >
                            <span>View on Google Maps</span>
                            <ArrowRight size={14} />
                          </a>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
