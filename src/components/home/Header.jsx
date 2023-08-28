// import React, { useEffect, useState } from 'react';
// // import { Link } from 'react-router-dom';
// import light_icon from "../../assets/images/light-mode-icon.png";
// import dark_icon from '../../assets/images/dark-mode-icon.png';

// const Header = ({ isLightMode, toggleLightMode }) => {
//     const [activeLink, setActiveLink] = useState('#home');
//     const [isOpen, setIsOpen] = useState(false);
//     const [isSticky, setIsSticky] = useState(false);

//     // const handleLightMode = () => {
//     //     // Toggle the body class for light/dark mode
//     //     const body = document.querySelector('body');
//     //     body.classList.toggle('light-mode');
//     // }

//     // Retrieve user's preferred mode from local storage on component mount

//     const handleToggleLightMode = () => {

//         // Toggle the body class for light/dark mode
//         const body = document.querySelector('body');
//         body.classList.toggle('light-mode');

//         // Save user's preferred mode to local storage
//         const preferredMode = isLightMode ? 'dark' : 'light';
//         localStorage.setItem('preferredMode', preferredMode);
//     };

//     useEffect(() => {
//         const preferredMode = localStorage.getItem('preferredMode');
//         if (preferredMode === 'dark') {
//             // Apply dark mode styles here
//             // e.g., document.body.classList.add('dark-mode');
//         }
//     }, []);


//     const handleToggle = () => {
//         setIsOpen(!isOpen);
//         setIsSticky(!isOpen); // Remove the "sticky" class when the burger icon is clicked
//     };

//     const handleLinkClick = (sectionId) => {
//         // setActiveLink(sectionId);
//         setIsOpen(false);

//         // Scroll to the clicked section
//         // const sectionElement = document.querySelector(sectionId);
//         // if (sectionElement) {
//         //     sectionElement.scrollIntoView({ behavior: 'smooth' });
//         // }
//         // event.preventDefault();
//         // setIsOpen(false);
//         // setActiveLink(sectionId);
//         // const extraHash = "#/"; // Add the extra "#/" before the section id
//         // window.location.hash = extraHash + sectionId; // Update the URL with the target hash
//     };


//     useEffect(() => {
//         const handleScroll = () => {
//             const scrollPosition = window.scrollY;

//             if (scrollPosition > 50 && !isOpen) {
//                 setIsSticky(true);
//             } else {
//                 setIsSticky(false);
//             }

//             const sections = document.querySelectorAll('section');

//             sections.forEach((section) => {
//                 const sectionId = `#${section.getAttribute('id')}`;
//                 const sectionOffset = section.offsetTop;
//                 const sectionHeight = section.offsetHeight;

//                 console.log(section)
//                 console.log(sectionId)

//                 if (
//                     scrollPosition >= sectionOffset - 150 &&
//                     scrollPosition < sectionOffset + sectionHeight
//                 ) {
//                     setActiveLink(sectionId);
//                 }
//             });
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, [isOpen]);

//     useEffect(() => {
//         const body = document.querySelector('body');
//         const scrollPosition = window.scrollY;
//         if (isOpen) {
//             body.style.overflow = 'hidden';
//         } else {
//             body.style.overflow = 'auto';
//             if (scrollPosition > 50 && !isOpen) {
//                 setIsSticky(true);
//             }
//         }
//     }, [isOpen]);

//     return (
//         <header className={isSticky && !isOpen ? 'sticky' : ''}>
//             <div className="container">
//                 <a href="/" className='logo'>
//                     Amr Selim
//                 </a>
//                 <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
//                     <li>
//                         <a
//                             href="/#home"
//                             className={activeLink === '#home' ? 'active' : ''}
//                             // onClick={(e) => handleLinkClick()}
//                             onClick={() => handleLinkClick()}
//                         >
//                             Home
//                         </a>
//                     </li>
//                     <li>
//                         <a
//                             href="/#about" // Add the extra "#/" before the section id
//                             className={activeLink === '#about' ? 'active' : ''}
//                             // onClick={(e) => handleLinkClick()}
//                             onClick={() => handleLinkClick()}
//                         >
//                             About
//                         </a>
//                     </li>
//                     <li>
//                         <a href="/#services"
//                             className={activeLink === '#services' ? 'active' : ''}
//                             // onClick={(e) => handleLinkClick()}
//                             onClick={() => handleLinkClick()}
//                         >
//                             Services
//                         </a>
//                     </li>
//                     <li>
//                         <a
//                             href="/#projects"
//                             className={activeLink === '#projects' ? 'active' : ''}
//                             // onClick={(e) => handleLinkClick()}
//                             onClick={() => handleLinkClick()}
//                         >
//                             Projects
//                         </a>
//                     </li>
//                     <li>
//                         <a
//                             href="/#contact"
//                             className={activeLink === '#contact' ? 'active' : ''}
//                             // onClick={(e) => handleLinkClick()}
//                             onClick={() => handleLinkClick()}
//                         >
//                             Contact
//                         </a>
//                     </li>
//                     <li>
//                         <img
//                             className="mood-icon"
//                             src={isLightMode ? light_icon : dark_icon}
//                             alt="mood icon"
//                             onClick={handleToggleLightMode}
//                         />
//                     </li>
//                 </ul>
//                 <div className="burger-icon">
//                     <input
//                         type="checkbox"
//                         id="burger-icon-toggle"
//                         className="burger-icon-toggle"
//                         checked={isOpen}
//                         onChange={handleToggle}
//                     />
//                     <label
//                         htmlFor="burger-icon-toggle"
//                         className="burger-icon-toggle-label"
//                     >
//                         <span className={`icon ${isOpen ? 'open' : ''}`}>
//                             <div className="bar"></div>
//                             <div className="bar"></div>
//                             <div className="bar"></div>
//                         </span>
//                     </label>
//                 </div>
//             </div>
//         </header>
//     );
// };

