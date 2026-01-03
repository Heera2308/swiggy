import React, { useRef } from 'react'
import { Flex, Text, IconButton,HStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import RestaurantCard from './RestaurantCard';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";



export default function RestaurantList({ heading, data })
 {

    const navigate = useNavigate();
    const scrollRef = useRef(null);//creates a reference

    const scrollRight = () => {
        scrollRef.current.scrollLeft += 300;
    };

    const scrollLeft = () => {
        scrollRef.current.scrollLeft -= 300;
    };

    return (
        <div>
            <Flex justifyContent="space-between" mb="4">
            <Text fontSize="xl" fontWeight="bold" mb="4">
                {heading}
            </Text>
           <HStack spacing="2" >
        <IconButton
          aria-label="Scroll left"
          icon={<HiChevronLeft boxSize={6} />}
          borderRadius="full"
          bg="gray.200"
          _hover={{ bg: "gray.300" }}
          onClick={scrollLeft}
        />

        <IconButton
          aria-label="Scroll right"
          icon={<HiChevronRight boxSize={6} />}
          borderRadius="full"
          bg="gray.200"
          _hover={{ bg: "gray.300" }}
          onClick={scrollRight}
        ></IconButton>
      </HStack>
            </Flex>

                <Flex gap="6" overflow="hidden" wrap="nowrap" ref={scrollRef}>
                    {data.map((item) => (
                        <RestaurantCard key={item.id} item={item} onClick={() => navigate(`/restaurant/${item.id}`)} />
                    ))}
                </Flex>

        </div>
    )
}
