import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';
import { primaryNumber } from '../constants/constants';


const GetInTouchSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        city: '',
        message: ''
      });
    }, 4000);
  };

  return (
    <section className="py-5 bg-white" id="contact">
      <div className="container">
        <div className="row g-4 align-items-stretch">

          {/* Left Form Card */}
          <div className="col-12 col-lg-5">
            <div
              className="h-100 p-4 p-md-5 rounded-4 d-flex flex-column justify-content-between"
              style={{ backgroundColor: '#FAF7F2', border: '1px solid #F3ECE1' }}
            >
              <div>
                <h2 className="fw-bold text-dark mb-3 fs-2" style={{ color: '#111827' }}>
                  Get In Touch With Us
                </h2>
                <p className="text-secondary fs-6 mb-4" style={{ lineHeight: '1.6', color: '#4B5563' }}>
                  Our team at Sky Tech is here to help! Whether you're looking for laptops, desktops, MacBooks, or servers, our experts are ready to assist you in finding the perfect tech solution.
                </p>

                {submitted ? (
                  <div className="alert alert-success d-flex align-items-center gap-2 rounded-3 py-3" role="alert">
                    <CheckCircle2 size={24} className="text-success" />
                    <div>
                      <strong>Thank you!</strong> Your message has been received. Our team will contact you shortly.
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                    {/* Full Name */}
                    <div>
                      <label className="form-label fw-semibold text-dark small mb-1">
                        Full Name<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="form-control rounded-3 py-2 px-3 bg-white border-1"
                        style={{ borderColor: '#E5E7EB', fontSize: '14px' }}
                      />
                    </div>

                    {/* Phone & Email */}
                    <div className="row g-2">
                      <div className="col-6">
                        <label className="form-label fw-semibold text-dark small mb-1">
                          Phone<span className="text-danger">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Phone Number"
                          required
                          className="form-control rounded-3 py-2 px-3 bg-white border-1"
                          style={{ borderColor: '#E5E7EB', fontSize: '14px' }}
                        />
                      </div>
                      <div className="col-6">
                        <label className="form-label fw-semibold text-dark small mb-1">
                          Email<span className="text-danger">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter Your Email Id"
                          required
                          className="form-control rounded-3 py-2 px-3 bg-white border-1"
                          style={{ borderColor: '#E5E7EB', fontSize: '14px' }}
                        />
                      </div>
                    </div>

                    {/* City */}
                    <div>
                      <label className="form-label fw-semibold text-dark small mb-1">
                        City<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Enter Your City"
                        required
                        className="form-control rounded-3 py-2 px-3 bg-white border-1"
                        style={{ borderColor: '#E5E7EB', fontSize: '14px' }}
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="form-label fw-semibold text-dark small mb-1">
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write Your Message Here"
                        className="form-control rounded-3 py-2 px-3 bg-white border-1"
                        style={{ borderColor: '#E5E7EB', fontSize: '14px', resize: 'none' }}
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="mt-2">
                      <button
                        type="submit"
                        className="btn border-0 rounded-pill px-5 py-2 fw-bold text-white shadow-sm"
                        style={{
                          background: 'linear-gradient(90deg, #FFB800 0%, #FFA500 100%)',
                          fontSize: '14px',
                          letterSpacing: '0.5px'
                        }}
                      >
                        SUBMIT
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-7 d-flex flex-column gap-4">
            {/* Find Us Here: Google Map */}
            <div className="p-4 rounded-4" style={{ backgroundColor: '#FAF7F2', border: '1px solid #F3ECE1' }}>
              <div className="d-flex align-items-center justify-content-between mb-3">
                <h3 className="fs-2 fw-bold text-dark mb-0">Find Us Here</h3>
              </div>
              <div className="rounded-4 overflow-hidden border bg-white shadow-sm" style={{ borderColor: '#E5E7EB' }}>
                <iframe
                  title="Sky Tech Location"
                  src="https://www.google.com/maps?q=Sepal+Olivia+Bopal+Cross+Road+S.P.+Ring+Road+Ahmedabad+380058&output=embed"
                  width="100%"
                  height="260"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Company Information */}
            <div className="p-4 rounded-4" style={{ backgroundColor: '#FAF7F2', border: '1px solid #F3ECE1' }}>
              <h3 className="fs-2 fw-bold text-dark mb-4">Company Information</h3>
              <div className="d-flex flex-column gap-3">
                {/* Location Card */}
                <div className="d-flex align-items-start gap-3 p-3 rounded-3 bg-white border" style={{ borderColor: '#E5E7EB' }}>
                  <div className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0" style={{ width: '42px', height: '42px', backgroundColor: '#FFFBEB', color: '#F59E0B' }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1 text-dark" style={{ fontSize: '15px' }}>Our Location</h6>
                    <address className="mb-0 text-secondary" style={{ lineHeight: '1.5', fontSize: '14px', fontStyle: 'normal' }}>
                      Sepal Olivia 101, 1st Floor, Beside Iscon Platinum, S.P. Ring Road,<br />
                      Bopal Cross Road, Ahmedabad, Gujarat – 380058, India.
                    </address>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="d-flex align-items-center gap-3 p-3 rounded-3 bg-white border" style={{ borderColor: '#E5E7EB' }}>
                  <div className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0" style={{ width: '42px', height: '42px', backgroundColor: '#FFFBEB', color: '#F59E0B' }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1 text-dark" style={{ fontSize: '15px' }}>Call Us</h6>
                    <div className="d-flex flex-wrap align-items-center gap-2 text-secondary" style={{ fontSize: '14px' }}>
                      <a href={`tel:${primaryNumber}`} className="text-decoration-none text-secondary fw-medium">
                        +91 {primaryNumber}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email Card */}
                <div className="d-flex align-items-center gap-3 p-3 rounded-3 bg-white border" style={{ borderColor: '#E5E7EB' }}>
                  <div className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0" style={{ width: '42px', height: '42px', backgroundColor: '#FFFBEB', color: '#F59E0B' }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1 text-dark" style={{ fontSize: '15px' }}>Email Us</h6>
                    <a href="mailto:info@skytech.in" className="text-decoration-none text-secondary fw-medium" style={{ fontSize: '14px' }}>
                      info@skytech.in
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchSection;
