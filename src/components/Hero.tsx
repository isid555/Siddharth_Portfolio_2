
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;

    if (title) title.classList.add('animate-fade-in');
    
    setTimeout(() => {
      if (subtitle) subtitle.classList.add('animate-fade-in');
    }, 300);
    
    setTimeout(() => {
      if (cta) cta.classList.add('animate-fade-in');
    }, 600);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(192,192,192,0.1)_0%,_transparent_70%)]"></div>
      
      <div className="max-w-4xl mx-auto text-center z-10 px-4">
        <h1 
          ref={titleRef}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 tracking-tight"
        >
          <span className="gradient-heading">Creative Developer</span>
          <span className="silver-shine"> & Designer</span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-lg md:text-xl text-gray-300 mb-8 opacity-0"
        >
          Building modern, innovative digital experiences with clean code and creative design.
        </p>
        
        <div ref={ctaRef} className="opacity-0 mt-4">
          <Button 
            onClick={scrollToAbout}
            className="bg-transparent hover:bg-silver/10 text-silver hover:text-white border border-silver rounded-full px-6 py-6 group relative"
          >
            <ArrowDown className="h-5 w-5 animate-bounce" />
            <span className="sr-only">Scroll Down</span>
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-[200px] h-[1px] bg-gradient-to-r from-transparent via-silver/30 to-transparent"></div>
    </section>
  );
};

export default Hero;
