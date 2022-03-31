import './TestCard.scss';

import React, { Component } from 'react';

class TestCard extends Component {
  render() {
    return(
        <div className='card'>
            <img className='card_img' src={this.props.img} alt=''/>
            <div className='card_body'>
                <h2 className='card_title'>{this.props.title}</h2>
                <p className='card_place'>{this.props.place}</p>
                <h3 className='card_price'>{this.props.price}</h3>
                <button className='card_btn'>Join in</button>
            </div>
        </div>
    );
  }

}

export default TestCard