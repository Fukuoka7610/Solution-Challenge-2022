import React, { Component } from 'react';

import TestCard from '../TestCard/TestCard';

/*class CardList extends Component {

  render() {
    const cards = this.props.cards.map( card =>
      <TestCard
        key={card.id}
        {...card}
      />
    )

    return(
        <div className='wrapper'>
            { cards }
        </div>
     
    );
  }
}*/

const CardList = ({cards, setCardList}) =>{
  return(
    <div className='wrapper'>
        { cards.map((card,id) => (
          <div className='card' key={id}>
              <img className='card_img' src={card.img} alt=''/>
              <div className='card_body'>
                  <h2 className='card_title'>{card.title}</h2>
                  <p className='card_place'>{card.place}</p>
                  <h3 className='card_price'>{card.price}</h3>
                  <button className='card_btn'>Join in</button>
              </div>
          </div>
        )) }
    </div>
  );
}

export default CardList