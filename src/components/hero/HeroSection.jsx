import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { Container, Texts, Profile, Content, Social } from './HeroElements';
import { Heading, Text, Button} from '@chakra-ui/react';

const HeroSection = () => {
  return (
    <Container>
      <Texts>
      <Heading as="h4" fontSize="xl" color="gray.600" mb={2}>
        Hello People!<Text as="span" className="green">
          {' '}
          My name is
        </Text>
      </Heading>
      <Heading as="h1" fontSize="4xl" fontWeight="bold" mb={4}>
        Ayush Sahay
      </Heading>
      <Text fontSize="lg" color="gray.500" mb={6} pl="15px">
        I am a full-stack developer based out of India
      </Text>
      <Button colorScheme="teal" size="lg" ml="15px">
        Let's connect
      </Button>
      <Social>
        <div className='social-icons'style={{marginLeft: "25px"}} >
          <span><a href="https://www.instagram.com/osm_sahaayu"><FaInstagram /></a></span>
          <span><a href="https://twitter.com/AyushSahay1902"><RiTwitterXFill /></a></span>
          <span><a href="https://www.linkedin.com/in/ayush-sahay-4632591b7"><FaLinkedin /></a></span>
          <span><a href="https://github.com/AyushSahay1902"><FaGithub /></a></span>
        </div>
      </Social>
      </Texts>
      <Profile>
        <Content>
            <img src="https://avatars.githubusercontent.com/u/94383604?v=4" alt="Ayush Sahay" />
        </Content>
      </Profile>
    </Container>
  )
}

export default HeroSection