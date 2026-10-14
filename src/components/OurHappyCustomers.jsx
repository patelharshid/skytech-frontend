import { useState, useEffect } from 'react';
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
    <section className="py-5 py-lg-6 position-relative overflow-hidden bg-white">
      <div className="container py-3">
        {/* Main Section Header */}
        <div className="text-center mx-auto mb-4 mb-md-5" style={{ maxWidth: '44rem' }}>
          <h2 className="display-6 fw-bold text-main mt-1">
            What Our <span className="text-warning">Customers Say</span>
          </h2>
          <p className="text-secondary lead fs-6 mb-0">
            Real feedback from enterprise clients and retail buyers who rely on SkyTech.
          </p>
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
                className="btn btn-light rounded-circle position-absolute top-50 start-0 translate-middle-y z-3 p-0 d-none d-md-flex align-items-center justify-content-center review-nav-btn shadow-sm"
                style={{ left: '-16px' }}
                aria-label="Previous Reviews"
              >
                <ChevronLeft size={20} />
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
                    <div className="p-4 h-100 d-flex flex-column justify-content-start sky-card border rounded-4 bg-white">
                      {/* Header: Avatar & Name/Time Stack */}
                      <div className="d-flex align-items-center gap-3 mb-3">
                        <div
                          className="rounded-circle text-white fw-bold d-flex align-items-center justify-content-center flex-shrink-0"
                          style={{
                            width: '44px',
                            height: '44px',
                            backgroundColor: rev.avatarBg || 'var(--accent-color)',
                            fontSize: '0.95rem'
                          }}
                        >
                          {rev.initial}
                        </div>
                        <div className="text-start lh-sm">
                          <div className="fw-bold fs-6 mb-1 text-main">
                            {rev.name}
                          </div>
                          <div className="small text-secondary" style={{ fontSize: '0.78rem' }}>
                            {rev.date}
                          </div>
                        </div>
                      </div>

                      {/* 5 Stars */}
                      <div className="d-flex align-items-center gap-1 mb-3 text-start">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} size={16} fill="var(--secondary-color)" color="var(--secondary-color)" />
                        ))}
                      </div>

                      {/* Review Text */}
                      <p className="small text-secondary text-start mb-0 lh-base">
                        &ldquo;{rev.comment}&rdquo;
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
                className="btn btn-light rounded-circle position-absolute top-50 end-0 translate-middle-y z-3 p-0 d-none d-md-flex align-items-center justify-content-center review-nav-btn shadow-sm"
                style={{ right: '-16px' }}
                aria-label="Next Reviews"
              >
                <ChevronRight size={20} />
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default OurHappyCustomers;
