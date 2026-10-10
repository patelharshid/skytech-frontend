import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { useHeroSlides } from '../hooks/useData';

const HeroBanner = ({ onOpenRentModal, onOpenQuoteModal, onExploreCatalog }) => {
  const { data: slides, loading } = useHeroSlides();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesData = slides || [];

  useEffect(() => {
    if (slidesData.length === 0) return;
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slidesData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slidesData.length]);

  if (loading || slidesData.length === 0) {
    return (
      <section id="hero" className="position-relative py-5 overflow-hidden bg-skytech-dark text-white">
        <div className="container py-5 text-center">
          <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </section>
    );
  }

  const slide = slidesData[currentSlide];

  return (
    <section id="hero" className="position-relative py-5 overflow-hidden bg-skytech-dark text-white">
      <div className="container position-relative z-1 py-3">
        <div className="row align-items-center gy-4">
          {/* Left Text Column */}
          <div className="col-lg-7">
            <h1 className="display-4 fw-extrabold mb-3 text-white tracking-tight">
              {slide.title}
            </h1>

            <p className="lead text-light mb-4 pe-lg-4 fs-6">
              {slide.subtitle}
            </p>

            <div className="row g-2 mb-4 text-light small">
              {slide.bullets.map((bullet, idx) => (
                <div key={idx} className="col-sm-6 d-flex align-items-center gap-2">
                  <CheckCircle2 size={16} className="text-warning flex-shrink-0" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Visual Banner */}
          <div className="col-lg-5">
            <div className="sky-card p-3 bg-slate border-secondary shadow-lg position-relative overflow-hidden">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-100 rounded-3 object-fit-cover shadow-sm"
                style={{ height: '310px' }}
              />
            </div>
          </div>
        </div>

        {/* Slide Controls */}
        <div className="d-flex align-items-center justify-content-between pt-4 mt-3 border-top border-secondary">
          <div className="d-flex gap-2">
            {slidesData.map((_, idx) => (
              <button
                key={idx}
                className={`btn btn-sm p-0 rounded-circle ${currentSlide === idx ? 'bg-warning' : 'bg-secondary'}`}
                style={{ width: '12px', height: '12px' }}
                onClick={() => setCurrentSlide(idx)}
              ></button>
            ))}
          </div>

          <div className="d-flex gap-2">
            <button
              className="btn btn-sm btn-outline-light p-2 rounded-circle"
              onClick={() => setCurrentSlide(prev => (prev - 1 + slidesData.length) % slidesData.length)}
            >
              <ChevronLeft size={16} />
            </button>
            <button
              className="btn btn-sm btn-outline-light p-2 rounded-circle"
              onClick={() => setCurrentSlide(prev => (prev + 1) % slidesData.length)}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
