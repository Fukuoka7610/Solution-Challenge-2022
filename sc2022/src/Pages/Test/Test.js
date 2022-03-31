import './Test.scss'

import React, { useState } from "react";

import CardList from './CardList/CardList'
import Form from './Form';
import { Link } from 'react-router-dom'
import NavBar from '../../common/components/NavBar/NavBar'

const Test = () => {
  // フォームの内容の状態を管理するオブジェクト
  const [cards, setCardList] = useState([
    {
      id: 1,
      img: `${process.env.PUBLIC_URL}/logo192.png`,
      title: 'Baseball',
      place: 'Shibuya',
      price: '10',
    },
    {
      id: 2,
      img: `${process.env.PUBLIC_URL}/logo192.png`,
      title: 'Football',
      place: 'Shinjuku',
      price: '10'
    },
    {
      id: 3,
      img: `${process.env.PUBLIC_URL}/logo192.png`,
      title: 'Table tennis',
      place: 'Waseda',
      price: '5'
    },
    {
      id: 4,
      img: `${process.env.PUBLIC_URL}/logo192.png`,
      title: 'Tennis',
      place: 'Shakujii Park',
      price: '25'
    },
    {
      id: 5,
      img: `${process.env.PUBLIC_URL}/logo192.png`,
      title: 'Swimming',
      place: 'Shinjuku',
      price: '17'
    },
    {
      id: 6,
      img: `${process.env.PUBLIC_URL}/logo192.png`,
      title: 'Badminton',
      place: 'Ueno',
      price: '13'
    },
  ]);
  
    return(
        <div>
            <NavBar img={`${process.env.PUBLIC_URL}/logo192.png`}/>
            <img className='trash' src={`${process.env.PUBLIC_URL}/trash.svg`} alt=''/>
            <Form cards={cards} setCardList={setCardList}/>
            <CardList cards={cards} setCardList={setCardList}/>
            <Link to='/form'>
                <div className='create-container'>
                  <input className='create-btn' type='button' value='Create'/>
                </div>
            </Link>
        </div>
    )
}

export default Test