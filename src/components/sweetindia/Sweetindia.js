import React from 'react'
import { Box, HStack, Icon, Text, VStack } from '@chakra-ui/react';
import { HiStar } from 'react-icons/hi';
// import './Sweetindia.css'
export default function Sweetindia(props) {
  return (
    <div>

      <Text fontSize="2xl" fontWeight="bold" mb="4">
        {props.heads}
      </Text>

      <Box bg="white"
        borderRadius="2xl"
        p="6"
        boxShadow="2xl">
        <VStack align="start" spacing="3">
          <HStack spacing="4">
            <Icon color="green">
              <HiStar />
            </Icon>
            <Text fontWeight="bold">
              {props.rating}({props.number}ratings) . {props.price}
            </Text>
          </HStack>
          <Text color="orange.500" fontWeight="semibold" >
            {props.description},{props.itemname}
          </Text>
          <Text>
            {props.way}
          </Text>
          <Text>
            {props.time}
          </Text>
        </VStack>
      </Box>

  <Text fontSize="2xl" fontWeight="bold" mb="4">
        {props.heads1}
      </Text>

      <Box bg="white" p="4">
        <HStack>
          <Text>
            {props.offers}
          </Text>
           <Text>
            {props.Coupon}
          </Text>
        </HStack>

      </Box>




    </div>
  )
}
