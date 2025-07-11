import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
  direction?: 'up' | 'down';
  className?: string;
}

export const ParallaxSection = ({
  children,
  speed = 0.5,
  direction = 'up',
  className = ''
}: ParallaxSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const multiplier = direction === 'up' ? -1 : 1;
    
    gsap.to(section, {
      yPercent: multiplier * speed * 100,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [speed, direction]);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
};