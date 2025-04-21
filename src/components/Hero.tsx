import React from 'react';
import { motion } from 'framer-motion';

const images = [
    {
        src: './left_face.jpg',
        title: 'Command Line Craftsman',
        description: 'Passionate about Open Source, Freelancing, and sharpening skills through Competitive Programming.',
        position: 'left',
        widthRatio: 31.47, // %
    },
    {
        src: './middle_face.jpg',
        title: 'Decentralized Visionary',
        description: 'Building on Solana & Ethereum, hunting bounties, and shaping the decentralized frontier.',
        position: 'center',
        widthRatio: 39.92,
    },
    {
        src: './right_face.jpg',
        title: 'Web2 Native, AI Ready',
        description: 'Crafting Web2 & AI-powered apps, mastering DevOps, and merging logic with creativity.',
        position: 'right',
        widthRatio: 28.61,
    },
];



const Hero = () => {
    return (
        <motion.section
            id="hero"
            className="w-full min-h-screen flex items-center justify-center bg-black relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
        >
            {/* Code Red Texts - visible only on large screens */}
            <div className="lg:block hidden">
                <motion.div
                    className="absolute left-0 top-0 h-full flex items-center justify-center text-5xl opacity-60 transform -translate-x-1/2 lg:-translate-x-0 lg:left-10 tracking-wider uppercase"
                    style={{ color: '#b61200', fontFamily: '"Roboto Serif", serif', fontWeight: 800 }}
                    animate={{ x: [-10, 0], opacity: [0, 1] }}
                    transition={{ duration: 2, delay: 1.5 }}
                >
                    <span>code</span>
                </motion.div>

                <motion.div
                    className="absolute right-0 top-0 h-full flex items-center justify-center text-5xl opacity-60 transform translate-x-1/2 lg:translate-x-0 lg:right-10 tracking-wider uppercase"
                    style={{ color: '#b61200', fontFamily: '"Roboto Serif", serif', fontWeight: 800 }}
                    animate={{ x: [10, 0], opacity: [0, 1] }}
                    transition={{ duration: 2, delay: 2 }}
                >
                    <span>red</span>
                </motion.div>
            </div>

            {/* Collage Images */}
            <div className="w-[90vw] max-w-[734px] aspect-[734/870] flex overflow-hidden">
                {images.map((img, idx) => (
                    <motion.div
                        key={idx}
                        className="relative group overflow-hidden"
                        style={{
                            width: `${img.widthRatio}%`,
                            height: '100%',
                            flexShrink: 0,
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: idx * 1.1 }}
                    >
                        <img
                            src={img.src}
                            alt={`${img.title} - ${img.description}`}
                            loading="lazy"
                            className={`
                                w-full h-full object-none grayscale group-hover:grayscale-0 transition duration-500 ease-in-out
                                ${img.position === 'left'
                                ? 'object-left'
                                : img.position === 'right'
                                    ? 'object-right'
                                    : 'object-center'}
                                group-hover:scale-105 
                                scale-[0.9] sm:scale-100
                            `}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-center p-4">
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">{img.title}</h2>
                            <p className="text-sm sm:text-base text-gray-300">{img.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Hero;
