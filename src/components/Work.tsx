import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import exclusive from "../assets/exclusive.png"
import resume from '../assets/resume.png'
import osumare from '../assets/osumare.png'
import uber from '../assets/uber.png'
gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Exclusive",
    subtitle: "E-commerce",
    tools: "React.js, Node.js, Express.js, MongoDB, Tailwind.css",
    image: exclusive,
    link: "http://exclusive-786.netlify.app",
  },
  {
    id: 2,
    title: "Resume Builder",
    subtitle: "Web App",
    tools: "React.js, Node.js, Express.js, MongoDB, Tailwind.css",
    image: resume,
    link: "https://resbuilder-beta.vercel.app/login",
  },
  {
    id: 3,
    title: "Real-Estate Landing Page",
    subtitle: "Personal Project",
     tools: "React.js, , tailwind.css",
      image: osumare,
       link: "fabulous-daffodil-9cf19d.netlify.app",

  },
  {
    id: 4,
    title: "Uber Clone",
    subtitle: "Ride Booking",
    tools: "React.js, Node.js, Express.js, MongoDB, Google Maps API",
    image: uber,
    link: "#", 
  },
  // Add more projects as needed
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding || "0") / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.subtitle}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <WorkImage image={project.image} alt={project.title} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
