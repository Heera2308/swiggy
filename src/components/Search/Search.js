
import { Container, Input } from '@chakra-ui/react'
import React from 'react'

export default function Search() {
  return (
    <Container display="flex"
      alignItems="center"
      justifyContent="center" mt="10">
      <Input placeholder="Search for resturant and food" size="md" />
      
    </Container>


  )
}
