import './Recruit.scss'

import {Clear1, Clear2, Clear3} from '../../common/functions/clear'
import React, { Component } from 'react'
import { formSubmit1, formSubmit2, formSubmit3 } from '../../common/functions/formSubmit'

import NavBar from '../../common/components/NavBar/NavBar'

class Recruit extends Component {
  render(){
    return (
      <div>
        <NavBar img={`${process.env.PUBLIC_URL}/place-white.svg`}/>
        
        <div className='container-form'>
          <p className='title'>Insert an event title here:</p>
          <input className='title-form' id='form1' type='text' placeholder='Insert' onKeyPress={ formSubmit1 }/>
          <input className='clear' type='button' value='×' onClick={Clear1}/>
        

       
          <p className='title'>Insert place here:</p>
          <input className='title-form' id='form2' type='text' placeholder='Insert' onKeyPress={ formSubmit2 }/>
          <input className='clear' type='button' value='×' onClick={Clear2}/>
        
          
        
          <p className='title'>Insert price here:</p>
          <input className='title-form' id='form3' type='text' placeholder='Insert' onKeyPress={ formSubmit3 }/>
          <input className='clear' type='button' value='×' onClick={Clear3}/>
        </div>
      </div>
    )
  }
}

export default Recruit