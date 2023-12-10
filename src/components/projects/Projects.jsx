import React from "react";
// import ProjectsHeader from './ProjectsHeader'
import {
  one,
  three,
  four,
  five,
  six,
  seven,
  eight,
} from "../../assets/images/ExportImages";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const [refProjectHeading, inViewProjectHeading] = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });
  const [refProjectInfo, inViewProjectInfo] = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });

  return (
    <>
      {/* <ProjectsHeader /> */}
      <section id="projects" className="container">
        <div className="text container">
          <motion.h1
            className="project-heading main-heading"
            ref={refProjectHeading}
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: inViewProjectHeading ? 1 : 0,
              y: inViewProjectHeading ? 0 : 100,
            }}
            transition={{ duration: 0.7 }}
          >
            My work
          </motion.h1>
          {/* <p className='project-desc'>I feel extremely proud of every project itself. These are the outcome of innumerable discussion, cooperation and caring for both significant decisions and subtle details.</p> */}
          <motion.p
            className="project-desc"
            ref={refProjectInfo}
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: inViewProjectInfo ? 1 : 0,
              y: inViewProjectInfo ? 0 : 100,
            }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            We've made significant progress with our project, so let's take a
            quick look at some of our achievements so far
          </motion.p>
        </div>
        <div className="projects">
          <ProjectWithAnimation
            src={four}
            description={"Project Description Here"}
            link={"https://www.behance.net/amrselim-1"}
            delay={0.2}
          ></ProjectWithAnimation>
          <ProjectWithAnimation
            src={eight}
            description={"Project Description Here"}
            link={"https://www.behance.net/amrselim-1"}
            delay={0.4}
          ></ProjectWithAnimation>
          <ProjectWithAnimation
            src={three}
            description={"Project Description Here"}
            link={"https://www.behance.net/amrselim-1"}
            delay={0.2}
          ></ProjectWithAnimation>
          <ProjectWithAnimation
            src={six}
            description={"Project Description Here"}
            link={"https://www.behance.net/amrselim-1"}
            delay={0.4}
          ></ProjectWithAnimation>
          <ProjectWithAnimation
            src={five}
            description={"Project Description Here"}
            link={"https://www.behance.net/amrselim-1"}
            delay={0.2}
          ></ProjectWithAnimation>
          <ProjectWithAnimation
            src={one}
            description={"Project Description Here"}
            link={"https://www.behance.net/amrselim-1"}
            delay={0.4}
          ></ProjectWithAnimation>
          <ProjectWithAnimation
            src={seven}
            description={"Project Description Here"}
            link={"https://www.behance.net/amrselim-1"}
            delay={0.2}
          ></ProjectWithAnimation>
          <ProjectWithAnimation
            src={six}
            description={"Project Description Here"}
            link={"https://www.behance.net/amrselim-1"}
            delay={0.4}
          ></ProjectWithAnimation>
          {/* <ProjectCard imgSrc={four} desc={"Project Description Here"} projectLink={"https://www.behance.net/amrselim-1"} />
                    <ProjectCard imgSrc={eight} desc={"Project Description Here"} projectLink={"https://www.behance.net/amrselim-1"} />
                    <ProjectCard imgSrc={three} desc={"Project Description Here"} projectLink={"https://www.behance.net/amrselim-1"} />
                    <ProjectCard imgSrc={six} desc={"Project Description Here"} projectLink={"https://www.behance.net/amrselim-1"} />
                    <ProjectCard imgSrc={five} desc={"Project Description Here"} projectLink={"https://www.behance.net/amrselim-1"} />
                    <ProjectCard imgSrc={one} desc={"Project Description Here"} projectLink={"https://www.behance.net/amrselim-1"} />
                    <ProjectCard imgSrc={seven} desc={"Project Description Here"} projectLink={"https://www.behance.net/amrselim-1"} />
                    <ProjectCard imgSrc={six} desc={"Project Description Here"} projectLink={"https://www.behance.net/amrselim-1"} /> */}
        </div>
      </section>
    </>
  );
};

const ProjectWithAnimation = ({ src, description, link, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.div
      className="project-card"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 1.5, delay: delay }}
    >
      <ProjectCard imgSrc={src} desc={description} projectLink={link} />
    </motion.div>
  );
};

export default Projects;
