import React from 'react'
function Card({imgSrc, title, desc}) {
    return (
      <div className = "card">
            <img src ={imgSrc} className ="card-img" alt ="Picture of the current news title">
            </img>
            <h2 className= "card-title">{title}</h2>
            <p className= "card-para"> {desc}</p>
      </div>
    );
  }
  
  export default Card;