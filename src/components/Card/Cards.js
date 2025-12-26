import React from 'react'
import './Cards.css';
import { Image } from '@chakra-ui/react';
import { Box, HStack, Icon, Text } from '@chakra-ui/react';
import { HiStar } from 'react-icons/hi';

export default function Cards(props) {
    return (
        <div >
            <Text fontSize="xl" fontWeight="bold" mb="2">
                {props.heading}
            </Text>
           <HStack gap="10" wrap="wrap"> {props.data.map((item,index)=>(
            <Box maxW="260px" h="180px" borderWidth="none" m="2" position="relative"  cursor="pointer" key={index}>
                <Image
                    src={item.image}
                    alt="sweets"
                    h="100%"
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
            </Box>))}
            </HStack>
        </div >
    )
}
