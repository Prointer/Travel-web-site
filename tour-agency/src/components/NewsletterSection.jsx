import React from 'react'
import newsIcon from '../assets/newsletterIcon.svg'

function NewsletterSection(){
	return(
	<section className='newsletter-section'>
		<div className='newsletter-title-container'>
		<img src={newsIcon} alt="SendIcon" className='newsletter-icon'/>
		<p className='newsletter-title'>Subscribe to get information, latest news and other interesting offers about Jadoo</p>
		</div>
		<div className='newsletter-input-container'>
			<input type='email' placeholder='Your email address' className='newsletter-input'/>
			<button className='newsletter-button'>Subscribe</button>
		</div>
			</section>)
}
export default NewsletterSection;
// //* This component represents the contact section of the tour agency website, including a subscription prompt and an input field for email address.