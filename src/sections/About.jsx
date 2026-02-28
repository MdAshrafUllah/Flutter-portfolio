import { Globe, Package, Rocket, Smartphone } from "lucide-react";
import Section from "../components/Section";

export default function About() {
  const stats = [
    { icon: <Smartphone />, label: "Mobile Apps", value: "Production-Ready" },
    { icon: <Package />, label: "pub.dev", value: "Package Author" },
    { icon: <Rocket />, label: "Deployment", value: "Play Store Expert" },
    { icon: <Globe />, label: "Open Source", value: "Contributor" },
  ];

  return (
    <Section
      id="about"
      title="The Flutter Craftsman"
      subtitle="Turning complex ideas into high-performance cross-platform realities.">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <p className="text-xl font-medium leading-relaxed text-slate-700 dark:text-slate-300">
            I specialize in architecting{" "}
            <span className="font-bold text-primary">Android & iOS</span>{" "}
            applications that are not just functional, but performant and
            scalable.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            With a deep understanding of the Flutter ecosystem, I've led
            complete development cycles-from pixel-perfect UI implementation to
            complex REST API integrations and monetization setups with Google
            AdMob.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            I am a firm believer in{" "}
            <span className="font-bold text-slate-900 dark:text-white">
              Clean Architecture
            </span>{" "}
            and reactive programming. Beyond client work, I actively contribute
            to the Flutter community through open-source projects and by
            publishing specialized packages on{" "}
            <span className="font-bold text-primary underline">pub.dev</span>.
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
              Current Tech Philosophy
            </h3>
            <ul className="space-y-4">
              {[
                {
                  t: "Clean Architecture",
                  d: "Separation of concerns for testable code.",
                },
                {
                  t: "Modular Design",
                  d: "Highly reusable widget & logic components.",
                },
                {
                  t: "Performance First",
                  d: "Optimized 60fps animations and memory safety.",
                },
                {
                  t: "Monetization",
                  d: "Seamless AdMob & In-app purchase integration.",
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
