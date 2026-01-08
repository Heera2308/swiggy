import { Avatar, Box, Container, Flex, Image, Input, Text } from '@chakra-ui/react'
import React from 'react'

export default function Offers({ logoSrc, location, bannerImage, bannerText }) {
    return (
        <Container m="4">
            <Flex justifyContent="space-between" alignItems="center" >
                <Flex gap="10" alignItems="center" _hover={{ cursor: "pointer" }}>
                    <Image src={logoSrc} alt="swiggylogo" height="50px" />
                    <Text fontSize="lg" fontWeight="500">{location}</Text>
                </Flex>
                <Flex gap="10">
                    <Input placeholder="Search for restaurant and food" p="4" _hover={{ cursor: "pointer" }}
                    />
                    <Avatar.Root colorPalette="darkgrey" _hover={{ cursor: "pointer" }}>
                        <Avatar.Fallback />
                    </Avatar.Root>
                </Flex>
            </Flex>
            <Box position="relative" m="6">
                <Image src={bannerImage} alt="imagelooks" />
                <Text position="absolute"
                    bottom="4"
                    left="4"
                    color="white"
                    fontSize="2xl"
                    fontWeight="bold">{bannerText}</Text>
            </Box>
        </Container>
    )
}
