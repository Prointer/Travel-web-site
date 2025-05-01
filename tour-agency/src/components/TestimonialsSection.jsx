import { CircleArrowLeft, CircleArrowRight } from 'lucide-react'
import React from 'react'
import Avatar from '../assets/avatar.png'

function TestimonailsSection(){
	return(
		<section className='testimonials-section'>
			< div className='testimonials-section-left'>
				<h3 className='testimonials-subtitle'>Testimonials</h3>
				<h2 className='testimonials-title'>What People Say <br/>About Us.</h2>
				<div className="testimonial-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
			</div>
			<div className='testimonials-section-right'>
				<img src={Avatar} alt="avatar" className='testimonial-card-img'/>
				<div className='testimonial-card-info'>
					<p className='testimonial-card-description'>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
					<h4 className='testimonial-card-name'>Mike Taylor</h4>
					<h5 className='testimonial-card-city'>London, UK</h5>
			</div>
			<div className='testimonial-card-arrows'>
					<button className='testimonial-arrow-left'><CircleArrowLeft/></button>
					<button className='testimonial-arrow-right'><CircleArrowRight/></button>
				</div> </div>
		</section>
	)
}
export default TestimonailsSection;
// //* This component represents the testimonials section of the tour agency website, including a title and a subtitle.
// //* It also includes a testimonial card with a description, name, and city of the person giving the testimonial. The section is styled with CSS classes for layout and design.