// export default Header;

import React, { useEffect, useState } from 'react';
import light_icon from "../../assets/images/light-mode-icon.png";
import dark_icon from '../../assets/images/dark-mode-icon.png';

const Header = ({ toggleLightMode }) => {
    // const [activeLink, setActiveLink] = useState('#home');
    // const [isOpen, setIsOpen] = useState(false);
    // const [isSticky, setIsSticky] = useState(false);

    // // Initialize the isLightMode state using the value stored in local storage
    // const storedPreferredMode = localStorage.getItem('preferredMode');
    // const initialIsLightMode = storedPreferredMode === 'light';
    // const [isLightMode, setIsLightMode] = useState(initialIsLightMode);

    // const handleToggleLightMode = () => {
    //     const body = document.querySelector('body');
    //     body.classList.toggle('light-mode');

    //     const preferredMode = isLightMode ? 'dark' : 'light';
    //     localStorage.setItem('preferredMode', preferredMode);
    // };

    const [activeLink, setActiveLink] = useState('#home');
    const [isOpen, setIsOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    // Initialize the isLightMode state using the value stored in local storage
    const storedPreferredMode = localStorage.getItem('preferredMode');
    const initialIsLightMode = storedPreferredMode === 'light';
    const [isLightMode, setIsLightMode] = useState(initialIsLightMode);
    useEffect(() => {
        const body = document.querySelector('body');
        if (isLightMode) {
            body.classList.add('light-mode');
        } else {
            body.classList.remove('light-mode');
        }
    }, [isLightMode]);

    // Update the preferred mode and state for light mode
    const handleToggleLightMode = () => {
        const newPreferredMode = isLightMode ? 'dark' : 'light';
        localStorage.setItem('preferredMode', newPreferredMode);
        setIsLightMode(!isLightMode); // Toggle the state
    };


    const handleToggle = () => {
        setIsOpen(!isOpen);
        setIsSticky(!isOpen);
    };

    const handleLinkClick = () => {
        // setActiveLink(sectionId);
        setIsOpen(false);

        // const sectionElement = document.querySelector(sectionId);
        // if (sectionElement) {
        //     sectionElement.scrollIntoView({ behavior: 'smooth' });
        // }
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            if (scrollPosition > 50 && !isOpen) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }

            const sections = document.querySelectorAll('section');

            sections.forEach((section) => {
                const sectionId = `#${section.getAttribute('id')}`;
                const sectionOffset = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                if (
                    scrollPosition >= sectionOffset - 150 &&
                    scrollPosition < sectionOffset + sectionHeight
                ) {
                    setActiveLink(sectionId);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isOpen]);

    useEffect(() => {
        const body = document.querySelector('body');
        const scrollPosition = window.scrollY;
        if (isOpen) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto';
            if (scrollPosition > 50 && !isOpen) {
                setIsSticky(true);
            }
        }
    }, [isOpen]);

    return (
        <header className={isSticky && !isOpen ? 'sticky' : ''}>
            <div className="container">
                <a href="/" className='logo'>
                    Amr Selim
                </a>
                <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <li>
                        <a
                            href="/#home"
                            className={activeLink === '#home' ? 'active' : ''}
                            onClick={() => handleLinkClick()}
                        // onClick={(e) => {
                        //     e.preventDefault(); // Prevent default anchor link behavior
                        //     window.scrollTo({
                        //         top: 0,
                        //         behavior: 'smooth' // Add smooth scrolling effect
                        //     });
                        // }}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="/#about"
                            className={activeLink === '#about' ? 'active' : ''}
                            onClick={() => handleLinkClick()}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="/#services"
                            className={activeLink === '#services' ? 'active' : ''}
                            onClick={() => handleLinkClick()}
                        >
                            Services
                        </a>
                    </li>
                    <li>
                        <a
                            href="/#projects"
                            className={activeLink === '#projects' ? 'active' : ''}
                            onClick={() => handleLinkClick()}
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="/#contact"
                            className={activeLink === '#contact' ? 'active' : ''}
                            onClick={() => handleLinkClick()}
                        >
                            Contact
                        </a>
                    </li>
                    <li>
                        <img
                            className="mood-icon"
                            src={isLightMode ? light_icon : dark_icon}
                            alt="mood icon"
                            onClick={handleToggleLightMode}
                        />
                    </li>
                </ul>
                <div className="burger-icon">
                    <input
                        type="checkbox"
                        id="burger-icon-toggle"
                        className="burger-icon-toggle"
                        checked={isOpen}
                        onChange={handleToggle}
                    />
                    <label
                        htmlFor="burger-icon-toggle"
                        className="burger-icon-toggle-label"
                    >
                        <span className={`icon ${isOpen ? 'open' : ''}`}>
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </span>
                    </label>
                </div>
            </div>
        </header>
    );
};

export default Header;
