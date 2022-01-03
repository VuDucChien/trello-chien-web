import  React from 'react'

import './Card.scss'

function Card(props){
    const {card} = props
     console.log(card)
    return (
        <li className="card-item">
          {card.cover && 
          <img 
          src={card.cover} 
          className="card-cover"
          onMouseDown={e =>e.preventDefault()}
        alt="https://cv.trungquandev.com/"/>}
        {card.title}
      </li>
    )
}

export default Card