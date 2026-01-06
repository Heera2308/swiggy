import { Image } from '@chakra-ui/react'
import React from 'react';
import { Link } from 'react-router-dom';
import './swiggycorporate.css';

export default function SwiggyCorporate(props) {
  return (
    <div >
      <div className="swiggy-corporate-nav">
        <Image src={props.image1} alt="swiggy logo" height="50px" />
        <ul className="inside-Nav">
          {props.navItems.map((item, index) => (
            <li key={index}><Link to={item.path}>{item.label}</Link>
            </li>))}
        </ul>
      </div>
      <div className="head-para">
        <h2>{props.heading}</h2>
       <p>{props.description}</p>
      </div>
      
    </div>
  )
}
