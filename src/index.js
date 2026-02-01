import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from './components/ui/provider';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cards from './components/Card/RestaurantList';
import Search from './components/Search/Search';
import SwiggyCorporate from './components/SwiggyCorporate/SwiggyCorporate';
import Offers from './components/Offers/Offers';
import Help from './components/Help/Help';
import Signin from './components/Signin/Signin';
import Cart from './components/Cart/Cart';
import logo from './assets/Image/swiggy.png';
import Restro from './components/Restro/Restro';
import Resturantlist2 from './components/Resturantlist2/Resturantlist2.js';



const heading = "Top restaurant chains in Chaibasa";
const data = [{
  id: "sweet-india",
  image: "/Image/card1.jpg",
  restaurantName: "Sweet India",
  rating: 4.1,
  number: 588,
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
  ],
  menubutton1: "pure Veg",
  menubutton2: "BestSeller",
  dishes: [{
    id: "sweetindia-1",
    dishesName: "Curd",
    menuImage: "/Image/curd.avif",
    price: 89,
  },
  {
    id: "sweetindia-2",
    dishesName: "Paneer Stuffed Chole Bhature",
    menuImage: "/Image/chola.avif",
    price: 129,
  },
  {
    id: "sweetindia-3",
    dishesName: "Poori & Sabji",
    menuImage: "/Image/poori.avif",
    price: 99,
  }, {
    id: "sweetindia-4",
    dishesName: "Refine Ladoo (10 pieces)",
    menuImage: "/Image/ladu.avif",
    price: 100,
  }, {
    id: "sweetindia-5",
    dishesName: "Gulab Jamun (10 pieces)",
    menuImage: "/Image/jamun.avif",
    price: 240,
  }
  ]
},
{
  id: "Appy-Hours",
  image: "/Image/card2.jpg",
  restaurantName: "Appy Hours",
  number: 798,
  location: "Outlet,Chaibasa",
  description: "Pizzas,Italian",
  price: " 349 for two",
  rating: 4.0,
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
    },
    {
      offers: "Flat 30 off",
      coupon: "NO CODE REQUIRED",
    }, {
      offers: "10% off Upto 100",
      coupon: "USE SBIDC100",
    },
  ],
  menubutton1: "pure Veg",
  menubutton2: "BestSeller",
  dishes: [{
    id: "Appy-Hours-1",
    dishesName: "Garlic Stuff Non Veg Chicken Bread",
    menuImage: "/Image/garlic.jpeg",
    price: 179,
  },
  {
    id: "Appy-Hours-2",
    dishesName: "Garlic Stuffed Bread",
    menuImage: "/Image/bread.JPG",
    price: 159,
  },
  {
    id: "Appy-Hours-3",
    dishesName: "Chicken popcorn 10 picese",
    menuImage: "/Image/popcorn.avif",
    price: 179,
  }, {
    id: "Appy-Hours-4",
    dishesName: "Barbecue Chicken Pizza",
    menuImage: "/Image/barbie.jpeg",
    price: 299,
  }, {
    id: "Appy-Hours-5",
    dishesName: "Cheese & Tomato Pizza",
    menuImage: "/Image/tmpizza.jpeg",
    price: 145,
  }
  ]
},
{
  id: "Beyond-Temptation",
  image: "/Image/card3.jpg",
  restaurantName: "Beyond Temptation",
  number: 638,
  location: "Outlet,Chaibasa",
  description: "Bakery,Burgers",
  price: " 300 for two",
  rating: 4.1,
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
    },],
  menubutton1: "pure Veg",
  menubutton2: "BestSeller",
  dishes: [{
    id: "Beyond-Temptation-1",
    dishesName: "Black Current Cake | 1 Pound",
    menuImage: "/Image/blackcake.avif",
    price: 599,
  },
  {
    id: "Beyond-Temptation-2",
    dishesName: "Chocolate Cake | 1 Pound",
    menuImage: "/Image/choccake.avif",
    price: 649,
  },
  {
    id: "Beyond-Temptation-3",
    dishesName: "Black Forest Cake | 1 Pound",
    menuImage: "/Image/forestcake.avif",
    price: 599,
  }, {
    id: "Beyond-Temptation-4",
    dishesName: "Mango Cake | 1 Pound",
    menuImage: "/Image/mangocake.avif",
    price: 599,
  }, {
    id: "Beyond-Temptation-5",
    dishesName: "Butterscoth Cake | 1 Pound",
    menuImage: "/Image/buttercake.avif",
    price: 599,
  }
  ]
},
{
  id: "Sunshine-Restaurant",
  image: "/Image/card4.jpg",
  restaurantName: "Sunshine Restaurant",
  number: "9.1K+",
  location: "Outlet,Chaibasa",
  description: "North Indian,Briyani",
  price: " 300 for two",
  rating: 4.4,
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
  },],
  menubutton1: "pure Veg",
  menubutton2: "BestSeller",
  dishes: [{
    id: "Sunshine-Restaurant-1",
    dishesName: "Chicken Chowmein",
    menuImage: "./Image/cc.avif",
    price: 259,
  },
  {
    id: "Sunshine-Restaurant-2",
    dishesName: "Chicken Fried Rice",
    menuImage: "/Image/cfr.avif",
    price: 256,
  },
  {
    id: "Sunshine-Restaurant-3",
    dishesName: "Egg Fried Rice",
    menuImage: "/Image/efr.avif",
    price: 249,
  }, {
    id: "Sunshine-Restaurant-4",
    dishesName: "Veg Hakka Noodles",
    menuImage: "/Image/vhn.avif",
    price: 139,
  }, {
    id: "Sunshine-Restaurant-5",
    dishesName: "Veg Fried Rice",
    menuImage: "/Image/vfr.avif",
    price: 129,
  }
  ]
},
{
  id: "KFFC-kolhan Fast Food Center",
  image: "/Image/kfffc.avif",
  restaurantName: "KFFC-Kolhan Fast Food Center",
  number: 389,
  location: "Outlet,Chaibasa",
  description: "Chinese,pastas",
  price: " 149 for two",
  rating: 4.3,
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
  },],
  menubutton1: "pure Veg",
  menubutton2: "BestSeller",
  dishes: [{
    id: "KFFC-kolhan Fast Food Center-1",
    dishesName: "Veg Rice",
    menuImage: "./Image/curd.avif",
    price: 65,
  },
  {
    id: "KFFC-kolhan Fast Food Center-2",
    dishesName: "Egg Rice",
    price: 75,
  },
  {
    id: "KFFC-kolhan Fast Food Center- 3",
    dishesName: "Veg Momo [10 Pcs]",
    price: 104,
  }, {
    id: "KFFC-kolhan Fast Food Center-4",
    dishesName: "Chicken Momo [10 Pcs]",
    price: 130,
  }, {
    id: "KFFC-kolhan Fast Food Center- 5",
    dishesName: "Paneer Chil",
    price: 85,
  }
  ]
},
{
  id: "Champaran-Handi",
  image: "/Image/ch.avif",
  restaurantName: "Champaran Handi",
  number: 147,
  location: "Outlet,Chaibasa",
  description: "Bihari Indian",
  price: " 300 for two",
  rating: 4.4,
  Timing: "25-30 mins",
  title: "North Indian,Briyani,Chinese Chai_basa",
  data1: [{
    offers: "Flat 30 off",
    coupon: "No Code REQUIRED",
  },
  {
    offers: "10% off Upto 100",
    coupon: "USE SBIDC100",
  },],
  menubutton1: "pure Veg",
  menubutton2: "BestSeller",
  dishes: [{
    id: "Champaran-Handi-1",
    dishesName: "Handi Mutton Thali",
    menuImage: "./Image/curd.avif",
    price: 280,
  },
  {
    id: "Champaran-Handi-2",
    dishesName: "Mutton Chaap(Full Plate)",
    price: 430,
  },
  {
    id: "Champaran-Handi-3",
    dishesName: "Mutton Liver Fry (Full Plate)",
    price: 440,
  }, {
    id: "Champaran-Handi-4",
    dishesName: "Plain Steam Usna Rice (Full)",
    price: 80,
  }, {
    id: "Champaran-Handi-5",
    dishesName: "Plain Steam basmati Rice (Full)",
    price: 90,
  }
  ]
},
{
  id: "The-garden-Inn",
  image: "/Image/thegardenin.avif",
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
    },],
  menubutton1: "pure Veg",
  menubutton2: "BestSeller",
  dishes: [{
    id: "The-garden-Inn-1",
    dishesName: "Chicken Kadai",
    menuImage: "./Image/curd.avif",
    price: 299,
  },
  {
    id: "The-garden-Inn-2",
    dishesName: "Anda (Egg) Curry",
    price: 129,
  },
  {
    id: "The-garden-Inn- 3",
    dishesName: "Fish Curry",
    price: 129,
  }, {
    id: "The-garden-Inn-4",
    dishesName: "Chicken Curry",
    price: 129,
  }, {
    id: "The-garden-Inn- 5",
    dishesName: "Mutton Curry",
    price: 199,
  }
  ]
},
]
// --------------------------------------
const image1 = "/Image/swiggy-logo.webp";
const heading1 = "About Us";
const description1 = "Swiggy is a new-age consumer-first organization offering an easy-to-use convenience platform, accessible through a unified app.";
const navItems = [{
  label: "About Swiggy",
  path: "/about-swiggy"
}, {
  label: "Our Business",
  path: "/ourbusiness"
}, {
  label: "Delivering For Everyone",
  path: "/delivering-for-everyone"
}, {
  label: "News Room",
  path: "/news-room"
}, {
  label: "Investor Realtions",
  path: "/investor-realtions"
}, {
  label: "Sustainability",
  path: "/sustainability"
}, {
  label: "Contact Us",
  path: "/contact-us"
},]
// ----------------------------------------
const logoSrc = "/Image/swiggy-logo.webp";
const location = "Setup Your precise location";
const bannerImage = "/Image/DO_collectionBanner.png";
const bannerText = "Restaurants With Great Offers Near Me";
// -----------------------------------------------------------
const title = "Help & Support";
const description = "Let's take a step ahead and help you better."
// ------------------------------------------------------------------

