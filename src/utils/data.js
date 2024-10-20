import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "Amazon (SP-API & Ads-API)",
    projects: 3,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Shopify",
    projects: 1,
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: "ShipStation",
    projects: 1,
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "I specialize in full stack development, creating scalable web applications and automating business processes. I am passionate about developing efficient solutions for e-commerce and delivering seamless user experiences across web platforms.",
];

export const workExp = [
  {
    place: "Icer Brands",
    tenure: "Dec 2023 - Present",
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
    place: "Turner Publishing",
    tenure: "Dec 2023 - Mar 2024",
    role: "AMZ SP-API & AMZ Ads-API (JavaScript)",
    detail:
      "Developed a web application featuring a React.js frontend and a Node.js backend, utilizing the Amazon Ads API for calculating sales rankings to help users identify their best-selling items. Employed cron jobs to automate order fetching and analyze key performance indicators.",
  },
  {
    place: "Hiral Custom",
    tenure: "Jan 2024 - April 2024",
    role: "ShipStation (Python)",
    detail:
      "Developed a custom art design platform in Python for client orders, utilizing Dagster for data orchestration. Integrated Amazon S3 for secure storage and ShipStation API for order management, while employing SQL for efficient data handling.",
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
