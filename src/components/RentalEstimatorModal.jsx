import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { CheckCircle2, Send } from 'lucide-react';
import { useRentalOptions } from '../hooks/useData';
import apiService from '../services/apiService';

const RentalEstimatorModal = ({ isOpen, onClose }) => {
  const { data: optionsData } = useRentalOptions();
  const rentalOptions = optionsData || [
    { id: 'laptop-biz', name: 'Refurbished Business Laptop (Intel i5, 16GB, SSD)', baseMonthly: 25, type: 'laptop' },
    { id: 'laptop-mac', name: 'Apple MacBook Pro M2/M3 (16GB RAM, 512GB)', baseMonthly: 45, type: 'laptop' },
    { id: 'desktop-i7', name: 'Core i7 Workstation PC + 24" IPS Monitor', baseMonthly: 35, type: 'desktop' },
    { id: 'gaming-pc', name: 'RTX 4070 Gaming PC + 165Hz Curved Monitor', baseMonthly: 65, type: 'desktop' },
    { id: 'server-node', name: 'Enterprise Rackmount Server (64GB RAM, 4TB SSD)', baseMonthly: 110, type: 'server' }
  ];

  const [selectedSystemId, setSelectedSystemId] = useState('laptop-biz');
  const [quantity, setQuantity] = useState(2);
  const [durationMonths, setDurationMonths] = useState(3);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');

  if (!isOpen) return null;

  const system = rentalOptions.find(o => o.id === selectedSystemId) || rentalOptions[0];

  // Discount multiplier based on duration
  const durationDiscount = durationMonths >= 12 ? 0.75 : durationMonths >= 6 ? 0.85 : durationMonths >= 3 ? 0.92 : 1.0;

  const unitMonthlyPrice = Math.round(system.baseMonthly * durationDiscount);
  const totalMonthlyCost = unitMonthlyPrice * quantity;

  const handleSubmitRental = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await apiService.submitInquiry({
        type: 'RENTAL_ESTIMATE',
        systemId: selectedSystemId,
        quantity,
        durationMonths,
        monthlyCost: totalMonthlyCost,
        contactName,
        contactEmail,
        contactPhone
      });
      confetti({
        particleCount: 130,
        spread: 85,
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
              <span className="badge badge-gold">SkyTech Rental Engine</span>
              <h5 className="modal-title fw-bold">Systems on Rent Calculator</h5>
            </div>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>

          <div className="modal-body py-4">
            {isSubmitted ? (
              <div className="text-center py-5">
                <div className="d-inline-flex p-3 rounded-circle bg-success bg-opacity-10 text-success mb-3">
                  <CheckCircle2 size={54} />
                </div>
                <h4 className="fw-bold mb-2">Rental Request Received!</h4>
                <p className="text-muted fs-6 mb-3">
                  Thank you, <strong className="text-main">{contactName}</strong>. Our corporate rental desk will contact <span className="text-primary">{contactPhone}</span> to arrange doorstep delivery.
                </p>
                <div className="p-3 bg-surface rounded-3 border max-w-md mx-auto fs-8 font-mono mb-4 text-muted">
                  Package: {quantity}x {system.name} | Duration: {durationMonths} Months
                </div>
                <button className="btn btn-skytech-gold px-4" onClick={onClose}>
                  Done
                </button>
              </div>
            ) : (
              <div className="row g-4">
                {/* Left Controls */}
                <div className="col-lg-7">
                  <div className="mb-4">
                    <label className="fw-semibold text-main small mb-2 d-block">1. Select Rental System</label>
                    <div className="d-flex flex-column gap-2">
                      {rentalOptions.map(opt => (
                        <button
                          key={opt.id}
                          type="button"
                          className={`btn text-start p-2 rounded-3 border d-flex justify-content-between align-items-center small ${selectedSystemId === opt.id ? 'btn-skytech-gold text-dark' : 'btn-sky-outline'
                            }`}
                          onClick={() => setSelectedSystemId(opt.id)}
                        >
                          <span className="fw-semibold">{opt.name}</span>
                          <span className="badge bg-dark text-white font-mono">${opt.baseMonthly}/mo</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Quantity & Duration Sliders */}
                  <div className="mb-4">
                    <div className="d-flex justify-content-between mb-1">
                      <label className="fw-semibold text-main small">2. Quantity (Units)</label>
                      <span className="fw-bold font-mono text-warning fs-6">{quantity} Units</span>
                    </div>
                    <input
                      type="range"
                      className="form-range sky-slider"
                      min="1"
                      max="30"
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                    />
                  </div>

                  <div className="mb-3">
                    <div className="d-flex justify-content-between mb-1">
                      <label className="fw-semibold text-main small">3. Rental Duration (Months)</label>
                      <span className="fw-bold font-mono text-warning fs-6">{durationMonths} Months</span>
                    </div>
                    <div className="btn-group w-100">
                      {[1, 3, 6, 12].map(m => (
                        <button
                          key={m}
                          type="button"
                          className={`btn btn-sm ${durationMonths === m ? 'btn-warning fw-bold text-dark' : 'btn-sky-outline'}`}
                          onClick={() => setDurationMonths(m)}
                        >
                          {m} Mo {m >= 6 && ' (Discount)'}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Summary & Submit */}
                <div className="col-lg-5">
                  <div className="sky-card p-4 bg-skytech-dark text-white h-100 d-flex flex-column justify-content-between">
                    <div>
                      <span className="fs-8 text-warning fw-bold text-uppercase d-block mb-1">ESTIMATED RENTAL RATE</span>
                      <div className="display-5 fw-extrabold text-white font-mono mb-2">
                        ${totalMonthlyCost}
                        <span className="fs-6 text-muted fw-normal"> / month</span>
                      </div>
                      <div className="fs-8 text-muted mb-3 font-mono">
                        (${unitMonthlyPrice} / unit / mo for {quantity} units)
                      </div>

                      <div className="bg-black bg-opacity-30 p-3 rounded-3 mb-4 border border-secondary fs-8 text-light">
                        <div className="d-flex align-items-center gap-2 mb-1.5">
                          <CheckCircle2 size={14} className="text-warning" />
                          <span>100% Free Maintenance &amp; Parts Replacement</span>
                        </div>
                        <div className="d-flex align-items-center gap-2 mb-1.5">
                          <CheckCircle2 size={14} className="text-warning" />
                          <span>Free On-Site Setup &amp; Network Configuration</span>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                          <CheckCircle2 size={14} className="text-warning" />
                          <span>Same-Day Replacement Guarantee</span>
                        </div>
                      </div>
                    </div>

                    <form onSubmit={handleSubmitRental}>
                      <div className="mb-2">
                        <input
                          type="text"
                          className="form-control form-control-sm mb-2"
                          placeholder="Your Name *"
                          required
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                        />
                        <input
                          type="email"
                          className="form-control form-control-sm mb-2"
                          placeholder="Work Email *"
                          required
                          value={contactEmail}
                          onChange={(e) => setContactEmail(e.target.value)}
                        />
                        <input
                          type="tel"
                          className="form-control form-control-sm mb-3"
                          placeholder="Phone Number *"
                          required
                          value={contactPhone}
                          onChange={(e) => setContactPhone(e.target.value)}
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn btn-skytech-gold w-100 py-2 fw-bold d-flex align-items-center justify-content-center gap-2"
                      >
                        <span>Request System Rental</span>
                        <Send size={16} />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalEstimatorModal;
