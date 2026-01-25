import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import './TypewriterEffect.css';

gsap.registerPlugin(TextPlugin);

const TypewriterEffect = () => {
  const textRef = useRef();

  useEffect(() => {
    const phrases = [
      "I build exceptional web experiences.",
      "I create scalable APIs.",
      "I design user-friendly interfaces.",
      "I solve complex problems.",
      "I write clean, efficient code.",
      "I craft full-stack solutions.",
    ];

    let currentPhrase = 0;
    const cursor = document.querySelector('.cursor');
    
    const typewriter = gsap.timeline({ repeat: -1 });

    function nextPhrase() {
      const phrase = phrases[currentPhrase];
      
      typewriter
        .to(textRef.current, {
          text: phrase,
          duration: 1.5,
          ease: "none",
        })
        .to(cursor, {
          opacity: 0,
          duration: 0.1,
          ease: "none",
        }, "-=0.1")
        .to({}, {
          duration: 2,
          onComplete: () => {
            gsap.to(textRef.current, {
              text: "",
              duration: 1,
              ease: "none",
              onComplete: () => {
                currentPhrase = (currentPhrase + 1) % phrases.length;
                gsap.to(cursor, {
                  opacity: 1,
                  duration: 0.1,
                  ease: "none",
                });
              }
            });
          }
        });
    }

    // Start the animation
    nextPhrase();

    // Set up the repeating timeline
    typewriter.eventCallback("onRepeat", nextPhrase);

    return () => {
      typewriter.kill();
    };
  }, []);

  return (
    <div className="typewriter-container">
      <span className="typewriter-text" ref={textRef}></span>
      <span className="cursor">|</span>
    </div>
  );
};

export default TypewriterEffect;