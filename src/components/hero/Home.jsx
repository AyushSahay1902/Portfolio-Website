import React, {useState} from 'react'
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import HeroSection from './HeroSection';
import { ChakraProvider } from "@chakra-ui/react"
import About from '../about/About';
import Skills from '../skills/Skills';
import Projects from '../projects/Projects';
import Contact from '../contact/Contact';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
  }


  return (
    <>
      {/* <ChakraProvider>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HeroSection />
        <Flex
          id="about"
          direction="row" // Set direction to row for horizontal scrolling
          overflowX="auto" // Enable horizontal scrolling
        >
          <About />
        </Flex>
        <Flex id="skills" direction="row" overflowX="auto">
          <Skills />
        </Flex>
        <Flex id="projects" direction="row" overflowX="auto">
          <Projects />
        </Flex>
        <Flex id="contact" direction="row" overflowX="auto">
          <Contact />
        </Flex>
      </ChakraProvider> */}
    <ChakraProvider>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div id="hero"><HeroSection /></div>
      <div id="about"><About /></div>
      <div id="skills" style={{padding: 5}}><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
    </ChakraProvider>

     
    </>
  )
}

export default Home