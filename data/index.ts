import { link } from "fs";

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I build modern, responsive apps while constantly learning and improving my skills. ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "./green2.jpg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I hold both Canadian and American citizenships",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I know this and more",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "./grid.svg",
      spareImg: "./b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building an AI cooking assistant website",
      description: "Whats next",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "./cook.svg",
      spareImg: "./grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [



{
      id: 1,
      title: "Marketio",
      des: "Marketio is an AI-powered growth platform that analyzes real-time TikTok trends and automatically generates high-performing UGC scripts, videos, and ad creatives for specific products and niches.",
      img: "./1768861813012.jpg",
      iconLists: ["./re.svg"],
      link: "https://github.com/faizansh123/Marketio",
    },
    {
      id: 2,
      title: "Farmlite",
      des: "Farmlite is an AI-powered smart farming platform that analyzes satellite data to help farmers make data-driven decisions on crop health, soil quality, and field optimization.",
      img: "./Screenshot 2025-11-09 004852.jpg",
      iconLists: ["./re.svg"],
      link: "https://github.com/faizansh123/Farmlite",
    },
    
    {
      id: 3,
      title: "MockMate",
      des: "MockMate is an AI-powered interview simulator that generates personalized voice-based interview questions, evaluates responses, and provides feedback using Vapi workflows, Deepgram voices, and Firestore integration.",
      img: "./mock.jpg",
      iconLists: ["./re.svg"], 
      link: "https://github.com/faizansh123/MockMate-AI-Interviewer",
    },
    {
      id: 4,
      title: "Summary-AI",
      des: "Summary-AI is a PDF summarizer that uses Google GenAI to extract, condense, and present key insights from complex documents through a clean, user-friendly web app.",
      img: "./summary.jpg",
      iconLists: ["./re.svg"],
      link: "https://github.com/faizansh123/Summary-AI",
    },
    {
      id: 5,
      title: "NBA ML Predictor",
      des: "NBA ML predictor ot predict future nba games based on data from 2016-2022 nba seasons",
      img: "./nba.webp",
      iconLists: ["./p.svg"], 
      link: "https://github.com/faizansh123/NBA-ML-predictor",
    },
    
    
    
    
    
  ];
  
  export const testimonials = [
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
    id: 1,
    title: "Mobile App Development Intern - CAYOP", 
    desc: "Developed and launched a cross-platform Bubble.io mobile app for 1,000+ users; built authentication, profiles, and Agile-driven features to expand accessibility.", 
    className: "md:col-span-2",
    thumbnail: "./e6.svg",
},
    {
      id: 2,
      title: "Software Developer - Reality AI Lab", 
      desc: "Contributed to Marvel AI and Sky AI projects; built responsive, accessible frontends using React, Next.js, and Tailwind CSS.",
      className: "md:col-span-2",
      thumbnail: "./e1.svg",
    },
    {
      id: 3,
      title: "Website & SEO Dev Intern - Sports Media Inc",
      desc: "Developed and maintained websites with HTML, CSS, JavaScript, and Next.js, optimizing for SEO and performance.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "./e2.svg",
    },
    {
      id: 4,
      title: " AI Trainer - Outlier",
      desc: "Reviewed AI-generated code, optimized logic, and wrote summaries to ensure accurate, scalable solutions using test-driven development.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "./e3.svg",
    },
    {
      id: 5,
      title: "Summer Camp Counselor - UTM",
      desc: "Led interactive group activities and promoted a positive, supportive environment while resolving camper conflicts.",
      className: "md:col-span-2",
      thumbnail: "./e4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "./git.svg",
      link: "https://github.com/faizansh123",
    },
    {
      id: 2,
      img: "./twit.svg",
      link: "",
    },
    {
      id: 3,
      img: "./link.svg",
      link: "https://www.linkedin.com/in/faizan-shaik-142675336/",
    },
  ];