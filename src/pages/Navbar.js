import React from 'react'
// import SearchBar from './SearchBar'
import './Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
  return (



<nav class="navbar">
  <div class="navbar-left">
    <h1 class="navbar-title">Netflix</h1>
    <ul class="navbar-menu">
      <li class="navbar-menu-item"> <Link  className='link' to='/'>
        Movies
        </Link></li>
      <li class="navbar-menu-item"> <Link className='link' 
      to='/tv'>
        TV Shows
        </Link></li>
    </ul>
  </div>
  <div style={{background:"transparent"}}>
    <ul class="navbar-search" ><Link className='link'  to="/searchbar">
         Search...
        </Link></ul>
  </div>
</nav>




  )
}

export default Navbar