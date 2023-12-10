import "../src/assets/styles/main.css";
import Home from "./components/home/Home";
// import About from "./components/about/About"
// import Projects from './components/projects/Projects';
// import Contact from './components/contact/Contact';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Services from './components/services/Services';

// const handleLightMode = () => {
// Toggle the body class for light/dark mode
//   const body = document.querySelector('body');
//   body.classList.toggle('light-mode');
// }

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
