import React from 'react'
import { Box, HStack, Icon, Text, VStack } from '@chakra-ui/react';
import { HiStar } from 'react-icons/hi';
import { useParams } from 'react-router-dom';


export default function Sweetindia({data,data1}) {
  const { id } =useParams();
  const restaurant = data.find(r=>r.id===id)
  return (

    <div>

      <Text fontSize="2xl" fontWeight="bold" mb="4">
        {restaurant.restaurantName}
      </Text>

      <Box bg="white"
        borderRadius="2xl"
        p="6"
        boxShadow="2xl" mb="10">
        <VStack align="start" spacing="3">
          <HStack spacing="4">
            <Icon color="green">
              <HiStar />
            </Icon>
            <Text fontWeight="bold">
              {restaurant.rating}({restaurant.number} ratings) . {restaurant.price}
            </Text>
          </HStack>
          <Text color="orange.500" fontWeight="semibold" >
            {restaurant.description}
          </Text>
          <Text>
           {restaurant.location}
          </Text>
          <Text fontWeight="bold">
            {restaurant.Timing}
          </Text>
        </VStack>
      </Box>

      <Text fontSize="2xl" fontWeight="bold" mb="4" >
        Deals for you
      </Text>

      <HStack spacing="4" wrap="wrap">
        {restaurant.data1.map((item, i) => (

          <Box bg="white" p="4" m="3" key={i} w="250px" borderRadius="20px"
            border="3px solid"
            borderColor="gray.200"
            cursor="pointer">
              
            <VStack align="left">
              <Text fontWeight="bold" fontSize="lg" >
                {item.offers}
              </Text>
              <Text color="grey"
                fontWeight="bold">
                {item.coupon}
              </Text>
            </VStack>
          </Box>
        ))}
      </HStack>

    </div>
  )
}
