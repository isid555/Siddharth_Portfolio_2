import React, { useEffect, useState, Suspense, lazy } from 'react';

const Navbar = lazy(() => import('@/components/Navbar'));
const Hero = lazy(() => import('@/components/Hero'));
const About = lazy(() => import('@/components/About'));
const Skills = lazy(() => import('@/components/Skills'));
const Projects = lazy(() => import('@/components/Projects'));
const Contact = lazy(() => import('@/components/Contact'));
const Footer = lazy(() => import('@/components/Footer'));
const Blog = lazy(() => import('@/components/Blog'));

const Index = () => {
    const [showInitialOverlay, setShowInitialOverlay] = useState(true);
    const [isMusicPlaying, setIsMusicPlaying] = useState(false);
    const [isSessionOver, setIsSessionOver] = useState(false);
    const [timerFinished, setTimerFinished] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimerFinished(true);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    const startAudioOnInteraction = () => {
        const audio = new Audio('./WhatsApp_Weddingparty_cut.mp3');
        audio.loop = false;

        audio.play().catch(err => {
            console.error('Autoplay failed:', err);
        });

        setIsMusicPlaying(true);
        setShowInitialOverlay(false);

        setTimeout(() => {
            setIsSessionOver(true);
            audio.pause();
            audio.currentTime = 0;
        }, 65000);

        window.removeEventListener('click', startAudioOnInteraction);
        window.removeEventListener('keydown', startAudioOnInteraction);
        window.removeEventListener('touchstart', startAudioOnInteraction);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollElements = document.querySelectorAll('.animate-on-scroll');
            scrollElements.forEach((element) => {
                const elementPosition = element.getBoundingClientRect().top;
                const elementHeight = element.clientHeight;
                const windowHeight = window.innerHeight;

                if (elementPosition < windowHeight - elementHeight / 3) {
                    element.classList.add('visible');
                }
            });
        };

        setTimeout(handleScroll, 100);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (isSessionOver) {
        return (
            <main className="bg-black min-h-screen w-full flex items-center justify-center text-white text-xl">
                <p className="animate-fadeOut">Session Ended. Thank you for exploring.</p>
            </main>
        );
    }

    return (
        <main className="bg-black min-h-screen overflow-x-hidden relative">
            {showInitialOverlay && !timerFinished && (
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-white bg-black z-50">
                    <div className="text-center px-4">
                        <p className="text-xl animate-pulse mb-4">
                            Put on your headphones 🎧 for a deeper dive, and use a desktop for the best view
                        </p>
                        <p className="text-md animate-pulse mb-4">
                            TIME ticks with the tune. When the melody ends, the session ENDS !
                        </p>
                    </div>
                </div>
            )}

            {timerFinished && showInitialOverlay && (
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-white bg-black z-50">
                    <div className="text-center px-4">
                        <p className="text-xl animate-pulse mb-4">
                            Click anywhere to start !
                        </p>
                    </div>
                </div>
            )}

            {!showInitialOverlay && (
                <Suspense fallback={<div className="text-white text-center mt-10">Loading...</div>}>
                    <Navbar />
                    <Hero />
                    <About />
                    <Skills />
                    <Projects />
                    <Blog />
                    <Contact />
                    <Footer />
                </Suspense>
            )}

            {!isMusicPlaying && (timerFinished || !showInitialOverlay) && (
                <div
                    className="absolute top-0 left-0 w-full h-full"
                    onClick={startAudioOnInteraction}
                    style={{ zIndex: 50 }}
                ></div>
            )}
        </main>
    );
};

export default Index;
