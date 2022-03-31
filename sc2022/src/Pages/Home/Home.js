import './Home.scss'

import Card from '../../common/components/Card/Card'
import { Link } from 'react-router-dom'
import NavBar from '../../common/components/NavBar/NavBar'
import React from 'react'

const Home = () => {
  return (
    <div>
      <NavBar img={`${process.env.PUBLIC_URL}/logo192.png`}/>

      <div className='wrapper'>
        <Card
          img={`${process.env.PUBLIC_URL}/logo192.png`}
          title='Baseball'
          place='Shibuya'
          price='10'
        />
        <Card
          img={`${process.env.PUBLIC_URL}/logo192.png`}
          title='Football'
          place='Shinjuku'
          price='10'
        />
        <Card
          img={`${process.env.PUBLIC_URL}/logo192.png`}
          title='Table tennis'
          place='Waseda'
          price='5'
        />
        <Card
          img={`${process.env.PUBLIC_URL}/logo192.png`}
          title='Tennis'
          place='Shakujii Park'
          price='25'
        />
        <Card
          img={`${process.env.PUBLIC_URL}/logo192.png`}
          title='Swimming'
          place='Shinjuku'
          price='17'
        />
        <Card
          img={`${process.env.PUBLIC_URL}/logo192.png`}
          title='Badminton'
          place='Ueno'
          price='13'
        />
      </div>

      <Link to='/recruit'>
        <div className='recruit-container'>
          <input className='recruit-btn' type='button' value='Recruit'/>
        </div>
      </Link>
      
      <br/>

    </div>
  )
}

export default Home