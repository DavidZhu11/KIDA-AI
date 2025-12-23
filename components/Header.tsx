import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { PhoneCall } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Solution', id: 'solution' },
    { name: 'Process', id: 'process' },
    { name: 'Results', id: 'results' },
    { name: 'FAQ', id: 'faq' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background-dark/90 backdrop-blur-md shadow-lg shadow-black/20 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img 
              src="https://i.postimg.cc/ZKxmX12r/Full-Logo-Transparent-BG.png" 
              alt="KIDA AI" 
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={`#${item.id}`} 
                onClick={(e) => scrollToSection(e, item.id)}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button 
              variant="primary" 
              className="!px-6 !py-2 text-sm" 
              icon={<PhoneCall size={16} />}
              href="https://cal.com/david-zhu/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Call
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};