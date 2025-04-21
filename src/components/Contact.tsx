
import React, { useState } from 'react';
import { useInView } from '@/hooks/useInView';
import { Mail, Github, Linkedin, Send , Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';

import emailjs from "emailjs-com";

const Contact = () => {
  const [sectionRef, isSectionVisible] = useInView(0.2);
  const [formRef, isFormVisible] = useInView(0.3);
  const [infoRef, isInfoVisible] = useInView(0.3);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();



    emailjs
        .send(
            "service_0be1x4f",
            "template_y9e3wfq",
            formData,
            "GiqwMRLlurqj3qRQz"
        )
        .then(
            (result) => {
              console.log("Email sent successfully!", result.text);

              toast({
                title: "Message sent",
                description: "Thanks for reaching out! I'll get back to you soon.",
              });


            },

            (error) => {
              console.log("Email send failed!", error.text);
              toast({
                title: "Messagge not sent",
                description: "Try after few mins",
              });
            }
        );




    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  const socialLinks = [
    {
      name: "Twitter",
      icon: <Twitter className="h-5 w-5" />,
      href: "https://x.com/r555sid/",
      label: "@r555sid",
    },
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/isid555",
      label: "@isid555",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/siddharth-r-55080705h/",
      label: "siddharth-r-55080705h",
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="bg-off-black relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-off-black to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className={`animate-on-scroll mb-16 ${isSectionVisible ? 'visible' : ''}`}>
          <h2 className="section-title gradient-heading text-center">Get In Touch</h2>
          <div className="w-24 h-1 mx-auto my-6 bg-gradient-to-r from-transparent via-silver to-transparent"></div>
          <p className="text-center text-gray-300 max-w-3xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div 
            ref={formRef}
            className={`animate-on-scroll ${isFormVisible ? 'visible' : ''}`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  className="bg-secondary border-silver/20 focus:border-silver focus-visible:ring-silver"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your email address"
                  className="bg-secondary border-silver/20 focus:border-silver focus-visible:ring-silver"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your message"
                  className="h-32 bg-secondary border-silver/20 focus:border-silver focus-visible:ring-silver"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-transparent hover:bg-silver/10 text-silver hover:text-white border border-silver transition-colors group"
              >
                <span className="mr-2">Send Message</span>
                <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
          
          <div 
            ref={infoRef}
            className={`animate-on-scroll ${isInfoVisible ? 'visible' : ''} delay-200`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="bg-secondary rounded-lg silver-border p-6">
              <h3 className="text-2xl font-semibold mb-6 gradient-heading">Connect With Me</h3>
              
              <div className="space-y-6">
                {socialLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group"
                  >
                    <div className="p-3 bg-muted rounded-full group-hover:bg-silver/20 transition-colors">
                      {link.icon}
                    </div>
                    <div>
                      <p className="font-medium">{link.name}</p>
                      <p className="text-sm text-gray-400">{link.label}</p>
                    </div>
                  </a>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-700">
                <p className="text-gray-300">
                  I'm currently <span className="text-silver">available</span> for freelance work and open to new opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
