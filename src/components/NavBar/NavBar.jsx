import React from 'react';
import './NavBar.css';
import ScheduleVisitBtn from '../ScheduleVisitBtn/ScheduleVisitBtn';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  function showMenu() {
    let menu = document.querySelector('.nav-bar-menu');
    menu.classList.toggle('active');
  }

  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <div className='navbar-top'>
          <div className='navbar-email-and-location'>
            <p className='navbar-email'>
              <i className='fa-solid fa-envelope'></i> info@company.com
            </p>
            <p className='navbar-location'>
              <i className='fa-solid fa-map'></i> Sunny Isles Beach, FL 33160
            </p>
          </div>

          <div className='navbar-social'>
            <a href='#' className='social-icon'>
              <i className='fab fa-facebook-f'></i>
            </a>
            <a href='#' className='social-icon'>
              <i className='fab fa-twitter'></i>
            </a>
            <a href='#' className='social-icon'>
              <i className='fab fa-linkedin-in'></i>
            </a>
            <a href='#' className='social-icon'>
              <i className='fab fa-instagram'></i>
            </a>
          </div>
        </div>

        <nav className='navbar-bottom'>
          <a href='#' className='navbar-logo'>
            VILLA
          </a>
          <div className='menu-items'>
            <ul className='navbar-menu'>
              <li>
                <NavLink to='/' className='navbar-item' activeClassName='active'>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to='/properties' className='navbar-item' activeClassName='active'>
                  Properties
                </NavLink>
              </li>
              <li>
                <NavLink to='/propertyDetails' className='navbar-item' activeClassName='active'>
                  Property Details
                </NavLink>
              </li>
              <li>
                <NavLink to='/contactUs' className='navbar-item' activeClassName='active'>
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <ScheduleVisitBtn />
          </div>
          <button className='bars' onClick={showMenu}>
            {' '}
            <i className='fas fa-bars'></i>{' '}
          </button>
        </nav>
        <div className='nav-bar-menu'>
          <ul>
            <li>
              <NavLink to='/' className='navbar-item' activeClassName='active'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/properties' className='navbar-item' activeClassName='active'>
                Properties
              </NavLink>
            </li>
            <li>
              <NavLink to='/propertyDetails' className='navbar-item' activeClassName='active'>
                Property Details
              </NavLink>
            </li>
            <li>
              <NavLink to='/contactUs' className='navbar-item' activeClassName='active'>
                Contact Us
              </NavLink>
            </li>
            <li style={{ paddingLeft: '15px' }}>
              <i className='fa-solid fa-envelope'></i> info@company.com
            </li>
            <li style={{ paddingLeft: '15px' }}>
              <i className='fa-solid fa-map'></i> Sunny Isles Beach, FL 33160
            </li>
            <li>
              <a href='#' className='social-icon'>
                <i className='fab fa-facebook-f'></i>
              </a>
              <a href='#' className='social-icon'>
                <i className='fab fa-twitter'></i>
              </a>
              <a href='#' className='social-icon'>
                <i className='fab fa-linkedin-in'></i>
              </a>
              <a href='#' className='social-icon'>
                <i className='fab fa-instagram'></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
