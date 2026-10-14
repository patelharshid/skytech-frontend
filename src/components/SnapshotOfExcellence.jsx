import { useState, useEffect, useRef } from 'react';
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
    <section ref={sectionRef} className="py-5 py-lg-6 position-relative bg-white">
      <div className="container py-3">
        <div className="row gy-5 align-items-center">
          {/* Left Text Column */}
          <div className="col-lg-5 pe-lg-4">
            <h2 className="display-6 fw-bold text-main mt-1 mb-2">
              A Snapshot Of <span className="text-warning">Excellence</span>
            </h2>
            <div className="fs-5 fw-semibold text-primary mb-3">
              {snapshotData?.subtitle}
            </div>
            <p className="text-secondary small mb-0 lh-lg">
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
              <div className="row g-3 g-sm-4 justify-content-center">
                {snapshotData?.counters?.map((card) => {
                  const IconComponent = iconMap[card.iconKey] || Award;
                  return (
                    <div key={card.id} className="col-12 col-sm-4">
                      <div className="sky-card snapshot-card text-center p-4 py-lg-5 rounded-4 position-relative border bg-white h-100 d-flex flex-column align-items-center justify-content-center shadow-sm">
                        {/* Icon Bubble */}
                        <div className="snapshot-icon-bubble mb-3">
                          <IconComponent size={28} strokeWidth={2} className="text-warning" />
                        </div>

                        {/* Counter Number */}
                        <div className="display-5 fw-bold text-primary font-mono mb-1">
                          <AnimatedCounter
                            targetNumber={card.target}
                            suffix={card.suffix}
                            trigger={hasScrolledIntoView}
                          />
                        </div>

                        {/* Label */}
                        <div className="fw-semibold text-secondary small mb-0">
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
