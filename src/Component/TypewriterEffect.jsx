import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

const TypewriterEffect = () => {
  const textRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    tl.to(textRef.current, {
      text: 'I build things for the web.',
      duration: 2.5,
      ease: 'none',
    })
      .to(textRef.current, {
        text: '',
        duration: 1,
        ease: 'none',
      })
      .to(textRef.current, {
        text: 'I build apps too.',
        duration: 2.5,
        ease: 'none',
      })
      .to(textRef.current, {
        text: '',
        duration: 1,
        ease: 'none',
      });
  }, []);

  return <h2 ref={textRef} className="home-subtitle-large typewriter-text"></h2>;
};

export default TypewriterEffect;
