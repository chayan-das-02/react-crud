import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="ui secondary  menu">
  <Link className="active item" to='/'>
    Home
  </Link>
  <Link className="item" to='/create'>
    Create
  </Link>
  <Link className="item" to='/read'>
    Read
  </Link>
  <div className="right menu">
    <div className="item">
      <div className="ui icon input">
        <input type="text" placeholder="Search..."/>
        <i className="search link icon"></i>
      </div>
    </div>
    <a className="ui item" href='/'>
      Logout
    </a>
  </div>
</div>
  )
}

export default Navbar
