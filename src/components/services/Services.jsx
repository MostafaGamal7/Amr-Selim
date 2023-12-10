import React from 'react'
// import ServicesHeader from './ServicesHeader'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette, faBolt, faPhotoFilm } from '@fortawesome/free-solid-svg-icons'
// import { faFacebook, faBehance, faDribbble, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Service from './Service.jsx'
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer";

// const SkillAnimation = ({ ref, inView, delay, children }) => (
//     <motion.div className='service' ref={ref} initial={{ opacity: 0, y: 100 }}
//         animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
//         transition={{ duration: 0.5, delay: delay }}>
//         {children}
//     </motion.div>
// );

const Services = () => {

    const [refServiceHeading, inViewServiceHeading] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });
    // const [refServiceOne, inViewServiceOne] = useInView({
    //     triggerOnce: true,
    //     threshold: 0.3,
    // });
    // const [refServiceTwo, inViewServiceTwo] = useInView({
    //     triggerOnce: true,
    //     threshold: 0.3,
    // });
    // const [refServiceThree, inViewServiceThree] = useInView({
    //     triggerOnce: true,
    //     threshold: 0.3,
    // });
    // const [refServiceFour, inViewServiceFour] = useInView({
    //     triggerOnce: true,
    //     threshold: 0.3,
    // });
    // const [refServiceFive, inViewServiceFive] = useInView({
    //     triggerOnce: true,
    //     threshold: 0.3,
    // });
    // const [refServiceSix, inViewServiceSix] = useInView({
    //     triggerOnce: true,
    //     threshold: 0.3,
    // });


    return (
        <>
            {/* <ServicesHeader /> */}
            <section id="services" className="services">
                <motion.h2 className="serv-heading main-heading" ref={refServiceHeading} initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: inViewServiceHeading ? 1 : 0, y: inViewServiceHeading ? 0 : 100 }}
                    transition={{ duration: 0.7 }}>My services</motion.h2>
                <div className='container'>
                    {/* <SkillAnimation ref={refServiceOne} inView={inViewServiceOne} delay={0.2}>
                        <Service servIcn={faPalette} servHeading={"Graphic Deisgn"} servDesc={"Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Tincidunt ornare massa eget egestas purus viverra."} />
                    </SkillAnimation >
                    <SkillAnimation ref={refServiceTwo} inView={inViewServiceTwo} delay={0.4}>
                        <Service servIcn={faBolt} servHeading={"Photo Retoucher"} servDesc={"Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Tincidunt ornare massa eget egestas purus viverra."} />
                    </SkillAnimation>
                    <SkillAnimation ref={refServiceThree} inView={inViewServiceThree} delay={0.6}>
                        <Service servIcn={faPhotoFilm} servHeading={"Manipulation"} servDesc={"Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Tincidunt ornare massa eget egestas purus viverra."} />
                    </SkillAnimation>
                    <SkillAnimation ref={refServiceFour} inView={inViewServiceFour} delay={0.8}>
                        <Service servIcn={faPalette} servHeading={"Graphic Deisgn"} servDesc={"Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Tincidunt ornare massa eget egestas purus viverra."} />
                    </SkillAnimation>
                    <SkillAnimation ref={refServiceFive} inView={inViewServiceFive} delay={1}>
                        <Service servIcn={faBolt} servHeading={"Photo Retoucher"} servDesc={"Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Tincidunt ornare massa eget egestas purus viverra."} />
                    </SkillAnimation>
                    <SkillAnimation ref={refServiceSix} inView={inViewServiceSix} delay={1.2}>
                        <Service servIcn={faPhotoFilm} servHeading={"Manipulation"} servDesc={"Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Tincidunt ornare massa eget egestas purus viverra."} />
                    </SkillAnimation> */}
                    <ServiceWithAnimation
                        icon={faPalette}
                        heading="Graphic Design"
                        description="Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Tincidunt ornare massa eget egestas purus viverra."
                        delay={0.2}
                    />
                    <ServiceWithAnimation
                        icon={faBolt}
                        heading="Photo Retoucher"
                        description="Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Tincidunt ornare massa eget egestas purus viverra."
                        delay={0.4}
                    />
                    <ServiceWithAnimation
                        icon={faPhotoFilm}
                        heading="Manipulation"
                        description="Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Tincidunt ornare massa eget egestas purus viverra."
                        delay={0.6}
                    />
                    <ServiceWithAnimation
                        icon={faPalette}
                        heading="Graphic Design"
                        description="Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Tincidunt ornare massa eget egestas purus viverra."
                        delay={0.8}
                    />
                    <ServiceWithAnimation
                        icon={faBolt}
                        heading="Photo Retoucher"
                        description="Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Tincidunt ornare massa eget egestas purus viverra."
                        delay={1}
                    />
                    <ServiceWithAnimation
                        icon={faPhotoFilm}
                        heading="Manipulation"
                        description="Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Tincidunt ornare massa eget egestas purus viverra."
                        delay={1.2}
                    />
                </div>
            </section>
        </>
    )
}

const ServiceWithAnimation = ({ icon, heading, description, delay }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <motion.div
            className="service"
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
            transition={{ duration: 0.5, delay: delay }}
        >
            <Service servIcn={icon} servHeading={heading} servDesc={description} />
        </motion.div>
    );
};


export default Services

