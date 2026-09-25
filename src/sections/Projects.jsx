import { AnimatePresence, motion } from "framer-motion";
import { Code, Github, Layout, Package, Smartphone } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import bmiCalculatorImg from "../assets/projects/bmi_calculator.png";
import circleNavBarImg from "../assets/projects/circle_nav_bar.gif";
import ePicImg from "../assets/projects/e-pic.png";
import hyipLabImg from "../assets/projects/hyiplab.png";
import intlMobileFieldImg from "../assets/projects/intl_mobile_field.png";
import myCoufierImg from "../assets/projects/my_coufier.png";
import psGlobalImg from "../assets/projects/ps-global.jpg";
import squareFurnitureImg from "../assets/projects/square_furniture.jpg";
import ticTacToeImg from "../assets/projects/tic_tac_toe.png";
import weatherAppImg from "../assets/projects/weather_app.jpg";
import Section from "../components/Section";

export default function Projects() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("All");

  const categories = [
    {
      name: "All",
      icon: <Code size={16} />,
      label: t("projects.categories.all"),
    },
    {
      name: "Live Apps",
      icon: <Smartphone size={16} />,
      label: t("projects.categories.live_apps"),
    },
    {
      name: "Live Package",
      icon: <Package size={16} />,
      label: t("projects.categories.live_package"),
    },
    {
      name: "UI/UX",
      icon: <Layout size={16} />,
      label: t("projects.categories.ui"),
    },
    {
      name: "Practices",
      icon: <Github size={16} />,
      label: t("projects.categories.practices"),
    },
  ];

  const projects = t("projects.list", { returnObjects: true }).map(
    (p, index) => ({
      ...p,
      image: [
        ePicImg,
        psGlobalImg,
        hyipLabImg,
        intlMobileFieldImg,
        circleNavBarImg,
        bmiCalculatorImg,
        weatherAppImg,
        ticTacToeImg,
        squareFurnitureImg,
        myCoufierImg,
      ][index],
    }),
  );
  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Section
      id="projects"
      title={t("projects.title")}
      subtitle={t("projects.subtitle")}>
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setFilter(cat.name)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
              filter === cat.name
                ? "bg-primary text-white shadow-lg shadow-primary/30"
                : "glass-card border border-slate-200 dark:border-slate-800 text-slate-500"
            }`}>
            {cat.icon} {cat.label}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.a
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              href={project.link}
              target="_blank"
              className="group relative block rounded-[32px] overflow-hidden glass-card border border-slate-100 dark:border-slate-800 transition-all duration-500">
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-black text-primary uppercase border border-primary/30">
                  {project.category}
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/5 text-primary border border-primary/20 rounded-lg text-[10px] font-bold uppercase tracking-tight">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-black mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
                  {project.desc}
                </p>
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
