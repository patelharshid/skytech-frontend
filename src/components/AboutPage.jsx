import React from 'react';
import { FileText, MonitorCog, ShoppingBag, ShieldCheck, Target, Wrench } from 'lucide-react';
import aboutStoryImage from '../assets/about-story.png';
import aboutMissionImage from '../assets/about-mission.png';

const commitments = [
  {
    icon: FileText,
    title: 'Extend the life of your IT products',
    text: 'Tell us about your current setup. We’ll help you plan practical upgrades and support that keep your technology useful for longer.'
  },
  {
    icon: ShoppingBag,
    title: 'Choose the right products and support',
    text: 'Compare new, refurbished, pre-owned and previous-generation laptops, desktops, servers and accessories in one place.'
  },
  {
    icon: Wrench,
    title: 'Get support when you need it',
    text: 'Our team can help with maintenance, replacements and advice when products reach the end of their manufacturer support.'
  }
];

function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-page-banner">
        <div className="about-page-banner-shade" />
        <div className="container about-page-banner-content">
          <h1>ABOUT US</h1>
          <p><a href="/#hero">Home</a> / About Us</p>
        </div>
      </section>

      <section className="about-story-section container">
        <div className="about-story-art">
          <img src={aboutStoryImage} alt="Technology and people using computers" />
          <div className="about-story-badge" aria-hidden="true"><ShieldCheck size={34} /></div>
        </div>
        <div className="about-story-copy">
          <span className="about-eyebrow">WHO WE ARE</span>
          <h2>Technology that works for your business.</h2>
          <p>Founded in 2013, Sunray Systems helps businesses find dependable technology at a fair price. We offer desktops, laptops, workstations, servers and accessories selected to meet different needs and budgets.</p>
          <p>Based in Ahmedabad and serving customers across India, we focus on quality-tested products, helpful advice and reliable after-sales support. Whether you are upgrading one device or planning an entire workspace, our team is here to help you choose with confidence.</p>
          <div className="about-story-proof"><MonitorCog size={20} /><span>Quality checked technology, backed by people who care.</span></div>
        </div>
      </section>

      <section className="about-purpose-section">
        <div className="container about-purpose-grid">
          <div className="about-purpose-image"><img src={aboutMissionImage} alt="Business people connecting through technology" /></div>
          <article className="about-purpose-card">
            <span className="about-purpose-icon"><Target size={39} strokeWidth={1.5} /></span>
            <div><h2>Mission</h2><p>To empower customers with high-quality, affordable laptops and PCs that enhance productivity and connectivity.</p></div>
          </article>
          <article className="about-purpose-card">
            <span className="about-purpose-icon"><MonitorCog size={39} strokeWidth={1.5} /></span>
            <div><h2>Vision</h2><p>To be the trusted leader in tech retail, setting a standard in quality, customer care and accessible technology solutions.</p></div>
          </article>
        </div>
      </section>

      <section className="about-commitments-section container">
        <div className="about-commitments-heading">
          <span className="about-eyebrow">HOW WE HELP</span>
          <h2>Support for every stage of your technology journey</h2>
        </div>
        <div className="row g-4">
          {commitments.map(({ icon: Icon, title, text }) => (
            <div className="col-12 col-md-4" key={title}>
              <article className="about-commitment-card">
                <span className="about-commitment-icon"><Icon size={27} strokeWidth={1.7} /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
