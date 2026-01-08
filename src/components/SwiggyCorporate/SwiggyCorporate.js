import { Image } from '@chakra-ui/react'
import React from 'react';
import { Link } from 'react-router-dom';
import './SwiggyCorporate.css';

export default function SwiggyCorporate({image1,navItems,heading,description}) {
  return (
    <div >
      <div className="swiggy-corporate-nav">
        <Image src={image1} alt="swiggy logo" height="50px" />
        <ul className="inside-nav">
          {navItems.map((item, index) => (
            <li key={index}><Link to={item.path}>{item.label}</Link>
            </li>))}
        </ul>
      </div>
      <div className="head-para">
        <h2>{heading}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}
