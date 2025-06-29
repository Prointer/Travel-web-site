import { useEffect, useState } from 'react'
import Logo from '../assets/logo.png'

const Header=()=>{
	const [hidden, setHidden] = useState(false);
	const [lastScrollY, setLastScrollY] = useState(0);

	const handleScroll = () =>{
		const currentScrollY = window.scrollY;
		if(currentScrollY>lastScrollY && currentScrollY>100){
			setHidden(true);
	}else{
		setHidden(false);
	}
	setLastScrollY(currentScrollY);
}
  useEffect(() => {
  const handleScroll = () => {
    const header = document.querySelector('.header');
    if (window.scrollY === 0) {
      header.classList.remove('hidden');
    } else {
      header.classList.add('hidden');
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
	return(
		<header className={`header ${hidden ? 'hidden' : ''}`}>
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