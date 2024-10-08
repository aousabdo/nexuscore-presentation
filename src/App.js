import React, { useState, useEffect } from 'react';
import { slideStyles } from './styles/SlideStyles';
import { IntroducingNexusCore } from './slides/IntroducingNexusCore';
import { TransformingBusinessChallenges } from './slides/TransformingBusinessChallenges';
import { CuttingEdgeCapabilities } from './slides/CuttingEdgeCapabilities';
import { RobustArchitecture } from './slides/RobustArchitecture';
import { MeasurableImpact } from './slides/MeasurableImpact';
import { IroncladSecurity } from './slides/IroncladSecurity';
import { demo_1 } from './slides/demo_1';
import { demo_3 } from './slides/demo_3';
import { demo_4 } from './slides/demo_4';

// Remove this line:
// import { HashRouter as Router } from 'react-router-dom';

const slides = [
  IntroducingNexusCore,
  TransformingBusinessChallenges,
  CuttingEdgeCapabilities,
  RobustArchitecture,
  MeasurableImpact,
  IroncladSecurity,
  demo_3,
  demo_1,
  demo_4
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
            {currentSlideData.icon && React.cloneElement(currentSlideData.icon, { 
              className: `${slideStyles.icon} ${currentSlideData.icon.props?.className || ''}`
            })}
            <h1 className={slideStyles.title}>{currentSlideData.title}</h1>
          </div>
          {currentSlideData.subtitle && <h2 className={slideStyles.subtitle}>{currentSlideData.subtitle}</h2>}
        </div>
        <div className={slideStyles.contentWrapper}>
          {currentSlideData.content && <p className={slideStyles.content}>{currentSlideData.content}</p>}
          {currentSlideData.bulletPoints && currentSlideData.bulletPoints.length > 0 && (
            <div className={slideStyles.cardGrid}>
              {currentSlideData.bulletPoints.map((point, index) => (
                <div key={index} className={slideStyles.card}>
                  {point.icon && React.cloneElement(point.icon, { className: slideStyles.cardIcon })}
                  <span className={slideStyles.cardText}>{point.text || point}</span>
                </div>
              ))}
            </div>
          )}
          {currentSlideData.image && (
            <div className={slideStyles.imageWrapper}>
              <img 
                src={currentSlideData.image.src}
                alt={currentSlideData.image.alt}
                className={currentSlideData.image.className}
              />
            </div>
          )}
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