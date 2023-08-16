import React from 'react'
import { Heading, Center} from '@chakra-ui/react'

import ServicesLeft from './ServicesLeft'
import ServicesRight from './ServicesRight'
import ImpLinks from './ImpLinks'
import HeroSection from './HeroSection'
import Navbar from './Navbar'
import Track from './Track'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Track/>
      <HeroSection/>
    <Center>
      <Heading m={"auto"} display={"inline-block"} borderBottom={"2px solid red"} p={"2"}>Services</Heading>
    </Center>
    <ServicesLeft/>
    <ServicesRight/>
    <ImpLinks/>
    </>
  )
}

export default Home