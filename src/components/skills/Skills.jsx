import React from 'react';
import { Heading, Container, Divider, Box, Flex, Text, SimpleGrid, Badge } from '@chakra-ui/react';
import InfiniteScroll from './InfiniteScroll';
const SkillsSection = () => {
  return (
    <Container maxW="100%" textAlign="left" >
      <Divider bg="lime" height="5px" />
      <Heading mb="10px">Skills</Heading>
      <Flex direction="column" align="center" minHeight="100vh">
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} width="80%">
          {/* Card 1: Web Development */}
          <Box p={6} boxShadow="lg" borderRadius="md" bg="blue.100">
            <Text fontSize="2xl" fontWeight="semibold" mb={4}>
              Frontend
            </Text>
            <Flex wrap="wrap">
              <Badge colorScheme="blue" mr={2} mb={2}>
                HTML5
              </Badge>
              <Badge colorScheme="teal" mr={2} mb={2}>
                CSS3
              </Badge>
              <Badge colorScheme="cyan" mr={2} mb={2}>
                JavaScript
              </Badge>
              <Badge colorScheme="red" mr={2} mb={2}>
                Bootstrap 5
              </Badge>
              <Badge colorScheme="orange" mr={2} mb={2}>
                Material UI
              </Badge>
              <Badge colorScheme="purple" mr={2} mb={2}>
                Chakra UI
              </Badge>
              {/* Add more tags as needed */}
            </Flex>
            <Text fontSize="xl" fontWeight="semibold" mb={4}>
              Libraries or Frameworks
            </Text>
            <Flex wrap="wrap">
              <Badge colorScheme="red" mr={2} mb={2}>
                React
              </Badge>
              <Badge colorScheme="orange" mr={2} mb={2}>
                Next.js
              </Badge>
              <Badge colorScheme="green" mr={2} mb={2}>
                Gatsby
              </Badge>
              <Badge colorScheme="green" mr={2} mb={2}>
                Redux
              </Badge>
              {/* Add more tags as needed */}
            </Flex>
          </Box>

          {/* Card 2: Database and Cloud */}
          <Box p={6} boxShadow="lg" bg="purple.100" borderRadius="md">
            <Text fontSize="2xl" fontWeight="semibold" mb={4}>
              Backend/Database
            </Text>
            <Flex wrap="wrap">
              <Badge colorScheme="purple" mr={2} mb={2}>
                NodeJs
              </Badge>
              <Badge colorScheme="orange" mr={2} mb={2}>
                ExpressJs
              </Badge>
              <Badge colorScheme="pink" mr={2} mb={2}>
                MongoDB
              </Badge>
              <Badge colorScheme="yellow" mr={2} mb={2}>
                Firebase
              </Badge>
              <Badge colorScheme="purple" mr={2} mb={2}>
                Django
              </Badge>
              <Badge colorScheme="red" mr={2} mb={2}>
                SQL/SQl workbench
              </Badge>

              {/* Add more tags as needed */}
            </Flex>
          </Box>

          {/* Card 3: Packages and Libraries */}
          <Box p={6} boxShadow="lg" bg="pink.100" borderRadius="md">
            <Text fontSize="xl" fontWeight="semibold" mb={4}>
              AI/ML/DevOps
            </Text>
            <Flex wrap="wrap">
              <Badge colorScheme="pink" mr={2} mb={2}>
                Python
              </Badge>
              <Badge colorScheme="pink" mr={2} mb={2}>
                Tensorflow
              </Badge>
              <Badge colorScheme="pink" mr={2} mb={2}>
                Scikit-Learn
              </Badge>
              <Badge colorScheme="pink" mr={2} mb={2}>
                PyTorch
              </Badge>
              <Badge colorScheme="pink" mr={2} mb={2}>
                Pandas
              </Badge>
              <Badge colorScheme="pink" mr={2} mb={2}>
                Numpy
              </Badge>
              <Badge colorScheme="pink" mr={2} mb={2}>
                Matplotlib
              </Badge>
              <Badge colorScheme="pink" mr={2} mb={2}>
                Seaborn
              </Badge>
              <Badge colorScheme="pink" mr={2} mb={2}>
                AWS
              </Badge>
              <Badge colorScheme="orange" mr={2} mb={2}>
                Docker
              </Badge>
              <Badge colorScheme="red" mr={2} mb={2}>
                Kubernetes
              </Badge>
              {/* Add more tags as needed */}
            </Flex>
          </Box>

        </SimpleGrid>
        <Divider bg="lime" height="1px" mt="15px" />
        {/* <Heading fontSize="3xl" >Certificates and Achivements</Heading> */}
        <InfiniteScroll />
      </Flex>
      
      
    </Container>
  );
};

export default SkillsSection;
