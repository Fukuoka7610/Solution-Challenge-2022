import './Search.scss'


import NavBar from '../components/NavBar/NavBar'
import React from 'react'

const Map = () => {
    return (
    <div>
        <NavBar/>
        <button class="button button5" >FILTER</button>
        <div className='picker'>
            <h3 className='picker_title'>SPORTS</h3>
                <div class="row">
                    <div class="column">
                        <img src="football.png" alt="football" width="50" height="50"></img>
                    </div>
                    <div class="column">
                        <img src="football.png" alt="football" width="50" height="50"></img>
                    </div>
                    <div class="column">
                        <img src="football.png" alt="football" width="50" height="50"></img>
                    </div>
                    <div class="column">
                        <img src="football.png" alt="football" width="50" height="50"></img>
                    </div>
                    <div class="column">
                        <img src="football.png" alt="football" width="50" height="50"></img>
                    </div>
                    <div class="column">
                        <img src="football.png" alt="football" width="50" height="50"></img>
                    </div>
                    <div class="column">
                        <img src="football.png" alt="football" width="50" height="50"></img>
                    </div>
                </div>
             </div>
             <div className='picker'>
            <h3 className='picker_title'>DATE/Time</h3>
            <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FTokyo&showTitle=0&showPrint=0&showCalendars=0&showTz=0&mode=WEEK&src=cnlvaWl6dWthYWRAZ21haWwuY29t&src=amEuamFwYW5lc2UjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%230B8043" width="100%" height="400" scrolling="no"></iframe>
             </div>

        <div className='picker'>
            <h3 className='picker_title'>FACILITIES</h3>
            <div class="row">
                    <div class="column">
                        <img src="toilet.jpg" alt="toilet" width="50" height="50"></img>
                    </div>
                    <div class="column">
                        <img src="toilet.jpg" alt="football" width="50" height="50"></img>
                    </div>
                    <div class="column">
                        <img src="toilet.jpg" alt="football" width="50" height="50"></img>
                    </div>
                    <div class="column">
                        <img src="toilet.jpg" alt="football" width="50" height="50"></img>
                    </div>
                    <div class="column">
                        <img src="toilet.jpg" alt="football" width="50" height="50"></img>
                    </div>
                    <div class="column">
                        <img src="toilet.jpg" alt="football" width="50" height="50"></img>
                    </div>
                    <div class="column">
                        <img src="toilet.jpg" alt="football" width="50" height="50"></img>
                    </div>

                </div>
            
        </div>
    </div>          
          
      )
}

export default Map