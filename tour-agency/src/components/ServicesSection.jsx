import React from 'react'
import Weather_Service_img from '../assets/Services_img1.svg'
import Fligt_Service_img from '../assets/Services_img2.svg'
import Events_Service_img from '../assets/Services_img3.svg'
import Cutomization_Service_img from '../assets/Services_img4.svg'

const servicesData = [
	{
		icon: Weather_Service_img,
		title: 'Calculated Weather',
		description: 'Built Wicket longer admire do barton vanity itself do in it.'
	},{
		icon: Fligt_Service_img,
		title: 'Best Flights',
		description: 'Engrossed listening. Park gate sell they west hard for the.'
	},
	{
		icon: Events_Service_img,
		title: 'Local Events',
		description: 'Barton vanity itself do in it. Prefered to sportsmen it engrossed listening.'
	},
	{
		icon: Cutomization_Service_img,
		title: 'Customization',
		description: 'We deliver outsourced aviation services for military customers.'
	}
]
function ServicesSection(){
	return(
		<section className='services-section'>
			<div className='services-section-header'>
				<h3 className='services-subtitle'>Category</h3>
				<h2 className='services-title'>We Offer Best Services</h2>
			</div>
			<div className='services-cards-container'>
				{servicesData.map((service, index)=>(<div className='service-card' key={index}><img src={service.icon} alt={service.title} className='service-icon' />
				<h4 className='service-title'>{service.title}</h4>
				<p className='service-description'>{service.description}</p></div>))}
			</div>


		</section>
	)
}
export default ServicesSection;
// //* This component represents the services section of the tour agency website, displaying various services offered with icons and descriptions.