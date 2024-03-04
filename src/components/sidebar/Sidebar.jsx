import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements.js'
import resumePdf from '../../assets/resume.pdf';

const Sidebar = ({isOpen, toggle}) => {
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
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="/project" onClick={toggle}>
            Projects
          </SidebarLink>
          <SidebarLink to="/experience" onClick={toggle}>
            Experience
          </SidebarLink>
          <SidebarLink to="/contact" onClick={toggle}>
            Contact
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute onClick={handleDownload}>Download Resume</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar