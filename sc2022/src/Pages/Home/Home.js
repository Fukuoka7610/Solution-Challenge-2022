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
          title='title'
          place='place'
          price='price'
        />
        <Card
          img={`${process.env.PUBLIC_URL}/logo192.png`}
          title='title'
          place='place'
          price='price'
        />
        <Card
          img={`${process.env.PUBLIC_URL}/logo192.png`}
          title='title'
          place='place'
          price='price'
        />
        <Card
          img={`${process.env.PUBLIC_URL}/logo192.png`}
          title='title'
          place='place'
          price='price'
        />
        <Card
          img={`${process.env.PUBLIC_URL}/logo192.png`}
          title='title'
          place='place'
          price='price'
        />
        <Card
          img={`${process.env.PUBLIC_URL}/logo192.png`}
          title='title'
          place='place'
          price='price'
        />
        <Card
          img={`${process.env.PUBLIC_URL}/logo192.png`}
          title='title'
          place='place'
          price='price'
        />
        <Card
          img={`${process.env.PUBLIC_URL}/logo192.png`}
          title='title'
          place='place'
          price='price'
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