import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from './components/ui/provider';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Sweetindia from './components/sweetindia/Sweetindia';
import Cards from './components/Card/Cards';
import { Container } from '@chakra-ui/react';

const heading = "Top restaurant chains in Chaibasa";
const data = [{
  image: "/Image/card1.jpg",
  restaurantName: "Sweet India",
  rating: "4.1",
  Timing: "15-20 mins",
  title: "Sweets,India,Dessert Chai_basa",
},
{
  image: "/Image/card2.jpg",
  restaurantName: "Appy Jours",
  rating: "4",
  Timing: "25-30 mins",
  title: "Pizzas,Italian,Pastas Chai_basa",
}, {
  image: "/Image/card3.jpg",
  restaurantName: "Beyond Temptation",
  rating: "4.1",
  Timing: "25-30 mins",
  title: "Bakery,Burger,Beverages,Pizza, Chai_basa",
}, {
  image: "/Image/card4.jpg",
  restaurantName: "Sunshine Restaurant",
  rating: "4.4",
  Timing: "25-30 mins",
  title: "North Indian,Briyani,Chinese Chai_basa",
},]

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
        path: "/sweetindia",
        element: 
        <Container>
          <Sweetindia heads="Sweet India"
          rating="4.1"
          number="500"
          price="₹200 for two"
          description="Sweets"
          itemname="Dessert"
          way="Chaibasa"
          time="15–20 mins" />
          </Container>
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
