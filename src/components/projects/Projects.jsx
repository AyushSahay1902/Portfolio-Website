import { Container, Heading, Card, CardBody, Stack, Text, Image, Divider,CardFooter, Button, ButtonGroup, Flex } from '@chakra-ui/react'
import React from 'react'

const Projects = () => {
  return (
    <Container maxW="container.xl">
      <Heading left={0}>Projects</Heading>
      <Flex direction={['column', 'row']} spacing='4'>
      <Card maxW='sm'>
        <CardBody>
          <Image
            src='https://images.unsplash.com/photo-1589994965851-a8f479c573a9?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='Green double couch with wooden legs'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>VITAA App</Heading>
            <Text>
              The one stop app 
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
              Code
            </Button>
            <Button variant='ghost' colorScheme='blue'>
              Live URL
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
      <Card maxW='sm'>
        <CardBody>
          <Image
            src='https://images.unsplash.com/photo-1589994965851-a8f479c573a9?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='Green double couch with wooden legs'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>TransparentTrials.com</Heading>
            <Text>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces and for people who love a chic design with a
              sprinkle of vintage design.
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
              Code
            </Button>
            <Button variant='ghost' colorScheme='blue'>
              Live URL
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
      <Card maxW='sm'>
        <CardBody>
          <Image
            src='https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='Green double couch with wooden legs'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>Fan-Fare Occupancy Counter</Heading>
            <Text>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces and for people who love a chic design with a
              sprinkle of vintage design.
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
              Source Code
            </Button>
            <Button variant='ghost' colorScheme='blue'>
              Live
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
      </Flex>
      
    </Container>
  )
}

export default Projects