// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import netlifyLogo from './assets/tech_logo/netlify.png';




// Experience Section 
import zidioLogo from './assets/company_logo/zidio-development-original.webp';
import internshala from './assets/company_logo/internshala.png';




// Project Section Logo's
import CourseSelling from './assets/work_logo/CourseSelling.png';
import DoctorAppointment from './assets/work_logo/DoctorAppointment.png';
import Newspaper from './assets/work_logo/NewspaperAPI.png';
import ContactManager from './assets/work_logo/ContactManager.png';



// Education Section Logo's
import school from './assets/education_logo/school.jpeg';
import college from './assets/education_logo/College.jpeg';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];






export const experiences = [
    {
        id: 0,
        img: zidioLogo, 
        role: "Web Development Intern",
        company: "Zidio Development",
        date: "June 2025 - August 2025",
        desc: "Completed a 2-month internship focused on building and improving web applications using the MERN stack. Worked on both frontend and backend development, implemented RESTful APIs, integrated MongoDB databases, and contributed to responsive UI components. Gained real-world experience in debugging, performance optimization, and collaborative development workflows.",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "React JS",
            "Node JS",
            "Express JS",
            "MongoDB",
            "Git",
            "Tailwind CSS",
        ],
    },

    {
        id: 1,
        img: internshala,
        role: "Web Development Trainee",
        company: "Internshala Trainings",
        date: "June 2024 - August 2024",
        desc: "Completed an 8-week certified Web Development training covering HTML, CSS, Bootstrap, DBMS, PHP, JavaScript, React, and AI in Web Development. Built multiple hands-on projects and strengthened core web development skills, gaining practical experience with both frontend and backend fundamentals.",
        skills: [
            "HTML",
            "CSS",
            "Bootstrap",
            "JavaScript",
            "PHP",
            "DBMS",
            "React JS",
            "Git",
        ],
    },

];






export const projects = [
  {
    id: 0,
    title: "Course Selling Platform",
    description:
      "A full-featured MERN stack application designed for seamless course management, purchase, and delivery. The platform allows users to browse, purchase, and access courses securely using Stripe payment integration. It includes a powerful admin panel for managing courses, users, payments, and content. Built with modern UI/UX, JWT authentication, and secure API architecture, the application ensures a smooth and efficient learning experience for both students and administrators.",
    image: CourseSelling,
    tags: ["React JS", "Node JS", "Express JS", "MongoDB", "Stripe", "JWT", "Tailwind CSS"],
    github: "https://github.com/AnkitAdhikari07/CourseVerse",
    webapp: "https://your-courses-platform.netlify.app/",
  },
  {
    id: 2,
    title: "Doctor Appointment Booking App",
    description:
      "A modern and efficient MERN stack application that enables users to seamlessly browse doctors, view their specialties, and book appointments in real-time. The platform supports secure user authentication, doctor management, appointment scheduling, and automated booking status updates. With a clean UI and well-structured backend APIs, the app provides a smooth experience for patients while offering doctors a dedicated panel to manage their availability, appointments, and profiles.",
    image: DoctorAppointment,
    tags: ["React JS", "Node JS", "Express JS", "MongoDB", "JWT", "Tailwind CSS", "API"],
    github: "https://github.com/yourusername/doctor-appointment-app",
    webapp: "https://course-verse-zeta.vercel.app/",
  },
  {
    id: 3,
    title: "Daily News Fetcher",
    description:
      "A clean and lightweight web application built using HTML, CSS, and JavaScript that fetches real-time news from a public API. Users can browse the latest headlines, search for specific topics, and explore news across various categories like technology, sports, business, and entertainment. The project focuses on API handling, responsive UI design, and delivering an intuitive reading experience.",
    image: Newspaper,
    tags: ["HTML", "CSS", "JavaScript", "API"],
    github: "https://github.com/yourusername/news-api-app",
    webapp: "https://your-news-app.netlify.app/",
  },
  {
    id: 4,
    title: "Contact Manager API",
    description:
      "A backend-only RESTful API built using Node.js and Express for managing user contacts efficiently. The system supports full CRUD operations, allowing users to create, update, delete, and retrieve contacts. It includes secure user authentication using JWT, structured routing, and MongoDB integration for reliable data storage. Designed for scalability and clean API architecture, it serves as a solid base for any contact management application.",
    image: ContactManager,
    tags: ["Node JS", "Express JS", "MongoDB", "JWT", "REST API"],
    github: "https://github.com/yourusername/contact-manager-api",
    webapp: "N/A",
  },
];  





export const education = [
  {
    id: 0,
    img: college,
    school: "Jaipur Engineering College and Research Centre",
    date: "2022 – Present",
    grade: "85.2%",
    desc: "I am currently pursuing a Bachelor of Technology (B.Tech) in Artificial Intelligence and Data Science. Through this program, I am gaining strong knowledge in machine learning, data analysis, programming, and modern AI techniques. My coursework and projects are helping me develop problem-solving skills and practical experience to build intelligent, data-driven applications.",
    degree: "Bachelor of Technology – Artificial Intelligence and Data Science",
  },
  {
    id: 1,
    img: school,
    school: "S.T. Joseph Convent School",
    date: "2021-2022",
    grade: "First Division",
    desc: "I have successfully completed my Class 12 education from S.T. Joseph Convent School. During this period, I strengthened my understanding of core academic subjects and developed analytical thinking and problem-solving skills. My higher secondary education played an important role in preparing me for college-level studies and future professional growth.",
    degree: "Higher Secondary Education – Class 12",
  },
  {
    id: 2,
    img: school,
    school: "S.T. Joseph Convent School",
    date: "2019-2020",
    grade: "First Division",
    desc: "I have successfully completed my Class 10 education from S.T. Joseph Convent School. During my schooling, I developed a strong academic foundation and essential learning skills. This phase of my education helped me build discipline, consistency, and an interest in core subjects, which later supported my growth in higher studies.",
    degree: "Secondary School Education – Class 10",
  },
];