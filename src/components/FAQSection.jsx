import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useFAQData } from '../hooks/useData';
import faqImage from '../assets/FAQ.png';

const FAQSection = () => {
  const { data: faqList, loading } = useFAQData();
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="faq-section-wrapper py-5 border-top position-relative">
      <div className="container py-3 py-md-4">
        <div className="row gy-4 align-items-center">
          {/* Left Column: FAQ Accordion */}
          <div className="col-lg-6">
            <div className="mb-4">
              <h2 className="fw-bold text-dark" style={{ color: '#111827' }}>
                Frequently Asked Questions
              </h2>
            </div>

            {loading ? (
              <div className="py-5 text-center">
                <div className="spinner-border text-warning" role="status">
                  <span className="visually-hidden">Loading FAQs...</span>
                </div>
              </div>
            ) : (
              <div className="d-flex flex-column gap-3">
                {faqList && faqList.map((faq) => {
                  const isOpen = openId === faq.id;
                  return (
                    <div
                      key={faq.id}
                      className={`faq-card-item ${isOpen ? 'is-open' : ''}`}
                    >
                      <button
                        className="w-100 border-0 bg-transparent p-0 text-start d-flex justify-content-between align-items-center gap-3 cursor-pointer"
                        onClick={() => toggleFAQ(faq.id)}
                        aria-expanded={isOpen}
                        type="button"
                      >
                        <span className="fw-bold faq-question-text fs-6 pe-2">
                          {faq.question}
                        </span>
                        <div className="faq-toggle-icon">
                          {isOpen ? (
                            <Minus size={20} strokeWidth={2.8} />
                          ) : (
                            <Plus size={20} strokeWidth={2.8} />
                          )}
                        </div>
                      </button>

                      <div className={`faq-accordion-body-wrapper ${isOpen ? 'is-open' : ''}`}>
                        <div className="faq-accordion-body-inner">
                          <div className="pt-3 mt-3 border-top faq-answer-text small" style={{ lineHeight: '1.65' }}>
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Right Column: FAQ Image Banner */}
          <div className="col-lg-6">
            <div className="position-relative overflow-hidden rounded-4 shadow-md" style={{ borderRadius: '24px' }}>
              <img
                src={faqImage}
                alt="Frequently Asked Questions"
                className="img-fluid w-100 d-block"
                style={{
                  borderRadius: '24px',
                  maxHeight: '560px',
                  objectFit: 'cover'
                }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
