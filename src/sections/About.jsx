import { Globe, Package, Rocket, Smartphone } from "lucide-react";
import { useTranslation } from "react-i18next";
import Section from "../components/Section";

export default function About() {
  const { t } = useTranslation();

  const stats = [
    {
      icon: <Smartphone />,
      label: t("about.stats.mobile.label"),
      value: t("about.stats.mobile.value"),
    },
    {
      icon: <Package />,
      label: t("about.stats.pub.label"),
      value: t("about.stats.pub.value"),
    },
    {
      icon: <Rocket />,
      label: t("about.stats.deployment.label"),
      value: t("about.stats.deployment.value"),
    },
    {
      icon: <Globe />,
      label: t("about.stats.opensource.label"),
      value: t("about.stats.opensource.value"),
    },
  ];

  return (
    <Section id="about" title={t("about.title")} subtitle={t("about.subtitle")}>
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <p className="text-xl font-medium leading-relaxed text-slate-700 dark:text-slate-300">
            {t("about.intro")}
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            {t("about.body1")}
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            {t("about.body2.start")}{" "}
            <span className="font-bold text-slate-900 dark:text-white">
              {t("about.body2.bold")}
            </span>{" "}
            {t("about.body2.end")}
          </p>

          <div className="grid grid-cols-2 gap-6 pt-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 glass-card rounded-2xl border border-slate-100 dark:border-slate-800">
                <div className="text-primary">{stat.icon}</div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-tighter">
                    {stat.label}
                  </div>
                  <div className="text-sm font-black text-slate-900 dark:text-white">
                    {stat.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-400/20 rounded-[40px] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
          <div className="relative glass-card p-8 rounded-[40px] border border-white/20 shadow-2xl overflow-hidden bg-white/40 dark:bg-slate-900/40">
            <h3 className="text-xl font-black mb-6 flex items-center gap-2">
              <span className="h-2 w-2 bg-green-500 rounded-full animate-ping"></span>
              {t("about.philosophy.title")}
            </h3>
            <ul className="space-y-4">
              {[
                {
                  t: t("about.philosophy.items.0.t"),
                  d: t("about.philosophy.items.0.d"),
                },
                {
                  t: t("about.philosophy.items.1.t"),
                  d: t("about.philosophy.items.1.d"),
                },
                {
                  t: t("about.philosophy.items.2.t"),
                  d: t("about.philosophy.items.2.d"),
                },
                {
                  t: t("about.philosophy.items.3.t"),
                  d: t("about.philosophy.items.3.d"),
                },
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4">
                  <span className="text-primary font-bold">0{idx + 1}.</span>
                  <div>
                    <h4 className="font-bold text-sm">{item.t}</h4>
                    <p className="text-xs text-slate-500">{item.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
