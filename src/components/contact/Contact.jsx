import { useEffect, useState } from 'react'
import { useForm, ValidationError } from '@formspree/react';
import ReCAPTCHA from "react-google-recaptcha";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt as location, faPhone, faEnvelope, faUser, faMessage } from '@fortawesome/free-solid-svg-icons'
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer";



const Projects = () => {
    let [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    // Light mode
    const [isLightMode, setIsLightMode] = useState(() => {
        // Retrieve mode from local storage or default to false (dark mode)
        const savedMode = localStorage.getItem('isLightMode');
        return savedMode ? JSON.parse(savedMode) : false;
    });

    const toggleLightMode = () => {
        setIsLightMode(prevState => {
            const updatedMode = !prevState;
            localStorage.setItem('isLightMode', JSON.stringify(updatedMode));
            return updatedMode;
        });
        document.body.classList.toggle("light-mode");
    };
    // const [ref, inView] = useInView({
    // triggerOnce: true,
    //     threshold: 0.01,
    // });

    // const [state, handleSubmit] = useForm("maygnbqq");
    // const [state, handleSubmit] = useForm("xqkvalqa");
    const [state, handleSubmit] = useForm("meqbebej");
    // const [state, handleSubmit] = useForm("xyyqzwna");
    // if (state.succeeded) {
    //     return <p className="paragraph">Thanks for joining!</p>;
    // }

    // Create a state variable to control showing/hiding the form
    const [showForm, setShowForm] = useState(true);

    // Function to handle "New" button click
    const handleNewMessage = () => {
        // Update the state directly to reset the "succeeded" property
        handleSubmit((prev) => ({ ...prev, succeeded: false }));
        // Reset the showForm state to true to show the form again
        setShowForm(true);
    };

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts

        // Disable scroll restoration on refresh
        const disableScrollRestoration = () => {
            if ('scrollRestoration' in window.history) {
                window.history.scrollRestoration = 'manual';
            }
        };

        disableScrollRestoration();

        return () => {
            // Enable scroll restoration when the component unmounts
            if ('scrollRestoration' in window.history) {
                window.history.scrollRestoration = 'auto';
            }
        };
    }, []);

    // Create a state variable to keep track of the reCAPTCHA response
    const [recaptchaValue, setRecaptchaValue] = useState("");

    // Function to handle the reCAPTCHA verification
    const handleRecaptchaChange = (value) => {
        setRecaptchaValue(value);
    };

    if (state.succeeded) {
        return (
            <>
                {/* <ContactHeader /> */}
                <section id='contact' className="sent-succes form container">
                    <motion.h3 className="heading" ref={ref} initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
                        transition={{ duration: 1 }} >Message Delivered Successfully!</motion.h3 >
                    <motion.p className="paragraph" ref={ref} initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
                        transition={{ duration: 1, delay: 0.5 }} >Thank you for reaching out! I greatly value your message and am committed to providing swift responses to all your inquiries. Rest assured, I will promptly review your message and send a heartfelt reply your way ❤️</motion.p>
                    <motion.div className='btns' ref={ref} initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
                        transition={{ duration: 1, delay: 1 }} >
                        <button className='main-btn new' onClick={handleNewMessage}>New</button>
                        <a href="#home" className='main-btn home'>Home</a>
                    </motion.div>
                </section>
            </>
        )
    }

    return (
        <>
            {/* <Contact isLightMode={isLightMode} /> */}
            {/* <ContactHeader /> */}
            <motion.section id='contact' className="contact" ref={ref} initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
                transition={{ duration: 1 }} >
                <div className="container">
                    <div className="contact-info">
                        <div className="contact-info-top">
                            <span className="contact-heading">Contact</span>
                            <h3>Get in touch</h3>
                            <p>Feel free to contact me for any project or collaboration.</p>
                        </div>
                        <div className="contact-info-desc">
                            <span><FontAwesomeIcon icon={faEnvelope} /> amrselim461@gmail.com</span>
                            <span><FontAwesomeIcon icon={faPhone} /> +201015721754</span>
                            <span><FontAwesomeIcon icon={location} /> Almansour - Egypt</span>
                        </div>
                    </div>
                    <div className="contact-form">
                        <form method="POST" onSubmit={handleSubmit} className="form">
                            <div className="text-inputs">
                                <div className="name-input relative">
                                    <input
                                        className="text"
                                        type="text"
                                        name="Name:"
                                        id="client-name"
                                        placeholder="Name"
                                        // autoComplete="off"
                                        required
                                    />
                                    <label htmlFor="client-name" className="icon">
                                        {/* <Profile /> */}
                                        <FontAwesomeIcon icon={faUser} />
                                    </label>
                                    <ValidationError
                                        prefix="text"
                                        field="text"
                                        errors={state.errors}
                                    />
                                </div>
                                <div className="calling-input relative">
                                    <input
                                        className="text"
                                        type="text"
                                        name="Number:"
                                        id="client-number"
                                        placeholder="Phone number"
                                        // autoComplete="off"
                                        required
                                    />
                                    <label htmlFor="client-number" className="icon">
                                        <FontAwesomeIcon icon={faPhone} />
                                    </label>
                                    <ValidationError
                                        prefix="text"
                                        field="text"
                                        errors={state.errors}
                                    />
                                </div>
                            </div>
                            <div className="email relative">
                                <input
                                    className="email-input"
                                    type="email"
                                    name="Email:"
                                    id="client-email"
                                    placeholder="Email"
                                    // autoComplete="off"
                                    required
                                />
                                <label htmlFor="client-email" className="icon">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </label>
                            </div>
                            <div className="description relative">
                                <textarea
                                    name="Description:"
                                    id="Project Description"
                                    placeholder="Description"
                                    required
                                />
                                <label htmlFor="Project Description" className="icon desc">
                                    <FontAwesomeIcon icon={faMessage} />
                                </label>
                                <ValidationError
                                    prefix="description"
                                    field="description"
                                    errors={state.errors}
                                />
                            </div>
                            <div className="recaptcha-container">
                                <ReCAPTCHA
                                    sitekey="6Lf6I4MnAAAAAIl4-o2Q1lfzjU70kXjITSsHwsJN" // Replace this with your reCAPTCHA site key
                                    onChange={handleRecaptchaChange}
                                />
                            </div>
                            <div className="submit-btn relative">
                                <input
                                    type="submit"
                                    value="Send the message"
                                    disabled={state.submitting || !recaptchaValue} // Disable the submit button until reCAPTCHA is verified
                                />
                                <label className="icon">
                                </label>
                            </div>
                        </form>
                    </div>
                </div>

            </motion.section>
            {/* <ul className="social-media container">
                <a href="https://www.facebook.com/amrselim500/" target='_blank'><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="https://www.behance.net/amrselim-1" target='_blank'><FontAwesomeIcon icon={faBehance} /></a>
                <a href="https://www.linkedin.com/in/amr-selim-811041210/" target='_blank'><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://www.instagram.com/amr_selim0/" target='_blank'><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="https://dribbble.com/amrselim22" target='_blank'><FontAwesomeIcon icon={faDribbble} /></a>

            </ul> */}
        </>
    )
}

export default Projects
