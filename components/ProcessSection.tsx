import React, { useEffect, useRef } from 'react';
import { Globe, Bot, PenTool, MailCheck, Calendar } from 'lucide-react';
import { SpotlightCard } from './ui/SpotlightCard';

const steps = [
  {
    title: "Lead Sourcing",
    subtitle: "ICP & TAM Scoping",
    icon: Globe,
  },
  {
    title: "AI Lead Research",
    subtitle: "LinkedIn & Deep-Web Analysis",
    icon: Bot,
  },
  {
    title: "Contextual Copywriting",
    subtitle: "AI-Human Hybrid Engine",
    icon: PenTool,
  },
  {
    title: "High-Intent Outreach",
    subtitle: "Multi-Inbox Infrastructure",
    icon: MailCheck,
  },
];

export const ProcessSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;

    class Particle {
      x: number = 0;
      y: number = 0;
      startOffset: number; // -1 to 1 relative to funnel width
      speed: number;
      size: number;
      color: string;
      valid: boolean;

      constructor() {
        this.startOffset = (Math.random() - 0.5) * 2;
        this.speed = 1.5 + Math.random() * 2.5;
        this.size = Math.random() * 2 + 1;
        // 70% represent "valid" leads that make it through
        this.valid = Math.random() > 0.3; 
        this.color = this.valid 
          ? `rgba(212, 175, 55, ${Math.random() * 0.6 + 0.4})` // Bright Gold
          : `rgba(100, 100, 100, ${Math.random() * 0.2 + 0.1})`; // Dull Grey
        
        this.y = Math.random() * height;
      }

      reset() {
        this.y = -20;
        this.startOffset = (Math.random() - 0.5) * 2;
        this.speed = 1.5 + Math.random() * 2.5;
        this.valid = Math.random() > 0.3;
        this.color = this.valid 
          ? `rgba(212, 175, 55, ${Math.random() * 0.6 + 0.4})`
          : `rgba(100, 100, 100, ${Math.random() * 0.2 + 0.1})`;
      }

      update() {
        this.y += this.speed;
        
        // Funnel Math
        const progress = Math.max(0, Math.min(1, this.y / height));
        
        // Funnel width at top vs bottom
        const topWidth = Math.min(width * 0.9, 500); // Max 500px spread at top
        const bottomWidth = 10; // Very narrow at bottom
        
        // Linear funnel shape
        const currentZoneWidth = topWidth * (1 - progress) + bottomWidth * progress;
        
        // Update X
        this.x = (width / 2) + (this.startOffset * currentZoneWidth / 2);

        // "Filter" effect: Invalid leads fade out/die halfway
        if (!this.valid && progress > 0.5 && Math.random() > 0.95) {
             this.reset();
        }

        if (this.y > height) {
          this.reset();
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const resize = () => {
      if (containerRef.current) {
        // Set canvas to match the height of the content container + padding
        width = containerRef.current.offsetWidth;
        height = containerRef.current.offsetHeight + 200; // Add some buffer
        canvas.width = width;
        canvas.height = height;
        initParticles();
      }
    };

    const initParticles = () => {
      particles = [];
      const density = 0.4; // Particles per pixel of height (roughly)
      const count = Math.floor(height * density); 
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      // Draw Funnel Guide Lines (Subtle)
      const cx = width / 2;
      const topW = Math.min(width * 0.9, 500) / 2;
      const botW = 5;

      // Draw glass-like pipe walls
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, "rgba(212, 175, 55, 0)");
      gradient.addColorStop(0.2, "rgba(212, 175, 55, 0.1)");
      gradient.addColorStop(0.8, "rgba(212, 175, 55, 0.1)");
      gradient.addColorStop(1, "rgba(212, 175, 55, 0.3)");

      ctx.beginPath();
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1;
      // Left Wall
      ctx.moveTo(cx - topW, 0);
      ctx.lineTo(cx - botW, height);
      // Right Wall
      ctx.moveTo(cx + topW, 0);
      ctx.lineTo(cx + botW, height);
      ctx.stroke();

      // Render Particles
      particles.forEach(p => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    
    // Initial setup needs a small delay to ensure DOM is ready/sized
    setTimeout(() => {
        resize();
        animate();
    }, 100);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="process" className="relative py-32 overflow-hidden min-h-[1200px]" aria-labelledby="process-heading">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 relative z-20">
          <h2 id="process-heading" className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            From Data Signal to <span className="gold-text-gradient">Booked Call</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
            Our proprietary AI infrastructure automates the entire revenue pipeline from signal detection to signature.
          </p>
        </div>

        <div className="relative max-w-xl mx-auto" ref={containerRef}>
          {/* Canvas Layer */}
          <canvas 
            ref={canvasRef} 
            className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[120%] h-[calc(100%+200px)] pointer-events-none z-0 opacity-80"
          />

          <div className="relative z-10 flex flex-col items-center gap-12 pt-10">
            {steps.map((step, index) => (
              <div key={index} className="w-full transform transition-transform hover:scale-[1.02] duration-300">
                <SpotlightCard className="flex items-center gap-6 p-6 !bg-black/60 backdrop-blur-md border border-white/10 shadow-xl">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 text-primary relative overflow-hidden group">
                     {/* Icon Glow */}
                     <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                     <step.icon size={24} className="relative z-10" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-white mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-400 font-mono tracking-wide uppercase opacity-70">{step.subtitle}</p>
                  </div>
                </SpotlightCard>
              </div>
            ))}

            {/* Final Call to Action Box */}
            <div className="w-full mt-8 group cursor-pointer relative">
               {/* Connecting Glow Beam for the final step */}
               <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-transparent to-primary/50"></div>
               
              <div className="bg-gradient-to-br from-primary via-[#C5A028] to-[#B8860B] p-6 rounded-2xl relative flex items-center justify-center gap-4 shadow-[0_0_50px_rgba(212,175,55,0.4)] transform group-hover:scale-[1.02] transition-transform duration-300 border border-white/20">
                 <Calendar className="text-white w-8 h-8 animate-pulse" />
                 <div className="text-left">
                   <h3 className="text-2xl font-bold text-white tracking-tight">Booked Call</h3>
                 </div>
                 <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl mix-blend-overlay"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};