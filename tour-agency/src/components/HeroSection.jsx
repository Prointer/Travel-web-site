import React from 'react'
import TravellerImage from '../assets/Traveller_1.png'
import PlaneImage from '../assets/plane.svg'
function HeroSection() {
	return (
		<section className='hero-section'>
			<div className='hero-section-left'>
				<h3 className='hero-title-top'>BEST DESTINATION AROUND THE WORLD</h3>
				<h2 className='hero-title'>Travel, <span className='highlight'>enjoy</span> and live a new and full life</h2>
				<p className='hero-description'>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
				<div className='hero-btns-container'>
					<button className='hero-btn'>Find out more</button>
					<button className="hero-play-btn">
  					<svg viewBox="0 0 24 24" width="40" height="40" fill="white">
    					<path d="M8 5v14l11-7z" />
  					</svg>
					</button>
					<p className='hero-play-text'>⇐ Play Demo</p>
			</div>
			</div>
			<div className='hero-section-right'>
				<img src={TravellerImage} alt='Travel' className='hero-image-main' />
				<img src={PlaneImage} alt='Plane' className='hero-image-plane-1' />
				<img src={PlaneImage} alt='Plane' className='hero-image-plane-2' />
			</div>
		</section>
	);
}
export default HeroSection;
// //* This component represents the hero section of the tour agency website, including a title, description, and buttons for exploration and demo.