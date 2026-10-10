import React, { useState } from 'react';
import '../css/contact-page.css';
import { AtSign, BriefcaseBusiness, Clock3, MapPin, Navigation, PhoneCall } from 'lucide-react';
import contactBanner from '../assets/contact-banner.png';
import { primaryNumber, primaryEmail, officeAddress } from '../constants/constants';

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(officeAddress)}`;

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    event.currentTarget.reset();
    setSubmitted(true);
  };

  return (
    <main className="bg-white text-dark">
      <section className="page-title-banner contact-page-banner position-relative d-flex align-items-center text-white">
        <img className="contact-banner-image position-absolute top-0 start-0 w-100 h-100 object-fit-cover" src={contactBanner} alt="" />
        <div className="page-title-shade position-absolute top-0 start-0 w-100 h-100" />
        <div className="container position-relative py-4">
          <h1 className="h3 fw-bold mb-2">CONTACT US</h1>
          <p className="mb-0"><a className="text-white text-decoration-none" href="/#hero">Home</a> / Contact Us</p>
        </div>
      </section>

      <section className="container-xxl py-5">
        <div className="row g-4 align-items-stretch">
          <div className="col-12 col-lg-5">
            <div className="card h-100 border rounded-4 shadow-sm p-4 p-xl-5 contact-location-card">
              <div className="small fw-bold text-uppercase text-orange d-flex align-items-center gap-2"><MapPin size={16} /> Our office</div>
              <h2 className="h3 fw-bold mt-3 mb-3">Visit us in Ahmedabad</h2>
              <a className="text-secondary text-decoration-none lh-lg" href={mapsUrl} target="_blank" rel="noreferrer">{officeAddress}</a>
              <a className="btn btn-warning rounded-pill d-inline-flex align-items-center gap-2 align-self-start fw-semibold mt-3 px-3" href={mapsUrl} target="_blank" rel="noreferrer"><Navigation size={16} />Get directions</a>

              <div className="border-top mt-4 pt-3">
                <a className="contact-method d-flex align-items-center gap-3 py-2 text-decoration-none" href={`tel:${primaryNumber}`}>
                  <span className="contact-method-icon rounded-circle p-2 text-orange"><PhoneCall size={18} /></span>
                  <span className="d-flex flex-column"><small className="text-secondary">Call our team</small><strong className="text-dark">+91 {primaryNumber}</strong></span>
                </a>
                <a className="contact-method d-flex align-items-center gap-3 border-top py-2 text-decoration-none" href={`mailto:${primaryEmail}`}>
                  <span className="contact-method-icon rounded-circle p-2 text-orange"><AtSign size={18} /></span>
                  <span className="d-flex flex-column"><small className="text-secondary">Email us</small><strong className="text-dark">{primaryEmail}</strong></span>
                </a>
              </div>

              <div className="row g-3 mt-auto pt-3">
                <div className="col-12 col-sm-6">
                  <section className="card h-100 border-0 rounded-4 p-3 bg-body-tertiary">
                    <h3 className="h6 fw-bold d-flex align-items-center gap-2"><Clock3 size={18} className="text-orange" />Opening Hours</h3>
                    <p className="small text-secondary mb-0">Mon to Sat: 11:00 AM - 7:00 PM<br />Sunday: Closed</p>
                  </section>
                </div>
                <div className="col-12 col-sm-6">
                  <section className="card h-100 border-0 rounded-4 p-3 bg-body-tertiary">
                    <h3 className="h6 fw-bold d-flex align-items-center gap-2"><BriefcaseBusiness size={18} className="text-orange" />Careers</h3>
                    <p className="small text-secondary mb-0">Interested in joining our team? <a className="text-orange text-decoration-none" href={`mailto:${primaryEmail}`}>Email us</a></p>
                  </section>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-7">
            <section className="h-100 rounded-4 p-4 p-xl-5 contact-form-panel">
              <h2 className="h2 fw-bold text-orange mb-4">Get In Touch With Us</h2>
              {submitted ? (
                <div className="alert alert-success rounded-3" role="status">Thank you! Your message has been received. Our team will contact you shortly.</div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label fw-semibold" htmlFor="contact-name">Full Name<span className="text-danger">*</span></label>
                    <input className="form-control" id="contact-name" name="fullName" placeholder="Your Name" required />
                  </div>
                  <div className="row g-3 mb-3">
                    <div className="col-12 col-sm-6">
                      <label className="form-label fw-semibold" htmlFor="contact-phone">Phone<span className="text-danger">*</span></label>
                      <input className="form-control" id="contact-phone" name="phone" type="tel" placeholder="Phone Number" required />
                    </div>
                    <div className="col-12 col-sm-6">
                      <label className="form-label fw-semibold" htmlFor="contact-email">Email<span className="text-danger">*</span></label>
                      <input className="form-control" id="contact-email" name="email" type="email" required />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold" htmlFor="contact-city">City<span className="text-danger">*</span></label>
                    <input className="form-control" id="contact-city" name="city" placeholder="Enter Your City" required />
                  </div>
                  <div className="mb-4">
                    <label className="form-label fw-semibold" htmlFor="contact-message">Message</label>
                    <textarea className="form-control" id="contact-message" name="message" rows="5" />
                  </div>
                  <button type="submit" className="btn btn-warning rounded-pill px-5 py-2 fw-bold">SUBMIT</button>
                </form>
              )}
            </section>
          </div>
        </div>

        <section className="mt-5 pt-2">
          <div className="d-flex flex-column flex-sm-row align-items-sm-end justify-content-between gap-3 mb-3">
            <div><span className="small fw-bold text-uppercase text-orange">Come find us</span><h2 className="h3 fw-bold mb-0 mt-1">Our Ahmedabad Office</h2></div>
            <a className="btn btn-outline-warning rounded-pill d-inline-flex align-items-center gap-2 align-self-start align-self-sm-auto" href={mapsUrl} target="_blank" rel="noreferrer"><Navigation size={16} />Open in Maps</a>
          </div>
          <div className="ratio ratio-21x9 rounded-4 overflow-hidden border shadow-sm">
            <iframe title="Sunray Systems Ahmedabad office map" src="https://www.google.com/maps?q=Sepal+Olivia+Bopal+Cross+Road+S.P.+Ring+Road+Ahmedabad+380058&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </section>
      </section>
    </main>
  );
}

export default ContactPage;
