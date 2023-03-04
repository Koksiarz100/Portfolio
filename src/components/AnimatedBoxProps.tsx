import React, { useEffect, useRef, useState } from 'react';
import 'animate.css';

interface AnimatedBoxProps {
  children: React.ReactElement;
}

const AnimatedBox: React.FC<AnimatedBoxProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const animatedElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (animatedElement.current) {
        const top = animatedElement.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setIsVisible(top < windowHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initialize visibility on load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={animatedElement} className={`animate__animated ${isVisible ? 'animate__fadeInUp' : ''}`}>
      {React.cloneElement(children, { className: `${children.props.className || ''} box` })}
    </div>
  );
};

export default AnimatedBox;
