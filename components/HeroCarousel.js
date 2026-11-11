'use client';

import { useRef, useState } from 'react';

export default function HeroCarousel({ children, slides, labels }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const pointerStartX = useRef(null);

  if (!slides.length) return null;

  const showSlide = (index) => {
    setActiveIndex((index + slides.length) % slides.length);
  };

  return (
    <section
      className="hero"
      aria-roledescription="carousel"
      aria-label={labels.carousel}
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          showSlide(activeIndex - 1);
        } else if (event.key === 'ArrowRight') {
          event.preventDefault();
          showSlide(activeIndex + 1);
        }
      }}
    >
      <div
        className="hero-photo"
        onPointerDown={(event) => {
          pointerStartX.current = event.clientX;
        }}
        onPointerUp={(event) => {
          if (pointerStartX.current === null) return;
          const delta = event.clientX - pointerStartX.current;
          pointerStartX.current = null;
          if (Math.abs(delta) > 48) showSlide(activeIndex + (delta < 0 ? 1 : -1));
        }}
        onPointerCancel={() => {
          pointerStartX.current = null;
        }}
      >
        {slides.map((slide, index) => (
          <img
            key={slide.src}
            className={`hero-slide${index === activeIndex ? ' is-active' : ''}`}
            src={slide.src}
            alt={slide.alt}
            aria-hidden={index !== activeIndex}
            loading={index === 0 ? 'eager' : 'lazy'}
            fetchPriority={index === 0 ? 'high' : 'auto'}
          />
        ))}
      </div>
      <div className="container hero-grid">
        {children}
        <div className="hero-carousel-controls">
          <span className="hero-carousel-count" aria-live="polite">
            {String(activeIndex + 1).padStart(2, '0')}
            <span aria-hidden="true"> / </span>
            {String(slides.length).padStart(2, '0')}
          </span>
          <div className="hero-carousel-dots" aria-label={labels.carousel}>
            {slides.map((slide, index) => (
              <button
                key={slide.src}
                className={`hero-carousel-dot${index === activeIndex ? ' is-active' : ''}`}
                type="button"
                aria-label={`${labels.showSlide} ${index + 1}`}
                aria-current={index === activeIndex ? 'true' : undefined}
                onClick={() => showSlide(index)}
              />
            ))}
          </div>
          <button
            className="hero-carousel-button"
            type="button"
            aria-label={labels.previous}
            onClick={() => showSlide(activeIndex - 1)}
          >
            <span aria-hidden="true">‹</span>
          </button>
          <button
            className="hero-carousel-button"
            type="button"
            aria-label={labels.next}
            onClick={() => showSlide(activeIndex + 1)}
          >
            <span aria-hidden="true">›</span>
          </button>
        </div>
      </div>
    </section>
  );
}
