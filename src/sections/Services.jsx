import {
  Gauge,
  Palette,
  Share2,
  ShieldCheck,
  Smartphone,
  Zap,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import Section from "../components/Section";

export default function Services() {
  const { t } = useTranslation();

  const services = t("services.list", { returnObjects: true });
  const icons = [
    <Smartphone className="text-primary" size={32} />,
    <Palette className="text-primary" size={32} />,
    <Gauge className="text-primary" size={32} />,
    <ShieldCheck className="text-primary" size={32} />,
    <Zap className="text-primary" size={32} />,
    <Share2 className="text-primary" size={32} />,
  ];

  return (
    <Section
      id="services"
      title={t("services.title")}
      subtitle={t("services.subtitle")}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="group p-8 rounded-[40px] glass-card border border-slate-100 dark:border-slate-800 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full group-hover:bg-primary/10 transition-colors"></div>

            <div className="mb-6 inline-block p-4 bg-primary/10 rounded-2xl group-hover:rotate-12 transition-transform duration-300">
              {icons[index]}
            </div>

            <h3 className="text-xl font-black mb-4 group-hover:text-primary transition-colors tracking-tight">
              {service.title}
            </h3>

            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
              {service.desc}
            </p>

            <div className="flex flex-wrap gap-2">
              {service.features.map((feat, i) => (
                <span
                  key={i}
                  className="text-[10px] font-bold bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full uppercase tracking-tighter">
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
