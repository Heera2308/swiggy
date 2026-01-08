import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from './components/ui/provider';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Sweetindia from './components/sweetindia/Sweetindia';
import Cards from './components/Card/RestaurantList';
import Search from './components/Search/Search';
import SwiggyCorporate from './components/SwiggyCorporate/SwiggyCorporate';
import Offers from './components/Offers/Offers';
import Help from './components/Help/Help';
import Signin from './components/Signin/Signin';


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
{
  id: "The-garden-Inn",
  image: "/Image/ch.avif",
  restaurantName: "The garden Inn",
  number: "108",
  location: "Outlet,Chaibasa",
  description: "Chinese food",
  price: " 300 for two",
  rating: "4.3",
  Timing: "25-30 mins",
  title: "North Indian,Briyani,Chinese Chai_basa",
  data1: [
  {
    offers: "10% off Upto 100",
    coupon: "USE SBIDC100",
  },]
},
]
// --------------------------------------
const image1="/Image/swiggy-logo.webp";
const heading1="About Us";
const description1="Swiggy is a new-age consumer-first organization offering an easy-to-use convenience platform, accessible through a unified app.";
const navItems=[{
  label:"About Swiggy",
  path:"/about-swiggy"
},{
  label:"Our Business",
  path:"/ourbusiness"
},{
  label:"Delivering For Everyone",
  path:"/delivering-for-everyone"
},{
  label:"News Room",
  path:"/news-room"
},{
  label:"Investor Realtions",
  path:"/investor-realtions"
},{
  label:"Sustainability",
  path:"/sustainability"
},{
  label:"Contact Us",
  path:"/contact-us"
},]
// ----------------------------------------
const logoSrc="/Image/swiggy-logo.webp";
const location="Setup Your precise location";
const bannerImage="/Image/DO_collectionBanner.png";
const bannerText="Restaurants With Great Offers Near Me";
// -----------------------------------------------------------
const title="Help & Support";
const description="Let's take a step ahead and help you better."

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
        path:"search",
        element:<Search/>
      },
      {
        path:"help",
        element:<Help title={title}
        description={description}
        />
      },
      {
        path: "/restaurant/:id",
        element:
          <Sweetindia data={data}
          />
      }]
  },{
    path:"/swiggy-corporate",
    element:<SwiggyCorporate navItems={navItems} 
    image1={image1}
    heading1={heading1}
    description1={description1}/>
  },
  {
    path:"/offers",
    element:<Offers  
    logoSrc={logoSrc}
    location={location}
    bannerImage={bannerImage}
    bannerText={bannerText}/>
  },{
    path:"/sign-in",
    element:<Signin/>
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
