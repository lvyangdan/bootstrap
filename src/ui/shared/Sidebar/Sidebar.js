import React from 'react'
import {Link} from 'react-router-dom'
import './Sidebar.css'
import avatar from './avatar.jpg'
import { slide as Menu } from 'react-burger-menu'

class Sidebar extends React.Component {
  render () {
    return (
      <div>
        <Menu>
         <div className='avatar'>
           <img src={avatar} alt=""/>
           <Link to='/'>退出登录</Link>
         </div>
          <Link to="/" className="menu-item" >Home</Link>
          <Link to="/" className="menu-item" >About</Link>
          <Link to="/" className="menu-item" >Contact</Link>
          <Link to='/' className="menu-item" >Settings</Link>
          <Link to='/' className="menu-item" >Settings</Link>
        </Menu>
      </div>
    );
  }
}
export default Sidebar
