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
      title: "Java Ping Pong Game",
      des: "A Java-based Ping Pong game using Swing and 2D graphics with real-time player vs AI gameplay, keyboard controls, and interactive UI components.",
      img: "./pp1.png",
      iconLists: ["./j.svg"],
      link: "https://github.com/faizansh123/Ping-Pong",
    },
    {
      id: 2,
      title: "Java Blackjack Game",
      des: "A Java-based Blackjack game featuring card logic, scoring, and user interaction through a Swing GUI with buttons, labels, and dialog boxes for gameplay control.",
      img: "./pp2.png",
      iconLists: ["./j.svg"],
      link: "https://github.com/faizansh123/BlackJack-Games",
    },
    {
      id: 3,
      title: "Python Study Planner",
      des: "A Python tool that lets students input subjects and study durations, checks against a 12-hour daily limit, and generates a time-formatted study plan saved to a text file.",
      img: "./pp3.webp",
      iconLists: ["/p.svg"],
      link: "https://github.com/faizansh123/TimeTable-Generator",
    },
    {
      id: 4,
      title: "Java Library System",
      des: "A Java OOP system to manage eBooks and hardcopy books, track member records, and handle borrowing, returning, and searching with polymorphism and ArrayList storage.",
      img: "./pp4.jpg",
      iconLists: ["./j.svg"],
      link: "https://github.com/faizansh123/Libary-Management-System",
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
      title: "Software Developer - Reality AI Lab", 
      desc: "Contributed to Marvel AI and Sky AI projects; built responsive, accessible frontends using React, Next.js, and Tailwind CSS.",
      className: "md:col-span-2",
      thumbnail: "./e1.svg",
    },
    {
      id: 2,
      title: "Website & SEO Dev Intern - Sports Media Inc",
      desc: "Developed and maintained websites with HTML, CSS, JavaScript, and Next.js, optimizing for SEO and performance.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "./e2.svg",
    },
    {
      id: 3,
      title: " AI Trainer - Outlier",
      desc: "Reviewed AI-generated code, optimized logic, and wrote summaries to ensure accurate, scalable solutions using test-driven development.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "./e3.svg",
    },
    {
      id: 4,
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