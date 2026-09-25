import { useTranslation } from "react-i18next";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import Skills from "./sections/Skills";
import TechStack from "./sections/TechStack";

export default function App() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Services />
      <TechStack />
      <Contact />
      <footer className="py-12 text-center text-slate-500 border-t dark:border-slate-800">
        {t("footer.copy")}
      </footer>
    </div>
  );
}
