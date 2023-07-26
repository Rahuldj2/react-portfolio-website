import logo from './logo.svg';
import './App.css';
import Head from './Head'
import Navbar from './Navbar'
import About from './About'
import Profiles from './Profiles'

import Skills from './Skills'
import { color, motion, useScroll } from "framer-motion";
import { useRef } from 'react';

function App() {
  const { scrollYProgress } = useScroll();
  const aboutRef = useRef();

  const skillRef=useRef();
  return (
    <div className="App">
      <motion.div
                className="progress-bar"
                style={{ scaleX: scrollYProgress }}
        />
      <Navbar  aboutRef={aboutRef} skillRef={skillRef}/>
      <Head />
      <About  aboutRef={aboutRef}/>
      <Skills skillRef={skillRef}/>
      <Profiles/>
    </div>
  );
}

export default App;
