import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { productsData } from '../data/mockData';

const categoryCards = [
  { id: 'desktops', title: 'Desktops' },
  { id: 'laptops', title: 'Laptops' },
  {
    id: 'ipads',
    title: 'iPad',
    filterCategory: 'all',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=900&q=85'
  },
  { id: 'accessories', title: 'Accessories' }
];

const ShopByCategory = ({ onSelectCategory }) => {
  const [activeSlide, setActiveSlide] = useState(categoryCards.length + 1);
  const [isPaused, setIsPaused] = useState(false);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (isPaused || prefersReducedMotion) return undefined;

    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => current + 1);
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, [isPaused]);

  const moveSlide = (direction) => {
    setActiveSlide((current) => current + direction);
  };

  const handleTrackTransitionEnd = (event) => {
    const firstSlide = categoryCards.length;
    const lastCloneSlide = categoryCards.length * 2;
    if (event.propertyName !== 'transform' || (activeSlide !== firstSlide - 1 && activeSlide !== lastCloneSlide)) return;

    setTransitionEnabled(false);
    setActiveSlide(activeSlide === firstSlide - 1 ? lastCloneSlide - 1 : firstSlide);
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setTransitionEnabled(true));
    });
  };

  const selectCategory = (categoryId) => {
    const category = categoryCards.find((item) => item.id === categoryId);
    onSelectCategory(category?.filterCategory ?? categoryId);
    document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="shop-by-category bg-light py-5" aria-labelledby="shop-by-category-title">
      <div className="container">
        <div className="text-center mb-4 mb-lg-5">
          <h2 id="shop-by-category-title" className="display-6 fw-bold mb-0">Shop by Category</h2>
          <span className="category-heading-rule" aria-hidden="true" />
        </div>

        <div
          className="category-carousel"
          role="region"
          aria-roledescription="carousel"
          aria-label="Shop by product category"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
          }}
        >
          <button type="button" className="btn btn-outline-warning category-carousel-arrow category-carousel-previous" onClick={() => moveSlide(-1)} aria-label="Previous categories">
            <ArrowLeft size={20} aria-hidden="true" />
          </button>

          <div className="category-carousel-stage">
            <div
              className={`category-carousel-track ${transitionEnabled ? '' : 'no-transition'}`}
              style={{ '--category-slide': activeSlide }}
              onTransitionEnd={handleTrackTransitionEnd}
            >
              {[...categoryCards, ...categoryCards, ...categoryCards].map((category, index) => {
                const image = category.image ?? productsData.find((product) => product.category === category.id)?.image;

                return (
                  <div className="category-carousel-slide" key={`${category.id}-${index}`}>
                    <button
                      type="button"
                      className="category-card card border-0 rounded-4 shadow-sm w-100 text-start p-0"
                      onClick={() => selectCategory(category.id)}
                      aria-label={`Browse ${category.title}`}
                    >
                      <span className="category-card-image-wrap ratio ratio-16x9 bg-body-secondary">
                        <img src={image} alt="" className="category-card-image img-fluid object-fit-contain" loading="lazy" />
                      </span>
                      <span className="category-card-copy bg-white text-center d-flex align-items-center justify-content-center py-3 px-2">
                        <span className="category-card-title fw-bold fs-5">{category.title}</span>
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          <button type="button" className="btn btn-outline-warning category-carousel-arrow category-carousel-next" onClick={() => moveSlide(1)} aria-label="Next categories">
            <ArrowRight size={20} aria-hidden="true" />
          </button>

          <div className="category-carousel-dots" aria-label="Choose category slide">
            {categoryCards.map((category, index) => (
              <button
                key={category.id}
                type="button"
                className={`btn btn-sm rounded-circle p-0 category-carousel-dot ${activeSlide % categoryCards.length === index ? 'category-carousel-dot-active' : 'bg-dark'}`}
                onClick={() => setActiveSlide(categoryCards.length + index)}
                aria-label={`Show category slide ${index + 1}`}
                aria-current={activeSlide % categoryCards.length === index ? 'true' : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
