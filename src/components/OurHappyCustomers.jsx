import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useHappyCustomers } from '../hooks/useData';

const OurHappyCustomers = () => {
  const { data, loading } = useHappyCustomers();
  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const reviewsList = data?.reviews || [];
  const totalReviews = reviewsList.length;

  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 992) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };
    updateItems();
    window.addEventListener('resize', updateItems);
    return () => window.removeEventListener('resize', updateItems);
  }, []);

  const maxIndex = Math.max(0, totalReviews - itemsPerPage);

  useEffect(() => {
    if (loading || totalReviews === 0 || isPaused) return;

    const interval = setInterval(() => {
      setStartIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [loading, totalReviews, isPaused, maxIndex]);

  const handlePrev = () => {
    setStartIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="py-5 border-top border-bottom position-relative overflow-hidden customers-section-wrapper">
      <style>{`
        .customers-section-wrapper {
          background-color: var(--customers-bg);
        }
        .carousel-viewport {
          overflow: hidden;
          width: 100%;
          padding: 12px 0 20px 0;
        }
        .carousel-track {
          display: flex;
          transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform;
        }
        .carousel-item-col {
          flex: 0 0 100%;
          max-width: 100%;
          padding: 0 12px;
        }
        @media (min-width: 768px) {
          .carousel-item-col {
            flex: 0 0 50%;
            max-width: 50%;
          }
        }
        @media (min-width: 992px) {
          .carousel-item-col {
            flex: 0 0 33.333333%;
            max-width: 33.333333%;
          }
        }

        .review-card-pro {
          background-color: var(--customers-card-bg);
          border-radius: 20px;
          border: 1px solid var(--customers-card-border);
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease, border-color 0.35s ease;
        }
        .review-card-pro:hover {
          transform: translateY(-8px);
          border-color: var(--customers-card-border-hover);
          box-shadow: var(--customers-card-shadow-hover);
        }
        .avatar-pro {
          transition: transform 0.3s ease;
        }
        .review-card-pro:hover .avatar-pro {
          transform: scale(1.1);
        }
        .nav-btn-pro {
          background-color: var(--customers-nav-btn-bg);
          color: var(--customers-title-color);
          width: 46px;
          height: 46px;
          border: 1px solid var(--customers-card-border);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .nav-btn-pro:hover {
          background-color: var(--customers-nav-btn-hover-bg) !important;
          color: var(--customers-nav-btn-hover-color) !important;
          border-color: var(--customers-nav-btn-hover-bg) !important;
          transform: translateY(-50%) scale(1.1) !important;
          box-shadow: 0 6px 18px rgba(245, 158, 11, 0.35) !important;
        }
      `}</style>
      <div className="container py-3 py-md-4">
        {/* Main Section Header */}
        <div className="text-center mb-4 mb-md-5">
          <h2 className="display-6 fw-extrabold mb-3 tracking-tight" style={{ color: 'var(--customers-title-color)', fontWeight: 800 }}>
            What Our Customers Say
          </h2>
        </div>

        {loading ? (
          <div className="py-4 text-center">
            <div className="spinner-border text-warning" role="status">
              <span className="visually-hidden">Loading Reviews...</span>
            </div>
          </div>
        ) : (
          <div
            className="position-relative px-md-3"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Left Arrow Button */}
            {totalReviews > itemsPerPage && (
              <button
                onClick={handlePrev}
                className="btn rounded-circle position-absolute top-50 start-0 translate-middle-y z-3 p-2 d-none d-md-flex align-items-center justify-content-center nav-btn-pro"
                style={{ left: '-15px' }}
                aria-label="Previous Reviews"
              >
                <ChevronLeft size={22} />
              </button>
            )}

            {/* Sliding Track Viewport */}
            <div className="carousel-viewport">
              <div
                className="carousel-track"
                style={{
                  transform: `translateX(-${startIndex * (100 / itemsPerPage)}%)`
                }}
              >
                {reviewsList.map((rev) => (
                  <div key={rev.id} className="carousel-item-col">
                    <div className="p-4 h-100 d-flex flex-column justify-content-start review-card-pro">
                      {/* Header: Avatar & Name/Time Stack */}
                      <div className="d-flex align-items-center gap-3 mb-3">
                        <div
                          className="rounded-circle text-white fw-bold d-flex align-items-center justify-content-center flex-shrink-0 avatar-pro"
                          style={{
                            width: '44px',
                            height: '44px',
                            backgroundColor: rev.avatarBg || '#8b5cf6',
                            fontSize: '0.95rem',
                            letterSpacing: '0.5px'
                          }}
                        >
                          {rev.initial}
                        </div>
                        <div className="text-start lh-sm">
                          <div className="fw-bold fs-6 mb-1" style={{ color: 'var(--customers-title-color)' }}>
                            {rev.name}
                          </div>
                          <div className="fs-8" style={{ color: 'var(--customers-date-color)' }}>
                            {rev.date}
                          </div>
                        </div>
                      </div>

                      {/* 5 Stars */}
                      <div className="d-flex align-items-center gap-1 mb-3 text-start">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} size={17} fill="#f59e0b" color="#f59e0b" />
                        ))}
                      </div>

                      {/* Review Text */}
                      <p className="fs-7 text-start mb-0" style={{ color: 'var(--customers-text-color)', lineHeight: '1.55' }}>
                        {rev.comment}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Arrow Button */}
            {totalReviews > itemsPerPage && (
              <button
                onClick={handleNext}
                className="btn rounded-circle position-absolute top-50 end-0 translate-middle-y z-3 p-2 d-none d-md-flex align-items-center justify-content-center nav-btn-pro"
                style={{ right: '-15px' }}
                aria-label="Next Reviews"
              >
                <ChevronRight size={22} />
              </button>
            )}

            {/* Navigation Dots */}
            {maxIndex > 0 && (
              <div className="d-flex align-items-center justify-content-center gap-2 mt-4">
                {[...Array(maxIndex + 1)].map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setStartIndex(dotIdx)}
                    className="btn p-0 border-0 transition-all"
                    style={{
                      width: dotIdx === startIndex ? '26px' : '9px',
                      height: '9px',
                      borderRadius: '5px',
                      backgroundColor: dotIdx === startIndex ? 'var(--skytech-amber)' : 'var(--border-color)',
                      cursor: 'pointer'
                    }}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default OurHappyCustomers;
