import React ,{ useState ,useEffect}from 'react'
import Homepage from './components/Homepage/Homepage'
import logo from './assets/Image/swiggy.png';
import { Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
export default function App() {

const[cartItems,setCartItems]=useState([])

const addToCart = (dish) => {
  setCartItems(prev => {
    const index = prev.findIndex(
      i => i.item.id === dish.id
    );

    if (index !== -1) {
      // increase quantity
      const updated = [...prev];
      updated[index].quantity += 1;
      return updated;
    }

    // add new
    return [...prev, { item: dish, quantity: 1 }];
  });
};

const removeFromCart = (item) => {
  setCartItems(prev =>
    prev
      .map(ci =>
        ci.item.id === item.id
          ? { ...ci, quantity: ci.quantity - 1 }
          : ci
      )
      .filter(ci => ci.quantity > 0)
  );
};

//to aading a number in the cart

const cartCount=cartItems.reduce((sum,ci)=>sum+ci.quantity,0);


   useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  // -----------------------------------------------
  const loc = "Home";
  const navLinks = [{
    label:"Swiggy Corporate",
    path:"/swiggy-corporate"
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
  {
    label:"Cart",
    path:"/cart"
  },
  ];
  // ----------------------------------------


  return (
    <Container>
      <div >
        <Homepage
          image={logo}
          loc={loc}
          navLinks={navLinks}
          cartCount={cartCount}/>

          <Outlet context={{ addToCart ,cartItems,removeFromCart}}/>
      </div>
    </Container>
  )
}


