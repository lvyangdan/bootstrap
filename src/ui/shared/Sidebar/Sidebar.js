import React from 'react'
import {Link} from 'react-router-dom'
import './Sidebar.css'
import { slide as Menu } from 'react-burger-menu'

class Sidebar extends React.Component {
  render () {
    return (
      <Menu>
        <Link to="/" className="menu-item" >Home</Link>
        <Link to="/" className="menu-item" >About</Link>
        <Link to="/" className="menu-item" >Contact</Link>
        <Link to='/' className="menu-item--small" >Settings</Link>
      </Menu>
    );
  }
}
export default Sidebar
