import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useFAQData } from '../hooks/useData';
import faqImage from '../assets/FAQ.png';

const FAQSection = () => {
  const { data: faqList } = useFAQData();
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-5 py-lg-6 position-relative" style={{ backgroundColor: 'var(--surface-color)' }}>
      <div className="container py-3">
        <div className="row gy-5 align-items-center">
          {/* Left Column: FAQ Accordion */}
          <div className="col-lg-6">
            <div className="mb-4">
              <h2 className="display-6 fw-bold text-main mt-1">
                Frequently Asked <span className="text-warning">Questions</span>
              </h2>
              <p className="text-secondary lead fs-6 mb-0">
                Everything you need to know about SkyTech warranty, repairs, and procurement.
              </p>
            </div>
            <div className="d-flex flex-column gap-3">
              {faqList && faqList.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className={`faq-card-item sky-card p-3 px-4 rounded-4 bg-white ${isOpen ? 'is-open' : ''}`}
                  >
                    <button
                      className="w-100 border-0 bg-transparent p-0 text-start d-flex justify-content-between align-items-center gap-3 cursor-pointer"
                      onClick={() => toggleFAQ(faq.id)}
                      aria-expanded={isOpen}
                      type="button"
                    >
                      <span className="fw-bold fs-6 pe-2 text-dark">
                        {faq.question}
                      </span>
                      <div className="faq-toggle-icon flex-shrink-0">
                        {isOpen ? (
                          <Minus size={18} strokeWidth={2.5} />
                        ) : (
                          <Plus size={18} strokeWidth={2.5} />
                        )}
                      </div>
                    </button>

                    <div className={`faq-accordion-body-wrapper ${isOpen ? 'is-open' : ''}`}>
                      <div className="faq-accordion-body-inner">
                        <div className="pt-3 mt-3 border-top text-secondary small lh-base">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: FAQ Image Banner */}
          <div className="col-lg-6">
            <div className="home-hero-img-wrap position-relative overflow-hidden">
              <img
                src={faqImage}
                alt="Frequently Asked Questions"
                className="img-fluid w-100 d-block object-fit-cover"
                style={{
                  maxHeight: '520px'
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
