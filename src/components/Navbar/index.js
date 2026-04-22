import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Navbar = () => {
    const [showNav, setShowNav] = useState(false)

    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src='https://aashnik.s3.ap-south-1.amazonaws.com/Assets/Logos/logo.png' alt='logo' />
            </Link>
            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink onClick={() => setShowNav(false)} exact="true" activeClassName='active' to='/'>
                    HOME
                </NavLink>
                <NavLink onClick={() => setShowNav(false)} exact="true" activeClassName='active' className='products-link' to='/products'>
                    PRODUCTS
                </NavLink>
                <NavLink onClick={() => setShowNav(false)} exact="true" activeClassName='active' className='gallery-link' to='/gallery'>
                    GALLERY
                </NavLink>
                <NavLink onClick={() => setShowNav(false)} exact="true" activeClassName='active' className='about-link' to='/about'>
                    ABOUT US
                </NavLink>
                <NavLink onClick={() => setShowNav(false)} exact="true" activeClassName='active' className='contact-link' to='/contact'>
                    CONTACT US
                </NavLink>
                {showNav && (
                    <FontAwesomeIcon 
                        onClick={() => setShowNav(false)}
                        icon={faClose}
                        color='#dfd8c8'
                        size='3x'
                        className='close-icon'
                    />
                )}
            </nav>
            <FontAwesomeIcon 
                onClick={() => setShowNav(true)}
                icon={faBars}
                color='#dfd8c8'
                size='3x'
                className='hamburger-icon'
            />
        </div>
    )
}

export default Navbar
