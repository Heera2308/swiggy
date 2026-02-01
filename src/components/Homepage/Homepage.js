import React from 'react'
import './Homepage.css';
import { Link } from 'react-router-dom';

export default function Homepage({ image, loc, navLinks, cartCount })
 {
    return (
        <div className="swiggy-header">
            <nav className="homepage-header">
                <img src={image} alt="Swiggy company logo" />
                <a href="/">{loc}</a>
            </nav>
            <ul>{navLinks.map((item,i)=>(
                <li key={i} ><Link to={item.path}>{item.label==="Cart"?`Cart(${cartCount})`:item.label}</Link></li>
            ))}
            </ul>
        </div>
    )
}
