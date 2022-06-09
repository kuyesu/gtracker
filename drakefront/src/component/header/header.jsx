import { FaSignInAlt, FaUserPlus,   FaSignOutAlt } from 'react-icons/fa';
// bootstrap imports and css
import React from 'react';
import 'react-bootstrap'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
      <div className='header-container'>
        <div className='header-logo'>
          <Link to='/'>
            <img src='/images/logo.png' alt='logo' />
          </Link>
        </div>
        <div className='header-nav'>
          <ul className='header-nav-list'>
            <li className='header-nav-item'>
              <Link to='/'>
                <FaUserPlus />
                <span>Sign Up</span>
              </Link>
            </li>
            <li className='header-nav-item'>
              <Link to='/'>
                <FaSignInAlt />
                <span>Login</span>
              </Link>
            </li>
            <li className='header-nav-item'>
              <Link to='/'>
                <FaSignOutAlt />
                <span>Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header