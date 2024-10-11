import React from 'react';

function Card({ imgSrc, title, desc, link }) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="card">
            <img src={imgSrc} className="card-img" alt="Picture of the current news title" />
            <h2 className="card-title">{title}</h2>
            <p className="card-para">{desc}</p>
        </a>
    );
}

export default Card;
