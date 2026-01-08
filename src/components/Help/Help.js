import { Container, Text } from '@chakra-ui/react'
import React from 'react'
export default function Help({ title, description }) {
    return (
        <Container minH="100vh" bg="skyblue">
            <Text fontSize="2xl"
                fontWeight="bold" color="white">
                {title}
            </Text>
            <Text color="white">
                {description}
            </Text>
        </Container>
    )
}
