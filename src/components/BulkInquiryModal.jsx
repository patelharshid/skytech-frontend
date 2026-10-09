import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2 } from 'lucide-react';
import apiService from '../services/apiService';

const BulkInquiryModal = ({ isOpen, onClose }) => {
  const [inquiryType, setInquiryType] = useState('bulk-buy');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    quantity: '10 - 50 units',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmitInquiry = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await apiService.submitInquiry({
        inquiryType,
        ...formData
      });
      confetti({
        particleCount: 130,
        spread: 80,
        origin: { y: 0.5 }
      });
      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(15, 23, 42, 0.75)', backdropFilter: 'blur(8px)' }}>
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content shadow-lg p-3">
          <div className="modal-header border-0 pb-0">
            <div className="d-flex align-items-center gap-2">
              <span className="badge badge-gold">SkyTech Corporate Desk</span>
              <h5 className="modal-title fw-bold">Request Instant Quote</h5>
            </div>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>

          <div className="modal-body py-4">
            {isSubmitted ? (
              <div className="text-center py-5">
                <div className="d-inline-flex p-3 rounded-circle bg-success bg-opacity-10 text-success mb-3">
                  <CheckCircle2 size={54} />
                </div>
                <h4 className="fw-bold mb-2">Quote Request Sent Successfully!</h4>
                <p className="text-muted fs-6 mb-3">
                  Thank you, <strong className="text-main">{formData.name}</strong>. Our enterprise sales manager will email the official quotation to <span className="text-primary">{formData.email}</span> within 1 business hour.
                </p>
                <button className="btn btn-skytech-gold px-4" onClick={onClose}>
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitInquiry}>
                {/* Type Selection */}
                <div className="mb-4">
                  <label className="fw-semibold text-main small mb-2 d-block">Inquiry Purpose</label>
                  <div className="btn-group w-100">
                    <button
                      type="button"
                      className={`btn btn-sm py-2 ${inquiryType === 'bulk-buy' ? 'btn-warning fw-bold text-dark' : 'btn-sky-outline'}`}
                      onClick={() => setInquiryType('bulk-buy')}
                    >
                      Bulk Refurbished Purchase
                    </button>
                    <button
                      type="button"
                      className={`btn btn-sm py-2 ${inquiryType === 'rental' ? 'btn-warning fw-bold text-dark' : 'btn-sky-outline'}`}
                      onClick={() => setInquiryType('rental')}
                    >
                      Corporate System Rental
                    </button>
                    <button
                      type="button"
                      className={`btn btn-sm py-2 ${inquiryType === 'amc' ? 'btn-warning fw-bold text-dark' : 'btn-sky-outline'}`}
                      onClick={() => setInquiryType('amc')}
                    >
                      Repair / AMC Contract
                    </button>
                  </div>
                </div>

                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label className="form-label small fw-semibold">Your Full Name *</label>
                    <input
                      type="text"
                      className="form-control sky-form-control"
                      required
                      placeholder="Robert Fox"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label small fw-semibold">Corporate Email *</label>
                    <input
                      type="email"
                      className="form-control sky-form-control"
                      required
                      placeholder="robert@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label small fw-semibold">Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      className="form-control sky-form-control"
                      required
                      placeholder="+1 (555) 019-2834"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label small fw-semibold">Company Name</label>
                    <input
                      type="text"
                      className="form-control sky-form-control"
                      placeholder="Acme Technologies Ltd"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label small fw-semibold">Requirement Details / System Specifications</label>
                  <textarea
                    className="form-control sky-form-control"
                    rows="3"
                    placeholder="Specify required quantity, laptop specs (e.g. 20x i7 Laptops, 16GB RAM), or rental duration..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  ></textarea>
                </div>

                <div className="d-flex justify-content-end gap-2 pt-3 border-top">
                  <button type="button" className="btn btn-sky-outline" onClick={onClose}>Cancel</button>
                  <button type="submit" className="btn btn-skytech-gold d-flex align-items-center gap-2">
                    <span>Submit Quote Request</span>
                    <Send size={16} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BulkInquiryModal;
