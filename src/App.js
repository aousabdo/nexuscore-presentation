import React, { useState, useEffect } from 'react';
import { slideStyles } from './styles/SlideStyles';
import { IntroducingNexusCore } from './slides/IntroducingNexusCore';
import { TransformingBusinessChallenges } from './slides/TransformingBusinessChallenges';
import { CuttingEdgeCapabilities } from './slides/CuttingEdgeCapabilities';
import { RobustArchitecture } from './slides/RobustArchitecture';
import { MeasurableImpact } from './slides/MeasurableImpact';
import { IroncladSecurity } from './slides/IroncladSecurity';

// Remove this line:
// import { HashRouter as Router } from 'react-router-dom';

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
          <div className={slideStyles.titleWrapper}>
            {React.cloneElement(currentSlideData.icon, { 
              className: `${slideStyles.icon} ${currentSlideData.icon.props.className}`
            })}
            <h1 className={slideStyles.title}>{currentSlideData.title}</h1>
          </div>
          <h2 className={slideStyles.subtitle}>{currentSlideData.subtitle}</h2>
        </div>
        <div className={slideStyles.contentWrapper}>
          <p className={slideStyles.content}>{currentSlideData.content}</p>
          <div className={slideStyles.cardGrid}>
            {currentSlideData.bulletPoints.map((point, index) => (
              <div key={index} className={slideStyles.card}>
                {point.icon && React.cloneElement(point.icon, { className: slideStyles.cardIcon })}
                <span className={slideStyles.cardText}>{point.text || point}</span>
              </div>
            ))}
          </div>
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