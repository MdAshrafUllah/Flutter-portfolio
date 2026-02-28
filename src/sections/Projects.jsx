import { AnimatePresence, motion } from "framer-motion";
import { Code, Github, Layout, Package, Smartphone } from "lucide-react";
import { useState } from "react";
import Section from "../components/Section";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = [
    { name: "All", icon: <Code size={16} /> },
    { name: "Live Apps", icon: <Smartphone size={16} /> },
    { name: "Live Package", icon: <Package size={16} /> },
    { name: "UI/UX", icon: <Layout size={16} /> },
    { name: "Practices", icon: <Github size={16} /> },
  ];

  const projects = [
    {
      title: "E-Pic",
      category: "Live Apps",
      desc: "E‑Pic is a community-driven digital platform for mobile photographers, visual artists, and storytellers to showcase and share their creative work. It integrates photo sharing with a puzzle feature that transforms images into interactive formats.",
      tags: ["Flutter", "Dart"],
      link: "https://play.google.com/store/apps/details?id=com.xentro.epic",
      image:
        "https://play-lh.googleusercontent.com/bTY0EiNzlrOtC2e6f5WEEwsbFFWbNSUVMsVT2KetooFueStzgmraiApemNqB79Mj5ksD=w240-h480-rw?w=800",
    },
    {
      title: "ProBash Sheba",
      category: "Live Apps",
      desc: "Probash Sheba provides verified information and tools for Bangladeshi and South Asian workers, students, and visitors living in Malaysia. The app is designed to help users access essential services, manage daily life, and stay informed about work, study, and legal matters.",
      tags: ["Flutter", "Dart"],
      link: "https://play.google.com/store/apps/details?id=com.xentroinfotech.probashsheba",
      image:
        "https://play-lh.googleusercontent.com/Q0GTV5o7N26tpGDTjqdt20juLrFxSgB-lKf6GLvOh7eehlsTvqKRyivWwzlASNL1hSKy6nNCBRP5tGlr1QZf=w240-h480-rw?w=800",
    },
    {
      title: "HyipLab",
      category: "Live Apps",
      desc: "Easily manage finances with our safe and intuitive banking app. Access accounts, transfer funds, and pay bills seamlessly. Enjoy peace of mind with robust security features. Simplify your banking experience today!",
      tags: ["Flutter", "Dart"],
      link: "https://play.google.com/store/apps/details?id=dev.vlab.hyip_lab",
      image:
        "https://play-lh.googleusercontent.com/ZyqAQRgrsdgU_bz47lvK2Fvifuj3lu3Kx9jTn-s9ygcOJMNbU7lX-WxGE4zScOT9zkI=w240-h480-rw?w=800",
    },
    {
      title: "intl_mobile_field",
      category: "Live Package",
      desc: "A customized Flutter TextFormField to input an international Mobile number along with the country code. It provides a user-friendly interface for selecting country codes and formatting phone numbers correctly.",
      tags: ["Dart", "Pub.dev"],
      link: "https://pub.dev/packages/intl_mobile_field",
      image:
        "https://github.com/MdAshrafUllah/intl_mobile_field/blob/master/output/intl_mobile_field.png?raw=true?w=800",
    },
    {
      title: "circle_nav_bar",
      category: "Live Package",
      desc: "A customizable circular navigation bar for Flutter apps. It provides a visually appealing and intuitive navigation experience with smooth animations.",
      tags: ["Dart", "Pub.dev"],
      link: "https://pub.dev/packages/circle_nav_bar",
      image:
        "https://raw.githubusercontent.com/111coding/circle_nav_bar/master/doc/animation.gif?w=800",
    },
    {
      title: "BMI Calculator App UI",
      category: "UI/UX",
      desc: "A sleek and modern BMI Calculator app UI design created in Figma. The design features a clean layout with intuitive navigation, vibrant colors, and interactive elements to enhance user experience while calculating Body Mass Index.",
      tags: ["Figma", "UI/UX"],
      link: "https://www.figma.com/community/file/1376314139273257837/bmi-calculator-app-ui",
      image:
        "https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/223bf2b3e7d2690a6ff558041cef74ae6d342648?w=800",
    },
    {
      title: "Weather App",
      category: "Practices",
      desc: "A sleek and modern Weather App built with Flutter, providing real-time weather updates and forecasts. The app features a clean and intuitive UI, allowing users to easily check current weather conditions, hourly forecasts, and 7-day predictions for their location or any city worldwide.",
      tags: ["Flutter", "Dart"],
      link: "https://github.com/MdAshrafUllah/weather_app",
      image:
        "https://github.com/MdAshrafUllah/weather_app/raw/main/output/cover.jpg?w=800",
    },
    {
      title: "Tic Tac Toe Game",
      category: "Practices",
      desc: "A sleek and modern Tic Tac Toe Game App built with Flutter. The app features a clean and intuitive UI, allowing users to play against an AI opponent or with a friend.",
      tags: ["Flutter", "Dart"],
      link: "https://github.com/MdAshrafUllah/tic-tac-toe-game-app",
      image:
        "https://github.com/MdAshrafUllah/tic-tac-toe-game-app/raw/main/output/two_people_playing.png?w=800",
    },
    {
      title: "Square Furniture Landing",
      category: "Practices",
      desc: "A modern and responsive landing page for a furniture store, designed to showcase products and attract customers. The design features a clean layout, high-quality images, and intuitive navigation to enhance user experience and drive sales.",
      tags: ["React", "Tailwind CSS", "JavaScript"],
      link: "https://mdashrafullah.github.io/Square-Furniture-Landing/",
      image:
        "https://i.ytimg.com/vi/WyWmcIjf-q8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBknSOefSC_w3ZV3OLiLQQOEh_crg?w=800",
    },
  ];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Section
      id="projects"
      title="Featured Lab"
      subtitle="A curated collection of my production apps, packages, and experiments.">
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
            {cat.icon} {cat.name}
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
