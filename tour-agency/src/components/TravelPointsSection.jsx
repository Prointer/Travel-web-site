import React from 'react'
import StepIcon1 from '../assets/step_1.svg'
import StepIcon2 from '../assets/step_2.svg'
import StepIcon3 from '../assets/step_3.svg'
import TravelPointCard from './TravelPointCard.jsx'

function TravelPointsSection(){
	return(
		<section className='travel-points-section'>
			<div className='travel-points-section-left'>
			<h3 className='travel-point-subtitle'>Easy and Fast</h3>
			<h2 className='travel-point-title'>Book Your Next Trip<br/>In 3 Easy Steps</h2>
			<div className='travel-point-steps'>
				<img src={StepIcon1} alt="Destination" />
				<div className='travel-point-step-info'>
					<h4 className='travel-point-step-title'>Choose Destination</h4>
					<p className='travel-point-step-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at erat id ligula facilisis lacinia.</p>
			</div>
			</div>
			<div className='travel-point-steps'>
				<img src={StepIcon2} alt="Payment" />
				<div className='travel-point-step-info'>
					<h4 className='travel-point-step-title'>Make Payment</h4>
					<p className='travel-point-step-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at erat id ligula facilisis lacinia.</p>
			</div>
			</div>
			<div className='travel-point-steps'>
				<img src={StepIcon3} alt="Date" />
				<div className='travel-point-step-info'>
					<h4 className='travel-point-step-title'>Raech Airport on Selected Date</h4>
					<p className='travel-point-step-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at erat id ligula facilisis lacinia.</p>
			</div></div></div>
			<div className='travel-points-section-right'>
				<TravelPointCard/>
			</div>
		</section>

	)
}
export default TravelPointsSection;
// //* This component represents the travel points section of the tour agency website, including a title and a subtitle.