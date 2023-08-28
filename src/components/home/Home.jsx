import React from 'react'
import Header from './Header'
import Landing from "./Landing"
import About from '../about/About'
import Services from '../services/Services'
import Projects from '../projects/Projects'
import Contact from '../contact/Contact'
import ScrollToTopButton from './ScrollToTop'
import Footer from '../footer/Footer'

const Home = () => {
    return (
        <>
            <Header />
            <Landing />
            <About />
            <Services />
            <Projects />
            <Contact />
            <ScrollToTopButton />
            <Footer />
        </>
    )
}

export default Home
