import React from 'react'
import { Link as ScrollLink } from 'react-scroll';
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements.js'
import resumePdf from '../../assets/resume.pdf';


const Navbar = ({ toggle }) => {
  const handleDownload = () => {
    // Fetch the PDF file as a blob
    fetch(resumePdf)
      .then(response => response.blob())
      .then(blob => {
        // Create an anchor element and set its attributes
        const a = document.createElement('a');
        a.href = window.URL.createObjectURL(blob);
        a.download = 'resume.pdf';

        // Append the anchor to the body and trigger a click
        document.body.appendChild(a);
        a.click();

        // Remove the anchor from the body
        document.body.removeChild(a);
      });
  };
  const scrollToHero = () => {
    var element = document.getElementById("hero");
    element.scrollIntoView({behavior: "smooth", duration: "500", exact: "true", offset: -70});
  }
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo onClick="scrollToHero()">Ayush Sahay</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
      <NavItem>
        <NavLinks to="about" smooth={true} duration={500} spy={true} exact="true" offset={-70}>
          About
        </NavLinks>
      </NavItem>
      <NavItem>
        <NavLinks to="skills" smooth={true} duration={500} spy={true} exact="true" offset={-70}>
          Skills
        </NavLinks>
      </NavItem>
      <NavItem>
        <NavLinks to="projects" smooth={true} duration={500} spy={true} exact="true" offset={-70}>
          Projects
        </NavLinks>
      </NavItem>
      <NavItem>
        <NavLinks to="contact" smooth={true} duration={500} spy={true} exact="true" offset={-70}>
          Contact
        </NavLinks>
      </NavItem>
    </NavMenu>
          <NavBtn>
            <NavBtnLink onClick={handleDownload}>Download Resume</NavBtnLink>
          </NavBtn>

        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar