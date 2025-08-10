import React, { useState, useEffect, useRef } from "react";

interface LazyLoadSectionProps {
  children: React.ReactNode;
  threshold?: number;
  className?: string;
}

const LazyLoadSection: React.FC<LazyLoadSectionProps> = ({
  children,
  threshold = 0.1,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsVisible(true);
          setHasLoaded(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, hasLoaded]);

  return (
    <div ref={ref} className={className}>
      {isVisible ? (
        children
      ) : (
        <div className="min-h-[200px] flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default React.memo(LazyLoadSection);
