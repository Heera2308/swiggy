import React from 'react'
import './Homepage.css';

export default function Homepage(props) {
    return (
        <div className="swiggy-header">
            <nav className="homepage-header">
                <img src={props.image} alt="Swiggy company logo" />
                <a href="/">{props.loc}</a>
            </nav>
            <ul>{props.list.map((item,i)=>(
                <li key={i} ><a href="/offers">{item}</a></li>
            ))}
            </ul>
        </div>
    )
}
