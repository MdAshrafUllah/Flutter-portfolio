import { Github, Linkedin, Mail, MapPin, Send, Twitter } from "lucide-react";
import { useState } from "react";
import Section from "../components/Section";

export default function Contact() {
  const [formData, setFormData] = useState({
    subject: "",
    message: "",
  });

  const handleGmailCompose = (e) => {
    e.preventDefault();

    const myEmail = "mdashrafullah47@gmail.com";

    const baseUrl = "https://mail.google.com/mail/?view=cm&fs=1";
    const to = `&to=${myEmail}`;
    const su = `&su=${encodeURIComponent(formData.subject)}`;
    const body = `&body=${encodeURIComponent(formData.message)}`;

    const finalUrl = `${baseUrl}${to}${su}${body}`;

    window.open(finalUrl, "_blank");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Section
      id="contact"
      title="Get In Touch"
      subtitle="Let's discuss your next big project or just say hi!">
      <div className="grid lg:grid-cols-12 gap-12 mt-8">
        {/* Contact Info Card */}
        <div className="lg:col-span-5 space-y-8">
          <div className="glass-card p-8 rounded-[40px] border border-slate-100 dark:border-slate-800">
            <h3 className="text-2xl font-black mb-6 uppercase tracking-tight">
              Connect With Me
            </h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-primary/10 text-primary rounded-2xl">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Email
                  </p>
                  <p className="font-bold text-slate-900 dark:text-white">
                    mdashrafullah47@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-4 bg-primary/10 text-primary rounded-2xl">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Location
                  </p>
                  <p className="font-bold text-slate-900 dark:text-white">
                    Chattogram, Bangladesh
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800">
              <div className="flex gap-4">
                {[<Github />, <Linkedin />, <Twitter />].map((icon, i) => (
                  <a
                    key={i}
                    href={
                      i === 0
                        ? "https://github.com/mdashrafullah"
                        : i === 1
                          ? "https://linkedin.com/in/mdashrafullah"
                          : "https://twitter.com/mdashrafullah9"
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 glass-card rounded-xl hover:bg-primary hover:text-white transition-all duration-300">
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Simplified Contact Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleGmailCompose}
            className="glass-card p-8 md:p-10 rounded-[40px] border border-slate-100 dark:border-slate-800 space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold ml-1 text-slate-600 dark:text-slate-400">
                Subject
              </label>
              <input
                name="subject"
                required
                onChange={handleChange}
                type="text"
                placeholder="How can I help you?"
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 focus:border-primary outline-none transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold ml-1 text-slate-600 dark:text-slate-400">
                Message
              </label>
              <textarea
                name="message"
                required
                onChange={handleChange}
                rows="6"
                placeholder="Type your message here..."
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 focus:border-primary outline-none transition-all resize-none"></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-5 bg-primary text-white rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-blue-600 shadow-xl shadow-primary/20 transition-all active:scale-95">
              Send via Gmail <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
}
