import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { FaNodeJs, FaDatabase, FaPython, FaBrain } from "react-icons/fa";
import { DiReact } from "react-icons/di";

const personalDetails = [
  {
    label: "Name",
    value: "Siddhant Rai",
  },
  {
    label: "Age",
    value: "22",
  },
  {
    label: "Address",
    value: "Kathmandu,Nepal",
  },
  {
    label: "Email",
    value: "raiprachu1@gmail.com",
  },
  {
    label: "Contact No",
    value: "+977-9840875195",
  },
];

const jobSummary = `
Hi there! I'm a Full Stack Developer & ML/AI developer with a passion for Back-End Development and Data Science.

Here’s a quick peek at some of the projects I’ve worked on:
- 🚖 Uber Clone (MERN): A fully functional ride-hailing app with OpenStreetMap and Leaflet.js integration.

- ⚽ FlashKick: Automatic highlight generation with 3D CNNs, text analysis, Faster RCNN, and MediaPipe Pose.
- ♟️ Chess: Real-time backend game logic.
- 🛵 Wiselywheel: Smart two-wheeler comparisons.
- 🎬 Movie Recommender: Content-based filtering for personalized movie picks.
- 📚 Book Recommender: Collaborative filtering to suggest great reads.

I love combining design, data, and logic to build impactful, user-friendly solutions that make technology truly accessible.
`;


const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(-900px)" }}
            end={{ transform: "translateX(0px)" }}
          >
            
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(500px)" }}
            end={{ transform: "translateX(0px)" }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(600px)" }}
            end={{ transform: "translateX(0px)" }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaNodeJs size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiReact size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <FaPython size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <FaBrain size={60} color="var(--yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
