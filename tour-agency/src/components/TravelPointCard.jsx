import { Mic, Navigation, Salad, Ticket } from 'lucide-react'

import React from 'react'
import GreeceImg from '../assets/Greece_tour.jpg'

function TravelPointCard(){
	return(
		<div className='trip-card-container'>
			<img src={GreeceImg} alt='Trip Image' className='travel-point-card-image' />
			<div className='trip-card-content'>
				<h3 className='trip-card-title'>Trip to Greece</h3>
				<p className='trip-card-dates'>14-29 June | by Robbin Joseph</p>
				<div className='trip-card-icons'>
					<span className='trip-card-icon'><Mic/></span>
					<span className='trip-card-icon'><Navigation/></span>
					<span className='trip-card-icon'><Salad/></span>
				</div>
				<p className='trip-ticket-bought'>
					<span className='trip-ticket-icon'><Ticket/></span> 24 people going
				</p>
		</div></div>
	)
}
export default TravelPointCard;
// //* This component represents a travel point card that displays information about a trip, including an image, title, dates, and icons representing different features of the trip.