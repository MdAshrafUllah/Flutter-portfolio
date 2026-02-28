import Section from "../components/Section";

export default function TechStack() {
  const techData = [
    // Creative & Design
    {
      name: "Photoshop",
      url: "https://www.photoshop.com/en",
      img: "https://www.adobe.com/content/dam/acom/one-console/icons_rebrand/ps_appicon.svg",
    },
    {
      name: "Illustrator",
      url: "https://www.adobe.com/in/products/illustrator.html",
      img: "https://www.adobe.com/content/dam/cc/icons/illustrator.svg",
    },
    {
      name: "Premiere",
      url: "https://www.adobe.com/products/premiere.html",
      img: "https://www.adobe.com/content/dam/acom/one-console/icons_rebrand/pr_appicon.svg",
    },
    {
      name: "After Effects",
      url: "https://www.adobe.com/products/aftereffects.html",
      img: "https://www.adobe.com/content/dam/cc/us/en/products/ccoverview/ae_cc_app_RGB.svg",
    },
    {
      name: "Blender",
      url: "https://www.blender.org/",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Blender_logo_no_text.svg/2503px-Blender_logo_no_text.svg.png",
    },
    {
      name: "Cinema 4D",
      url: "https://www.maxon.net/en/cinema-4d",
      img: "https://upload.wikimedia.org/wikipedia/en/d/d8/C4D_Logo.png",
    },
    {
      name: "Figma",
      url: "https://www.figma.com/",
      img: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
    },

    // IDEs & Development
    {
      name: "Android Studio",
      url: "https://developer.android.com/studio",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Android_Studio_icon_%282023%29.svg/250px-Android_Studio_icon_%282023%29.svg.png",
    },
    {
      name: "VS Code",
      url: "https://code.visualstudio.com/",
      img: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/visual-studio-code-icon.png",
    },
    {
      name: "Xcode",
      url: "https://developer.apple.com/xcode/",
      img: "https://developer.apple.com/assets/elements/icons/xcode-s/xcode-s-256x256_2x.png",
    },
    {
      name: "Git",
      url: "https://git-scm.com/",
      img: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
    },
    {
      name: "XAMPP",
      url: "https://www.apachefriends.org/",
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/7/78/XAMPP_logo.svg/1200px-XAMPP_logo.svg.png",
    },

    // Languages & Frameworks
    {
      name: "Flutter",
      url: "https://flutter.dev",
      img: "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg",
    },
    {
      name: "Dart",
      url: "https://dart.dev",
      img: "https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg",
    },
    {
      name: "Kotlin",
      url: "https://kotlinlang.org/",
      img: "https://cdn.worldvectorlogo.com/logos/kotlin-2.svg",
    },
    {
      name: "Java",
      url: "https://www.java.com",
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
    },
    {
      name: "Python",
      url: "https://www.python.org/",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png",
    },
    {
      name: "JavaScript",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    },
    {
      name: "HTML5",
      url: "https://www.w3schools.com/html/",
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
    },
    {
      name: "CSS3",
      url: "https://www.w3schools.com/css/",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",
    },
    {
      name: "Bootstrap",
      url: "https://getbootstrap.com",
      img: "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
    },
    {
      name: "React",
      url: "https://reactjs.org/",
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    },
    {
      name: "Laravel",
      url: "https://laravel.com/",
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-original.svg",
    },
    {
      name: "Tailwind CSS",
      url: "https://tailwindcss.com/",
      img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    },
    {
      name: "Vite",
      url: "https://vitejs.dev/",
      img: "https://vitejs.dev/logo.svg",
    },
    {
      name: "WordPress",
      url: "https://wordpress.org/",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/500px-WordPress_blue_logo.svg.png",
    },
    {
      name: "Firebase",
      url: "https://firebase.google.com/",
      img: "https://www.gstatic.com/devrel-devsite/prod/v8d1d0686aef3ca9671e026a6ce14af5c61b805aabef7c385b0e34494acbfc654/firebase/images/touchicon-180.png",
    },
    {
      name: "MongoDB",
      url: "https://www.mongodb.com/",
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "MySQL",
      url: "https://www.mysql.com/",
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
    },
  ];

  return (
    <Section
      id="tech"
      title="Tech & Software Arsenal"
      subtitle="A comprehensive collection of tools and technologies I use to bring ideas to life.">
      <div className="flex flex-wrap justify-center gap-6 mt-12 px-4">
        {techData.map((tech, index) => (
          <a
            key={index}
            href={tech.url}
            target="_blank"
            rel="noreferrer"
            className="group relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary to-blue-400 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
            <div className="relative flex flex-col items-center justify-center p-4 w-24 h-24 md:w-28 md:h-28 glass-card border border-slate-100 dark:border-slate-800 rounded-3xl hover:border-primary/50 hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl">
              <img
                src={tech.img}
                alt={tech.name}
                className="w-10 h-10 md:w-12 md:h-12 object-contain grayscale-[50%] group-hover:grayscale-0 transition-all duration-300"
              />
              <span className="mt-2 text-[10px] font-black text-center uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity text-primary">
                {tech.name}
              </span>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
