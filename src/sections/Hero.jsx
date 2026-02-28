import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  TwitterIcon,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ["Android Apps", "iOS Apps", "Web Apps", "Desktop Apps"];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullWord = words[i];

      setText(
        isDeleting
          ? fullWord.substring(0, text.length - 1)
          : fullWord.substring(0, text.length + 1),
      );

      setTypingSpeed(isDeleting ? 75 : 150);

      if (!isDeleting && text === fullWord) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-20 flex items-center overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for worldwide projects
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-[1.1] mb-6 min-h-[160px] md:min-h-[auto]">
            Building Reliable & Scalable <br />
            <span className="text-primary inline-block min-w-[300px]">
              {text}
              <span className="animate-pulse border-r-4 border-primary ml-1"></span>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 mb-10 leading-relaxed max-w-xl">
            Hi, I'm{" "}
            <span className="font-bold text-slate-900 dark:text-white">
              Md Ashraf Ullah
            </span>
            . A Flutter Developer focused on high-performance architecture and
            cross-platform solutions.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#projects"
              className="px-8 py-4 bg-primary text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-blue-600 transition-all shadow-xl shadow-primary/20">
              Explore Projects <ArrowRight size={20} />
            </a>
            <a
              href="/Md Ashraf Ullah.pdf"
              className="px-8 py-4 glass-card rounded-2xl font-bold flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all border border-slate-200 dark:border-slate-800">
              Download CV <Download size={18} />
            </a>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">
              Follow Me
            </span>
            <div className="h-[1px] w-12 bg-slate-200 dark:bg-slate-800"></div>
            <div className="flex gap-4">
              <a
                href="https://github.com/MdAshrafUllah"
                className="text-slate-400 hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/mdashrafullah/"
                className="text-slate-400 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a
                href="https://x.com/MdAshrafUllah9"
                className="text-slate-400 hover:text-primary transition-colors">
                <TwitterIcon size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
          <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-400 rounded-[40px] rotate-6 opacity-20"></div>
            <div className="absolute inset-0 rounded-[40px] overflow-hidden border-2 border-white dark:border-slate-800 shadow-2xl bg-slate-200">
              <img
                src="https://avatars.githubusercontent.com/u/96839511?v=4?auto=format&fit=crop&q=80&w=800"
                alt="Ashraf Ullah"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 glass-card p-5 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce-slow">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-inner">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWiWY0E_du9TYa4Nd-XDhDJNjUrU6r6h31JQ&s"
                  alt="Flutter"
                  className="w-8"
                />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase">
                  Expert in
                </p>
                <p className="text-sm font-black">Flutter & Dart</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
