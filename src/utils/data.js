import {
  HiOutlineDesktopComputer,
  HiOutlineServer,
  HiOutlineCloud,
  HiOutlineShoppingCart,
  HiOutlineSparkles,
} from "react-icons/hi";

// Expertise areas shown in the "Services" section, aligned with the CV.
export const projectExperience = [
  {
    name: "Frontend Development",
    stack: "React · Next.js · Vue.js · TypeScript",
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Backend & APIs",
    stack: "Node.js · Nest.js · Spring Boot · Django",
    icon: HiOutlineServer,
    bg: "#F26440",
  },
  {
    name: "Cloud & DevOps",
    stack: "AWS · Docker · CI/CD",
    icon: HiOutlineCloud,
    bg: "#EEC048",
  },
  {
    name: "E-commerce Integrations",
    stack: "Amazon SP-API & Ads-API · Shopify",
    icon: HiOutlineShoppingCart,
    bg: "#5348ee",
  },
  {
    name: "AI Integration",
    stack: "Claude · Cursor · RAG",
    icon: HiOutlineSparkles,
    bg: "#2A9D8F",
  },
];

export const WhatDoIHelp = [
  "I'm a full stack developer with 5+ years of hands-on experience building high-performance, scalable web applications with React, Next.js, Vue, Node.js, Nest.js, Java/Spring Boot, Python and AWS.",
  "I specialize in API architecture, cloud deployments and modern frontend development, with proven experience in AI integration (Claude, Cursor, RAG), Chrome extension development and data-driven systems.",
];

// Most recent first (by end date).
export const workExp = [
  {
    place: "Turner Publishing",
    tenure: "Jan 2025 - Present",
    role: "Senior Full Stack Developer",
    detail:
      "Developed responsive frontend interfaces with Next.js, React and TypeScript to improve content management and user workflows. Built and maintained scalable Node.js backend APIs for secure, efficient data handling, and deployed and managed applications on AWS for high availability, performance and scalability. Collaborated with cross-functional teams to deliver reliable, data-driven publishing solutions.",
  },
  {
    place: "Lucy",
    tenure: "May 2023 - Dec 2024",
    role: "Senior Software Engineer",
    detail:
      "Built backend services in Python/Django to monitor and auto-correct Amazon product listings, with responsive Vue.js and Next.js dashboards for real-time alerts and manual workflows. Integrated APIs with Amazon Seller Central for reliable data synchronization, and optimized system performance and scalability for high-volume e-commerce operations.",
  },
  {
    place: "Icer Brands",
    tenure: "Dec 2023 - Nov 2024",
    role: "Shopify (JavaScript)",
    detail:
      "Integrated Shopify for multi-store order retrieval, storing daily orders as CSV files in Amazon S3, and enabling downloads via the frontend. Used MongoDB with cron jobs to sync records and maintain sales statistics.",
  },
  {
    place: "MV-Essentials",
    tenure: "Feb 2024 - Jul 2024",
    role: "AMZ SP-API (JavaScript)",
    detail:
      "Created a web application with a React.js frontend and Node.js backend, integrating Amazon SP-API and S3 for data management, while automating daily order retrieval and metrics tracking with cron jobs.",
  },
  {
    place: "Infinitive Labs Ltd",
    tenure: "Jan 2022 - Apr 2023",
    role: "Software Engineer",
    detail:
      "Developed React and Next.js frontends integrated with Java/Spring Boot microservices (Spring Data JPA, Hibernate, Spring Security) through RESTful APIs. Implemented JWT-based authentication and role-based authorization, designed PostgreSQL and MongoDB databases, wrote unit and integration tests with JUnit and Mockito using Maven, and deployed containerized applications on AWS with Docker.",
  },
  {
    place: "GovTech",
    tenure: "May 2020 - Dec 2021",
    role: "Software Developer",
    detail:
      "Built end-to-end features on the MERN stack, translating complex requirements into intuitive UI/UX flows for data-heavy web applications. Designed and implemented secure RESTful APIs with MySQL and Redis for efficient data storage and caching, and enhanced performance and user experience through continuous iteration and stakeholder collaboration.",
  },
];

export const comments = [
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people2.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people1.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people2.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people1.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people2.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people1.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people2.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people1.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people2.png",
  },
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
