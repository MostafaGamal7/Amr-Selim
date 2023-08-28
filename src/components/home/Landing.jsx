
// import me from "../../assets/images/me.jpg"
// import me from "../../assets/images/me2.png"
import background from "../../assets/images/background-me.png"
import myPhoto from "../../assets/images/only-me2.png"
import { ReactComponent as Wave } from "../../assets/images/waving.svg"
import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faBehance, faDribbble, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer";

const Landing = () => {
    const [ref, inView] = useInView({
        triggerOnce: true, // Animation triggers only once when the element becomes visible
        threshold: 0.01, // Percentage of the element's visibility required to trigger the animation
    });

    useEffect(() => {
        const bubbles = document.querySelectorAll('.bubble');
        let currentIndex = 0;

        const animateBubbles = () => {
            bubbles[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % bubbles.length;
            bubbles[currentIndex].classList.add('active');
        };

        animateBubbles(); // Initialize the animation

        const intervalId = setInterval(animateBubbles, 2000); // Change every 2 seconds

        return () => {
            clearInterval(intervalId);
        };
    }, []);
    return (
        <>
            <section id="home" className="landing">
                <div className="container">
                    <div className="info">
                        <div className="info-text">
                            <motion.h3 ref={ref} initial={{ opacity: 0, y: -100 }}
                                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -100 }}
                                transition={{ duration: 0.7 }} >Hi <Wave className="wave" />, I am</motion.h3>
                            <motion.h1 ref={ref} initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
                                transition={{ duration: 0.7 }}>Amr Selim</motion.h1>
                            {/* <p>
                                Graphic Designer with innovative ideas and a unique approach to visuals. More than seven years of experience developing designs for print media ,video, and advertising.
                            </p> */}
                            <div className="bubble-wrapper">
                                <span className="bubble active">Designer</span>
                                <span className="bubble">Retoucher</span>
                                <span className="bubble">Visualizer</span>
                                <span className="bubble">Creative Person</span>
                            </div>

                            <motion.span className="follow" ref={ref} initial={{ opacity: 0 }}
                                animate={{ opacity: inView ? 1 : 0 }}
                                transition={{ duration: 0.7 }}>Follow me on:</motion.span>
                            <ul className="social-media">
                                <motion.a href="https://www.facebook.com/amrselim500/" target='_blank'><FontAwesomeIcon icon={faFacebook} initial={{ opacity: 0 }}
                                    animate={{ opacity: inView ? 1 : 0 }}
                                    transition={{ duration: 0.7 }} /></motion.a>
                                <motion.a href="https://www.behance.net/amrselim-1" target='_blank'><FontAwesomeIcon icon={faBehance} initial={{ opacity: 0, y: 100 }}
                                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
                                    transition={{ duration: 0.7 }} /></motion.a>
                                <motion.a href="https://www.linkedin.com/in/amr-selim-811041210/" target='_blank'><FontAwesomeIcon icon={faLinkedin} initial={{ opacity: 0, y: 100 }}
                                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
                                    transition={{ duration: 0.7 }} /></motion.a>
                                <motion.a href="https://www.instagram.com/amr_selim0/" target='_blank'><FontAwesomeIcon icon={faInstagram} initial={{ opacity: 0, y: 100 }}
                                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
                                    transition={{ duration: 0.7 }} /></motion.a>
                                <motion.a href="https://dribbble.com/amrselim22" target='_blank'><FontAwesomeIcon icon={faDribbble} initial={{ opacity: 0, y: 100 }}
                                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
                                    transition={{ duration: 0.7 }} /></motion.a>
                            </ul>
                        </div>
                        {/* <div className="my-photo"> */}
                        <div className="imgs-container">
                            <motion.img loading="eager" src={background} className="my-background" alt="Background image" ref={ref} initial={{ opacity: 0 }}
                                animate={{ opacity: inView ? 1 : 0 }}
                                transition={{ duration: 1 }} />
                            <motion.img loading="eager" src={myPhoto} className="my-photo" alt="My Photo" ref={ref} initial={{ y: 100 }}
                                animate={{ y: inView ? 0 : 100 }}
                                transition={{ duration: 1.2 }} />
                        </div>
                        {/* </div> */}
                        {/* <Me /> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Landing
