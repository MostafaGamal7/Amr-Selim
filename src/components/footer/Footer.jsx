import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faBehance, faDribbble, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <p>Copyright © 2023. All rights reserved.</p>
                <ul className="social-media">
                    <a href="https://www.facebook.com/amrselim500/" target='_blank'><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="https://www.behance.net/amrselim-1" target='_blank'><FontAwesomeIcon icon={faBehance} /></a>
                    <a href="https://www.linkedin.com/in/amr-selim-811041210/" target='_blank'><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="https://www.instagram.com/amr_selim0/" target='_blank'><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="https://dribbble.com/amrselim22" target='_blank'><FontAwesomeIcon icon={faDribbble} /></a>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
