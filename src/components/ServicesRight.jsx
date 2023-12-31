import { Flex, Spacer, Image, Text, Button, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import teamImage from '../assets/expressServices.png';

const ServicesRight = () => {
const [isLargerThan62] = useMediaQuery('(min-width: 62em)');

return (
    <Flex
    width="90%"
    minHeight="50vh"
    alignItems="center"
    px={isLargerThan62 ? '16' : '6'}
    py="16"
    m={"auto"}
    marginTop={"10"}
    marginBottom={"10"}
    justifyContent="center"
    flexDirection={isLargerThan62 ? 'row' : 'column'}
    shadow={"dark-lg"} 
    borderRadius={"lg"}
    >

    <Flex
        w={isLargerThan62 ? '60%' : 'full'}
        flexDirection="column"
        ml={isLargerThan62 ? '7' : '0'}
    >
        <Text fontSize={isLargerThan62 ? '5xl' : '4xl'} fontWeight="bold">
        Express Services
        </Text>

        <Text mb="6" mr={"6"} opacity="0.8" textAlign={"justify"}>
        Experience unparalleled speed and reliability with our Express services, ensuring your packages reach their destination in record time. Choose from a range of expedited shipping options tailored to your needs. Trust us for secure and swift deliveries, backed by years of post office excellence.
        </Text>

        <Button width="200px" size="lg" backgroundColor={"#ED1B24"} color={"white"} marginTop={"1rem"} display={"flex"} css={{
            "&:hover":{
              backgroundColor: '#ca242d'
            }
            }}>
        Read more
        </Button>
    </Flex>

    <Spacer />

    <Flex
        w={isLargerThan62 ? '40%' : 'full'}
        mb={isLargerThan62 ? '0' : '6'}
        alignItems="center"
        justifyContent="center"
    >
        <Image src={teamImage} alt="Chakra Team" w="full" h={"50vh"}/>
    </Flex>

    </Flex>
);
};

export default ServicesRight;