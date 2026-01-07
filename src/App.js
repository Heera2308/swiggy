import React from 'react'
import Homepage from './components/Homepage/Homepage'
import logo from './assets/Image/swiggy.png';
import { Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
export default function App() {
  
  const loc = "Home";
  const navLinks = [{
    label:"Swiggy Corporate",
    path:"/swiggycorporate"
  },
    {
    label:"Search",
    path:"/search"
  },
  {
    label:"Offers",
    path:"/offers"
  },{
    label:"Help",
    path:"/help"
  },{
    label:"Sign In",
    path:"/sign-in"
  },
  ];
  // ----------------------------------------


  return (
    <Container>
      <div >
        <Homepage
          image={logo}
          loc={loc}
          navLinks={navLinks} />

          <Outlet/>
      </div>
    </Container>
  )
}
