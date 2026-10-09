import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { CheckCircle2, Lock } from 'lucide-react';
import apiService from '../services/apiService';

const CheckoutModal = ({ isOpen, onClose, cartItems, onOrderComplete }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [orderResponse, setOrderResponse] = useState(null);
  const [checkoutForm, setCheckoutForm] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    paymentMethod: 'card'
  });

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = subtotal > 500 ? 0 : 25;
  const total = subtotal + shipping;

  const handleSubmitOrder = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await apiService.submitOrder({
        customer: checkoutForm,
        items: cartItems,
        subtotal,
        shipping,
        total
      });
      setOrderResponse(res);
      confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.6 }
      });
      setIsCompleted(true);
      setTimeout(() => {
        onOrderComplete();
      }, 4000);
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
              <Lock className="text-success" size={20} />
              <h5 className="modal-title fw-bold">Secure Sky Tech Checkout</h5>
            </div>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>

          <div className="modal-body py-4">
            {isCompleted ? (
              <div className="text-center py-5">
                <div className="d-inline-flex p-3 rounded-circle bg-success bg-opacity-10 text-success mb-3">
                  <CheckCircle2 size={54} />
                </div>
                <h4 className="fw-bold mb-2">Order Confirmed!</h4>
                <p className="text-muted fs-6 mb-3">
                  Thank you, <strong className="text-main">{checkoutForm.name}</strong>. Order confirmation &amp; 1-Year Warranty Certificate sent to <span className="text-primary">{checkoutForm.email}</span>.
                </p>
                <div className="p-3 bg-surface rounded-3 border max-w-md mx-auto fs-8 font-mono mb-4 text-muted">
                  Order ID: ST-908124 | Estimated Delivery: 2 Business Days
                </div>
                <button className="btn btn-sky-primary px-4" onClick={onClose}>
                  Done &amp; Continue Shopping
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitOrder}>
                <div className="row g-4">
                  {/* Left Form */}
                  <div className="col-lg-7">
                    <h6 className="fw-bold mb-3">1. Shipping Information</h6>

                    <div className="mb-3">
                      <label className="form-label small fw-semibold">Full Name *</label>
                      <input
                        type="text"
                        className="form-control sky-form-control"
                        required
                        placeholder="John Doe"
                        value={checkoutForm.name}
                        onChange={(e) => setCheckoutForm({ ...checkoutForm, name: e.target.value })}
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label small fw-semibold">Email Address *</label>
                      <input
                        type="email"
                        className="form-control sky-form-control"
                        required
                        placeholder="john@example.com"
                        value={checkoutForm.email}
                        onChange={(e) => setCheckoutForm({ ...checkoutForm, email: e.target.value })}
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label small fw-semibold">Shipping Address *</label>
                      <input
                        type="text"
                        className="form-control sky-form-control"
                        required
                        placeholder="123 Tech Boulevard"
                        value={checkoutForm.address}
                        onChange={(e) => setCheckoutForm({ ...checkoutForm, address: e.target.value })}
                      />
                    </div>

                    <div className="row g-2 mb-4">
                      <div className="col-6">
                        <label className="form-label small fw-semibold">City *</label>
                        <input
                          type="text"
                          className="form-control sky-form-control"
                          required
                          placeholder="San Francisco"
                          value={checkoutForm.city}
                          onChange={(e) => setCheckoutForm({ ...checkoutForm, city: e.target.value })}
                        />
                      </div>
                      <div className="col-6">
                        <label className="form-label small fw-semibold">ZIP Code *</label>
                        <input
                          type="text"
                          className="form-control sky-form-control"
                          required
                          placeholder="94105"
                          value={checkoutForm.zip}
                          onChange={(e) => setCheckoutForm({ ...checkoutForm, zip: e.target.value })}
                        />
                      </div>
                    </div>

                    <h6 className="fw-bold mb-3">2. Payment Method</h6>
                    <div className="row g-2 mb-3">
                      {[
                        { id: 'card', label: 'Credit / Debit Card' },
                        { id: 'paypal', label: 'PayPal' },
                        { id: 'cod', label: 'Cash on Delivery' }
                      ].map(p => (
                        <div key={p.id} className="col-4">
                          <button
                            type="button"
                            className={`btn w-100 p-2 text-center rounded-3 border fs-8 fw-semibold ${checkoutForm.paymentMethod === p.id ? 'btn-sky-primary text-white' : 'btn-sky-outline'
                              }`}
                            onClick={() => setCheckoutForm({ ...checkoutForm, paymentMethod: p.id })}
                          >
                            {p.label}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Summary */}
                  <div className="col-lg-5">
                    <div className="sky-card p-4 bg-surface h-100 d-flex flex-column justify-content-between">
                      <div>
                        <h6 className="fw-bold mb-3">Order Items ({cartItems.length})</h6>
                        <div className="d-flex flex-column gap-2 mb-3" style={{ maxHeight: '180px', overflowY: 'auto' }}>
                          {cartItems.map(item => (
                            <div key={item.id} className="d-flex justify-content-between fs-8">
                              <span className="text-truncate" style={{ maxWidth: '180px' }}>{item.quantity}x {item.name}</span>
                              <span className="fw-bold font-mono">${item.price * item.quantity}</span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-3 border-top small">
                          <div className="d-flex justify-content-between mb-1 text-muted">
                            <span>Subtotal:</span>
                            <span className="font-mono">${subtotal.toLocaleString()}</span>
                          </div>
                          <div className="d-flex justify-content-between mb-2 text-muted">
                            <span>Shipping:</span>
                            <span className="font-mono">{shipping === 0 ? 'FREE' : `$${shipping}`}</span>
                          </div>
                          <div className="d-flex justify-content-between fw-bold fs-5 text-primary border-top pt-2">
                            <span>Total Due:</span>
                            <span className="font-mono">${total.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>

                      <div className="pt-3">
                        <button
                          type="submit"
                          className="btn btn-sky-primary w-100 py-3 fw-bold d-flex align-items-center justify-content-center gap-2"
                        >
                          <span>Pay &amp; Place Order</span>
                          <Lock size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
