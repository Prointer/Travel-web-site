import { Navigation } from 'lucide-react'
import React from 'react'
import Europe_img from '../assets/Europe.webp'
import London_img from '../assets/London.webp'
import Rome_img from '../assets/Rome.webp'

const destinationsData =[{icon: Rome_img,title:"Rome, Italy", price:"$5,42k", travelTime:'10 Days Trip', description:'Rome is a city in Italy that is known for its rich history, stunning architecture, and vibrant culture. It is home to famous landmarks such as the Colosseum, the Vatican, and the Trevi Fountain. Rome is also known for its delicious cuisine, including pasta, pizza, and gelato.'},{icon: London_img,title:"London, UK", price:"$4,2k", travelTime:'12 Days Trip', description:'London is the capital city of England and the United Kingdom. It is known for its iconic landmarks such as the Tower of London, Buckingham Palace, and the British Museum. London is also a cultural hub, with a diverse population and a thriving arts scene.'},{icon: Europe_img,title:"Europe", price:"$15k", travelTime:'28 Days Trip', description:'Europe is a continent that is known for its rich history, diverse cultures, and stunning landscapes. It is home to famous landmarks such as the Eiffel Tower in Paris, the Colosseum in Rome, and the Acropolis in Athens. Europe is also known for its delicious cuisine, including pasta, cheese, and wine.'}]
function DestinationSection(){
	return(
		<section className='destination-section'>
			<div className='destination-section-header'>
				<h3 className='destination-subtitle'>Top Selling</h3>
				<h2 className='destination-title'>Top Destinations</h2>
			</div>
			<div className='destinations-cards-container'>
				{destinationsData.map((destination, index)=>(<div className='destination-card' key={index}>
					<img src={destination.icon} alt={destination.title} className='destination-image' />
					<div className='destination-card-info'>
					<h4 className='destination-card-title'>{destination.title}</h4>
					<p className='destination-card-price'>{destination.price}</p>
					</div>
					<div className='destination-card-duration'><Navigation size={16} style={{marginRight:'8px'}} /><span>{destination.travelTime}</span></div>
				</div>))}
			</div>

		</section>
	)
}
export default DestinationSection;