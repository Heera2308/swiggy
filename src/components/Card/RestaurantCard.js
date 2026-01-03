import React from 'react'
import { Image } from '@chakra-ui/react';
import { Box, HStack, Icon, Text } from '@chakra-ui/react';
import { HiStar } from 'react-icons/hi';
export default function RestaurantCard({ item, onClick }) {
    return (
       
            <Box minW="260px"
                maxW="260px" borderWidth="none" position="relative" cursor="pointer" flexShrink={0} onClick={onClick}>
                <Image
                    src={item.image}
                    alt="sweets"
                    h="180px"
                    w="100%"
                    objectFit="cover"
                    borderRadius="10px"
                />
                <Box p="2">
                    <Text fontSize="lg" fontWeight="bold">
                        {item.restaurantName}
                    </Text>
                    <HStack gap="1">
                        <Icon color="green">
                            <HiStar />
                        </Icon>
                        <Text fontSize="lg" fontWeight="bold" >
                            {item.rating}. {item.Timing}
                        </Text>
                    </HStack>
                    <Text fontWeight="medium" color="grey">
                        {item.title}
                    </Text>
                </Box>
            </Box>
        
    )
}
