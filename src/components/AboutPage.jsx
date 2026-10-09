import React from 'react';
import '../css/about-page.css';
import { FileText, MonitorCog, ShoppingBag, Target, Wrench } from 'lucide-react';
import aboutStoryImage from '../assets/about-story.png';
import aboutMissionImage from '../assets/about-mission.png';

const commitments = [
  { icon: FileText, title: 'Extend the life of your IT products', text: 'Tell us about your current setup. We’ll help you plan practical upgrades and support that keep your technology useful for longer.' },
  { icon: ShoppingBag, title: 'Choose the right products and support', text: 'Compare new, refurbished, pre-owned and previous-generation laptops, desktops, servers and accessories in one place.' },
  { icon: Wrench, title: 'Get support when you need it', text: 'Our team can help with maintenance, replacements and advice when products reach the end of their manufacturer support.' }
];

function AboutPage() {
  return (
    <main className="bg-white text-dark">
      <section className="page-title-banner about-page-banner position-relative d-flex align-items-center text-white">
        <div className="page-title-shade position-absolute top-0 start-0 w-100 h-100" />
        <div className="container position-relative py-4">
          <h1 className="h3 fw-bold mb-2">ABOUT US</h1>
          <p className="mb-0"><a className="text-white text-decoration-none" href="/#hero">Home</a> / About Us</p>
        </div>
      </section>

      <section className="container-xxl py-5 my-lg-3 rounded-bottom-4 bg-body-tertiary">
        <div className="row align-items-center g-4 g-xl-5">
          <div className="col-12 col-lg-6 position-relative">
            <img className="img-fluid w-100" src={aboutStoryImage} alt="Technology and people using computers" />
          </div>
          <div className="col-12 col-lg-6">
            <span className="small fw-bold text-uppercase text-orange">Who we are</span>
            <h2 className="display-6 fw-bold mt-2 mb-3">Technology that works for your business.</h2>
            <p className="text-secondary lh-lg">Founded in 2013, Sunray Systems helps businesses find dependable technology at a fair price. We offer desktops, laptops, workstations, servers and accessories selected to meet different needs and budgets.</p>
            <p className="text-secondary lh-lg">Based in Ahmedabad and serving customers across India, we focus on quality-tested products, helpful advice and reliable after-sales support. Whether you are upgrading one device or planning an entire workspace, our team is here to help you choose with confidence.</p>
            <div className="d-flex align-items-center gap-2 rounded-3 p-3 bg-warning-subtle text-dark"><MonitorCog size={20} className="text-orange flex-shrink-0" /><span className="small fw-semibold">Quality checked technology, backed by people who care.</span></div>
          </div>
        </div>
      </section>

      <section className="container-xxl py-5">
        <div className="row g-3 align-items-stretch">
          <div className="col-12 col-lg-2 d-flex">
            <img className="img-fluid w-100 h-100 rounded-4 object-fit-cover about-mission-image" src={aboutMissionImage} alt="Business people connecting through technology" />
          </div>
          <div className="col-12 col-md-6 col-lg-5">
            <article className="card h-100 border-0 rounded-4 shadow-sm p-4 p-xl-5 d-flex flex-row gap-3">
              <Target size={40} strokeWidth={1.5} className="text-orange flex-shrink-0" />
              <div><h2 className="h4 fw-bold">Mission</h2><p className="text-secondary lh-lg mb-0">To empower customers with high-quality, affordable laptops and PCs that enhance productivity and connectivity.</p></div>
            </article>
          </div>
          <div className="col-12 col-md-6 col-lg-5">
            <article className="card h-100 border-0 rounded-4 shadow-sm p-4 p-xl-5 d-flex flex-row gap-3">
              <MonitorCog size={40} strokeWidth={1.5} className="text-orange flex-shrink-0" />
              <div><h2 className="h4 fw-bold">Vision</h2><p className="text-secondary lh-lg mb-0">To be the trusted leader in tech retail, setting a standard in quality, customer care and accessible technology solutions.</p></div>
            </article>
          </div>
        </div>
      </section>

      <section className="container-xxl py-5">
        <div className="text-center mx-auto mb-4 about-commitments-heading">
          <span className="small fw-bold text-uppercase text-orange">How we help</span>
          <h2 className="h2 fw-bold mt-2">Support for every stage of your technology journey</h2>
        </div>
        <div className="row g-4">
          {commitments.map(({ icon: Icon, title, text }) => (
            <div className="col-12 col-md-4" key={title}>
              <article className="card h-100 border-0 rounded-4 shadow-sm p-4 about-commitment-card">
                <span className="rounded-circle p-3 bg-danger-subtle text-orange align-self-start mb-3"><Icon size={27} strokeWidth={1.7} /></span>
                <h3 className="h5 fw-bold">{title}</h3>
                <p className="text-secondary lh-lg mb-0">{text}</p>
              </article>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
