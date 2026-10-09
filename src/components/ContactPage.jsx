import React, { useState } from 'react';
import { AtSign, BriefcaseBusiness, Clock3, MapPin, Navigation, PhoneCall } from 'lucide-react';

const officeAddress = 'Sepal Olivia 101, 1st Floor, Beside Iscon Platinum, S.P. Ring Road, Bopal Cross Road, Ahmedabad, Gujarat 380058';
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(officeAddress)}`;

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    event.currentTarget.reset();
    setSubmitted(true);
  };

  return (
    <main className="contact-page">
      <section className="contact-page-banner">
        <div className="contact-page-banner-shade" />
        <div className="container contact-page-banner-content">
          <h1>CONTACT US</h1>
          <p><a href="/#hero">Home</a> / Contact Us</p>
        </div>
      </section>

      <section className="contact-page-content container">
        <div className="row g-4 align-items-start">
          <div className="col-12 col-lg-5">
            <div className="contact-location-card">
              <div className="contact-location-kicker"><MapPin size={15} /> OUR OFFICE</div>
              <h2>Visit us in Ahmedabad</h2>
              <a className="contact-address-link" href={mapsUrl} target="_blank" rel="noreferrer">{officeAddress}</a>
              <a className="contact-directions-link" href={mapsUrl} target="_blank" rel="noreferrer"><Navigation size={16} /> Get directions</a>
              <div className="contact-location-divider" />
              <a className="contact-method" href="tel:+919726450900"><span><PhoneCall size={17} /></span><div><small>Call our team</small><strong>+91 97264 50900</strong></div></a>
              <a className="contact-method" href="mailto:info@sunraysystems.in"><span><AtSign size={17} /></span><div><small>Email us</small><strong>info@sunraysystems.in</strong></div></a>
            </div>

            <div className="contact-location-extras">
              <section className="contact-extra-card">
                <h3><Clock3 />Opening Hours</h3>
                <p>Mon to Sat: 11:00 AM - 7:00 PM<br />Sunday: Closed</p>
              </section>
              <section className="contact-extra-card contact-career-card">
                <h3><BriefcaseBusiness />Careers</h3>
                <p>Interested in joining our team?<br /><a href="mailto:info@sunraysystems.in">Email your enquiry</a></p>
              </section>
            </div>
          </div>

          <div className="col-12 col-lg-7">
            <section className="contact-form-card">
              <h2>Get In Touch With Us</h2>
              {submitted ? (
                <p className="contact-success" role="status">Thank you! Your message has been received. Our team will contact you shortly.</p>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="contact-name">Full Name<span>*</span></label>
                    <input id="contact-name" name="fullName" placeholder="Your Name" required />
                  </div>
                  <div className="row g-3">
                    <div className="col-12 col-sm-6">
                      <label htmlFor="contact-phone">Phone<span>*</span></label>
                      <input id="contact-phone" name="phone" type="tel" placeholder="Phone Number" required />
                    </div>
                    <div className="col-12 col-sm-6">
                      <label htmlFor="contact-email">Email<span>*</span></label>
                      <input id="contact-email" name="email" type="email" required />
                    </div>
                  </div>
                  <div className="my-3">
                    <label htmlFor="contact-city">City<span>*</span></label>
                    <input id="contact-city" name="city" placeholder="Enter Your City" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="contact-message">Message</label>
                    <textarea id="contact-message" name="message" rows="5" />
                  </div>
                  <button type="submit" className="btn btn-skytech-gold px-5 py-2.5 fw-bold">SUBMIT</button>
                </form>
              )}
            </section>

          </div>
        </div>

        <div className="contact-map-section">
          <div className="contact-map-heading"><div><span>COME FIND US</span><h2>Our Ahmedabad Office</h2></div><a href={mapsUrl} target="_blank" rel="noreferrer"><Navigation size={16} /> Open in Maps</a></div>
          <div className="contact-map-wrap">
            <iframe title="Sunray Systems Ahmedabad office map" src="https://www.google.com/maps?q=Sepal+Olivia+Bopal+Cross+Road+S.P.+Ring+Road+Ahmedabad+380058&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;
