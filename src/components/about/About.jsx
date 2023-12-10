import me from "../../assets/images/me.jpg";
import Skill from "./Skill.jsx";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import background from "../../assets/images/background-me2.png"

const About = () => {
  // const [ref, inView] = useInView({
  //     triggerOnce: true, // Animation triggers only once when the element becomes visible
  //     threshold: 0.01, // Percentage of the element's visibility required to trigger the animation
  // });
  const [refLogo, inViewLogo] = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

  const [refHeading, inViewHeading] = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });

  const [refInfo, inViewInfo] = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });

  const [refSkillsHeading, inViewSkillsHeading] = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });

  const [refSkillsInfo, inViewSkillsInfo] = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });
  const [refSkillOne, inViewSkillOne] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const [refSkillTwo, inViewSkillTwo] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const [refSkillThree, inViewSkillThree] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const [refSkillFour, inViewSkillFour] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const [refSkillFive, inViewSkillFive] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const [refSkillSix, inViewSkillSix] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <>
      {/* <AboutHeader /> */}
      <section id="about" className="about">
        {/* <img src={background} className="background-img" alt="Background" /> */}
        <div className="container">
          <div className="info">
            <motion.div
              className="my-logo"
              ref={refLogo}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: inViewLogo ? 1 : 0, y: inViewLogo ? 0 : 100 }}
              transition={{ duration: 0.7 }}
            >
              <img src={me} alt="Me" />
            </motion.div>
            <motion.h2
              className="about-heading main-heading"
              ref={refHeading}
              initial={{ opacity: 0, y: 100 }}
              animate={{
                opacity: inViewHeading ? 1 : 0,
                y: inViewHeading ? 0 : 100,
              }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              About Me
            </motion.h2>
            <motion.p
              className="about-info-text"
              ref={refInfo}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: inViewInfo ? 1 : 0, y: inViewInfo ? 0 : 100 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              Graphic Designer with innovative ideas and a unique approach to
              visuals. More than seven years of experience developing designs
              for print media ,video, and advertising. Solid understanding of
              marketing principles and advertising techniques. Great attention
              to detail and a talent for creating memorable visual designs.
              Passion for keeping clients satisfied with each project.
            </motion.p>
            <div id="skills">
              <motion.h2
                className="skills-heading main-heading"
                ref={refSkillsHeading}
                initial={{ opacity: 0, y: 100 }}
                animate={{
                  opacity: inViewSkillsHeading ? 1 : 0,
                  y: inViewSkillsHeading ? 0 : 100,
                }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                My skills
              </motion.h2>
              <motion.div
                className="skills"
                ref={refSkillsInfo}
                initial={{ opacity: 0, y: 100 }}
                animate={{
                  opacity: inViewSkillsInfo ? 1 : 0,
                  y: inViewSkillsInfo ? 0 : 100,
                }}
                transition={{ duration: 0.01 }}
              >
                <motion.div
                  className="skill"
                  ref={refSkillOne}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{
                    opacity: inViewSkillOne ? 1 : 0,
                    y: inViewSkillOne ? 0 : 100,
                  }}
                  transition={{ duration: 0.5, delay: 0.2, ease: "linear" }}
                >
                  <Skill
                    skillHeading={"Web Design"}
                    skillDesc={
                      "Amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
                    }
                  />
                </motion.div>

                <motion.div
                  className="skill"
                  ref={refSkillTwo}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{
                    opacity: inViewSkillTwo ? 1 : 0,
                    y: inViewSkillTwo ? 0 : 100,
                  }}
                  transition={{ duration: 0.5, delay: 0.4, ease: "linear" }}
                >
                  <Skill
                    skillHeading={"VALID HTML CODE"}
                    skillDesc={
                      "In ornare quam viverra orci sagittis eu volutpat. Ultricies tristique nulla aliquet enim tortor at auctor."
                    }
                  />
                </motion.div>
                <motion.div
                  className="skill"
                  ref={refSkillThree}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{
                    opacity: inViewSkillThree ? 1 : 0,
                    y: inViewSkillThree ? 0 : 100,
                  }}
                  transition={{ duration: 0.5, delay: 0.6, ease: "linear" }}
                >
                  <Skill
                    skillHeading={"HANDS DRAW"}
                    skillDesc={
                      "Amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
                    }
                  />
                </motion.div>
                <motion.div
                  className="skill"
                  ref={refSkillFour}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{
                    opacity: inViewSkillFour ? 1 : 0,
                    y: inViewSkillFour ? 0 : 100,
                  }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <Skill
                    skillHeading={"ILLUSTRATOR"}
                    skillDesc={
                      "Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Tincidunt ornare massa eget egestas purus viverra."
                    }
                  />
                </motion.div>

                <motion.div
                  className="skill"
                  ref={refSkillFive}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{
                    opacity: inViewSkillFive ? 1 : 0,
                    y: inViewSkillFive ? 0 : 100,
                  }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <Skill
                    skillHeading={"ADOBE AFTER EFFECTS"}
                    skillDesc={
                      "Netus et malesuada fames ac. Orci nulla pellentesque dignissim enim sit."
                    }
                  />
                </motion.div>
                <motion.div
                  className="skill"
                  ref={refSkillSix}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{
                    opacity: inViewSkillSix ? 1 : 0,
                    y: inViewSkillSix ? 0 : 100,
                  }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  <Skill
                    skillHeading={"PHOTOGRAPHY"}
                    skillDesc={
                      "Risus sed vulputate odio ut enim blandit volutpat maecenas volutpat."
                    }
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
