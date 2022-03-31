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
      title: 'Hello, React!',
      place: 'React始めました',
      price: '23',
    },
    {
      id: 2,
      img: `${process.env.PUBLIC_URL}/logo192.png`,
      title: 'Hello, Redux!',
      place: 'Reduxも始めました',
      price: '797',
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