import React, { useState, useEffect } from 'react';
import { slideStyles } from './styles/SlideStyles';
import { IntroducingNexusCore } from './slides/IntroducingNexusCore';
import { TransformingBusinessChallenges } from './slides/TransformingBusinessChallenges';
import { CuttingEdgeCapabilities } from './slides/CuttingEdgeCapabilities';
import { RobustArchitecture } from './slides/RobustArchitecture';
import { MeasurableImpact } from './slides/MeasurableImpact';
import { IroncladSecurity } from './slides/IroncladSecurity';

const slides = [
  IntroducingNexusCore,
  TransformingBusinessChallenges,
  CuttingEdgeCapabilities,
  RobustArchitecture,
  MeasurableImpact,
  IroncladSecurity
];

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const currentSlideData = slides[currentSlide];

  return (
    <div className={slideStyles.wrapper}>
      <div className={slideStyles.container}>
        <div className={slideStyles.header}>
          {currentSlideData.icon}
          <h1 className={slideStyles.title}>{currentSlideData.title}</h1>
          <h2 className={slideStyles.subtitle}>{currentSlideData.subtitle}</h2>
        </div>
        <div className={slideStyles.contentWrapper}>
          <p className={slideStyles.content}>{currentSlideData.content}</p>
          <ul className={slideStyles.bulletList}>
            {currentSlideData.bulletPoints.map((point, index) => (
              <li key={index} className={slideStyles.bulletPoint}>
                {point.icon ? (
                  React.cloneElement(point.icon, { className: slideStyles.bulletIcon })
                ) : (
                  <span className={slideStyles.bulletDot}>•</span>
                )}
                {point.text || point}
              </li>
            ))}
          </ul>
        </div>
        <div className={slideStyles.footer}>
          <span className={slideStyles.navigationText}>
            {currentSlide + 1} / {slides.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Presentation;