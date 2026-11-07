/*
  Every project on projects.html comes from this file.
  To add one: copy an entry into the right group and edit it.

  status: "live" | "in-use" | "prototype" | "research" | "archived"
  links:  { live: "https://...", code: "https://github.com/..." }   (leave out what doesn't exist)
  repos:  the GitHub repos the project covers. Private ones are shown as names only.
*/
window.PROJECT_GROUPS = [
  {
    id: "work",
    unit: "U1",
    title: "Built at work",
    note: "Internal tools for CoAsia. The code stays private; happy to walk through any of them.",
    projects: [
      {
        name: "Meeting Room Booking System",
        year: "2026",
        status: "in-use",
        blurb: "One booking system for every meeting room in Taipei, Shenzhen and Shanghai, with no double bookings.",
        tags: ["PHP", "MySQL", "Docker", "Caddy", "AD sign-in", "LINE / WeCom"],
        repos: ["LibreBooking-CoAsia"]
      },
      {
        name: "Remote Support Platform",
        year: "2025",
        status: "in-use",
        blurb: "A self-hosted RustDesk setup that replaced AnyDesk, with a relay in Shenzhen and IT-only controller access.",
        tags: ["RustDesk", "Flutter", "VMware", "FortiGate", "AD"],
        repos: ["RustDesk"]
      },
      {
        name: "Lucky Draw System",
        year: "2026",
        status: "in-use",
        blurb: "Run live on stage at company events in Taiwan and Shenzhen: multi-stage draws, seniority rules, no double wins.",
        tags: ["React", "TypeScript", "Vite", "Flask", "MySQL"],
        repos: ["lucky_drraw"]
      },
      {
        name: "CoBot AI Assistant",
        year: "2026",
        status: "prototype",
        blurb: "An internal chat assistant that answers HR and IT questions from company documents, running on a local model.",
        tags: ["Ollama", "RAG", "Node.js", "Express", "Streaming"],
        repos: ["AI-Assistant"]
      },
      {
        name: "Finance Document AI",
        year: "2026",
        status: "prototype",
        blurb: "Reads invoices and purchase orders from PDF, lets finance check and fix every field, then exports to Excel.",
        tags: ["Google Document AI", "React", "Vite", "Python", "OpenPyXL"],
        repos: ["Finance-Document-AI"]
      },
      {
        name: "E-Invoice Scanner",
        year: "2026",
        status: "prototype",
        blurb: "Turns a photo of a Taiwanese e-invoice into filled-in fields, with OCR running locally instead of a paid API.",
        tags: ["Tesseract.js", "Node.js", "Express"],
        repos: ["E-Invoice-Scanning-Tool"]
      }
    ]
  },
  {
    id: "side",
    unit: "U2",
    title: "Side projects",
    note: "Things I build in my own time and put in front of real users.",
    projects: [
      {
        name: "TUYA 突雅",
        year: "2026",
        status: "live",
        blurb: "An IELTS learning site: learn one technique in two minutes through short games, with spaced review.",
        tags: ["Next.js", "TypeScript", "Cloudflare Workers", "Supabase", "Kokoro TTS"],
        links: { live: "https://tuyaielts.com" },
        repos: ["ielts-dictation"]
      },
      {
        name: "Jiuyou 揪友",
        year: "2026",
        status: "live",
        blurb: "A swipe-to-match app for meeting new friends in Taiwan to hike, eat or play board games with.",
        tags: ["Expo", "React Native", "Supabase Realtime", "Cloudflare Pages", "Turnstile"],
        links: { live: "https://jiuyou-tw.pages.dev" },
        repos: ["friend-match"]
      },
      {
        name: "Five-Minute Morning 早上五分鐘",
        year: "2026",
        status: "live",
        blurb: "A daily email of a dozen market and tech picks from news and podcasts. Readers choose which sections they get.",
        tags: ["Google Apps Script", "Cloudflare Pages", "Email"],
        repos: ["podcast-collection"]
      },
      {
        name: "Taiwan Market Morning Brief",
        year: "2026",
        status: "prototype",
        blurb: "An AI summary of the Taiwan stock market each morning, with email subscriptions.",
        tags: ["Gemini API", "React", "Express", "SQLite"],
        repos: ["Stock"]
      }
    ]
  },
  {
    id: "research",
    unit: "U3",
    title: "AI and data research",
    note: "From university and the Educational Big Data Program.",
    projects: [
      {
        name: "Wound Analysis",
        year: "2025",
        status: "research",
        blurb: "Detect wounds with YOLO, segment them with FUSegNet, and rebuild them in 3D from photos to measure size.",
        tags: ["Python", "PyTorch", "YOLO", "Segmentation", "Photogrammetry"],
        repos: ["Wound-Analysis", "woundseg", "wound_scan", "saar"]
      },
      {
        name: "Object Detection Practice",
        year: "2025",
        status: "archived",
        blurb: "Training and testing object detection models on my own data.",
        tags: ["Python", "Computer vision"],
        links: { code: "https://github.com/Shawn0604/Objectdetection_practice" },
        repos: ["Objectdetection_practice"]
      },
      {
        name: "Learning Analytics coursework",
        year: "2023",
        status: "archived",
        blurb: "Notebooks and a data mining project from the Educational Big Data Program at NTNU.",
        tags: ["Python", "Jupyter", "Data mining"],
        links: { code: "https://github.com/Shawn0604/Analysis-and-Application" },
        repos: ["Analysis-and-Application", "LAT", "DM", "Learning-analysis", "2023code"]
      }
    ]
  },
  {
    id: "earlier",
    unit: "U4",
    title: "Earlier web projects",
    note: "From AppWorks School, WeHelp and team projects, 2023 to 2024.",
    projects: [
      {
        name: "Taipei Day Trip",
        year: "2024",
        status: "archived",
        blurb: "Browse Taipei attractions and book a day trip, with third-party payment.",
        tags: ["Python", "FastAPI", "MySQL", "AWS EC2", "AWS S3"],
        links: { code: "https://github.com/Shawn0604/Taipei-Day-Trip" },
        repos: ["Taipei-Day-Trip"]
      },
      {
        name: "MoodWave",
        year: "2024",
        status: "archived",
        blurb: "A journaling site where AI replies help you reflect on how you feel.",
        tags: ["React", "Tailwind CSS", "Node.js", "Vercel"],
        links: { live: "https://mood-blog-website.vercel.app", code: "https://github.com/Shawn0604/MoodBlog-website" },
        repos: ["MoodBlog-website", "MoodBlog", "MoodBlog-frontend", "MoodBlog-backend"]
      },
      {
        name: "Weather Website",
        year: "2024",
        status: "archived",
        blurb: "A team project: 36-hour forecasts on a map of Taiwan, with a chat room and Discord alerts.",
        tags: ["Python", "WebSocket", "Discord webhook", "GitHub Actions"],
        links: { code: "https://github.com/Shawn0604/team-weather" },
        repos: ["team-weather"]
      },
      {
        name: "Learning Website",
        year: "2023",
        status: "archived",
        blurb: "A course website built during university, deployed on Azure Static Web Apps.",
        tags: ["HTML", "JavaScript", "Azure"],
        repos: ["Learning", "Learning-Website", "Learningwebsite"]
      }
    ]
  }
];

/* Practice repos: listed by name only at the bottom of the page. */
window.PRACTICE = [
  { name: "LeetCode", repo: "leetcode", note: "Algorithm practice in Python" },
  { name: "WeHelp assignments", repo: "WeHelp-Assignments", note: "Bootcamp weekly tasks" },
  { name: "Code Your Stage", repo: "Code-Your-Stage-Front-End", note: "Front-end course work" },
  { name: "Team practice", repo: "team-practice", note: "Git team workflow drills", url: "https://github.com/Shawn0604/team-practice" }
];
