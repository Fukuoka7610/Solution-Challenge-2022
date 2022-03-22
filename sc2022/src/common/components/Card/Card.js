import './Card.scss'

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
                <button className='card_btn'>Join in</button>
            </div>
        </div>
    </>
  )
}

export default Card