import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
}

export const TextReveal = ({ 
  children, 
  className = '',
  delay = 0,
  stagger = 0.05
}: TextRevealProps) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    // Split text into words and characters
    const words = children.split(' ');
    element.innerHTML = words
      .map(word => 
        `<span class="word">${word.split('').map(char => 
          `<span class="char">${char}</span>`
        ).join('')}</span>`
      )
      .join(' ');

    const chars = element.querySelectorAll('.char');

    gsap.fromTo(chars,
      {
        opacity: 0,
        y: 50,
        rotationX: 90
      },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 0.8,
        delay,
        stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [children, delay, stagger]);

  return (
    <div ref={textRef} className={className} />
  );
};