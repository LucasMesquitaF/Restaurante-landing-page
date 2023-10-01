import React from 'react'
import './Card.css'

function Card(props) {
    return (
    <div className='card-container'>
        <img src={props.img} alt="" />
        <h3>{props.title}</h3>
        <p>{props.text}</p>
    </div>
  )
}

export default Card