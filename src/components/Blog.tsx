import React, { useEffect, useState } from 'react';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

const EventCard = ({
                       title,
                       description,
                       images,
                       delay = 0,
                       isVisible
                   }: {
    title: string;
    description: string;
    images: string[];
    delay?: number;
    isVisible: boolean;
}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prev => (prev + 1) % images.length);
        }, 3000); // 3 seconds interval
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div
            className={cn(
                "animate-on-scroll p-6 bg-secondary rounded-lg silver-border card-hover",
                isVisible ? 'visible' : '',
                delay ? `delay-${delay}` : ''
            )}
            style={{transitionDelay: `${delay}ms`}}
        >
            <h3 className="text-xl font-semibold mb-4 gradient-heading">{title}</h3>

            {/* Centered image container */}
            <div
                className="w-full h-60 overflow-hidden rounded-lg mb-4 flex justify-center items-center bg-zinc-900 shadow-inner">
                <img
                    src={images[currentImageIndex]}
                    alt={`Event ${title} ${currentImageIndex}`}
                    className="max-w-full max-h-full object-contain transition-all duration-500"
                />
            </div>


            <p className="text-gray-300 text-sm">{description}</p>
        </div>
    );
};


const Blog = () => {
    const [sectionRef, isSectionVisible] = useInView(0.2);
    const [cardsRef, areCardsVisible] = useInView(0.3);

    const events = [
        {
            title: "Diving into the Open-Source World: OSI 2024",
            description: "In October 2024, I had the opportunity to attend the OpenSourceIndia event, where I explored the latest trends in open-source technologies. It was a great platform to connect with developers, industry experts, and contributors from diverse tech communities. I attended insightful sessions on cloud-native development, DevOps, and blockchain innovations, and it truly broadened my understanding of how open-source is shaping the future of technology.",
            images: ["./IMG-20241023-WA0011.jpg", "./IMG-20241023-WA0082.jpg", "./IMG-20241023-WA0103.jpg"]
        },
        {
            title: "Empowering Governance Through Open Source",
            description: "On March 17th, I participated in an event organized by eGov Foundation, where I gained hands-on experience with their open digital infrastructure tools. The session offered practical insights into how technology is used to improve governance and public service delivery. A highlight of the day was a small but engaging debate, where we discussed the impact of AI in transforming civic tech.",
            images: ["./IMG-20250319-WA0010.jpg","./IMG-20250319-WA0012.jpg","./img.png"]
        },
        {
            title: "Unlocking Web3 at Depin-Solana Summit",
            description: "On March 25th, I attended the Depin-Solana Summit, hosted by Solana and Superteam. The summit was an excellent opportunity to learn about the latest developments in Web3 companies and the growing ecosystem around decentralized infrastructure. I gained valuable insights into the future of Web3 and blockchain technologies while connecting with industry experts, building relationships, and expanding my professional network.",
            images: ["./IMG-20250325-WA0003.jpg","./IMG-20250325-WA0005.jpg","./IMG-20250325-WA0011.jpg"]
        }
    ];

    return (
        <section id="events" ref={sectionRef} className="bg-off-black overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-off-black to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-off-black to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 py-20">
                <div className={`animate-on-scroll mb-16 ${isSectionVisible ? 'visible' : ''}`}>
                    <h2 className="section-title gradient-heading text-center">Events</h2>
                    <div className="w-24 h-1 mx-auto my-6 bg-gradient-to-r from-transparent via-silver to-transparent"></div>
                    <p className="text-center text-gray-300 max-w-3xl mx-auto">
                        A sneak peek into key moments, events, and experiences I've been a part of — from tech talks to workshops.
                    </p>
                </div>

                <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {events.map((event, idx) => (
                        <EventCard
                            key={idx}
                            title={event.title}
                            description={event.description}
                            images={event.images}
                            delay={idx * 1000}
                            isVisible={areCardsVisible}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
