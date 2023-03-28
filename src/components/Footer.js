import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription'>
                Join the Adventure newsletter to receive our best vacation deals
            </p>
            <p className="footer-subscription-text">
                You can subscribe at any time.
            </p>
            <div className="input-areas">
                <form action="">
                    <input 
                    type="email" 
                    name="email" 
                    placeholder="Your Email" 
                    className='footer-input'
                    />
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                </form>
            </div>
        </section>
        <div className="footer-links">
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>About Us</h2>
                    <Link to='/travel_planner/sign-up'>How it works</Link>
                    <Link to='/travel_planner/'>Testimonials</Link>
                    <Link to='/travel_planner/'>Careers</Link>
                    <Link to='/travel_planner/'>Investors</Link>
                    <Link to='/travel_planner/'>Terms of Service</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>Contact Us</h2>
                    <Link to='/travel_planner/'>Contact</Link>
                    <Link to='/travel_planner/'>Support</Link>
                    <Link to='/travel_planner/'>Destinations</Link>
                    <Link to='/travel_planner/'>Sponsorships</Link>
                </div>
            </div>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>Videos</h2>
                    <Link to='/travel_planner/'>Submit Video</Link>
                    <Link to='/travel_planner/'>Ambassadors</Link>
                    <Link to='/travel_planner/'>Agency</Link>
                    <Link to='/travel_planner/'>Influencer</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>Social Media</h2>
                    <Link to='/travel_planner/'>Instagram</Link>
                    <Link to='/travel_planner/'>Facebook</Link>
                    <Link to='/travel_planner/'>Youtube</Link>
                    <Link to='/travel_planner/'>Twitter</Link>
                </div>
            </div>
        </div>
        <section className='social-media'>
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <Link to="/" className='social-logo'>
                        TRVL <i className="bi bi-award"/>
                    </Link>
                </div>
                <small className="website-rights">TRVL © 2020</small>
                <div className="social-icons">
                    <Link to='/travel_planner/' target="_blank" aria-label="Facebook" className='social-icon-link facebook'>
                        <i className="bi bi-meta"></i>
                    </Link>
                    <Link to='/travel_planner/' target="_blank" aria-label="Instagram" className='social-icon-link facebook'>
                        <i className="bi bi-instagram"></i>
                    </Link>
                    <Link to='/travel_planner/' target="_blank" aria-label="Twitter" className='social-icon-link facebook'>
                        <i className="bi bi-twitter"></i>
                    </Link>
                    <Link to='/travel_planner/' target="_blank" aria-label="Linkedin" className='social-icon-link facebook'>
                        <i className="bi bi-linkedin"></i>
                    </Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer