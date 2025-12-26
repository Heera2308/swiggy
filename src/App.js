import React from 'react'
import Homepage from './components/Homepage/Homepage'
import logo from './assets/Image/swiggy.png';
import Cards from './components/Card/Cards';
import { Container } from '@chakra-ui/react';
export default function App() {
  const loc="Home";
  const list=[
    "Swiggy Corporate",
    "Search",
    "Offers",
    "Help",
    "Sign In",
    "Cart"
  ];
  // ----------------------------------------

  const heading="Top restaurant chains in Chaibasa";
const data=[{
  image:"/Image/card1.jpg",
  restaurantName:"Sweet India",
  rating:"4.1",
  Timing:"15-20 mins",
  title:"Sweets,India,Dessert Chai_basa",
},
{
   image:"/Image/card2.jpg",
  restaurantName:"Appy Jours",
  rating:"4",
  Timing:"25-30 mins",
  title:"Pizzas,Italian,Pastas Chai_basa",
},{
   image:"/Image/card3.jpg",
  restaurantName:"Beyond Temptation",
  rating:"4.1",
  Timing:"25-30 mins",
  title:"Bakery,Burger,Beverages,Pizza, Chai_basa",
},{
   image:"/Image/card4.jpg",
  restaurantName:"Sunshine Restaurant",
  rating:"4.4",
  Timing:"25-30 mins",
  title:"North Indian,Briyani,Chinese Chai_basa",
},]
  return (
    <Container>
      <div >
      <Homepage 
      image={logo}
      loc={loc}
      list={list}/>

      <Cards heading={heading}
      data={data}/>
    </div>
    </Container>
  )
}
