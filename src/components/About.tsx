import React from 'react';
import { useInView } from '@/hooks/useInView';

const About = () => {
  const [sectionRef, isSectionVisible] = useInView(0.25);
  const [imageRef, isImageVisible] = useInView(0.5);
  const [textRef, isTextVisible] = useInView(0.5);

  return (
      <section id="about" ref={sectionRef} className="bg-off-black relative">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className={`animate-on-scroll mb-12 ${isSectionVisible ? 'visible' : ''}`}>
            <h2 className="section-title gradient-heading text-center">About Me</h2>
            <div className="w-24 h-1 mx-auto my-6 bg-gradient-to-r from-transparent via-silver to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
                ref={imageRef}
                className={`animate-on-scroll ${isImageVisible ? 'visible' : ''} relative`}
            >
              <div className="aspect-square bg-gradient-to-br from-secondary to-muted rounded-lg overflow-hidden silver-border relative">
                <div className="p-6 flex items-center justify-center h-full">
                  <div className="text-6xl silver-shine ">
                    <img
                        src="./img_2.png"
                        alt="About_SST"
                        className="w-full h-full object-cover grayscale transition duration-500 ease-in-out contrast-125 rounded-lg shadow-lg"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-off-black via-transparent to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border border-silver/20 rounded-lg -z-10"></div>
            </div>

            <div
                ref={textRef}
                className={`animate-on-scroll space-y-6 ${isTextVisible ? 'visible' : ''}`}
            >
              <h3 className="text-3xl font-semibold gradient-heading">Behind the Code</h3>
              <p className="text-gray-300">
                I am a passionate developer focused on creating beautiful, functional, and user-friendly websites and applications. With attention to detail and a commitment to excellence, I strive to deliver work that not only meets but exceeds expectations.
              </p>
              <p className="text-gray-300">
                Currently pursuing my B.Sc. in Computer Science from BITS Pilani (Batch of '26) and enrolled in the Software Engineering program at Scaler School of Technology (SST'27).
              </p>
              <p className="text-gray-300">
                I enjoy exploring blockchain technology, smart contracts, and full-stack development. My interests include Web3, open-source contributions, performance optimization, and creative UI/UX design.
              </p>
              <p className="text-gray-300">
                When I'm not coding, you can find me experimenting with new technologies, building side projects, or drawing inspiration from art, design, and nature.
              </p>
              <div className="pt-4">
                <a
                    href="https://turll.up.railway.app/u/resume_web_2"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <button className="px-6 py-2 border border-silver rounded-md hover:bg-silver/10 transition-colors group">
                    <span className="gradient-heading group-hover:text-silver transition-colors">Resume</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default About;
