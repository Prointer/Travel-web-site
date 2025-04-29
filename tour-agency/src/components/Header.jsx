import React from 'react'
import Logo from '../assets/logo.png'
function Header(){
	return(
		<header className='header'>
			<div className='container header__container'>
				<div className='header__logo'>
					<img src={Logo} alt='logo' className='header__logo_img'></img>
				</div>
				<nav className='header__nav'>
					<ul className='header__menu'>
						<li><a href='#'>Destination</a></li>
						<li><a href='#'>Hotels</a></li>
						<li><a href='#'>Flight</a></li>
						<li><a href='#'>Booking</a></li>
						<li><a href='#'>Login</a></li>
					</ul>
				</nav>
				<div className='header__btn'>
					<button className='header__btn_signup'>Sign Up</button>
					<select name='languages' className='header__btn_language'>
						<option value='en'>EN</option>
						<option value='ua'>UA</option>
						<option value='pl'>PL</option>
						</select>
				</div>
			</div>
		</header>
	)
}
export default Header;
// //* This component represents the header of the tour agency website, including a menu, logo, and language selection.