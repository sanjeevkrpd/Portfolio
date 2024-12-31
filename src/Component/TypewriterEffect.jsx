import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
// Import and register the TextPlugin
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

const TypewriterEffect = () => {
  const textRef = useRef();

  useEffect(() => {
    
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    tl.fromTo(
      textRef.current,
      { text: '' },  
      {
        text: 'My name is Sanjeev',  
        duration: 3,  
        ease: 'none', 
      }
    )
    .to(
      textRef.current,
      {
        text: '',  
        duration: 2,  
        ease: 'none',  
      }
    )
    .to(
      textRef.current,
      {
        text: 'I am a Full Stack Developer', 
        duration: 3, 
        ease: 'none', 
      }
    )
    .to(
      textRef.current,
      {
        text: '',  
        duration: 2,  
        ease: 'none',  
      }
    );
  }, []);

  return (
    <div>
      <h1 ref={textRef}></h1>
    </div>
  );
};

export default TypewriterEffect;
