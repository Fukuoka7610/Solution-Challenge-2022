import './Home.scss'

import Card from '../../components/Card/Card'
import NavBar from '../../components/NavBar/NavBar'
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
    </div>
  )
}

export default Home