import React from 'react';
import Section from '../components/Section';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: "XENTRO",
      role: "Flutter Developer (Full-time | Onsite)",
      duration: "SEP 2024 - PRESENT",
      location: "Chattogram, Bangladesh",
      description: [
        "Designed complete UI from scratch following modern UI/UX practices.",
        "Integrated Firebase services (Push Notifications, Crashlytics, AdMob).",
        "Managed Store deployment, application signing, and updates.",
        "Optimized app performance and stability through rigorous debugging."
      ]
    },
    {
      company: "AMRALAB",
      role: "Flutter Developer (Remote | Project-Based)",
      duration: "DEC 2023 - FEB 2024",
      location: "Dhaka, Bangladesh",
      description: [
        "Developed Flutter-based mobile features and UI components.",
        "Integrated REST APIs and handled complex data management.",
        "Collaborated with remote teams to maintain high code quality."
      ]
    },
    {
      company: "FREELANCER",
      role: "Flutter Developer (Remote | Project-Based)",
      duration: "JAN 2022 - PRESENT",
      location: "Remote",
      description: [
        "Developed multiple mobile applications for various industries.",
        "Handled full lifecycle development from client communication to delivery."
      ]
    },
    {
      company: "WEBMART IT",
      role: "WordPress Developer (Full-time | Onsite)",
      duration: "JAN 2019 - JUN 2019",
      location: "Chattogram, Bangladesh",
      description: [
        "Worked on website development and customization projects.",
        "Built responsive and client-focused web solutions."
      ]
    }
  ];

  return (
    <Section id="experience" title="Work Experience" subtitle="My professional journey and the companies I've contributed to.">
      <div className="max-w-4xl mx-auto mt-12 space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-800 pb-8 last:pb-0">
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-slate-950"></div>
            
            <div className="glass-card p-6 md:p-8 rounded-[30px] border border-slate-100 dark:border-slate-800 hover:border-primary/50 transition-all">
              <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                    <Briefcase size={20} className="text-primary"/> {exp.company}
                  </h3>
                  <p className="text-primary font-bold mt-1">{exp.role}</p>
                </div>
                <div className="space-y-1 text-right">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-500 justify-end">
                    <Calendar size={14}/> {exp.duration}
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-400 justify-end">
                    <MapPin size={14}/> {exp.location}
                  </div>
                </div>
              </div>
              
              <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400 font-medium">
                {exp.description.map((item, i) => (
                  <li key={i} className="leading-relaxed">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
