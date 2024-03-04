import {Container, Divider, Heading,  Box, Grid, Flex, Text, Input, InputGroup, Textarea, Button} from '@chakra-ui/react'
import React from 'react'

const Projects = () => {
  return (
    <Container maxW="container.xl" h="100vh" py={8}>
      <Divider />
      <Flex h="100%" align="center" justify="center">
        <Grid templateColumns="1fr 2fr" gap={8}>
          {/* Left side: Information and mobile number */}
          <Box>
            <Heading as="h2">Contact Me</Heading>
            <Text mb={4}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              vel aliquid explicabo sequi ipsam quos quam distinctio ea, quasi,
              ullam ipsa ad provident sunt magni, reprehenderit sit aperiam
              commodi in suscipit velit earum! Similique vel reprehenderit amet
              mollitia vero nam, dicta aut quisquam tenetur. Beatae
              exercitationem incidunt fugit earum nobis.
            </Text>
            <Flex>
              <Text ml={2}>+123 456 7890</Text>
            </Flex>
          </Box>

          {/* Right side: Form with inputs and button */}
          <Box>
            <InputGroup mb={4}>
              <Input placeholder="Full Name" />
            </InputGroup>
            <InputGroup mb={4}>
              <Input placeholder="Email Address" />
            </InputGroup>
            <Textarea placeholder="Message" />
            <Button type="submit" mt={4}>
              Send Message
            </Button>
          </Box>
        </Grid>
      </Flex>
    </Container>
  );
};

export default Projects;