const cartHead = "SECURE CHECKOUT";
const cartList = [{
  label: "Help",
  path: "/help"
},
{
  label: "Sign In",
  path: "/sign-in"
}]

// -----------------------------------------------------------

const headeroflist2 = "Restaurants with online food delivery in Chaibasa";
const selectCategories = ["Relevance", "Delivery Time", "Rating", "Cost: Low to High", "Cost: High to Low", "Filters"];

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <>
            <Cards heading={heading} data={data} />

            <Resturantlist2 headeroflist2={headeroflist2} selectCategories={selectCategories} />
          </>
        )
      },
      {
        path: "cart",
        element: <Cart image={logo}
          cartHead={cartHead}
          cartList={cartList} />
      },

      {
        path: "search",
        element: <Search />
      },
      {
        path: "help",
        element: <Help title={title}
          description={description}
        />
      },
      {
        path: "/restaurant/:id",
        element:
          <Restro data={data}
          />
      }]
  }, {
    path: "/swiggy-corporate",
    element: <SwiggyCorporate navItems={navItems}
      image1={image1}
      heading1={heading1}
      description1={description1} />
  },
  {
    path: "/offers",
    element: <Offers
      logoSrc={logoSrc}
      location={location}
      bannerImage={bannerImage}
      bannerText={bannerText} />
  },
  {
    path: "/sign-in",
    element: <Signin />
  },
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
