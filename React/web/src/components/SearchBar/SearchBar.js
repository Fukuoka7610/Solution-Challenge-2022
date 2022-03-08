import './SearchBar.scss'

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const SearchBar = () => {
  return (
    <div>
      <div className='container'>
        <ul>
          <li>
            <img src={`${process.env.PUBLIC_URL}/magnifying-glass.svg`} alt=''/>
          </li>
          <li className='text'> SearchBar</li>
        </ul>
      </div>
    </div>
  )
}

export default SearchBar