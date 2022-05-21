import React from 'react'

export default function Card(props) {

    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
      <div className='card'>
          {badgeText && <div className='card__badge'>{badgeText}</div>}
          <img src={props.img} alt="" className='card__image' />
          <div className='card__stats'>
              <img src="https://i.imgur.com/VYr1L13.png" alt="" className='card__star'/>
              <span>{props.rating}</span>
              <span className='gray'>({props.reviewCount}) .</span>
              <span className='gray'>{props.country}</span>
          </div>
          <p>{props.title}</p>
          <p><span className='bold'>From ${props.price}</span> / person</p>
      </div>
  )
}
