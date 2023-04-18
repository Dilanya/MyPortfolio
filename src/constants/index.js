import { ai, logo } from "../assets";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    carrent,
    jobit,
    tripguide,
    threejs,
    postman,
    Hackerrank,
    dl,
    opencv,
    comptia,
    chess,
    hotel
    
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "AI/ML Enthusiast",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  
  

  const education = [
    {
      title: "University of Sri Jayewardenepura, Sri Lanka",
      description:
        "Bachelor of Science in Information and Com.Technology (UG)",
      date: "2020 - Present",
      
    },
    {
      title: "Esoft Metro Campus",
      description:
        "Diploma in English",
      date: "2019 -  2020",
      
    },
    {
      title: "Sanghabodhi College, Nittambuwa",
      description:
        "Upto GCE A/L - 2018", 
        
    },
    
  ];

  const certificates = [
    {
      name: "Postman Student Expert",
      image: postman,
      link: "https://badgr.com/public/assertions/6yZ2-tgAR3-cyCNo-83otA",
    },
    {
      name: "AI/ML Engineer",
      image: ai,
      link: "https://code.sliit.org/certificates/jmdv3fpmuv",
    },
    {
      name: "Python(Basic) Certificate",
      image: Hackerrank,
      link: "https://www.hackerrank.com/certificates/9ccd3bf01800",
    },
    {
      name: "Introduction to TensorFlow ",
      image: dl,
      link: "https://coursera.org/share/194788f686cfe02a6b61a5ca9e56d28c",
    },
    {
      name: "Introduction to Deep Learning",
      image: opencv,
      link: "https://www.linkedin.com/learning/certificates/718f12b753a89cbbedea41876a4c0ca8b88c1d5420f05da2bc7bc2a3764e621e",
    },
    {
      name: "Mobile Networking         ",
      image:comptia,
      link: "https://www.linkedin.com/learning/certificates/e46aabab5fe1836bb9fff370b909299d121a34214e3a80f000dd32c2df904f59",
    },
    
    

  ]
  
  const projects = [
    {
      name: "Chess Pieces Detection",
      description:
        "This is an object detection model that built for Chess Pieces Detection. for this project I captured 150 images and then annotated them using Roboflow.",
      tags: [
        {
          name: "object-detection",
          color: "blue-text-gradient",
        },
        {
          name: "YoloV8",
          color: "green-text-gradient",
        },
        {
          name: "ML",
          color: "pink-text-gradient",
        },
      ],
      image: chess,
      source_code_link: "https://github.com/Dilanya/Chess-Pieces-Detection",
    },
    {
      name: "Hotel Website",
      description:
        "Web-based platform that allows users to search, book, and manage reservations in the hotel, MERN stack used for the development",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: hotel,
      source_code_link: "https://github.com/",
    },
    {
      name: "Healthcare Mobile App",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies,  projects, education, certificates };