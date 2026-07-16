import React, { useEffect, useRef } from 'react';
import { MessageSquare, Search, ListChecks, CalendarCheck } from 'lucide-react';
import { SpotlightCard } from './ui/SpotlightCard';

const steps = [
  {
    title: "Tell Us Your Sweet Spot",
    subtitle: "15-minute call",
    description: "What kind of brands do you work best with? What services do you offer? What's your price range? We learn your world so we can match you perfectly.",
    icon: MessageSquare,
  },
  {
    title: "We Build Your Brand List",
    subtitle: "Delivered within 48 hours",
    description: "Our team researches and curates 20 brands that are a fit right now — with the specific outreach angle for each one. AI-powered research, human-verified quality.",
    icon: Search,
  },
  {
    title: "You Review, We Reach Out",
    subtitle: "Or do it yourself — your call",
    description: "The list is yours free. Use it however you want. Or let us handle the outreach — personalized messages, follow-ups, and meeting booking included.",
    icon: ListChecks,
  },
  {
    title: "Meetings on Your Calendar",
    subtitle: "Brands that need what you do",
    description: "No cold leads. No tire-kickers. Brands that are actively looking for content production and already know what they need. You just close.",
    icon: CalendarCheck,
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
      startOffset: number;
      speed: number;
      size: number;
      color: string;
      valid: boolean;

      constructor() {
        this.startOffset = (Math.random() - 0.5) * 2;
        this.speed = 1.5 + Math.random() * 2.5;
        this.size = Math.random() * 2 + 1;
        this.valid = Math.random() > 0.3;
        this.color = this.valid
          ? `rgba(212, 175, 55, ${Math.random() * 0.6 + 0.4})`
          : `rgba(100, 100, 100, ${Math.random() * 0.2 + 0.1})`;
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
        const progress = Math.max(0, Math.min(1, this.y / height));
        const topWidth = Math.min(width * 0.9, 500);
        const bottomWidth = 10;
        const currentZoneWidth = topWidth * (1 - progress) + bottomWidth * progress;
        this.x = (width / 2) + (this.startOffset * currentZoneWidth / 2);

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
        width = containerRef.current.offsetWidth;
        height = containerRef.current.offsetHeight + 200;
        canvas.width = width;
        canvas.height = height;
        initParticles();
      }
    };

    const initParticles = () => {
      particles = [];
      const count = Math.floor(height * 0.4);
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const topW = Math.min(width * 0.9, 500) / 2;
      const botW = 5;

      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, "rgba(212, 175, 55, 0)");
      gradient.addColorStop(0.2, "rgba(212, 175, 55, 0.1)");
      gradient.addColorStop(0.8, "rgba(212, 175, 55, 0.1)");
      gradient.addColorStop(1, "rgba(212, 175, 55, 0.3)");

      ctx.beginPath();
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1;
      ctx.moveTo(cx - topW, 0);
      ctx.lineTo(cx - botW, height);
      ctx.moveTo(cx + topW, 0);
      ctx.lineTo(cx + botW, height);
      ctx.stroke();

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
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
    <section id="process" className="relative py-32 overflow-hidden min-h-[1400px]">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 relative z-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            How It <span className="gold-text-gradient">Works</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
            From first call to meetings booked. No fluff, no complexity.
          </p>
        </div>

        <div className="relative max-w-xl mx-auto" ref={containerRef}>
          <canvas
            ref={canvasRef}
            className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[120%] h-[calc(100%+200px)] pointer-events-none z-0 opacity-80"
          />

          <div className="relative z-10 flex flex-col items-center gap-10 pt-10">
            {steps.map((step, index) => (
              <div key={index} className="w-full transform transition-transform hover:scale-[1.02] duration-300">
                <SpotlightCard className="flex flex-col gap-4 p-8 !bg-black/60 backdrop-blur-md border border-white/10 shadow-xl">
                  <div className="flex items-center gap-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 text-primary relative overflow-hidden group">
                      <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <step.icon size={24} className="relative z-10" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-white mb-1">{step.title}</h3>
                      <p className="text-sm text-primary font-medium italic">{step.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed pl-20">
                    {step.description}
                  </p>
                </SpotlightCard>
              </div>
            ))}

            <div className="w-full mt-8 group cursor-pointer relative">
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-transparent to-primary/50"></div>
              <a
                href="https://cal.com/david-zhu/quick-chat"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-primary via-[#C5A028] to-[#B8860B] p-6 rounded-2xl relative flex items-center justify-center gap-4 shadow-[0_0_50px_rgba(212,175,55,0.4)] transform group-hover:scale-[1.02] transition-transform duration-300 border border-white/20 block"
              >
                <CalendarCheck className="text-white w-8 h-8 animate-pulse" />
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-white tracking-tight">Get Your Free Brand List</h3>
                </div>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl mix-blend-overlay"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
