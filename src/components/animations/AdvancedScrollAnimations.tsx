import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AdvancedScrollAnimationsProps {
  children: React.ReactNode;
  animation?: 'fadeUp' | 'slideLeft' | 'slideRight' | 'scaleIn' | 'rotateIn' | 'flipIn' | 'bounceIn';
  delay?: number;
  duration?: number;
  stagger?: number;
  triggerStart?: string;
  triggerEnd?: string;
  className?: string;
}

export const AdvancedScrollAnimations = ({
  children,
  animation = 'fadeUp',
  delay = 0,
  duration = 1,
  stagger = 0.1,
  triggerStart = "top 85%",
  triggerEnd = "bottom 15%",
  className = ''
}: AdvancedScrollAnimationsProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const children = element.children;
    if (children.length === 0) return;

    let fromVars: any = { opacity: 0 };
    let toVars: any = { opacity: 1 };

    switch (animation) {
      case 'fadeUp':
        fromVars = { ...fromVars, y: 60, scale: 0.95 };
        toVars = { ...toVars, y: 0, scale: 1 };
        break;
      case 'slideLeft':
        fromVars = { ...fromVars, x: 100, rotation: 5 };
        toVars = { ...toVars, x: 0, rotation: 0 };
        break;
      case 'slideRight':
        fromVars = { ...fromVars, x: -100, rotation: -5 };
        toVars = { ...toVars, x: 0, rotation: 0 };
        break;
      case 'scaleIn':
        fromVars = { ...fromVars, scale: 0.3, rotation: 15 };
        toVars = { ...toVars, scale: 1, rotation: 0 };
        break;
      case 'rotateIn':
        fromVars = { ...fromVars, rotation: 90, scale: 0.5 };
        toVars = { ...toVars, rotation: 0, scale: 1 };
        break;
      case 'flipIn':
        fromVars = { ...fromVars, rotationY: 90, z: -100 };
        toVars = { ...toVars, rotationY: 0, z: 0 };
        break;
      case 'bounceIn':
        fromVars = { ...fromVars, y: -100, scale: 0.3 };
        toVars = { ...toVars, y: 0, scale: 1, ease: "bounce.out" };
        break;
    }

    gsap.set(children, fromVars);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: triggerStart,
        end: triggerEnd,
        toggleActions: "play none none reverse",
        markers: false
      }
    });

    tl.to(children, {
      ...toVars,
      duration,
      delay,
      stagger,
      ease: toVars.ease || "power3.out"
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [animation, delay, duration, stagger, triggerStart, triggerEnd]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};