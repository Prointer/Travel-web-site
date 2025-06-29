import Google_play_icon from '../assets/GooglePlay.png'
import Play_store_icon from '../assets/PlayStore.png'
import Instagram_icon from '../assets/Social.png'
import Facebook_icon from '../assets/Social1.png'
import Twitter_icon from '../assets/Social2.png'

function Footer(){
	return(
		<footer className='footer'>
			<div className='footer-container'>
				<div className='footer-logo-container'>
					<h2 className='footer-logo'>Jadoo.</h2>
					<p className='footer-logo-desc'>Book your trip in minute, get full
					Control for much longer.</p>
				</div>
				<div className='footer-nav'>
					<div className='footer-nav-company'>
						<h3 className='footer-nav-title'>Company</h3>
						<ul className='footer-nav-list'>
							<li className='footer-nav-item'>About</li>
							<li className='footer-nav-item'>Careers</li>
							<li className='footer-nav-item'>Mobile</li>
							<li className='footer-nav-item'>Blog</li>
						</ul>
					</div>
					<div className='footer-nav-contact'>
						<h3 className='footer-nav-title'>Contact</h3>
						<ul className='footer-nav-list'>
							<li className='footer-nav-item'>Help/FAQ</li>
							<li className='footer-nav-item'>Press</li>
							<li className='footer-nav-item'>Affiliates</li>
						</ul>
					</div>
					<div className='footer-nav-more'>
						<h3 className='footer-nav-title'>More</h3>
						<ul className='footer-nav-list'>
							<li className='footer-nav-item'>Airlinefees</li>
							<li className='footer-nav-item'>Airline</li>
							<li className='footer-nav-item'>Low fare tips</li>
						</ul>
				</div></div>
				<div className='footer-socials'>
					<div className='footer-socials-links'>
						<a href='/' className='footer-socials-link'> <img src={Facebook_icon} alt="Facebook" /></a>
						<a href='/' className='footer-socials-link'><img src={Instagram_icon} alt="Instagram" /></a>
						<a href='/' className='footer-socials-link'><img src={Twitter_icon} alt="Twitter"/></a>
					</div>
					<p className='footer-socials-desc'>Discover our app</p>
					<div className='footer-socials-apps'>
						<a href='/' className='footer-socials-app'><img src={Google_play_icon} alt="Google play" /></a>
						<a href='/' className='footer-socials-app'><img src={Play_store_icon} alt="App store" /></a>
				</div>

			</div>
		</div>

		</footer>
	)
}
export default Footer;
// //* This component represents the footer of the tour agency website, including copyright information and contact details.