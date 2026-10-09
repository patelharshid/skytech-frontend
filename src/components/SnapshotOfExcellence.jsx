import React, { useState, useEffect, useRef } from 'react';
import { Award, Users, Medal } from 'lucide-react';
import { useSnapshotExcellence } from '../hooks/useData';

const iconMap = {
  Award: Award,
  Users: Users,
  Medal: Medal
};

// Custom animated counter component
const AnimatedCounter = ({ targetNumber, suffix = '', trigger }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let startTimestamp = null;
    const duration = 2200;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 1.5);
      setCount(Math.floor(easeProgress * targetNumber));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [targetNumber, trigger]);

  const formattedValue = count.toLocaleString('en-US');

  return (
    <span>
      {formattedValue}{suffix}
    </span>
  );
};

const SnapshotOfExcellence = () => {
  const { data: snapshotData, loading } = useSnapshotExcellence();
  const [hasScrolledIntoView, setHasScrolledIntoView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasScrolledIntoView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="snapshot-section py-5 position-relative">
      <div className="container py-3 py-md-4">
        <div className="row gy-5 align-items-center">
          {/* Left Text Column */}
          <div className="col-lg-5">
            <h2 className="fs-2 fw-bold text-main mb-2 tracking-tight">
              {snapshotData?.title}
            </h2>
            <div className="fs-5 fw-bold text-muted mb-3 d-flex align-items-center gap-2">
              <span>{snapshotData?.subtitle}</span>
            </div>
            <p className="text-muted fs-6 leading-relaxed mb-0">
              {snapshotData?.description}
            </p>
          </div>

          {/* Right Column: 3 Animated Counter Cards */}
          <div className="col-lg-7">
            {loading ? (
              <div className="py-4 text-center">
                <div className="spinner-border text-warning" role="status">
                  <span className="visually-hidden">Loading Snapshot...</span>
                </div>
              </div>
            ) : (
              <div className="row g-4 justify-content-center">
                {snapshotData?.counters?.map((card) => {
                  const IconComponent = iconMap[card.iconKey] || Award;
                  return (
                    <div key={card.id} className="col-12 col-sm-4">
                      <div className="snapshot-counter-card text-center p-4 rounded-4 position-relative border shadow-xs d-flex flex-column align-items-center">
                        {/* Floating Top Circle Badge */}
                        <div className="snapshot-icon-badge bg-white shadow-sm rounded-circle d-flex align-items-center justify-content-center mb-3">
                          <IconComponent size={28} strokeWidth={1.8} className="text-orange" />
                        </div>

                        {/* Counter Number */}
                        <div className="display-5 fw-extrabold text-main font-mono mb-1 tracking-tight">
                          <AnimatedCounter
                            targetNumber={card.target}
                            suffix={card.suffix}
                            trigger={hasScrolledIntoView}
                          />
                        </div>

                        {/* Label */}
                        <div className="fw-bold text-muted fs-6 mb-0">
                          {card.label}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SnapshotOfExcellence;
