import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import img2 from '../assets/images/img-2.jpg'
import img7 from '../assets/images/img-7.jpg'
import img8 from '../assets/images/img-8.jpg'
import img1 from '../assets/images/img-1.jpg'
import img9 from '../assets/images/img-9.jpg'

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these EPIC Destinations!</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
              <ul className="cards__items">
                    <CardItem 
                    src={img7}
                    text="Explore the hidden waterfall deep inside the Amazon Jungle"
                    label="Adventure"
                    path="/"
                    />
                    <CardItem 
                    src={img9}
                    text="Explore the hidden waterfall deep inside the Amazon Jungle"
                    label="Adventure"
                    path="/"
                    />
              </ul>
              <ul className="cards__items">
                    <CardItem 
                    src={img1}
                    text="Explore the hidden waterfall deep inside the Amazon Jungle"
                    label="Adventure"
                    path="/"
                    />
                    <CardItem 
                    src={img2}
                    text="Explore the hidden waterfall deep inside the Amazon Jungle"
                    label="Adventure"
                    path="/"
                    />
                    <CardItem 
                    src={img8}
                    text="Explore the hidden waterfall deep inside the Amazon Jungle"
                    label="Adventure"
                    path="/"
                    />
              </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards