import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          nav: {
            home: "Home",
            about: "About",
            skills: "Skills",
            projects: "Projects",
            services: "Services",
            hire: "Hire Me",
          },
          hero: {
            available: "Available for worldwide projects",
            building: "Building Reliable & Scalable",
            hi: "Hi, I'm",
            description:
              "A Flutter Developer focused on high-performance architecture and cross-platform solutions.",
            explore: "Explore Projects",
            cv: "Download CV",
            expert: "Expert in",
          },
          footer: {
            copy: "© 2026 Md Ashraf Ullah | Professional Flutter Developer",
          },
          about: {
            title: "The Flutter Craftsman",
            subtitle:
              "Turning complex ideas into high-performance cross-platform realities.",
            intro:
              "I specialize in architecting Android & iOS applications that are not just functional, but performant and scalable.",
            body1:
              "With a deep understanding of the Flutter ecosystem, I've led complete development cycles-from pixel-perfect UI implementation to complex REST API integrations and monetization setups with Google AdMob.",
            body2: {
              start: "I am a firm believer in",
              bold: "Clean Architecture",
              end: "and reactive programming. Beyond client work, I actively contribute to the Flutter community through open-source projects and by publishing specialized packages on pub.dev.",
            },
            stats: {
              mobile: { label: "Mobile Apps", value: "Production-Ready" },
              pub: { label: "pub.dev", value: "Package Author" },
              deployment: { label: "Deployment", value: "Play Store Expert" },
              opensource: { label: "Open Source", value: "Contributor" },
            },
            philosophy: {
              title: "Current Tech Philosophy",
              items: [
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
              ],
            },
          },
          experience: {
            title: "Work Experience",
            subtitle:
              "My professional journey and the companies I've contributed to.",
            list: [
              {
                role: "Flutter Developer (Full-time | Remote)",
                duration: "MAR 2026 - PRESENT",
                location: "Jeddah, Makkah, Saudi Arabia",
                description: [
                  "Designed complete UI from scratch following modern UI/UX practices.",
                  "Developed and maintained high-performance Flutter mobile application features following Clean Architecture principles.",
                  "Designed and implemented responsive, user-friendly UI components aligned with modern design standards.",
                  "Integrated RESTful APIs and managed data efficiently using optimized state management techniques.",
                  "Collaborated with remote teams to ensure timely delivery and maintain high code quality.",
                  "Debugged and optimized applications to improve performance, stability, and overall user experience.",
                  "Developed full Flutter applications for Android and iOS platforms.",
                ],
              },
              {
                role: "Flutter Developer (Full-time | Onsite)",
                duration: "SEP 2024 - FEB 2026",
                location: "Chattogram, Bangladesh",
                description: [
                  "Designed complete UI from scratch following modern UI/UX practices.",
                  "Developed full Flutter applications for Android and iOS platforms.",
                  "Integrated Firebase services including Push Notifications, Crashlytics, AdMob and Database.",
                  "Worked with REST APIs and third-party integrations.",
                  "Debugged, optimized, and improved performance and stability.",
                  "Managed Store deployment process including release builds, application signing, and updates.",
                  "Deployed applications to Google Play Store, ensuring compliance with store guidelines and successful release management.",
                ],
              },
              {
                role: "Flutter Developer (Remote | Project-Based)",
                duration: "DEC 2023 - FEB 2024",
                location: "Dhaka, Bangladesh",
                description: [
                  "Developed Flutter-based mobile features and UI components.",
                  "Integrated REST APIs and handled complex data management.",
                  "Collaborated with remote teams to maintain high code quality.",
                ],
              },
              {
                role: "Flutter Developer (Remote | Project-Based)",
                duration: "JAN 2022 - PRESENT",
                location: "Remote",
                description: [
                  "Developed multiple mobile applications for various industries.",
                  "Handled full lifecycle development from client communication to delivery.",
                ],
              },
              {
                role: "WordPress Developer Intern (Part-time | Onsite)",
                duration: "JAN 2019 - JUN 2019",
                location: "Chattogram, Bangladesh",
                description: [
                  "Worked on website development and customization projects.",
                  "Built responsive and client-focused web solutions.",
                ],
              },
            ],
          },
          projects: {
            title: "Featured Lab",
            subtitle:
              "A curated collection of my production apps, packages, and experiments.",
            categories: {
              all: "All",
              live_apps: "Live Apps",
              live_package: "Live Package",
              ui: "UI/UX",
              practices: "Practices",
            },
            list: [
              {
                title: "E-Pic",
                category: "Live Apps",
                desc: "E‑Pic is a community-driven digital platform for mobile photographers, visual artists, and storytellers to showcase and share their creative work. It integrates photo sharing with a puzzle feature that transforms images into interactive formats.",
                tags: ["Flutter", "Dart"],
                link: "https://play.google.com/store/apps/details?id=com.xentro.epic",
              },
              {
                title: "PS Global",
                category: "Live Apps",
                desc: "PS Global is a Malaysia-first all-in-one app for the Probash community—students, expatriates, and travelers. Search study options, request visa services, book hotels, browse tour packages, find jobs, and access practical daily-life tools, deals, and support in one place.",
                tags: ["Flutter", "Dart"],
                link: "https://play.google.com/store/apps/details?id=com.xentroinfotech.probashsheba",
              },
              {
                title: "HyipLab",
                category: "Live Apps",
                desc: "Easily manage finances with our safe and intuitive banking app. Access accounts, transfer funds, and pay bills seamlessly. Enjoy peace of mind with robust security features. Simplify your banking experience today!",
                tags: ["Flutter", "Dart"],
                link: "https://play.google.com/store/apps/details?id=dev.vlab.hyip_lab",
              },
              {
                title: "intl_mobile_field",
                category: "Live Package",
                desc: "A customized Flutter TextFormField to input an international Mobile number along with the country code. It provides a user-friendly interface for selecting country codes and formatting phone numbers correctly.",
                tags: ["Dart", "Pub.dev"],
                link: "https://pub.dev/packages/intl_mobile_field",
              },
              {
                title: "circle_nav_bar",
                category: "Live Package",
                desc: "A customizable circular navigation bar for Flutter apps. It provides a visually appealing and intuitive navigation experience with smooth animations.",
                tags: ["Dart", "Pub.dev"],
                link: "https://pub.dev/packages/circle_nav_bar",
              },
              {
                title: "BMI Calculator App UI",
                category: "UI/UX",
                desc: "A sleek and modern BMI Calculator app UI design created in Figma. The design features a clean layout with intuitive navigation, vibrant colors, and interactive elements to enhance user experience while calculating Body Mass Index.",
                tags: ["Figma", "UI/UX"],
                link: "https://www.figma.com/community/file/1376314139273257837/bmi-calculator-app-ui",
              },
              {
                title: "Weather App",
                category: "Practices",
                desc: "A sleek and modern Weather App built with Flutter, providing real-time weather updates and forecasts. The app features a clean and intuitive UI, allowing users to easily check current weather conditions, hourly forecasts, and 7-day predictions for their location or any city worldwide.",
                tags: ["Flutter", "Dart"],
                link: "https://github.com/MdAshrafUllah/weather_app",
              },
              {
                title: "Tic Tac Toe Game",
                category: "Practices",
                desc: "A sleek and modern Tic Tac Toe Game App built with Flutter. The app features a clean and intuitive UI, allowing users to play against an AI opponent or with a friend.",
                tags: ["Flutter", "Dart"],
                link: "https://github.com/MdAshrafUllah/tic-tac-toe-game-app",
              },
              {
                title: "Square Furniture Landing",
                category: "Practices",
                desc: "A modern and responsive landing page for a furniture store, designed to showcase products and attract customers. The design features a clean layout, high-quality images, and intuitive navigation to enhance user experience and drive sales.",
                tags: ["React", "Tailwind CSS", "JavaScript"],
                link: "https://mdashrafullah.github.io/Square-Furniture-Landing/",
              },
              {
                title: "My Coufier",
                category: "Live Apps",
                desc: "My Coufier is a reliable courier service application that simplifies the process of sending and tracking parcels. It provides real-time updates, secure delivery, and a seamless user interface for customers to manage their shipments.",
                tags: ["Flutter", "Dart"],
                link: "https://play.google.com/store/apps/details?id=com.mycoufier.app",
              },
            ],
          },
          services: {
            title: "Professional Solutions",
            subtitle:
              "Empowering businesses with scalable mobile architecture and premium user experiences.",
            list: [
              {
                title: "Cross-Platform Dev",
                desc: "Architecting high-performance apps for Android & iOS using a single codebase without compromising native feel.",
                features: ["60/120 FPS Animations", "Native Integrations"],
              },
              {
                title: "UI/UX Transformation",
                desc: "Converting complex Figma/Adobe XD designs into pixel-perfect, responsive Flutter widgets with smooth transitions.",
                features: ["Adaptive Layouts", "Custom Themes"],
              },
              {
                title: "App Optimization",
                desc: "Deep-dive performance auditing to reduce app size, fix memory leaks, and boost cold-start speed.",
                features: ["Memory Profiling", "Size Reduction"],
              },
              {
                title: "Secure Backend Sync",
                desc: "Robust integration with Firebase, Supabase, or REST APIs ensuring encrypted data flow and real-time sync.",
                features: ["JWT Auth", "Offline Persistence"],
              },
              {
                title: "API & Microservices",
                desc: "Building scalable middleware and connecting third-party services like Payment Gateways, Maps, and Social Auth.",
                features: ["Stripe/SSLCommerz", "Google Maps"],
              },
              {
                title: "Maintenance & Scale",
                desc: "Post-launch support, version upgrades, and scaling the architecture as your user base grows.",
                features: ["CI/CD Automation", "Play Store Support"],
              },
            ],
          },
          tech: {
            title: "Tech & Software Arsenal",
            subtitle:
              "A comprehensive collection of tools and technologies I use to bring ideas to life.",
          },
          skills: {
            title: "Pro Technical Arsenal",
            subtitle:
              "A deep dive into my professional toolkit and engineering standards.",
            data: [
              {
                category: "Architecture & Logic",
                details:
                  "Focusing on modular, testable, and scalable codebases using TDD and Industry design patterns.",
              },
              {
                category: "State & Data",
                details:
                  "Expertise in reactive programming and managing complex application states and offline data synchronization.",
              },
              {
                category: "Cloud & APIs",
                details:
                  "Integrating robust backends and third-party services with secure and optimized networking layers.",
              },
              {
                category: "Quality",
                details:
                  "Ensuring high-quality delivery through automated testing, performance profiling, and continuous integration.",
              },
            ],
          },
          contact: {
            title: "Get In Touch",
            subtitle: "Let's discuss your next big project or just say hi!",
            connect: "Connect With Me",
            email: "Email",
            location: "Location",
            form: {
              subject: "Subject",
              subject_placeholder: "How can I help you?",
              message: "Message",
              message_placeholder: "Type your message here...",
              button: "Send via Gmail",
            },
          },
        },
      },
      bn: {
        translation: {
          nav: {
            home: "হোম",
            about: "সম্পর্কে",
            skills: "দক্ষতা",
            projects: "প্রজেক্টসমূহ",
            services: "সেবাসমূহ",
            hire: "নিয়োগ করুন",
          },
          hero: {
            available: "বিশ্বব্যাপী প্রজেক্টের জন্য উপলব্ধ",
            building: "নির্ভরযোগ্য এবং স্কেলেবল অ্যাপ্লিকেশন তৈরি করছি",
            hi: "হ্যালো, আমি",
            description:
              "একজন ফ্লাটার ডেভেলপার, হাই-পারফরম্যান্স আর্কিটেকচার এবং ক্রস-প্ল্যাটফর্ম সলিউশনে ফোকাস করি।",
            explore: "প্রজেক্ট দেখুন",
            cv: "সিভি ডাউনলোড",
            expert: "বিশেষজ্ঞ",
          },
          footer: {
            copy: "© ২০২৬ মোঃ আশরাফ উল্লাহ | পেশাদার ফ্লাটার ডেভেলপার",
          },
          about: {
            title: "ফ্লাটার ক্রাফটম্যান",
            subtitle:
              "জটিল আইডিয়াগুলোকে হাই-পারফরম্যান্স ক্রস-প্ল্যাটফর্ম বাস্তবে রূপান্তর করি।",
            intro:
              "আমি অ্যান্ড্রয়েড এবং আইওএস অ্যাপ্লিকেশন আর্কিটেকচারে বিশেষজ্ঞ, যা কেবল কার্যকরী নয়, বরং পারফরম্যান্ট এবং স্কেলেবল।",
            body1:
              "ফ্লাটার ইকোসিস্টেমের গভীর বোঝাপড়ার সাথে, আমি পিক্সেল-পারফেক্ট ইউআই বাস্তবায়ন থেকে শুরু করে জটিল REST API ইন্টিগ্রেশন এবং গুগল অ্যাডমব-এর সাথে মনিটাইজেশন সেটআপ পর্যন্ত সম্পূর্ণ ডেভেলপমেন্ট সাইকেল পরিচালনা করেছি।",
            body2: {
              start: "আমি",
              bold: "ক্লিন আর্কিটেকচার",
              end: "এবং রিঅ্যাকটিভ প্রোগ্রামিং-এ দৃঢ় বিশ্বাসী। ক্লায়েন্টের কাজের বাইরে, আমি ওপেন-সোর্স প্রজেক্টের মাধ্যমে ফ্লাটার কমিউনিটিতে সক্রিয়ভাবে অবদান রাখি এবং pub.dev-এ বিশেষায়িত প্যাকেজ প্রকাশ করি।",
            },
            stats: {
              mobile: { label: "মোবাইল অ্যাপস", value: "প্রোডাকশন-রেডি" },
              pub: { label: "pub.dev", value: "প্যাকেজ অথর" },
              deployment: {
                label: "ডিপ্লয়মেন্ট",
                value: "প্লে স্টোর এক্সপার্ট",
              },
              opensource: { label: "ওপেন সোর্স", value: "কন্ট্রিবিউটর" },
            },
            philosophy: {
              title: "বর্তমান টেক ফিলোসফি",
              items: [
                {
                  t: "ক্লিন আর্কিটেকচার",
                  d: "টেস্টযোগ্য কোডের জন্য আলাদা চিন্তাধারা।",
                },
                {
                  t: "মডুলার ডিজাইন",
                  d: "অত্যন্ত পুনঃব্যবহারযোগ্য উইজেট এবং লজিক কম্পোনেন্ট।",
                },
                {
                  t: "পারফরম্যান্স ফার্স্ট",
                  d: "অপ্টিমাইজড ৬০এফপিএস অ্যানিমেশন এবং মেমরি সুরক্ষা।",
                },
                {
                  t: "মনিটাইজেশন",
                  d: "সহজ অ্যাডমব এবং ইন-অ্যাপ পারচেজ ইন্টিগ্রেশন।",
                },
              ],
            },
          },
          experience: {
            title: "কাজের অভিজ্ঞতা",
            subtitle:
              "আমার পেশাগত যাত্রা এবং যে কোম্পানিগুলোতে আমি অবদান রেখেছি।",
            list: [
              {
                role: "ফ্লাটার ডেভেলপার (ফুল-টাইম | রিমোট)",
                duration: "মার্চ ২০২৬ - বর্তমান",
                location: "জেদ্দা, মক্কা, সৌদি আরব",
                description: [
                  "আধুনিক UI/UX অনুশীলন অনুসরণ করে স্ক্র্যাচ থেকে সম্পূর্ণ UI ডিজাইন করেছি।",
                  "ক্লিন আর্কিটেকচার নীতি অনুসরণ করে উচ্চ-পারফরম্যান্স ফ্লাটার মোবাইল অ্যাপ্লিকেশন ফিচার তৈরি এবং রক্ষণাবেক্ষণ করেছি।",
                  "আধুনিক ডিজাইনের মানগুলির সাথে সামঞ্জস্যপূর্ণ রেসপনসিভ, ব্যবহারকারী-বান্ধব UI কম্পোনেন্ট ডিজাইন এবং বাস্তবায়ন করেছি।",
                  "RESTful API ইন্টিগ্রেট করেছি এবং অপ্টিমাইজড স্টেট ম্যানেজমেন্ট কৌশল ব্যবহার করে দক্ষতার সাথে ডেটা ম্যানেজ করেছি।",
                  "সময়মতো ডেলিভারি নিশ্চিত করতে এবং উচ্চ কোডের মান বজায় রাখতে রিমোট টিমের সাথে সহযোগিতা করেছি।",
                  "পারফরম্যান্স, স্থায়িত্ব এবং সামগ্রিক ব্যবহারকারীর অভিজ্ঞতা উন্নত করতে অ্যাপ্লিকেশন ডিবাগ এবং অপ্টিমাইজ করেছি।",
                  "অ্যান্ড্রয়েড এবং আইওএস প্ল্যাটফর্মের জন্য সম্পূর্ণ ফ্লাটার অ্যাপ্লিকেশন তৈরি করেছি।",
                ],
              },
              {
                role: "ফ্লাটার ডেভেলপার (ফুল-টাইম | অনসাইট)",
                duration: "সেপ্টেম্বর ২০২৪ - ফেব্রুয়ারি ২০২৬",
                location: "চট্টগ্রাম, বাংলাদেশ",
                description: [
                  "আধুনিক UI/UX অনুশীলন অনুসরণ করে স্ক্র্যাচ থেকে সম্পূর্ণ UI ডিজাইন করেছি।",
                  "অ্যান্ড্রয়েড এবং আইওএস প্ল্যাটফর্মের জন্য সম্পূর্ণ ফ্লাটার অ্যাপ্লিকেশন তৈরি করেছি।",
                  "পুশ নোটিফিকেশন, ক্র্যাশলিটিক্স, অ্যাডমব এবং ডেটাবেস সহ ফায়ারবেস পরিষেবাগুলি ইন্টিগ্রেট করেছি।",
                  "REST API এবং থার্ড-পার্টি ইন্টিগ্রেশনের সাথে কাজ করেছি।",
                  "পারফরম্যান্স এবং স্থায়িত্ব উন্নত করার জন্য ডিবাগ এবং অপ্টিমাইজ করেছি।",
                  "রিলিজ বিল্ড, অ্যাপ্লিকেশন সাইনিং এবং আপডেট সহ স্টোর ডিপ্লয়মেন্ট প্রক্রিয়া পরিচালনা করেছি।",
                  "গুগল প্লে স্টোরে অ্যাপ্লিকেশন ডিপ্লয় করেছি, স্টোর গাইডলাইন মেনে এবং সফল রিলিজ ম্যানেজমেন্ট নিশ্চিত করেছি।",
                ],
              },
              {
                role: "ফ্লাটার ডেভেলপার (রিমোট | প্রজেক্ট-ভিত্তিক)",
                duration: "ডিসেম্বর ২০২৩ - ফেব্রুয়ারি ২০২৪",
                location: "ঢাকা, বাংলাদেশ",
                description: [
                  "ফ্লাটার-ভিত্তিক মোবাইল ফিচার এবং UI কম্পোনেন্ট তৈরি করেছি।",
                  "REST API ইন্টিগ্রেট করেছি এবং জটিল ডেটা ম্যানেজমেন্ট পরিচালনা করেছি।",
                  "উচ্চ কোডের মান বজায় রাখতে রিমোট টিমের সাথে কাজ করেছি।",
                ],
              },
              {
                role: "ফ্লাটার ডেভেলপার (রিমোট | প্রজেক্ট-ভিত্তিক)",
                duration: "জানুয়ারি ২০২২ - বর্তমান",
                location: "রিমোট",
                description: [
                  "বিভিন্ন শিল্পের জন্য একাধিক মোবাইল অ্যাপ্লিকেশন তৈরি করেছি।",
                  "ক্লায়েন্ট যোগাযোগ থেকে শুরু করে ডেলিভারি পর্যন্ত সম্পূর্ণ লাইফসাইকেল ডেভেলপমেন্ট পরিচালনা করেছি।",
                ],
              },
              {
                role: "ওয়ার্ডপ্রেস ডেভেলপার ইন্টার্ন (পার্ট-টাইম | অনসাইট)",
                duration: "জানুয়ারি ২০১৯ - জুন ২০১৯",
                location: "চট্টগ্রাম, বাংলাদেশ",
                description: [
                  "ওয়েবসাইট ডেভেলপমেন্ট এবং কাস্টমাইজেশন প্রজেক্টে কাজ করেছি।",
                  "রেসপনসিভ এবং ক্লায়েন্ট-কেন্দ্রিক ওয়েব সলিউশন তৈরি করেছি।",
                ],
              },
            ],
          },
          projects: {
            title: "ফিচারড ল্যাব",
            subtitle:
              "আমার প্রোডাকশন অ্যাপস, প্যাকেজ এবং পরীক্ষা-নিরীক্ষার একটি সংকলন।",
            categories: {
              all: "সব",
              live_apps: "লাইভ অ্যাপস",
              live_package: "লাইভ প্যাকেজ",
              ui: "UI/UX",
              practices: "অনুশীলন",
            },
            list: [
              {
                title: "E-Pic",
                category: "Live Apps",
                desc: "E‑Pic হলো মোবাইল ফটোগ্রাফার, ভিজ্যুয়াল আর্টিস্ট এবং গল্পকারদের জন্য একটি কমিউনিটি-চালিত ডিজিটাল প্ল্যাটফর্ম। এটি ইমেজ শেয়ারিংয়ের সাথে একটি পাজল ফিচার যুক্ত করে যা ছবিগুলোকে ইন্টারেক্টিভ ফরম্যাটে রূপান্তরিত করে।",
                tags: ["Flutter", "Dart"],
                link: "https://play.google.com/store/apps/details?id=com.xentro.epic",
              },
              {
                title: "PS Global",
                category: "Live Apps",
                desc: "PS Global হলো মালয়েশিয়া-ভিত্তিক প্রবাসী কমিউনিটির জন্য একটি অল-ইন-ওয়ান অ্যাপ। এখানে পড়াশোনার সুযোগ অনুসন্ধান, ভিসা সেবা, হোটেল বুকিং, ট্যুর প্যাকেজ, চাকরি খোঁজা এবং দৈনন্দিন প্রয়োজনীয় টুলস ও সুবিধা এক জায়গায় পাওয়া যায়।",
                tags: ["Flutter", "Dart"],
                link: "https://play.google.com/store/apps/details?id=com.xentroinfotech.probashsheba",
              },
              {
                title: "HyipLab",
                category: "Live Apps",
                desc: "আমাদের নিরাপদ এবং আধুনিক ব্যাংকিং অ্যাপের মাধ্যমে সহজেই আর্থিক ব্যবস্থাপনা করুন। অ্যাকাউন্ট অ্যাক্সেস, ফান্ড ট্রান্সফার এবং বিল পরিশোধ করুন। শক্তিশালী নিরাপত্তা ফিচারের সাথে নিশ্চিন্ত থাকুন!",
                tags: ["Flutter", "Dart"],
                link: "https://play.google.com/store/apps/details?id=dev.vlab.hyip_lab",
              },
              {
                title: "intl_mobile_field",
                category: "Live Package",
                desc: "কান্ট্রি কোডসহ আন্তর্জাতিক মোবাইল নম্বর ইনপুট করার জন্য একটি কাস্টমাইজড ফ্লাটার টেক্সটফর্মফিল্ড। এটি কান্ট্রি কোড নির্বাচন এবং ফোন নম্বর ফরম্যাটিংয়ের জন্য ইউজার-ফ্রেন্ডলি ইন্টারফেস প্রদান করে।",
                tags: ["Dart", "Pub.dev"],
                link: "https://pub.dev/packages/intl_mobile_field",
              },
              {
                title: "circle_nav_bar",
                category: "Live Package",
                desc: "ফ্লাটার অ্যাপের জন্য একটি কাস্টমাইজযোগ্য সার্কুলার নেভিগেশন বার। এটি মসৃণ অ্যানিমেশনের সাথে একটি আকর্ষণীয় এবং স্বজ্ঞাত নেভিগেশন অভিজ্ঞতা প্রদান করে।",
                tags: ["Dart", "Pub.dev"],
                link: "https://pub.dev/packages/circle_nav_bar",
              },
              {
                title: "BMI Calculator App UI",
                category: "UI/UX",
                desc: "ফিগমাতে তৈরি একটি আধুনিক BMI ক্যালকুলেটর অ্যাপ ইউআই ডিজাইন। এর লেআউট পরিষ্কার, স্বজ্ঞাত নেভিগেশন এবং প্রাণবন্ত রং ইউজার এক্সপেরিয়েন্স উন্নত করে।",
                tags: ["Figma", "UI/UX"],
                link: "https://www.figma.com/community/file/1376314139273257837/bmi-calculator-app-ui",
              },
              {
                title: "Weather App",
                category: "Practices",
                desc: "ফ্লাটার দিয়ে তৈরি একটি আধুনিক ওয়েদার অ্যাপ, যা রিয়েল-টাইম আবহাওয়ার আপডেট এবং পূর্বাভাস প্রদান করে। ইউজাররা সহজেই বর্তমান আবহাওয়া, ঘণ্টার পূর্বাভাস এবং ৭ দিনের পূর্বাভাস দেখতে পারেন।",
                tags: ["Flutter", "Dart"],
                link: "https://github.com/MdAshrafUllah/weather_app",
              },
              {
                title: "Tic Tac Toe Game",
                category: "Practices",
                desc: "ফ্লাটারে তৈরি একটি আধুনিক টিক-ট্যাক-টো গেম অ্যাপ। অ্যাপটিতে পরিষ্কার ইন্টারফেস রয়েছে যেখানে ইউজাররা এআই বা বন্ধুর বিরুদ্ধে খেলতে পারেন।",
                tags: ["Flutter", "Dart"],
                link: "https://github.com/MdAshrafUllah/tic-tac-toe-game-app",
              },
              {
                title: "Square Furniture Landing",
                category: "Practices",
                desc: "একটি আধুনিক ফার্নিচার স্টোর ল্যান্ডিং পেজ। পরিষ্কার লেআউট, উচ্চ মানের ছবি এবং স্বজ্ঞাত নেভিগেশন গ্রাহকদের আকৃষ্ট করার জন্য ডিজাইন করা হয়েছে।",
                tags: ["React", "Tailwind CSS", "JavaScript"],
                link: "https://mdashrafullah.github.io/Square-Furniture-Landing/",
              },
              {
                title: "My Coufier",
                category: "Live Apps",
                desc: "My Coufier একটি নির্ভরযোগ্য কুরিয়ার সার্ভিস অ্যাপ্লিকেশন যা পার্সেল পাঠানো এবং ট্র্যাকিংকে সহজ করে। এটি রিয়েল-টাইম আপডেট, নিরাপদ ডেলিভারি এবং সহজ ইউজার ইন্টারফেস প্রদান করে।",
                tags: ["Flutter", "Dart"],
                link: "https://play.google.com/store/apps/details?id=com.mycoufier.app",
              },
            ],
          },
          services: {
            title: "পেশাদার সলিউশন",
            subtitle:
              "স্কেলেবল মোবাইল আর্কিটেকচার এবং প্রিমিয়াম ইউজার এক্সপেরিয়েন্সের মাধ্যমে ব্যবসাকে শক্তিশালী করছি।",
            list: [
              {
                title: "ক্রস-প্ল্যাটফর্ম ডেভেলপমেন্ট",
                desc: "নেটিভ ফিলআপের সাথে আপস না করে একক কোডবেস ব্যবহার করে অ্যান্ড্রয়েড এবং আইওএসের জন্য উচ্চ-পারফরম্যান্স অ্যাপ তৈরি করা।",
                features: ["৬০/১২০ FPS অ্যানিমেশন", "নেটিভ ইন্টিগ্রেশন"],
              },
              {
                title: "UI/UX ট্রান্সফরমেশন",
                desc: "জটিল ফিগমা বা অ্যাডোবি এক্সডি ডিজাইনকে পিক্সেল-পারফেক্ট, রেসপনসিভ ফ্লাটার উইজেটে রূপান্তর করা।",
                features: ["অ্যাডাপটিভ লেআউট", "কাস্টম থিম"],
              },
              {
                title: "অ্যাপ অপ্টিমাইজেশন",
                desc: "অ্যাপের সাইজ কমাতে, মেমোরি লিক ঠিক করতে এবং স্পিড বাড়াতে পারফরম্যান্স অডিটিং।",
                features: ["মেমোরি প্রোফাইলিং", "সাইজ রিডাকশন"],
              },
              {
                title: "সিকিউর ব্যাকএন্ড সিঙ্ক",
                desc: "ফায়ারবেস, সুপাবেস বা REST API-এর সাথে শক্তিশালী ইন্টিগ্রেশন যা এনক্রিপ্টেড ডেটা এবং রিয়েল-টাইম সিঙ্ক নিশ্চিত করে।",
                features: ["JWT অথ", "অফলাইন পারসিস্টেন্স"],
              },
              {
                title: "API এবং মাইক্রোসার্ভিসেস",
                desc: "স্কেলেবল মিডলওয়্যার তৈরি এবং পেমেন্ট গেটওয়ে, ম্যাপস, সোশ্যাল অথের মতো থার্ড-পার্টি সার্ভিস যুক্ত করা।",
                features: ["স্ট্রাইপ/SSLCommerz", "গুগল ম্যাপস"],
              },
              {
                title: "মেইনটেন্যান্স এবং স্কেল",
                desc: "অ্যাপ লঞ্চের পর সাপোর্ট, ভার্সন আপগ্রেড এবং ইউজার বৃদ্ধির সাথে আর্কিটেকচার স্কেল করা।",
                features: ["CI/CD অটোমেশন", "প্লে স্টোর সাপোর্ট"],
              },
            ],
          },
          tech: {
            title: "টেক এবং সফটওয়্যার অস্ত্রাগার",
            subtitle:
              "আইডিয়াগুলোকে বাস্তবে রূপ দিতে আমি যে টুলস এবং প্রযুক্তিগুলো ব্যবহার করি, তার একটি সামগ্রিক সংগ্রহ।",
          },
          skills: {
            title: "পেশাদার টেকনিক্যাল অস্ত্রাগার",
            subtitle:
              "আমার প্রফেশনাল টুলকিট এবং ইঞ্জিনিয়ারিং স্ট্যান্ডার্ডের একটি গভীর পরিদর্শন।",
            data: [
              {
                category: "আর্কিটেকচার এবং লজিক",
                details:
                  "TDD এবং ইন্ডাস্ট্রির ডিজাইন প্যাটার্ন ব্যবহার করে মডুলার, টেস্টযোগ্য এবং স্কেলেবল কোডবেসে ফোকাস করি।",
              },
              {
                category: "স্টেট এবং ডেটা",
                details:
                  "রিঅ্যাকটিভ প্রোগ্রামিং এবং জটিল অ্যাপ্লিকেশন স্টেট ও অফলাইন ডেটা সিঙ্ক্রোনাইজেশন পরিচালনায় দক্ষতা।",
              },
              {
                category: "ক্লাউড এবং APIs",
                details:
                  "নিরাপদ এবং অপ্টিমাইজড নেটওয়ার্কিং লেয়ারের সাথে শক্তিশালী ব্যাকএন্ড এবং থার্ড-পার্টি সার্ভিস ইন্টিগ্রেট করি।",
              },
              {
                category: "কোয়ালিটি",
                details:
                  "অটোমেটেড টেস্টিং, পারফরম্যান্স প্রোফাইলিং এবং কন্টিনিউয়াস ইন্টিগ্রেশনের মাধ্যমে উচ্চ-মানের ডেলিভারি নিশ্চিত করি।",
              },
            ],
          },
          contact: {
            title: "যোগাযোগ করুন",
            subtitle:
              "আপনার পরবর্তী প্রজেক্ট নিয়ে আলোচনা করা যাক অথবা শুধু হাই বলুন!",
            connect: "আমার সাথে যুক্ত হোন",
            email: "ইমেইল",
            location: "অবস্থান",
            form: {
              subject: "বিষয়",
              subject_placeholder: "আমি আপনাকে কীভাবে সাহায্য করতে পারি?",
              message: "বার্তা",
              message_placeholder: "আপনার বার্তাটি এখানে লিখুন...",
              button: "Gmail-এর মাধ্যমে পাঠান",
            },
          },
        },
      },
    },
  });

export default i18next;
