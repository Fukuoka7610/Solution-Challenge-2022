import './Search.scss'

import NavBar from '../../components/NavBar/NavBar'
import React from 'react'

const calendar='https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FTokyo&showTitle=0&showPrint=0&showCalendars=0&showTz=0&mode=WEEK&src=cnlvaWl6dWthYWRAZ21haWwuY29t&src=amEuamFwYW5lc2UjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%230B8043'

const sports = [
    'football.png', 'football.png', 'football.png', 'football.png',
    'football.png', 'football.png', 'football.png', 'football.png',
]

const facilities = [
    'toilet.jpg', 'toilet.jpg', 'toilet.jpg', 'toilet.jpg',
    'toilet.jpg', 'toilet.jpg', 'toilet.jpg', 'toilet.jpg',
]

const Map = () => {
    return (
        <div>
            <NavBar/>
            <button className="button button5" >FILTER</button>
            <div className='picker'>
                <h3 className='picker_title'>SPORTS</h3>
                    <div class="row">
                        {sports.map((sports) => 
                            <div className='column'>
                                <img src={sports} alt='football' width='50' height='50'/>
                            </div>
                        )}
                    </div>
                </div>
                <div className='picker'>
                    <h3 className='picker_title'>DATE/Time</h3>
                    <iframe title='calendar' src={ calendar } width="100%" height="400" scrolling="no"/>
                </div>

            <div className='picker'>
                <h3 className='picker_title'>FACILITIES</h3>
                <div class="row">
                    {facilities.map((facilities) => 
                        <div className='column'>
                            <img src={facilities} alt='toilet' width='50' height='50'/>
                        </div>
                    )}
                </div>
            </div>
        </div>               
    )
}

export default Map