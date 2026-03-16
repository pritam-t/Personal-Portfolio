// Portfolio Data – Pritam Thopate (Real Data)
export const portfolioData = {
  personal: {
    name: "PRITAM THOPATE",
    title: "COMPUTER ENGINEERING",
    year: "THIRD YEAR",
    taglines: [
      "ROBOTICS × MOBILE DEV × AI INTEGRATION",
      "WHERE HARDWARE MEETS SOFTWARE",
      "TURNING IDEAS INTO REALITY",
      "TURNING IDEAS INTO SCALABLE SYSTEMS",
      "BUILDING SOFTWARE THAT MATTERS",
      "FROM CONCEPT TO CODE"
    ],
    bio: "I build things that matter. From autonomous robots that competed on the global stage to cross-platform mobile apps, I turn complex problems into elegant solutions. Currently mastering the intersection of hardware, software, and AI.",
    email: "pritamthopate27@gmail.com",
    phone: "+91 9930806340",
    location: "NAVI MUMBAI, INDIA",
    github: "pritam-t",
    education: {
      degree: "B.E. Computer Engineering",
      institution: "Terna Engineering College, University of Mumbai",
      year: "2023 - 2027",
      cgpa: "8.2/10"
    }
  },

  githubStats: {
    username: "pritam-t",
    contributions: 847,
    stars: 124,
    repositories: 32,
    languages: [
      { name: "Java",       color: "#b07219" },
      { name: "Dart",       color: "#00B4AB" },
      { name: "Python",     color: "#3572A5" },
      { name: "C++",        color: "#f34b7d" },
      { name: "JavaScript", color: "#f1e05a" },
      { name: "Other",      color: "#858585" }
    ],
    recentActivity: [
      { type: "commit", repo: "ASTRA-Smart-Warehouse-Automation", message: "Add Bluetooth QR command parsing", date: "2 days ago" },
      { type: "commit", repo: "TrackStack",                       message: "Swipe-based UI improvements",       date: "5 days ago" },
      { type: "pr",     repo: "Robo-Hub",                        message: "Add project categorisation filters", date: "1 week ago" },
      { type: "commit", repo: "Multi_Calculator",                 message: "Integrate Hive local storage",      date: "1 week ago" }
    ],
    weeklyContributions: [12, 15, 8, 20, 18, 14, 22]
  },

  experiences: [
    {
      title: "SOFTWARE DEVELOPMENT INTERN – ROBOTICS & PROGRAMMING",
      company: "The Innovation Story",
      location: "Dadar Mumbai, India",
      duration: "JUNE 2024 – MAY 2025",
      description:
        "Developed software systems for autonomous robots used in the FIRST Tech Challenge (FTC). Implemented Java-based robot control logic, computer vision pipelines, and sensor integrations to enable autonomous navigation and task execution. Designed scalable robot software architecture to improve automation accuracy, reliability, and real-time performance during competition scenarios.",
      technologies: ["Java", "OpenCV", "Android Studio", "Autonomous Robotics", "FTC SDK"],
      achievements: [
        "Developed autonomous and tele-op robot control systems using Java and the FTC SDK",
        "Integrated sensors including IMU, encoders, and distance sensors for precise robot navigation",
        "Optimised robot control algorithms, improving execution efficiency during competition tasks by 30%",
        "Delivered technical mentorship sessions on robotics programming and system architecture",
        "Contributed to R&D and advanced software features used in award-winning FTC robot designs"
      ]
    },
    {
      title: "DBMS & MARKETING INTERN",
      company: "NE Worldwide",
      location: "Mumbai, India",
      duration: "MAY 2023 – SEP 2023",
      description:
        "Designed and managed relational database systems to support efficient data storage, retrieval, and analysis. Assisted in marketing initiatives by analysing business data and supporting data-driven decision-making. Collaborated with internal teams and maintained communication with clients to understand requirements and support project coordination.",
      technologies: ["MySQL", "Excel", "Data Analysis", "Marketing Support", "Database Management"],
      achievements: [
        "Designed and managed relational database structures for organised and efficient data handling",
        "Analysed business data using Excel to support marketing and operational decision-making",
        "Assisted in marketing initiatives through data reporting and campaign insights",
        "Managed client communication and relationships to gather requirements and support project coordination"
      ]
    }
  ],

  skills: [
    {
      category: "MOBILE & FRONTEND",
      items: [
        { name: "Flutter",      icon: "flutter-original",      color: "#54C5F8" },
        { name: "Dart",         icon: "dart-original",         color: "#00B4AB" },
        { name: "Kotlin", icon: "kotlin-original", color: "#7F52FF" },
        { name: "HTML5",        icon: "html5-original",        color: "#E34F26" },
        { name: "CSS3",         icon: "css3-original",         color: "#1572B6" },
        { name: "JavaScript",   icon: "javascript-original",   color: "#F7DF1E" }
      ]
    },
    {
      category: "BACKEND & DATABASES",
      items: [
        { name: "Java",         icon: "java-original",         color: "#007396" },
        { name: "Spring Boot",  icon: "spring-original",       color: "#6DB33F" },
        { name: "Python",       icon: "python-original",       color: "#3776AB" },
        { name: "MySQL",        icon: "mysql-original",        color: "#4479A1" },
        { name: "MongoDB",      icon: "mongodb-original",      color: "#47A248" },
        { name: "PostgreSQL", icon: "postgresql-original", color: "#336791" },
        { name: "Firebase",     icon: "firebase-original",     color: "#FFCA28" },
        { name: "Supabase",     icon: "supabase-original",     color: "#3ECF8E" }
      ]
    },

    {
      category: "AI & AGENTS",
      items: [
        { name: "Python", icon: "python-original", color: "#3776AB" },
        { name: "HuggingFace", iconUrl: "/assets/icons/huggingface.png", color: "#FFD21E" },
        { name: "Ollama", iconUrl: "/assets/icons/ollama.png", color: "#0EA5E9" },
        { name: "Qdrant", iconUrl: "/assets/icons/qdrant.png", color: "#FF4F8B" },
        { name: "Vector DBs", icon: "mongodb-original", color: "#47A248" }
      ]
    },

    
    {
      category: "ROBOTICS & IOT",
      items: [
          { name: "Arduino",      icon: "arduino-original",      color: "#00979D" },
          { name: "Raspberry Pi", icon: "raspberrypi-original", color: "#C51A4A" },
          { name: "ESP-32",       icon: "embeddedc-original",    color: "#E7352C" },
          { name: "C++",          icon: "cplusplus-original",    color: "#00599C" },
          { name: "SolidWorks",   icon: "blender-original",   color: "#FF0000" },
          { name: "OpenCV",       icon: "opencv-original",       color: "#5C3EE8" }
      ]
    },
    {
      category: "TOOLS & DEVOPS",
      items: [
        { name: "Git",          icon: "git-original",          color: "#F05032" },
        { name: "GitHub",      iconUrl: "/assets/icons/github.png",       color: "#181717" },
        { name: "Docker",   icon: "docker-original", color: "#2496ED" },
        { name: "VS Code",      icon: "vscode-original",       color: "#007ACC" },
        { name: "Postman",      icon: "postman-original",      color: "#FF6C37" },
        { name: "Android SDK",  icon: "android-original",      color: "#3DDC84" },
        { name: "Linux", icon: "linux-original", color: "#FCC624" }
      ]
    }
  ],

  projects: [
    {
      title: "AROGYA+ – AI-Powered Healthcare Assistant",
      description:
        "AI-powered healthcare assistant and medicine scanning application that analyzes products, provides health insights, and manages medications through an intuitive mobile interface.",

      fullDescription:
        "Arogya Plus is a healthcare-focused mobile application designed to help users make safer and more informed decisions about medicines and health products. The system allows users to scan products, view simplified ingredient explanations, receive health warnings, and manage medications and appointments. The app integrates AI-powered insights and a structured health profile system while storing user data locally using SQLite for reliable offline access.",

      technologies: [
        "Flutter",
        "Dart",
        "SQLite",
        "Provider",
        "REST APIs"
      ],

      category: "MOBILE",

      logo: "/assets/logo/mediscan.png",

      github: "https://github.com/pritam-t/Arogya_Plus",

      live: null,

      features: [
        "Product scanning for medicine and health item analysis",
        "AI-powered health assistant for simplified explanations",
        "Personal health profile and suitability logic",
        "Medication and appointment management system",
        "Local database storage using SQLite",
        "Clean and responsive Flutter UI for mobile devices"
      ]
},
        {
        title: "ASTRA – Smart Warehouse Automation",

        description:
          "Autonomous warehouse robot system that sorts packages based on QR-code delivery information using a Flutter companion app and Arduino-powered navigation.",

        fullDescription:
          "ASTRA (Automated Smart Tracking & Robotics for Warehousing) is a smart warehouse automation system designed to streamline package sorting and reduce manual logistics work. A Flutter mobile application scans QR codes on packages to extract delivery information such as city and pincode. The data is transmitted to an Arduino-based autonomous robot via Bluetooth (HC-05). The robot navigates warehouse paths using a 5-way IR sensor array and picks or places items using an MG996R servo gripper. Product classification and sorting logic were implemented using Python and OpenCV, enabling efficient routing of items to their designated warehouse zones.",

        technologies: [
          "Flutter",
          "Dart",
          "Arduino",
          "Python",
          "OpenCV",
          "Bluetooth (HC-05)",
          "SolidWorks"
        ],

        category: "ROBOTICS",

        logo: "/assets/logo/astra.png",

        github: "https://github.com/pritam-t/ASTRA-The-Smart-Warehouse-Automation.git",

        live: "https://www.linkedin.com/posts/pritam-thopate_flutter-dart-arduino-activity-7327950791837667329-4Hr7",

        features: [
          "QR code scanning to extract delivery city and pincode",
          "Flutter mobile app for product scanning and robot communication",
          "Autonomous robot navigation using a 5-way IR sensor array",
          "Servo-based robotic gripper for package handling",
          "Bluetooth communication via HC-05 module",
          "Computer vision product classification using Python and OpenCV",
          "Smart sorting of packages to designated warehouse zones"
        ]
      },

{
        title: "OVERLAYS_PS – AR Virtual Try-On Lens",

        description:
          "Augmented reality Snapchat Lens enabling real-time virtual clothing try-on using body tracking and 3D garment overlays.",

        fullDescription:
          "OVERLAYS_PS is an augmented reality Snapchat Lens developed using Snap Lens Studio that allows users to virtually try on clothing in real time. The system uses body tracking and computer vision techniques to accurately overlay animated 3D garments onto the user’s body. Custom JavaScript scripting was implemented for gesture interactions and smooth garment alignment. The project was built for the Snap AR Lens Hackathon and secured 2nd place nationally. The solution aims to address online shopping return rates by allowing users to preview clothing before purchase.",

        technologies: [
          "Snap Lens Studio",
          "JavaScript",
          "Computer Vision",
          "Augmented Reality"
        ],

        category: "AR/VR",

        logo: "/assets/logo/overlays.jpg",

        github: null,

        live: "https://www.snapchat.com/lens/ff4d3b97297a4667b634aaa5314a5b9e?share_id=8jW2_BNf_I0&locale=en-IN",

        features: [
          "Real-time virtual clothing try-on using body tracking",
          "3D garment overlay with animated fitting",
          "Gesture-based interactions using Lens Studio scripting",
          "Optimised AR experience for smooth mobile performance",
          "2nd Place – Snap AR Lens Hackathon"
        ]
      },

      {
        title: "Aegis – Smart Helmet Violation Detection System",

        description:
          "AI-powered computer vision system that detects helmet violations in real time and automatically extracts vehicle number plates.",

        fullDescription:
          "Aegis is an AI-based traffic monitoring system designed to detect motorcycle helmet violations using real-time computer vision. The system uses a custom-trained YOLO object detection model to identify riders, helmets, helmet violations, and number plates from live video streams. When a rider is detected without a helmet, the system automatically isolates the number plate region, applies image preprocessing techniques such as grayscale conversion, thresholding, and noise reduction, and extracts the vehicle registration number using OCR. The extracted violation data is then stored in a Supabase backend for monitoring and record keeping. The project demonstrates a scalable smart traffic enforcement solution that can assist authorities in automated rule enforcement and road safety improvement.",

        technologies: [
          "Python",
          "YOLOv8",
          "OpenCV",
          "Tesseract OCR",
          "Supabase",
          "Computer Vision",
          "Machine Learning"
        ],

        category: "Artificial Intelligence, BACKEND",

        logo: "/assets/logo/aegis.png",

        github: null,

        live: null,

        features: [
          "Real-time helmet violation detection using YOLO object detection",
          "Automatic rider, helmet, helmet-off, and number plate detection",
          "Number plate extraction and OCR recognition pipeline",
          "Image preprocessing to improve OCR accuracy",
          "Automated violation logging to Supabase backend",
          "Designed for real-time smart traffic monitoring systems"
        ]
      },
          {
      title: "TRACKSTACK",
      description:
        "Cross-platform habit and task tracking app with dynamic progress visualisation and real-time statistics. Implemented swipe-based UI for enhanced user engagement.",
      fullDescription:
        "TrackStack is a productivity mobile app built with Flutter. Users can track daily habits, manage tasks with swipe gestures, and view animated progress statistics. Persistent data is handled via SharedPreferences for a smooth offline-first experience.",
      technologies: ["Flutter", "Dart", "SharedPreferences", "Android SDK"],
      category: "MOBILE",
      logo: "/assets/logo/trackstack.png",
      github: "https://github.com/pritam-t/TrackStack",
      live: null,
      features: [
        "Habit and task tracking",
        "Dynamic progress visualisation",
        "Swipe-based gesture UI",
        "Real-time statistics dashboard",
        "Offline-first with local persistence"
      ]
    },

    {
      title: "ROBOHUB",
      description:
        "Interactive web platform for sharing robotics projects with code previews, schematics, and video demonstrations. Features collaborative discussions and project categorisation.",
      fullDescription:
        "RoboHub is a community platform for robotics enthusiasts to share, explore, and discuss projects. Built with vanilla HTML, CSS, and JavaScript, it supports code snippet previews, schematic uploads, and categorised browsing.",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "FULLSTACK",
      logo: "/assets/logo/robohub.png",
      github: "https://github.com/pritam-t/Robo-Hub",
      live: null,
      features: [
        "Project sharing with code previews",
        "Schematic and video support",
        "Collaborative discussion threads",
        "Project categorisation and search"
      ]
    },
    {
      title: "MULTI CALCULATOR",
      description:
        "Versatile Flutter-based calculator with multiple operational modes including scientific functions and unit conversions. Features intuitive UI with encrypted local storage.",
      fullDescription:
        "Multi Calculator is a Flutter app offering standard, scientific, and unit-conversion modes. It uses Hive for local data persistence and the Encrypt package for securing stored history — all wrapped in a clean, gesture-friendly interface.",
      technologies: ["Flutter", "Dart 3", "Hive", "Encrypt", "Android SDK"],
      category: "MOBILE",
      logo: "/assets/logo/multicalc.png",
      github: "https://github.com/pritam-t/Multi_Calculator",
      live: null,
      features: [
        "Standard, scientific, and unit-conversion modes",
        "Encrypted local history with Hive",
        "Clean gesture-friendly UI",
        "Offline-first architecture"
      ]
    },
    {
      title: "FTC COMPETITION ROBOT",
      description:
        "Award-winning autonomous robot for the FIRST Tech Challenge with Java-based control logic, PID tuning, sensor fusion, and OpenCV-based object detection.",
      fullDescription:
        "Developed the full software stack for multiple FTC competition robots, including autonomous routines using PID control, IMU-based navigation, encoder feedback, and OpenCV freight detection. Robot was the only one to complete all tasks flawlessly in the 2023 season.",
      technologies: ["Java", "FTC SDK", "OpenCV", "PID Control", "Sensor Fusion"],
      category: "ROBOTICS",
      logo: "/assets/logo/FTC_2021.jpg",
      github: null,
      live: null,
      features: [
        "Full autonomous and tele-op Java codebase",
        "PID-tuned motor and servo control",
        "OpenCV-based freight zone detection",
        "IMU, encoder, and distance sensor fusion",
        "Competed at FIRST Global 2022 – Gold Medal"
      ]
    }
  ],

  achievements: [
    {
      title: "FIRST GLOBAL CHALLENGE 2022 – GOLD MEDAL",
      organization: "FIRST Global",
      date: "OCT 2022",
      description:
        "Represented India at the FIRST Global international robotics olympiad and won the Gold Medal — the nation's highest placement at this event.",
      image: "/assets/images/FGC.jpg"
    },
    {
      title: "KJSIT-INTECH 2K24 – 1ST PRIZE",
      organization: "KJSIT, Mumbai",
      date: "2024",
      description:
        "Won 1st Prize for ASTRA – Smart Warehouse Automation system, improving sorting efficiency by 30% using autonomous robotics and Flutter.",
      image: "/assets/images/KJSIT.jpg"
      },
    {
      title: "SNAP AR LENS HACKATHON – 2ND PLACE",
      organization: "Snap Inc.",
      date: "2024",
      description:
  "Achieved 2nd Place nationally for OVERLAYS_PS, a real-time AR virtual clothing try-on Lens. The project enables users to visualize outfits instantly through augmented reality",
      image: "/assets/images/Snap_AR.jpg"
    },
    {
      title: "AMAZON FUTURE ENGINEER SUMMIT – 3RD PLACE",
      organization: "Amazon India, Taj Palace New Delhi",
      date: "2025",
      description:
        "Earned 3rd Place at Amazon's Careers of the Future Summit 2025 representing FTC Robot and STEMverse projects before Amazon's senior leadership.",
      image: "/assets/images/Edu_Summit.jpg"
    },
    {
      title: "FIRST TECH CHALLENGE 2023 – NATIONAL CHAMPION",
      organization: "FIRST Tech Challenge India",
      date: "2023",
      description:
        "Won the National Championship with the only robot that flawlessly completed all assigned tasks within the time constraints, achieved through five iterative prototype improvements.",
      image: "/assets/images/FTC_2021.jpg"
    },
    {
      title: "FIRST TECH CHALLENGE 2025 – DESIGN AWARD FINALIST",
      organization: "FIRST Tech Challenge India, Balewadi Stadium Pune",
      date: "2025",
      description:
        "Recognised as Finalist and 1st Runner-Up for Design Award as Programming Mentor for Team Educo #25222, guiding students to the National Finals.",
      image: "/assets/images/FTC_2025.jpg"
    }
  ],

  social: {
    github: "https://github.com/pritam-t",
    linkedin: "https://www.linkedin.com/in/pritam-thopate/",
    email: "pritamthopate27@gmail.com",
    phone: "tel:+919930806340"
  }
};