import React from 'react'
import Sponsor_img1 from '../assets/sponsor_1.png'
import Sponsor_img2 from '../assets/sponsor_2.png'
import Sponsor_img3 from '../assets/sponsor_3.png'
import Sponsor_img4 from '../assets/sponsor_4.png'
import Sponsor_img5 from '../assets/sponsor_5.png'

function SponsorsSection() {
	return (
		<section className='sponsors-section'>
			<div className='sponsors-logos'>
				<img src={Sponsor_img1} alt='axon' className='sponsor-img'/>
				<img src={Sponsor_img2} alt='jetstar' className='sponsor-img' />
				<img src={Sponsor_img3} alt='expendia' className='sponsor-img' />
				<img src={Sponsor_img4} alt='qantas' className='sponsor-img' />
				<img src={Sponsor_img5} alt='alitalia' className='sponsor-img' />
			</div>
		</section>
	);
}
export default SponsorsSection;