import { Briefcase, Calendar, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import Section from "../components/Section";

export default function Experience() {
  const { t } = useTranslation();

  const experiences = [
    {
      company: "SOFOF TECH",
      role: t("experience.list.0.role"),
      duration: t("experience.list.0.duration"),
      location: t("experience.list.0.location"),
      description: t("experience.list.0.description", { returnObjects: true }),
    },
    {
      company: "XENTRO",
      role: t("experience.list.1.role"),
      duration: t("experience.list.1.duration"),
      location: t("experience.list.1.location"),
      description: t("experience.list.1.description", { returnObjects: true }),
    },
    {
      company: "AMRALAB",
      role: t("experience.list.2.role"),
      duration: t("experience.list.2.duration"),
      location: t("experience.list.2.location"),
      description: t("experience.list.2.description", { returnObjects: true }),
    },
    {
      company: "FREELANCER",
      role: t("experience.list.3.role"),
      duration: t("experience.list.3.duration"),
      location: t("experience.list.3.location"),
      description: t("experience.list.3.description", { returnObjects: true }),
    },
    {
      company: "WEBMART IT",
      role: t("experience.list.4.role"),
      duration: t("experience.list.4.duration"),
      location: t("experience.list.4.location"),
      description: t("experience.list.4.description", { returnObjects: true }),
    },
  ];

  return (
    <Section
      id="experience"
      title={t("experience.title")}
      subtitle={t("experience.subtitle")}>
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
