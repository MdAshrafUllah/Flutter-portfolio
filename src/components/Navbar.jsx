import { Code2, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("nav.home"), href: "#home" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.skills"), href: "#skills" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.services"), href: "#services" },
  ];

  return (
    <div className="fixed w-full top-0 z-[100] transition-all duration-500 px-0 md:px-6 py-0 md:py-4">
      <nav
        className={`
          mx-auto transition-all duration-500 ease-in-out flex items-center justify-between
          ${
            isScrolled
              ? "max-w-[1024px] rounded-full px-6 py-3 glass-card shadow-2xl border border-white/20"
              : "max-w-full rounded-none md:rounded-[30px] px-8 md:px-12 py-6 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border-b border-slate-200 dark:border-slate-800"
          }
        `}>
        {/* Logo */}
        <div className="flex items-center gap-2 font-black text-xl tracking-tighter shrink-0">
          <Code2 className="text-primary" size={28} />
          <span
            className={`transition-all duration-300 ${
              isScrolled ? "hidden lg:inline" : "hidden sm:inline"
            }`}>
            FLUTTER<span className="text-primary">DEV</span>
          </span>
        </div>

        {/* Desktop Navigation - Flexbox Managed */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-4 lg:gap-6 px-4 overflow-hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-primary transition-colors relative group whitespace-nowrap">
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3 lg:gap-4 shrink-0 z-10">
          <div className="relative group">
            <button className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-full text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
              <span className="uppercase">{i18n.language}</span>
            </button>
            <div className="absolute right-0 top-full mt-2 w-20 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 p-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <button
                onClick={() => i18n.changeLanguage("en")}
                className={`block w-full text-left px-3 py-1.5 text-sm font-bold rounded-lg ${i18n.language === "en" ? "bg-primary text-white" : "hover:bg-slate-100 dark:hover:bg-slate-700"}`}>
                EN
              </button>
              <button
                onClick={() => i18n.changeLanguage("bn")}
                className={`block w-full text-left px-3 py-1.5 text-sm font-bold rounded-lg ${i18n.language === "bn" ? "bg-primary text-white" : "hover:bg-slate-100 dark:hover:bg-slate-700"}`}>
                BN
              </button>
            </div>
          </div>
          <ThemeToggle />
          <button
            className="md:hidden p-2 text-slate-600 dark:text-slate-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
          <a
            href="#contact"
            className={`hidden md:block px-5 py-2 bg-primary text-white text-sm font-bold rounded-full hover:scale-105 active:scale-95 transition-all whitespace-nowrap ${
              isScrolled ? "scale-90" : "scale-100"
            }`}>
            {t("nav.hire")}
          </a>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-6 right-6 p-6 glass-card rounded-3xl shadow-2xl flex flex-col items-center gap-6 animate-in slide-in-from-top-5 duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-bold">
              {link.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
