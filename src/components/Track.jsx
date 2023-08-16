import React from 'react'
import { Button, FormControl, FormLabel, HStack, Input, Stack } from '@chakra-ui/react'
import Buttons from './Buttons'



const Track = () => {
  return (
    <div>
      <HStack m={"2rem"} p={"2rem"}>
        <Stack w={"50%"}>
          <FormControl w={"70%"} m={"auto"} p={"auto"} >
            <FormLabel>Search or Track Packages</FormLabel>
            <Input type='text' borderColor={"black.200"} focusBorderColor='#ED1B24' placeholder='Enter your tracking id' />
            <Button backgroundColor={"#ED1B24"} color={"white"} marginTop={"1rem"} display={"flex"} marginLeft={"auto"} css={{
              "&:hover": {
                backgroundColor: '#ca242d'
              }
            }}
            >Track</Button >
          </FormControl>
        </Stack>
        <HStack w={"50%"} p={"1rem"} justifyContent={"space-between"}>
          <Buttons heading="Calculate Postage" link={"postage"} w/>
          <Buttons heading="Locate Us" link={"locate"} />
          <Buttons heading="Find Postal Code" link={"post-code"} />
        </HStack>
      </HStack>
    </div>

  )
}

export default Track