import { Briefcase, Calendar, MapPin } from "lucide-react";
import Section from "../components/Section";

export default function Experience() {
  const experiences = [
    {
      company: "SOFOF TECH",
      role: "Flutter Developer (Full-time | Remote)",
      duration: "MAR 2026 - PRESENT",
      location: "Jeddah, Makkah, Saudi Arabia",
      description: [
        "Designed complete UI from scratch following modern UI/UX practices.",
        "Developed and maintained high-performance Flutter mobile application features following Clean Architecture principles.",
        "Designed and implemented responsive, user-friendly UI components aligned with modern design standards.",
        "Integrated RESTful APIs and managed data efficiently using optimized state management techniques.",
        "Collaborated with remote teams to ensure timely delivery and maintain high code quality.",
        "Debugged and optimized applications to improve performance, stability, and overall user experience.",
        "Developed full Flutter applications for Android and iOS platforms.",
      ],
    },
    {
      company: "XENTRO",
      role: "Flutter Developer (Full-time | Onsite)",
      duration: "SEP 2024 - FEB 2026",
      location: "Chattogram, Bangladesh",
      description: [
        "Designed complete UI from scratch following modern UI/UX practices.",
        "Developed full Flutter applications for Android and iOS platforms.",
        "Integrated Firebase services including Push Notifications, Crashlytics, AdMob and Database.",
        "Worked with REST APIs and third-party integrations.",
        "Debugged, optimized, and improved performance and stability.",
        "Managed Store deployment process including release builds, application signing, and updates.",
        "Deployed applications to Google Play Store, ensuring compliance with store guidelines and successful release management.",
      ],
    },
    {
      company: "AMRALAB",
      role: "Flutter Developer (Remote | Project-Based)",
      duration: "DEC 2023 - FEB 2024",
      location: "Dhaka, Bangladesh",
      description: [
        "Developed Flutter-based mobile features and UI components.",
        "Integrated REST APIs and handled complex data management.",
        "Collaborated with remote teams to maintain high code quality.",
      ],
    },
    {
      company: "FREELANCER",
      role: "Flutter Developer (Remote | Project-Based)",
      duration: "JAN 2022 - PRESENT",
      location: "Remote",
      description: [
        "Developed multiple mobile applications for various industries.",
        "Handled full lifecycle development from client communication to delivery.",
      ],
    },
    {
      company: "WEBMART IT",
      role: "WordPress Developer Intern (Part-time | Onsite)",
      duration: "JAN 2019 - JUN 2019",
      location: "Chattogram, Bangladesh",
      description: [
        "Worked on website development and customization projects.",
        "Built responsive and client-focused web solutions.",
      ],
    },
  ];

  return (
    <Section
      id="experience"
      title="Work Experience"
      subtitle="My professional journey and the companies I've contributed to.">
      <div className="max-w-4xl mx-auto mt-12 space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-800 pb-8 last:pb-0">
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-slate-950"></div>

            <div className="glass-card p-6 md:p-8 rounded-[30px] border border-slate-100 dark:border-slate-800 hover:border-primary/50 transition-all">
              <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                    <Briefcase size={20} className="text-primary" />{" "}
                    {exp.company}
                  </h3>
                  <p className="text-primary font-bold mt-1">{exp.role}</p>
                </div>
                <div className="space-y-1 text-right">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-500 justify-end">
                    <Calendar size={14} /> {exp.duration}
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-400 justify-end">
                    <MapPin size={14} /> {exp.location}
                  </div>
                </div>
              </div>

              <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400 font-medium">
                {exp.description.map((item, i) => (
                  <li key={i} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
