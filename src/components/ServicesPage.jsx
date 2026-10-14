import {
  Headphones,
  CheckCircle2,
  Award,
  FileText,
  ArrowRight,
  PhoneCall,
  Mail,
  MapPin,
  Search,
  FileCheck,
  Laptop,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import {
  primaryNumber,
  secondaryNumber,
  primaryEmail,
  officeAddress,
  mapUrl
} from '../constants/constants';
import serviceHero from '../assets/service-hero.png';
import serviceRepair from '../assets/service-repair.jpg';
import serviceUpgrade from '../assets/service-upgrade.png';
import serviceSoftware from '../assets/service-software.jpg';
import serviceRecovery from '../assets/service-recovery.jpg';
import serviceSupport from '../assets/service-support.png';
import '../css/services-page.css';

const servicesList = [
  {
    id: 'repair',
    title: 'Laptop Repair & Maintenance',
    image: serviceRepair,
    badge: 'Hardware & Chip-Level',
    description: 'Expert diagnostics and chip-level motherboard repairing for Dell, HP, Lenovo, Asus, Acer, and Apple MacBooks.',
    features: [
      'Motherboard chip-level circuit repair',
      'Broken screen & hinge replacement',
      'Liquid damage & thermal fan cleaning'
    ],
    inquiryMsg: 'Hello Skytech, I need Laptop Repair & Maintenance service.'
  },
  {
    id: 'sales',
    title: 'Laptop Sales & Accessories',
    image: serviceHero,
    badge: 'Enterprise & Refurbished',
    description: 'Certified premium refurbished business laptops, workstations, and 100% original computer accessories at unbeatable prices.',
    features: [
      'Grade-A tested corporate laptops',
      'Original chargers, batteries & adaptors',
      'Docking stations, monitors & keyboards'
    ],
    inquiryMsg: 'Hello Skytech, I am inquiring about Laptop Sales and Accessories.'
  },
  {
    id: 'upgrades',
    title: 'Hardware Upgrades (RAM & SSD)',
    image: serviceUpgrade,
    badge: 'Speed & Performance',
    description: 'Supercharge your slow laptop. Instant speed boost with high-speed NVMe PCIe SSDs and high-capacity DDR4/DDR5 RAM upgrades.',
    features: [
      'Ultra-fast M.2 NVMe SSD installations',
      'RAM expansion up to 32GB / 64GB',
      'OS cloning with zero data loss'
    ],
    inquiryMsg: 'Hello Skytech, I want to upgrade my laptop RAM and SSD.'
  },
  {
    id: 'software',
    title: 'Software Installation & Troubleshooting',
    image: serviceSoftware,
    badge: 'OS & Licensing',
    description: 'Clean operating system setups, licensing, driver optimization, software troubleshooting, and deep virus/malware removal.',
    features: [
      'Genuine Windows & macOS installations',
      'Driver conflict resolution & BIOS updates',
      'Virus, spyware & malware cleanup'
    ],
    inquiryMsg: 'Hello Skytech, I need Software Installation & Troubleshooting support.'
  },
  {
    id: 'recovery',
    title: 'Data Recovery & Backup',
    image: serviceRecovery,
    badge: 'Secure & Confidential',
    description: 'Safe extraction of critical photos, files, and database records from dead drives, accidental format, or corrupted partitions.',
    features: [
      'Corrupted SSD & dead HDD recovery',
      'Accidentally deleted partition restore',
      'Automated local & cloud backup setups'
    ],
    inquiryMsg: 'Hello Skytech, I need emergency Data Recovery support.'
  },
  {
    id: 'business',
    title: 'Business IT Support',
    image: serviceSupport,
    badge: 'Corporate & AMC',
    description: 'Comprehensive IT infrastructure management, Annual Maintenance Contracts (AMC), and responsive on-demand technical support.',
    features: [
      'Annual Maintenance Contracts (AMC)',
      'Bulk office workstation deployments',
      'Dedicated remote & onsite tech support'
    ],
    inquiryMsg: 'Hello Skytech, I am looking for Business IT Support / AMC services.'
  }
];

const whyChooseList = [
  {
    icon: Award,
    title: 'Experienced Technical Team',
    text: 'Over 10+ years of dedicated chip-level hardware repair experience. Our certified engineers solve complex board faults others turn away.'
  },
  {
    icon: CheckCircle2,
    title: 'Quality Parts & Reliable Solutions',
    text: 'We strictly source OEM-grade and genuine parts with manufacturer warranties to ensure lasting, dependable laptop performance.'
  },
  {
    icon: FileText,
    title: 'Transparent Service Estimates',
    text: 'No unexpected bills or hidden charges. You receive a clear, honest diagnostic evaluation and estimate before any work starts.'
  },
  {
    icon: Headphones,
    title: 'Customer-Focused Support',
    text: 'Friendly communication, fast turnaround time, warranty on repaired components, and helpful post-service support.'
  }
];

const processSteps = [
  {
    number: '01',
    icon: PhoneCall,
    title: 'Submit your service request',
    description: 'Call, WhatsApp, or bring your device directly to our service center in Ahmedabad.',
    highlight: 'Instant Response'
  },
  {
    number: '02',
    icon: Search,
    title: 'Get an initial assessment',
    description: 'Our certified engineers conduct diagnostics to pinpoint the precise fault and required parts.',
    highlight: 'Comprehensive Diagnostics'
  },
  {
    number: '03',
    icon: FileCheck,
    title: 'Approve the estimated cost',
    description: 'We provide an upfront quote and turnaround estimate. Repair begins only upon your approval.',
    highlight: 'Zero Hidden Costs'
  },
  {
    number: '04',
    icon: Laptop,
    title: 'Receive your repaired laptop',
    description: 'Your machine undergoes multi-level stress testing and is safely handed back with warranty.',
    highlight: 'Tested with Warranty'
  }
];

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
      <section className="services-hero-section text-white position-relative">
        <div className="services-hero-glow" aria-hidden="true" />
        <div className="container position-relative z-1">
          <div className="row align-items-center gy-5">
            {/* Left Content Column */}
            <div className="col-lg-7">
              <div className="d-inline-flex align-items-center gap-2 px-3 py-1.5 rounded-pill mb-3" style={{ background: 'rgba(32, 184, 199, 0.15)', border: '1px solid rgba(32, 184, 199, 0.35)' }}>
                <Sparkles size={16} className="text-warning" />
                <span className="small fw-bold text-uppercase tracking-wider text-light">Professional Laptop Care &amp; IT Services</span>
              </div>

              <h1 className="display-4 fw-extrabold mb-3 text-white tracking-tight" style={{ lineHeight: '1.18' }}>
                Complete Laptop Solutions <span style={{ color: 'var(--secondary-color)' }}>Under One Roof</span>
              </h1>

              <p className="lead text-light opacity-90 mb-4 pe-lg-4 fs-5" style={{ lineHeight: '1.6' }}>
                Laptop sales, repairs, upgrades, and professional IT support.
                Fast turnaround, genuine parts, and certified technician expertise you can trust.
              </p>

              <div className="d-flex flex-wrap align-items-center gap-3 pt-2">
                <button
                  type="button"
                  className="btn btn-skytech-gold px-4 py-2.5 fw-bold d-inline-flex align-items-center gap-2 shadow"
                  onClick={() => handleScrollTo('services-grid')}
                >
                  Explore Services
                  <ArrowRight size={18} />
                </button>

                <a
                  href="/contact-us"
                  className="btn btn-outline-light px-4 py-2.5 fw-bold rounded-pill d-inline-flex align-items-center gap-2"
                  style={{ borderWidth: '1.5px' }}
                >
                  Contact Us
                </a>
              </div>

              {/* Trust highlights */}
              <div className="row g-3 mt-4 pt-2 border-top border-secondary text-light small opacity-85">
                <div className="col-auto d-flex align-items-center gap-2">
                  <CheckCircle2 size={16} className="text-warning" />
                  <span>Chip-Level Diagnostics</span>
                </div>
                <div className="col-auto d-flex align-items-center gap-2">
                  <CheckCircle2 size={16} className="text-warning" />
                  <span>100% Genuine Parts</span>
                </div>
                <div className="col-auto d-flex align-items-center gap-2">
                  <CheckCircle2 size={16} className="text-warning" />
                  <span>Upfront Pricing</span>
                </div>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="col-lg-5">
              <div className="service-hero-img-wrap">
                <img
                  src={serviceHero}
                  alt="SkyTech Professional Laptop Solutions"
                  className="service-hero-img"
                />
                <div className="service-hero-floating-badge d-flex align-items-center gap-3">
                  <div className="bg-primary text-white p-2 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '42px', height: '42px' }}>
                    <Award size={22} className="text-warning" />
                  </div>
                  <div>
                    <div className="fw-bold text-white small">10+ Years Experience</div>
                    <div className="text-muted small" style={{ fontSize: '0.78rem' }}>10,000+ Laptops Repaired &amp; Serviced</div>
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
            {servicesList.map((service) => {
              return (
                <div key={service.id} className="col-12 col-md-6 col-lg-4 d-flex">
                  <div className="service-card-item">
                    <div className="service-card-img-wrap">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="service-card-img"
                      />
                    </div>

                    <div className="service-card-content">
                      <div className="mb-2">
                        <span className="badge bg-surface text-primary border fw-bold small">
                          {service.badge}
                        </span>
                      </div>

                      <h3 className="h5 fw-bold text-main mb-2">
                        {service.title}
                      </h3>

                      <p className="text-secondary small mb-3" style={{ lineHeight: '1.6' }}>
                        {service.description}
                      </p>

                      <div className="service-features-list">
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
                        className="service-card-btn w-100 mt-auto"
                      >
                        <span>Inquire About This Service</span>
                        <ChevronRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
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
            {whyChooseList.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="col-12 col-sm-6 col-lg-3">
                  <div className="why-trust-card">
                    <div className="why-icon-wrap">
                      <IconComp size={28} strokeWidth={2} />
                    </div>
                    <h3 className="h5 fw-bold text-main mb-2">
                      {item.title}
                    </h3>
                    <p className="text-secondary small mb-0" style={{ lineHeight: '1.6' }}>
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
      <section className="py-5 py-lg-6" style={{ backgroundColor: 'var(--surface-color)' }}>
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
            {processSteps.map((step) => {
              const StepIcon = step.icon;
              return (
                <div key={step.number} className="col-12 col-sm-6 col-lg-3 d-flex">
                  <div className="process-step-card">
                    <div className="process-step-watermark">{step.number}</div>

                    <div className="process-step-header">
                      <div className="process-step-icon-bubble">
                        <StepIcon size={24} strokeWidth={2.2} />
                      </div>

                    </div>

                    <h3 className="h6 fw-bold text-main mb-2" style={{ fontSize: '1.05rem', lineHeight: '1.4' }}>
                      {step.title}
                    </h3>

                    <p className="text-secondary small mb-3" style={{ lineHeight: '1.6' }}>
                      {step.description}
                    </p>

                    <div className="process-step-highlight-pill">
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
          <div className="services-cta-banner mb-5 text-center text-lg-start">
            <div className="row align-items-center gy-4">
              <div className="col-lg-8">
                <span className="badge bg-warning text-white text-uppercase px-3 py-1.5 rounded-pill mb-3 fw-bold">
                  Quick Service Booking
                </span>
                <h2 className="display-6 fw-extrabold text-white mb-3">
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
            {/* Phone */}
            <div className="col-12 col-md-4">
              <div className="services-info-box d-flex align-items-start gap-3">
                <div className="p-3 rounded-circle bg-surface text-warning border flex-shrink-0">
                  <PhoneCall size={24} />
                </div>
                <div>
                  <h4 className="fw-bold text-main fs-6 mb-1">Direct Call &amp; WhatsApp</h4>
                  <div className="small text-muted mb-2">Mon - Sat: 11:00 AM – 7:00 PM</div>
                  <div className="d-flex flex-column gap-1">
                    <a href={`tel:+91${primaryNumber}`} className="text-decoration-none fw-bold text-primary font-mono">
                      +91 {primaryNumber}
                    </a>
                    <a href={`tel:+91${secondaryNumber}`} className="text-decoration-none fw-semibold text-secondary font-mono small">
                      +91 {secondaryNumber}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="col-12 col-md-4">
              <div className="services-info-box d-flex align-items-start gap-3">
                <div className="p-3 rounded-circle bg-surface text-warning border flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="fw-bold text-main fs-6 mb-1">Official Email</h4>
                  <div className="small text-muted mb-2">For inquiries &amp; corporate quotes</div>
                  <a href={`mailto:${primaryEmail}`} className="text-decoration-none fw-bold text-primary font-mono">
                    {primaryEmail}
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="col-12 col-md-4">
              <div className="services-info-box d-flex align-items-start gap-3">
                <div className="p-3 rounded-circle bg-surface text-warning border flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="fw-bold text-main fs-6 mb-1">Service Center Location</h4>
                  <p className="small text-secondary mb-2" style={{ lineHeight: '1.5' }}>
                    {officeAddress}
                  </p>
                  <a
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="small fw-bold text-primary text-decoration-none d-inline-flex align-items-center gap-1"
                  >
                    <span>View on Google Maps</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
