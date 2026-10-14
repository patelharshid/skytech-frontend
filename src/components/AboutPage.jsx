import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  Laptop,
  ChevronRight
} from 'lucide-react';
import { primaryNumber } from '../constants/constants';
import aboutHeroLaptop from '../assets/about-hero-laptop.png';
import aboutStoryTeam from '../assets/about-story-team.jpg';
import aboutItSpecialist from '../assets/about-it-specialist.png';
import {
  aboutHeroData,
  aboutStoryData,
  aboutMissionVisionData,
  aboutWhyChooseData,
  aboutExpertiseData
} from '../data/mockData';
import '../css/about-page.css';

function AboutPage() {
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
      {/* 01. HERO SECTION */}
      <section className="bg-skytech-dark text-white position-relative overflow-hidden py-5 py-lg-6">
        <div className="about-hero-glow" aria-hidden="true" />
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
                <span className="small fw-bold text-uppercase tracking-wider text-light">
                  {aboutHeroData.badge}
                </span>
              </div>

              <h1 className="display-4 fw-bold mb-3 text-white tracking-tight lh-sm">
                Empowering Your <span className="text-warning">Digital World</span>
              </h1>

              <p className="lead text-light opacity-90 mb-4 pe-lg-4 fs-5 lh-base">
                {aboutHeroData.description}
              </p>

              <div className="d-flex flex-wrap align-items-center gap-3 pt-2">
                <button
                  type="button"
                  className="btn btn-skytech-gold px-4 py-2 fw-bold d-inline-flex align-items-center gap-2 shadow"
                  onClick={() => handleScrollTo('our-story')}
                >
                  {aboutHeroData.storyButtonText}
                  <ArrowRight size={18} />
                </button>

                <a
                  href="/contact-us"
                  className="btn btn-outline-light px-4 py-2 fw-bold rounded-pill d-inline-flex align-items-center gap-2"
                >
                  {aboutHeroData.contactButtonText}
                </a>
              </div>

              <div className="row g-3 mt-4 pt-3 border-top border-secondary text-light small opacity-85">
                <div className="col-auto d-flex align-items-center gap-2">
                  <CheckCircle2 size={16} className="text-warning" />
                  <span>Est. 2013 in Ahmedabad</span>
                </div>
                <div className="col-auto d-flex align-items-center gap-2">
                  <CheckCircle2 size={16} className="text-warning" />
                  <span>1,200+ Corporate Clients</span>
                </div>
                <div className="col-auto d-flex align-items-center gap-2">
                  <CheckCircle2 size={16} className="text-warning" />
                  <span>50-Point Quality Inspected</span>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="about-hero-img-wrap position-relative overflow-hidden">
                <img
                  src={aboutHeroLaptop}
                  alt="SkyTech High Performance Laptop"
                  className="w-100 object-fit-cover d-block"
                  style={{ height: '390px' }}
                />
                <div className="about-hero-floating-badge position-absolute bottom-0 start-0 m-3 p-2 px-3 rounded-3 shadow d-flex align-items-center gap-3">
                  <div className="bg-primary text-white p-2 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '42px', height: '42px' }}>
                    <Laptop size={22} className="text-warning" />
                  </div>
                  <div>
                    <div className="fw-bold text-white small">{aboutHeroData.floatingBadge.title}</div>
                    <div className="text-light opacity-75 small" style={{ fontSize: '0.78rem' }}>
                      {aboutHeroData.floatingBadge.subtitle}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. OUR STORY */}
      <section id="our-story" className="py-5 py-lg-6 bg-white">
        <div className="container py-3">
          <div className="row align-items-center gy-5">
            <div className="col-lg-7 pe-lg-4">
              <span className="badge badge-gold text-uppercase mb-2">
                {aboutStoryData.badge}
              </span>
              <h2 className="display-6 fw-bold text-main mt-1 mb-3">
                {aboutStoryData.title}
              </h2>

              <p className="lead text-main fw-semibold fs-6 mb-3 lh-base">
                {aboutStoryData.lead}
              </p>

              {aboutStoryData.paragraphs.map((p, idx) => (
                <p key={idx} className="text-secondary small mb-3 lh-lg">
                  {p}
                </p>
              ))}

              <div className="row g-3 pt-3">
                {aboutStoryData.stats.map((stat, sIdx) => (
                  <div key={sIdx} className="col-6 col-sm-3">
                    <div className="p-3 rounded-3 bg-surface border text-center h-100">
                      <div className="h3 fw-bold text-primary font-mono mb-1">{stat.value}</div>
                      <div className="small text-secondary fw-semibold" style={{ fontSize: '0.78rem' }}>{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-5">
              <div className="sky-card p-2 position-relative overflow-hidden rounded-4 shadow">
                <img
                  src={aboutStoryTeam}
                  alt="SkyTech Dedicated Engineering & Support Team"
                  className="w-100 object-fit-cover rounded-3 d-block"
                  style={{ height: '380px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. OUR MISSION & VISION */}
      <section className="py-5 py-lg-6" style={{ backgroundColor: 'var(--bg-color)' }}>
        <div className="container py-3">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '44rem' }}>
            <span className="badge badge-gold text-uppercase mb-2">Purpose &amp; Direction</span>
            <h2 className="display-6 fw-bold text-main mt-1">
              Our Mission &amp; Vision
            </h2>
            <p className="text-secondary lead fs-6 mb-0">
              Clear purpose and forward-looking commitment guide every solution we engineer.
            </p>
          </div>

          <div className="row g-4 align-items-stretch">
            {aboutMissionVisionData.map((item) => {
              const IconComp = item.icon;
              const isMission = item.id === 'mission';
              return (
                <div key={item.id} className="col-12 col-md-6 d-flex">
                  <div className={`sky-card p-4 p-lg-5 h-100 w-100 d-flex flex-column ${isMission ? 'mission-card' : 'vision-card'}`}>
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <div className="about-icon-bubble rounded-4 d-flex align-items-center justify-content-center text-primary flex-shrink-0">
                        <IconComp size={28} strokeWidth={2} />
                      </div>
                      <span className="badge bg-surface text-primary border fw-bold small">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="h4 fw-bold text-main mb-3">
                      {item.title}
                    </h3>

                    <p className="text-secondary mb-4 lh-base">
                      {item.description}
                    </p>

                    <div className="mt-auto pt-3 border-top">
                      <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                        {item.points.map((pt, pIdx) => (
                          <li key={pIdx} className="small text-main d-flex align-items-center gap-2">
                            <CheckCircle2 size={16} className="text-warning flex-shrink-0" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 04. WHY CHOOSE SKYTECH? */}
      <section className="py-5 py-lg-6 bg-white position-relative">
        <div className="container py-3">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '44rem' }}>
            <span className="badge badge-gold text-uppercase mb-2">Why Choose Skytech?</span>
            <h2 className="display-6 fw-bold text-main mt-1">
              Values That Set Us Apart
            </h2>
            <p className="text-secondary lead fs-6 mb-0">
              The foundational pillars that ensure you receive consistent excellence every step of the way.
            </p>
          </div>

          <div className="row g-4">
            {aboutWhyChooseData.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="col-12 col-sm-6 col-lg-3 d-flex">
                  <div className="sky-card p-4 h-100 w-100 d-flex flex-column">
                    <div className="about-icon-bubble rounded-4 d-flex align-items-center justify-content-center text-primary flex-shrink-0 mb-3">
                      <IconComp size={26} strokeWidth={2} />
                    </div>
                    <h3 className="h5 fw-bold text-main mb-2">
                      {item.title}
                    </h3>
                    <p className="text-secondary small mb-0 lh-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 05. OUR EXPERTISE */}
      <section className="py-5 py-lg-6 bg-surface">
        <div className="container py-3">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '45rem' }}>
            <span className="badge badge-gold text-uppercase mb-2">Our Expertise</span>
            <h2 className="display-6 fw-bold text-main mt-1">
              End-to-End Laptop &amp; IT Solutions
            </h2>
            <p className="text-secondary lead fs-6 mb-0">
              Only the professional services that Skytech delivers with certified in-house mastery.
            </p>
          </div>

          <div className="row g-4 align-items-stretch">
            {aboutExpertiseData.map((exp) => {
              const ExpIcon = exp.icon;
              return (
                <div key={exp.id} className="col-12 col-md-6 col-lg-3 d-flex">
                  <div className="sky-card p-4 h-100 w-100 d-flex flex-column">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div className="about-icon-bubble rounded-4 d-flex align-items-center justify-content-center text-primary flex-shrink-0">
                        <ExpIcon size={26} strokeWidth={2} />
                      </div>
                      <span className="badge bg-surface text-primary border fw-bold small" style={{ fontSize: '0.72rem' }}>
                        {exp.badge}
                      </span>
                    </div>

                    <h3 className="h6 fw-bold text-main mb-2" style={{ fontSize: '1.05rem', lineHeight: '1.4' }}>
                      {exp.title}
                    </h3>

                    <p className="text-secondary small mb-3 lh-base">
                      {exp.description}
                    </p>

                    <div className="mt-auto pt-3 border-top">
                      <ul className="list-unstyled d-flex flex-column gap-2 mb-3">
                        {exp.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="small text-main d-flex align-items-center gap-2" style={{ fontSize: '0.78rem' }}>
                            <CheckCircle2 size={14} className="text-warning flex-shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>

                      <a
                        href="/services"
                        className="small fw-bold text-primary text-decoration-none d-inline-flex align-items-center gap-1"
                      >
                        <span>Learn More</span>
                        <ChevronRight size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-5 sky-card p-4 p-lg-5 overflow-hidden position-relative">
            <div className="row align-items-center gy-4">
              <div className="col-lg-8">
                <span className="badge badge-gold text-uppercase mb-2">Dedicated Tech Support</span>
                <h3 className="h4 fw-bold text-main mb-2">Need Professional Assistance With Your Hardware?</h3>
                <p className="text-secondary small mb-0 lh-base" style={{ maxWidth: '42rem' }}>
                  Our senior chip-level engineers and IT support specialists are available for diagnostics, corporate AMC setups, and fast walk-in repairs at our Ahmedabad service center.
                </p>
              </div>
              <div className="col-lg-4 text-center text-lg-end">
                <img
                  src={aboutItSpecialist}
                  alt="SkyTech Certified Technical Specialist"
                  className="rounded-3 shadow-sm border img-fluid"
                  style={{ maxHeight: '130px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06. FINAL CALL TO ACTION */}
      <section className="py-5 py-lg-6 bg-white">
        <div className="container py-3">
          <div className="bg-skytech-dark rounded-4 p-4 p-lg-5 text-white position-relative overflow-hidden shadow-lg text-center text-lg-start">
            <div className="row align-items-center gy-4">
              <div className="col-lg-8">
                <span className="badge bg-warning text-white text-uppercase px-3 py-1.5 rounded-pill mb-3 fw-bold">
                  Connect With Us
                </span>
                <h2 className="display-6 fw-bold text-white mb-3">
                  Let&apos;s Build Something Better Together
                </h2>
                <p className="lead text-light opacity-90 fs-6 mb-0" style={{ maxWidth: '42rem' }}>
                  Have a question or need the right technology solution? Our team is ready to help with certified advice, transparent pricing, and dependable support.
                </p>
              </div>

              <div className="col-lg-4 text-center text-lg-end">
                <div className="d-flex flex-column flex-sm-row flex-lg-column gap-3 justify-content-center justify-lg-content-end">
                  <a
                    href="/contact-us"
                    className="btn btn-warning btn-lg fw-bold px-4 py-3 rounded-pill shadow d-inline-flex align-items-center justify-content-center gap-2"
                  >
                    <span>Get in Touch</span>
                    <ArrowRight size={18} />
                  </a>

                  <a
                    href={getWhatsAppLink('Hello Skytech, I would like to connect with your team.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-light btn-lg fw-bold px-4 py-3 rounded-pill d-inline-flex align-items-center justify-content-center gap-2"
                  >
                    <PhoneCall size={18} />
                    <span>WhatsApp Chat</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
