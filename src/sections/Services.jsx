import React from 'react';
import Section from '../components/Section';
import { Smartphone, Zap, Palette, ShieldCheck, Gauge, Share2 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Cross-Platform Dev",
      desc: "Architecting high-performance apps for Android & iOS using a single codebase without compromising native feel.",
      icon: <Smartphone className="text-primary" size={32} />,
      features: ["60/120 FPS Animations", "Native Integrations"]
    },
    {
      title: "UI/UX Transformation",
      desc: "Converting complex Figma/Adobe XD designs into pixel-perfect, responsive Flutter widgets with smooth transitions.",
      icon: <Palette className="text-primary" size={32} />,
      features: ["Adaptive Layouts", "Custom Themes"]
    },
    {
      title: "App Optimization",
      desc: "Deep-dive performance auditing to reduce app size, fix memory leaks, and boost cold-start speed.",
      icon: <Gauge className="text-primary" size={32} />,
      features: ["Memory Profiling", "Size Reduction"]
    },
    {
      title: "Secure Backend Sync",
      desc: "Robust integration with Firebase, Supabase, or REST APIs ensuring encrypted data flow and real-time sync.",
      icon: <ShieldCheck className="text-primary" size={32} />,
      features: ["JWT Auth", "Offline Persistence"]
    },
    {
      title: "API & Microservices",
      desc: "Building scalable middleware and connecting third-party services like Payment Gateways, Maps, and Social Auth.",
      icon: <Zap className="text-primary" size={32} />,
      features: ["Stripe/SSLCommerz", "Google Maps"]
    },
    {
      title: "Maintenance & Scale",
      desc: "Post-launch support, version upgrades, and scaling the architecture as your user base grows.",
      icon: <Share2 className="text-primary" size={32} />,
      features: ["CI/CD Automation", "Play Store Support"]
    }
  ];

  return (
    <Section id="services" title="Professional Solutions" subtitle="Empowering businesses with scalable mobile architecture and premium user experiences.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="group p-8 rounded-[40px] glass-card border border-slate-100 dark:border-slate-800 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
          >
            {/* Background Accent */}
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full group-hover:bg-primary/10 transition-colors"></div>
            
            <div className="mb-6 inline-block p-4 bg-primary/10 rounded-2xl group-hover:rotate-12 transition-transform duration-300">
              {service.icon}
            </div>
            
            <h3 className="text-xl font-black mb-4 group-hover:text-primary transition-colors tracking-tight">
              {service.title}
            </h3>
            
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
              {service.desc}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {service.features.map((feat, i) => (
                <span key={i} className="text-[10px] font-bold bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full uppercase tracking-tighter">
                  {feat}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
