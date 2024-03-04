import React from 'react'
import { Container, Heading, Divider, Box,Text, Flex, IconButton } from '@chakra-ui/react'
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import yourImage from '../../assets/img.png';




const About = () => {
    
    return (
        <Container maxW="100%" textAlign="left">
            {/* Green line divider */}
            <Divider bg="green.500" height="10px" />

            {/* Content */}
            <Box display="flex" alignItems="center" justifyContent="space-between" mt="20px">

                {/* Image */}
                <Box flexShrink={0} width="40%" marginRight="20px">
                    <img src={yourImage} alt="Travel img" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
                </Box>

                <Box flex="1">
                    {/* Heading */}
                    <Heading mb="10px">About Me</Heading>

                    {/* Paragraph */}
                    <Text fontSize="lg" lineHeight="1.6" color="gray.700">
                        Hello people,
                        My name is Ayush Sahay. I am a pre-final year student of Computer Science and Engineering (core) at VIT, majoring in Code. I am passionate about software development and always seeking new challenges. My interests extend to finance and data science, and I believe these skills will be valuable in my future career.

                        I am a hard worker, always eager to learn new things, and a team player willing to help others. I am confident that I have the skills and the drive to succeed in my career.
                    </Text>
                    <Box padding="4">
      <Flex spacing="4" gap="2">
        <IconButton
          as="a"
          icon={<FaInstagram />}
          href="https://www.instagram.com/osm_sahaayu/"
          colorScheme="black"
          aria-label="Instagram"
          size="lg"
        />
        <IconButton
          as="a"
          icon={<FaTwitter />}
          href='https://twitter.com/AyushSahay1902'
          colorScheme="black"
          aria-label="Twitter"
          size="lg"
        />
        <IconButton
          as="a"
          icon={<FaLinkedin />}
          href='https://www.linkedin.com/in/ayush-sahay-1b1b3a1b3/'
          colorScheme="black"
          aria-label="LinkedIn"
          size="lg"
        />
        <IconButton
         as="a"
          icon={<FaGithub />}
          href=''
          colorScheme="black"
          aria-label="Github"
          size="lg"
        />
        {/* Add more IconButton components for additional social media icons */}
      </Flex>
    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default About