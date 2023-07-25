import logo from './logo.svg';
import './App.css';
import Head from './Head'
import Navbar from './Navbar'
import About from './About'

import Skills from './Skills'
import { color, motion, useScroll } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="App">
      <motion.div
                className="progress-bar"
                style={{ scaleX: scrollYProgress }}
        />
      <Navbar/>
      <Head/>
      <About/>
      <Skills/>
    </div>
  );
}

export default App;
