import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import vid3 from '../assets/videos/video-3.mp4'

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src={vid3} autoPlay loop muted />
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className="hero-btns">
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                GET STARTED
            </Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                WATCH TRAILER <i className="bi bi-play"/>
            </Button>
        </div>
    </div>
  )
}

export default HeroSection