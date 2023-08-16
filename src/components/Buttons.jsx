import React from 'react'
import { Card, CardBody, Heading} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Buttons = ({heading, link}) => {
  return (
    <Link to={`/${link}`}>
        <Card maxW='sm'  shadow={"lg"} borderRadius={"lg"} transition={"all 0.3s"} css={{
        "&:hover":{
          transform: "scale(1.1)"
        }
        }}>
            <CardBody>
            <Heading size='md'>{heading}</Heading>
            </CardBody>
        </Card>
    </Link>
  )
}

export default Buttons