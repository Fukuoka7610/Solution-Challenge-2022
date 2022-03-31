import {Clear1, Clear2, Clear3} from '../../common/functions/clear'
import React, { useState } from 'react'
import {formSubmit1, formSubmit2, formSubmit3} from '../../common/functions/formSubmit'

import NavBar from '../../common/components/NavBar/NavBar'

/*
const Form = ({ cards, setCardList }) => {

  const [inputText, setInputText] = useState('') // フォームの内容の状態を管理するオブジェクト

  const handleSubmit = (e) =>{
    e.preventDefault();

    フォームに打ち込んだ文字をコンソールで確認
    console.log(inputText);
    

    // カードの追加
    setCardList([
      ...cards,
      {
        title: inputText,
        place: inputText,
        price: inputText,

      }
    ]);

    setInputText('');
  }

  const handleChange = (e) =>{
    setInputText(e.target.value);
    //console.log(inputText);
  }

  return (
    <div>
        <NavBar img={`${process.env.PUBLIC_URL}/logo192.png`}/>
        
        <div className='container-form'>
          <form className='frame' onSubmit={handleSubmit}>
            <p className='title'>Insert an event title here:</p>
            <input 
              className='title-form' 
              id='form1' 
              type='text' 
              placeholder='Insert' 
              //onKeyPress={ formSubmit1 }
              onChange={handleChange}
              value={inputText}
            />
            <input className='clear' type='button' value='×' onClick={Clear1}/>
          </form>

          <form className='frame'>
            <p className='title'>Insert place here:</p>
            <input 
              className='title-form' 
              id='form2' type='text' 
              placeholder='Insert' 
              //onKeyPress={ formSubmit2 }
              onChange={handleChange}
              value={inputText}
            />
            <input className='clear' type='button' value='×' onClick={Clear2}/>
          </form>
          
          <form className='frame'>
            <p className='title'>Insert price here:</p>
            <input 
              className='title-form' 
              id='form3' 
              type='text' 
              placeholder='Insert' 
              //onKeyPress={ formSubmit3 }
              onChange={handleChange}
              value={inputText}
            />
            <input className='clear' type='button' value='×' onClick={Clear3}/>
          </form>
          
        </div>
    </div>
  )
}
*/

const Form = ({ cards, setCardList }) => {

  const [inputTitle, setInputTitle] = useState('');
  const [inputPlace, setInputPlace] = useState('');
  const [inputPrice, setInputPrice] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();
    setCardList([
      ...cards,
      {
        title: inputTitle,
        place: inputPlace,
        price: inputPrice,
      }
    ]);

    setInputTitle('');
  }

  /*
  const handleSubmitPlace = (e) =>{
    e.preventDefault();
    setCardList([
      ...cards,
      {
        place: inputPlace,
      }
    ]);

    setInputPlace('');
  }

  const handleSubmitPrice = (e) =>{
    e.preventDefault();
    setCardList([
      ...cards,
      {
        price: inputPrice,
      }
    ]);

    setInputPrice('');
  }
  */

  const handleChangeTitle = (e) =>{
    setInputTitle(e.target.value);
  }

  const handleChangePlace = (e) =>{
    setInputPlace(e.target.value);
  }

  const handleChangePrice = (e) =>{
    setInputPrice(e.target.value);
  }

  return (
    <div>
        <NavBar img={`${process.env.PUBLIC_URL}/logo192.png`}/>
        
        <div className='container-form'>
          <form className='frame'>
            <p className='title'>Insert an event title here:</p>
            <input 
              className='title-form' 
              id='form1' 
              type='text' 
              placeholder='Insert' 
              onChange={handleChangeTitle}
              value={inputTitle}
            />
            <input className='clear' type='button' value='×' onClick={Clear1}/>

            <p className='title'>Insert place here:</p>
            <input 
              className='title-form' 
              id='form2' type='text' 
              placeholder='Insert' 
              onChange={handleChangePlace}
              value={inputPlace}
            />
            <input className='clear' type='button' value='×' onClick={Clear2}/>
          
            <p className='title'>Insert price here:</p>
            <input 
              className='title-form' 
              id='form3' 
              type='text' 
              placeholder='Insert' 
              onChange={handleChangePrice}
              value={inputPrice}
            />
            <input className='clear' type='button' value='×' onClick={Clear3}/>

            <button className='create' onSubmit={handleSubmit}>Create</button>
          </form>
          
        </div>
    </div>
  )
}

export default Form