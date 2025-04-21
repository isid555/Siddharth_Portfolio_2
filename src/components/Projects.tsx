import React, { useState } from 'react';
import { useInView } from '@/hooks/useInView';
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  links: {
    demo?: string;
    github?: string;
  };
  category: string;
  index: number;
  isVisible: boolean;
}

const ProjectCard = ({ title, description, tags, links, index, isVisible }: ProjectProps) => {
  return (
      <div
          className={cn(
              "animate-on-scroll bg-secondary p-6 rounded-lg silver-border card-hover",
              isVisible ? 'visible' : ''
          )}
          style={{ transitionDelay: `${index * 150}ms` }}
      >
        <h3 className="text-2xl font-semibold mb-3 gradient-heading">{title}</h3>

        <p className="text-gray-300 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, idx) => (
              <span key={idx} className="px-2 py-1 text-xs bg-muted rounded-full text-gray-300">
            {tag}
          </span>
          ))}
        </div>

        <div className="flex gap-4 mt-4">
          {links.github && (
              <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-1 text-sm"
              >
                <Github size={16} />
                <span>Code</span>
              </a>
          )}
          {links.demo && (
              <a
                  href={links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-1 text-sm"
              >
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </a>
          )}
        </div>
      </div>
  );
};

const Projects = () => {
  const [sectionRef, isSectionVisible] = useInView(0.2);
  const [projectsRef, areProjectsVisible] = useInView(0.2);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'MERN', 'Web3',"GovTech", "Full Stack" ,'Frontend',"Backend","Data Science"];

  const projects = [
    {
      title: "Crypto Payment Gateway",
      description: "A Solana-based crypto payment gateway with automated token swaps to USDC using Jupiter Aggregator, ideal for merchants.",
      tags: ["Solana", "Jupiter Aggregator", "React", "Anchor", "Vite"],
      links: {
        demo: "https://swapiter.vercel.app/",
        github: "https://github.com/isid555/Swap-with-Jupiter"
      },
      category: "Web3"
    },
    {
      title: "WalletX - Solana Wallet",
      description: "A decentralized Solana wallet enabling users to manage keys, airdrop, transfer SOL, and track balance securely.",
      tags: ["Solana", "React", "Rust", "Keypair", "TypeScript"],
      links: {
        demo: "https://walletx-client.vercel.app/",
        github: "https://github.com/isid555/Crypto-Cloud-Wallet"
      },
      category: "Web3"
    },
    {
      title: "SOL Token LaunchPad",
      description: "An intuitive dApp to launch SPL tokens on the Solana Devnet with wallet integration and instant deployment.",
      tags: ["Solana", "React", "Phantom Wallet", "TypeScript"],
      links: {
        demo: "https://solana-token-launch-pad-devnet.vercel.app/",
        github: "https://github.com/isid555/Solana-Token-LaunchPad"
      },
      category: "Web3"
    },
    {
      title: "Stakify",
      description: "A liquid staking platform inspired by Lido and RocketPool, deployed on Ethereum with proxy upgrade support.",
      tags: ["Solidity", "Ethereum", "Hardhat", "Proxy Contracts", "Wagmi"],
      links: {
        demo: "#",
        github: "https://github.com/isid555/Stakify"
      },
      category: "Web3"
    },
    {
      title: "CrowdFunding Smart Contract",
      description: "A smart contract allowing contributors to vote on fund allocation—majority decides the recipient.",
      tags: ["Solidity", "Voting Mechanism", "Remix", "Smart Contracts"],
      links: {
        demo: "#",
        github: "https://github.com/NotRithik/scaler-smart-contracts/pull/3"
      },
      category: "Web3"
    },
    {
      title: "Streamerz - SaaS Landing Page",
      description: "An animated, responsive SaaS landing page built for streamers with a sleek and modern UI.",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      links: {
        demo: "https://streamerz-alpha.vercel.app/",
        github: "https://github.com/isid555/Streamerz"
      },
      category: "Frontend"
    },
    {
      title: "Code Craft - Online IDE",
      description: "A multi-language online IDE with real-time code execution using Piston API and Convex.dev backend.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Piston API", "Convex.dev"],
      links: {
        demo: "https://code-craft-puce-gamma.vercel.app/",
        github: "https://github.com/isid555/Code-Craft/tree/main"
      },
      category: "Full Stack"
    },
    {
      title: "E-Commerce Platform",
      description: "A fully responsive e-commerce platform with product filtering, cart functionality, admin panel, and Stripe checkout.",
      tags: ["React", "Node.js", "MongoDB", "Stripe API", "Tailwind CSS"],
      links: {
        demo: "https://mern-e-commerce-store-fh5n.onrender.com/",
        github: "https://github.com/isid555/MERN-__E-COMMERCE-STORE"
      },
      category: "MERN"
    },
    {
      title: "Egov - Water Connection Platform",
      description: "Built a water connection platform MVP for the Government of India using DIGIT (open-source governance stack). Enabled citizen service request flows and admin dashboards.",
      tags: ["DIGIT", "React", "DevOps", "Microservices", "Spring Boot"],
      links: {
        github: "https://github.com/isid555/Egov-Final-Project"
      },
      category: "GovTech"
    },
    {
      title: "TinyURL - URL Shortener",
      description: "A full-stack URL shortener with custom aliases, authentication, and history tracking. Built using MERN stack and hosted on free-tier services.",
      tags: ["MongoDB", "Express", "React", "Node.js", "JWT", "Tailwind"],
      links: {
        demo: "https://tiny-url-ochre.vercel.app/",
        github: "https://github.com/isid555/TinyUrl-Client"
      },
      category: "MERN"
    },
    {
      title: "RecipeRealm - Recipe Finder",
      description: "A dynamic recipe web app using Spoonacular API with real-time search and filter options.",
      tags: ["React", "Recoil", "Node.js", "Spoonacular API"],
      links: {
        demo: "https://recipe-realm-orcin.vercel.app/",
        github: "https://github.com/isid555/RecipeRealm"
      },
      category: "Full Stack"
    },
    {
      title: "MERN Chat Application",
      description: "A real-time chat app with instant messaging, WebSocket communication, and user authentication.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Socket.IO"],
      links: {
        demo: "https://chat-application-mern-black.vercel.app/login",
        github: "https://github.com/isid555/Chat-Application-MERN-"
      },
      category: "MERN"
    },{
      title: "Hospital Management Dashboard",
      description: "A full-stack hospital management system for doctors, nurses, admins, and patients to manage appointments, records, and role-based access. Features JWT auth and analytics.",
      tags: ["React", "Node.js", "MongoDB", "JWT", "Tailwind", "Express"],
      links: {
        demo: "https://hospital-managment-frontend-delta.vercel.app/",
        github: "https://github.com/isid555/Hospital_managment_frontend"
      },
      category: "MERN"
    },
    {
      title: "BookMyShow Clone",
      description: "A full-stack movie ticket booking app with movie listings, seat selection, and secure auth.",
      tags: ["React", "Node.js", "MongoDB", "JWT", "Tailwind"],
      links: {

        github: "https://github.com/isid555/BookMyShow-WebApplication"
      },
      category: "Full Stack"
    },
    {
      title: "Vehicle Management System",
      description: "Spring Boot-based fleet management system with PostgreSQL and Docker for microservice deployment.",
      tags: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
      links: {

        github: "https://github.com/isid555/VehicleServiceMangement_6pm"
      },
      category: "Backend"
    },
    {
      title: "Stock Market Analysis",
      description: "Analyzes historical stock data using Python and visualizes insights through Matplotlib and Seaborn.",
      tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      links: {
        github: "https://github.com/isid555/Stock_Market_prediction_using_Moving_Averages"
      },
      category: "Data Science"
    }
  ];


  const filteredProjects = selectedCategory === 'All'
      ? projects
      : projects.filter(project => project.category === selectedCategory);

  return (
      <section id="projects" ref={sectionRef} className="bg-off-black relative">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className={`animate-on-scroll mb-16 ${isSectionVisible ? 'visible' : ''}`}>
            <h2 className="section-title gradient-heading text-center">Featured Projects</h2>
            <div className="w-24 h-1 mx-auto my-6 bg-gradient-to-r from-transparent via-silver to-transparent"></div>
            <p className="text-center text-gray-300 max-w-3xl mx-auto">
              Here are some of my recent projects showcasing my skills and approach to development.
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={cn(
                        "px-4 py-2 text-sm rounded-full border transition-all duration-300",
                        cat === "GovTech"
                            ?"bg-gradient-to-r from-[#cc6600] via-[#1a1a1a] to-[#2d862d] text-white border-gray-700 shadow-md hover:shadow-lg hover:scale-105"
                            : selectedCategory === cat
                                ? "bg-white text-black font-semibold"
                                : "bg-transparent border-gray-500 text-gray-300 hover:bg-gray-700"
                    )}
                >
                  {cat}
                </button>
            ))}
          </div>


          {/* Project Grid */}
          <div
              ref={projectsRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {filteredProjects.map((project, idx) => (
                <ProjectCard
                    key={idx}
                    {...project}
                    index={idx}
                    isVisible={areProjectsVisible}
                />
            ))}
          </div>
        </div>
      </section>
  );
};

export default Projects;
