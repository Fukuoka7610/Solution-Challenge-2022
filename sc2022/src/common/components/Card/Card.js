import './Card.scss'

import { Link } from 'react-router-dom'
import React from 'react'

const Card = (props) => {
  return (
    <>
        <div className='card'>
            <img className='card_img' src={props.img} alt=''/>
            <div className='card_body'>
                <h2 className='card_title'>{props.title}</h2>
                <p className='card_place'>{props.place}</p>
                <h3 className='card_price'>{props.price}</h3>
                <Link to='/map'><button className='card_btn'>Join in</button></Link>
            </div>
        </div>
    </>
  )
}

export default Card