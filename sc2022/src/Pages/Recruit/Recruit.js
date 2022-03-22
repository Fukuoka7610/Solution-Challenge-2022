import './Recruit.scss'

import Clear from '../../common/functions/clear'
import NavBar from '../../common/components/NavBar/NavBar'
import React from 'react'

const Recruit = () => {
  return (
    <div>
      <NavBar img={`${process.env.PUBLIC_URL}/place-white.svg`}/>
      
      <div className='container-form'>
        <p className='title'>Insert an event title here:</p>
        <input className='title-form' id='form' type='text' placeholder='Insert'/>
        <input className='clear' type='button' value='×' onClick={Clear}/>
        
      </div>
    </div>
  )
}

export default Recruit