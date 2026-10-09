import React from 'react';
import { ArrowRight, BadgeCheck, Building2, Cpu, Headphones, MapPin, ShieldCheck, Truck } from 'lucide-react';

const commitments = [
  { icon: BadgeCheck, title: 'Quality checked', text: 'Systems are inspected and tested before they reach you.' },
  { icon: ShieldCheck, title: 'Warranty backed', text: 'Warranty options are available on eligible products.' },
  { icon: Truck, title: 'Delivered across India', text: 'Doorstep delivery helps your team get set up wherever you are.' },
  { icon: Headphones, title: 'Here when you need us', text: 'Get help choosing, setting up, and supporting your equipment.' },
];

const AboutSection = ({ onExploreCatalog, onContact }) => (
  <section id="why-us" className="about-section py-5">
    <div className="container py-4 py-lg-5">
      <div className="row align-items-center gy-5 gx-lg-5">
        <div className="col-lg-6">
          <div className="about-visual rounded-4 p-4 p-md-5 position-relative overflow-hidden">
            <div className="about-visual-glow" />
            <div className="position-relative z-1">
              <span className="about-kicker"><MapPin size={15} /> Ahmedabad, Gujarat · Serving India</span>
              <h2 className="display-5 fw-bold text-white mt-4 mb-3">Technology that works for your next step.</h2>
              <p className="text-white-50 mb-4">From a single laptop to a complete workplace setup, we make it easier to find the right technology for the way you work.</p>
              <div className="about-highlight d-flex align-items-center gap-3">
                <div className="about-highlight-icon"><Building2 size={22} /></div>
                <div><strong className="d-block text-white">Business and personal technology</strong><span className="text-white-50 small">Sales · Rentals · Support</span></div>
              </div>
            </div>
            <div className="about-visual-mark" aria-hidden="true"><Cpu size={148} strokeWidth={0.7} /></div>
          </div>
        </div>
        <div className="col-lg-6">
          <span className="about-eyebrow">ABOUT SKYTECH SYSTEMS</span>
          <h2 className="display-6 fw-bold text-main mt-2 mb-3">A dependable technology partner, from selection to support.</h2>
          <p className="text-muted fs-6 mb-3">SkyTech Systems is an Ahmedabad-based technology provider serving businesses and individuals across India. We bring together new and certified refurbished laptops, desktops, MacBooks, workstations, and servers—alongside flexible rentals and practical support.</p>
          <p className="text-muted mb-4">Our goal is simple: understand what you need, recommend equipment that fits, and help you stay productive after it arrives. Whether you are equipping a growing team or upgrading your own setup, our team is ready to help.</p>
          <div className="row g-3 mb-4">
            {commitments.map(({ icon: Icon, title, text }) => (
              <div className="col-sm-6" key={title}>
                <div className="about-commitment h-100">
                  <span className="about-commitment-icon"><Icon size={18} /></span>
                  <div><h3>{title}</h3><p>{text}</p></div>
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex flex-wrap gap-3">
            <button className="btn btn-skytech-gold d-inline-flex align-items-center gap-2 px-4 py-2.5" onClick={onExploreCatalog}>Explore products <ArrowRight size={17} /></button>
            <button className="btn btn-outline-dark px-4 py-2.5" onClick={onContact}>Talk to our team</button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
