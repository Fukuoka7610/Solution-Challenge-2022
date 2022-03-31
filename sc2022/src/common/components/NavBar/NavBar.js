import './NavBar.scss'

import { Link } from 'react-router-dom'
import React from 'react'

const NavBar = (props) => {
  return (
    <div id='navbar'>
        <ul>
            {/* <li><img src={`${process.env.PUBLIC_URL}/logo192.png`} alt=''/></li> */}
            <li><img src={ props.img } alt=''/></li>
            <li className='nav_home'><Link to='/'>HOME</Link></li>
            <li className='nav_recruit'><Link to='/recruit'>RECRUIT</Link></li>
            <li className='nav_map'><Link to='/map'>MAP</Link></li>
            <li className='nav_search'><Link to='/search'>SEARCH</Link></li>
        </ul>
    </div>
  )
}

export default NavBar