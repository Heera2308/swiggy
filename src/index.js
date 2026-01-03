import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from './components/ui/provider';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Sweetindia from './components/sweetindia/Sweetindia';
import Cards from './components/Card/RestaurantList';


const heading = "Top restaurant chains in Chaibasa";
const data = [{
  id: "sweet-india",
  image: "/Image/card1.jpg",
  restaurantName: "Sweet India",
  rating: "4.1",
  number: "588",
  location: "Outlet,Chaibasa",
  description: "Sweets,Desserts",
  price: " 249 for two",
  Timing: "15-20 mins",
  title: "Sweets,India,Dessert Chai_basa",
  data1: [
    {
      offers: "Flat 125 off",
      coupon: "USE FLAT125",
    },
    {
      offers: "50% off Upto 100",
      coupon: "USE TRYNEW",
    }, {
      offers: "Flat 175 off",
      coupon: "USE MEGASAVER",
    }, {
      offers: "10% off Upto 250",
      coupon: "USE AXIXCC250",
    }, {
      offers: "10% off Upto 100",
      coupon: "USE RBLCCFEST",
    },
  ]
},
{
  id: "Appy-Hours",
  image: "/Image/card2.jpg",
  restaurantName: "Appy Hours",
  number: "798",
  location: "Outlet,Chaibasa",
  description: "Pizzas,Italian",
  price: " 349 for two",
  rating: "4.0",
  Timing: "25-30 mins",
  title: "Pizzas,Italian,Pastas Chai_basa",
  data1: [
    {
      offers: "Items At 143",
      coupon: "ON SELECT ITEMS",
    },
    {
      offers: "Flat 50 Off",
      coupon: "USE FLATDEAL",
    }, {
      offers: "Flat 30 off",
      coupon: "NO CODE REQUIRED",
    }, {
      offers: "10% off Upto 100",
      coupon: "USE SBIDC100",
    },
  ]
},
{
  id: "Beyond-Temptation",
  image: "/Image/card3.jpg",
  restaurantName: "Beyond Temptation",
  number: "638",
  location: "Outlet,Chaibasa",
  description: "Bakery,Burgers",
  price: " 300 for two",
  rating: "4.1",
  Timing: "25-30 mins",
  title: "Bakery,Burger,Beverages,Pizza, Chai_basa",
  data1: [
    {
    offers: "Flat 50 off",
    coupon: "USE SAVEONSWIGGY"
  },
  {
    offers: "Flat 125 off",
    coupon: "USE FLAT125"
  }, {
    offers: "Flat 175 off",
    coupon: "USE MEGASAVER"
  }, {
    offers: "Flat 200 off",
    coupon: "USE FLAT200"
  }, {
    offers: "Flat 30 off",
    coupon: "NO CODE REQUIRED"
  },]

},
{
  id: "Sunshine-Restaurant",
  image: "/Image/card4.jpg",
  restaurantName: "Sunshine Restaurant",
  number: "9.1K+",
  location: "Outlet,Chaibasa",
  description: "North Indian,Briyani",
  price: " 300 for two",
  rating: "4.4",
  Timing: "25-30 mins",
  title: "North Indian,Briyani,Chinese Chai_basa",
  data1: [{
    offers: "items at 68",
    coupon: "ON SLECT ITEMS|",
  },
  {
    offers: "70% off Upto 140",
    coupon: "USE ENDOFYEARSALE",
  }, {
    offers: "Flat 125 off",
    coupon: "USE FLAST125",
  }, {
    offers: "Flat 150 off",
    coupon: "USE SAVERDEALS",
  },]
},
{
  id: "KFFC-kolhan Fast Food Center",
  image: "/Image/kfffc.avif",
  restaurantName: "KFFC-Kolhan Fast Food Center",
  number: "389",
  location: "Outlet,Chaibasa",
  description: "Chinese,pastas",
  price: " 149 for two",
  rating: "4.3",
  Timing: "30-40 mins",
  title: "Chinese,pastas Chai_basa",
  data1: [{
    offers: "Flat 500 off",
    coupon: "USE FLAT500",
  },
  {
    offers: "10% off Upto 40",
    coupon: "USE TRYNEW",
  }, {
    offers: "Flat 30 Off",
    coupon: "NO CODE REQUIRED",
  }, {
    offers: "10% off Upto 100",
    coupon: "USE SBICDC100",
  },]
},
{
  id: "Champaran-Handi",
  image: "/Image/ch.avif",
  restaurantName: "Champaran Handi",
  number: "147",
  location: "Outlet,Chaibasa",
  description: "Bihari Indian",
  price: " 300 for two",
  rating: "4.4",
  Timing: "25-30 mins",
  title: "North Indian,Briyani,Chinese Chai_basa",
  data1: [{
    offers: "Flat 30 off",
    coupon: "No Code REQUIRED",
  },
  {
    offers: "10% off Upto 100",
    coupon: "USE SBIDC100",
  },]
},
]

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Cards heading={heading} data={data} />
      },
      {
        path: "/restaurant/:id",
        element:
          <Sweetindia data={data}
          />
      }]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
