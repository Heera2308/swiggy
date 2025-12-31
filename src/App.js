import React from 'react'
import Homepage from './components/Homepage/Homepage'
import logo from './assets/Image/swiggy.png';
import { Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
export default function App() {
  
  const loc = "Home";
  const list = [
    "Zomato",
    "Search",
    "Offers",
    "Help",
    "Sign In",
    "Cart"
  ];
  // ----------------------------------------


  return (
    <Container>
      <div >
        <Homepage
          image={logo}
          loc={loc}
          list={list} />

          <Outlet/>
      </div>
    </Container>
  )
}
