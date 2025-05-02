import React from 'react'
import Sponsor_img1 from '../assets/sponsor_1.webp'
import Sponsor_img2 from '../assets/sponsor_2.webp'
import Sponsor_img3 from '../assets/sponsor_3.webp'
import Sponsor_img4 from '../assets/sponsor_4.png'
import Sponsor_img5 from '../assets/sponsor_5.png'

import Marquee from 'react-fast-marquee'

const sponsorsImgs =[Sponsor_img1, Sponsor_img2, Sponsor_img3, Sponsor_img4, Sponsor_img5]
// //* This component represents the sponsors section of the tour agency website, including a title and a subtitle.
function SponsorsSection() {
	return (
		<section className='sponsors-section'>
			<div className='sponsors-container'>
			<Marquee 
				speed={40}
				pauseOnHover={false}
				gradient={true}
				direction='left'>
						{sponsorsImgs.map((img,index)=>(
							<img src={img} alt={`sponsor-${index}`} className='sponsor-img' key={index}/>
						))}
				</Marquee>
			</div>
		</section>
	);
}
export default SponsorsSection;