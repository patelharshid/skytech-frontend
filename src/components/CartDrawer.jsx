import React from 'react';
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';

const CartDrawer = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onProceedToCheckout }) => {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = subtotal > 500 ? 0 : 25;
  const total = subtotal + shipping;

  return (
    <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(15, 23, 42, 0.75)', backdropFilter: 'blur(8px)' }}>
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content shadow-lg p-3">
          <div className="modal-header border-0 pb-2">
            <div className="d-flex align-items-center gap-2">
              <ShoppingBag className="text-primary" size={22} />
              <h5 className="modal-title fw-bold">Your Sky Tech Cart ({cartItems.length})</h5>
            </div>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>

          <div className="modal-body py-3">
            {cartItems.length === 0 ? (
              <div className="text-center py-5">
                <ShoppingBag size={48} className="text-muted opacity-50 mb-3" />
                <h5 className="fw-bold mb-2">Your Shopping Cart is Empty</h5>
                <p className="text-muted fs-6 mb-4">Browse our laptops, desktops, and accessories to get started.</p>
                <button className="btn btn-sky-primary" onClick={onClose}>
                  Browse Products
                </button>
              </div>
            ) : (
              <div className="row g-4">
                {/* Cart Items List */}
                <div className="col-lg-7">
                  <div className="d-flex flex-column gap-3" style={{ maxHeight: '340px', overflowY: 'auto' }}>
                    {cartItems.map(item => (
                      <div key={item.id} className="cart-item-row p-3 rounded-3 border bg-surface d-flex align-items-center justify-content-between gap-3">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="rounded object-fit-cover flex-shrink-0"
                          style={{ width: '64px', height: '64px' }}
                        />
                        <div className="flex-grow-1 min-w-0">
                          <h6 className="fw-bold fs-7 mb-1 text-truncate">{item.name}</h6>
                          <div className="fs-8 text-muted font-mono">{item.condition}</div>
                          <div className="fw-bold text-primary fs-7 mt-1 font-mono">${item.price}</div>
                        </div>

                        {/* Quantity Controls */}
                        <div className="d-flex align-items-center gap-2">
                          <div className="btn-group btn-group-sm border rounded">
                            <button 
                              className="btn btn-light px-2"
                              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus size={12} />
                            </button>
                            <span className="btn btn-light px-2 fw-bold font-mono fs-8" style={{ cursor: 'default' }}>
                              {item.quantity}
                            </span>
                            <button 
                              className="btn btn-light px-2"
                              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                          <button 
                            className="btn btn-link text-danger p-1"
                            onClick={() => onRemoveItem(item.id)}
                            title="Remove"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Summary Box */}
                <div className="col-lg-5">
                  <div className="sky-card p-4 bg-surface">
                    <h6 className="fw-bold mb-3">Order Summary</h6>
                    
                    <div className="d-flex justify-content-between mb-2 fs-7 text-muted">
                      <span>Subtotal:</span>
                      <span className="fw-bold text-main font-mono">${subtotal.toLocaleString()}</span>
                    </div>

                    <div className="d-flex justify-content-between mb-3 fs-7 text-muted">
                      <span>Insured Express Shipping:</span>
                      <span className="fw-bold text-main font-mono">{shipping === 0 ? 'FREE' : `$${shipping}`}</span>
                    </div>

                    <div className="pt-3 border-top d-flex justify-content-between align-items-center mb-4">
                      <span className="fw-bold fs-6">Estimated Total:</span>
                      <span className="fw-bold fs-4 text-primary font-mono">${total.toLocaleString()}</span>
                    </div>

                    <button 
                      className="btn btn-sky-primary w-100 d-flex align-items-center justify-content-center gap-2 py-3 fw-bold"
                      onClick={onProceedToCheckout}
                    >
                      <span>Proceed to Checkout</span>
                      <ArrowRight size={16} />
                    </button>
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

export default CartDrawer;
