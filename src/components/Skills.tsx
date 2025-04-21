
import React from 'react';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

const SkillCategory = ({ 
  title, 
  skills, 
  delay = 0,
  isVisible
}: { 
  title: string; 
  skills: string[]; 
  delay?: number;
  isVisible: boolean;
}) => (
  <div 
    className={cn(
      "animate-on-scroll p-6 bg-secondary rounded-lg silver-border card-hover",
      isVisible ? 'visible' : '',
      delay ? `delay-${delay}` : ''
    )}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <h3 className="text-xl font-semibold mb-4 gradient-heading">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, idx) => (
        <span 
          key={idx} 
          className="px-3 py-1 text-sm bg-muted rounded-full text-gray-300"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const [sectionRef, isSectionVisible] = useInView(0.2);
  const [cardsRef, areCardsVisible] = useInView(0.3);

  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript","Java","C++", "HTML", "CSS", "Python", "SQL","Solidity","Rust"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", "Next.js", "Vue.js", "Node.js", "Express", "Tailwind CSS","SpringBoot","Socket.IO","Django","Streamlit"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "AWS", "Vercel", "Docker","Kubernates","Apache Kafka","Redis","Swagger","Terraform" , "Prometheus" , "Grafana","Loki"]
    },
    {
      title: "Blockchain Technology",
      skills: ["Ethereum", "Solana","HyperLedger", "Jupiter", "Helius", "Metaplex"]
    },
    {
      title: "Development Practices",
      skills: ["Data Structures & Algorithms (DSA)" , "Shell Scripting(Linux)"]
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="bg-off-black overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-off-black to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-off-black to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className={`animate-on-scroll mb-16 ${isSectionVisible ? 'visible' : ''}`}>
          <h2 className="section-title gradient-heading text-center">Skills & Expertise</h2>
          <div className="w-24 h-1 mx-auto my-6 bg-gradient-to-r from-transparent via-silver to-transparent"></div>
          <p className="text-center text-gray-300 max-w-3xl mx-auto">
            Here are the technologies and tools I specialize in, constantly expanding my knowledge to stay current with industry standards and emerging technologies.
          </p>
        </div>
        
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, idx) => (
            <SkillCategory
              key={idx}
              title={category.title}
              skills={category.skills}
              delay={idx * 100}
              isVisible={areCardsVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
