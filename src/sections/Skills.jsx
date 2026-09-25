import { Cpu, Globe, Hexagon, Rocket } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Section from "../components/Section";

export default function Skills() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(0);

  const skillData = [
    {
      id: 0,
      category: t("skills.data.0.category"),
      icon: <Cpu size={24} />,
      techs: [
        "Flutter",
        "Dart",
        "Clean Architecture",
        "SOLID Principles",
        "OOP",
        "MVVM",
        "MVC",
      ],
      details: t("skills.data.0.details"),
    },
    {
      id: 1,
      category: t("skills.data.1.category"),
      icon: <Hexagon size={24} />,
      techs: [
        "Bloc",
        "Riverpod",
        "GetX",
        "Provider",
        "Hive",
        "SharedPreferences",
        "SQLite",
      ],
      details: t("skills.data.1.details"),
    },
    {
      id: 2,
      category: t("skills.data.2.category"),
      icon: <Globe size={24} />,
      techs: [
        "RESTful API",
        "GraphQL",
        "Firebase",
        "Supabase",
        "JSON",
        "WebSockets",
        "OAuth",
      ],
      details: t("skills.data.2.details"),
    },
    {
      id: 3,
      category: t("skills.data.3.category"),
      icon: <Rocket size={24} />,
      techs: [
        "Git/GitHub",
        "Unit/Widget Testing",
        "Crashlytics",
        "Postman",
        "Jira",
        "Code Review",
      ],
      details: t("skills.data.3.details"),
    },
  ];

  return (
    <Section
      id="skills"
      title={t("skills.title")}
      subtitle={t("skills.subtitle")}>
      <div className="mt-12 bg-white dark:bg-slate-900 rounded-[40px] p-6 md:p-10 shadow-2xl border border-slate-100 dark:border-slate-800">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-4">
            {skillData.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-5 p-6 rounded-[24px] transition-all ${activeTab === item.id ? "bg-primary text-white scale-105 shadow-lg shadow-primary/30" : "bg-slate-50 dark:bg-slate-800 hover:bg-slate-100"}`}>
                <div
                  className={`p-3 rounded-xl ${activeTab === item.id ? "bg-white/20" : "bg-primary/10 text-primary"}`}>
                  {item.icon}
                </div>
                <span className="font-bold uppercase tracking-widest text-sm">
                  {item.category}
                </span>
              </button>
            ))}
          </div>
          <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-950 p-8 rounded-[32px] border border-slate-100 dark:border-slate-800">
            <h3 className="text-2xl font-black mb-6">
              {skillData[activeTab].category}
            </h3>
            <div className="flex flex-wrap gap-3 mb-8">
              {skillData[activeTab].techs.map((t) => (
                <span
                  key={t}
                  className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700">
                  {t}
                </span>
              ))}
            </div>
            <div className="p-5 bg-primary/5 rounded-2xl border-l-4 border-primary italic text-sm text-slate-600 dark:text-slate-400">
              "{skillData[activeTab].details}"
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
