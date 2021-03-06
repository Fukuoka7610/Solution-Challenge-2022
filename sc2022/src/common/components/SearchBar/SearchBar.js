import './SearchBar.scss'

import { Clear } from '../../functions/clear'
import React from 'react'
import { formSubmit } from '../../functions/formSubmit'

//↓ Testing the behavior of Enter key on the form
const formTest = (e) =>{
  if(e.key == 'Enter'){ // If Enter key is pressed down, the content in the form of Search Bar will be submitted
    const value = document.getElementById('form').value;
    e.preventDefault();
    console.log(value);
  }
} 

const SearchBar = () => {
  return (
    <div>
      <div className='container-SearchBar'>
        <ul>
          {/*
          <li>
            <img src={`${process.env.PUBLIC_URL}/magnifying-glass-white.svg`} alt=''/>
          </li>
          */}
          
          <li className='search-box'>
            <input className='text' id='form' type='text' placeholder='Search' onKeyPress={ e => formSubmit }/>
            <div className='btn-container'>
              <input className='clear-btn' type='button' value='×' onClick={ Clear }/>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SearchBar