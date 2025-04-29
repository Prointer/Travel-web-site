import React from 'react'

function TestimonailsSection(){
	return(
		<section className='testimonials-section'>
			<p>TESTIMONIALS</p>
			<h2 className='testimonials-title'>What Our Clients Say</h2>
			<div className='testimonials-container'>
				<div className='testimonial-box'>
					<p>"The best travel agency ever! Highly recommend!"</p>
					<p>- John Doe</p>
				</div>
				<div className='testimonial-box'>
					<p>"Amazing experience, will definitely book again!"</p>
					<p>- Jane Smith</p>
				</div>
			</div>
		</section>
	)
}
export default TestimonailsSection;
// //* This component represents the testimonials section of the tour agency website, including a title and a subtitle.