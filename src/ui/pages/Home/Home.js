import React from 'react';
import {Link} from 'react-router-dom'
import './Home.css'
import logo  from './logo.png'


class Home extends React.Component{
	render(){
		return(<div className='home'>
			<img src={logo} alt=""/>
    		<h1>360商城</h1>
    		<h3>www.360.com</h3>
    		<div className='home_link'>
    		<Link to='/login' className='homelink'>登录</Link>
    		<Link to='/signup' className='homelink'>注册</Link>
    		</div>
		</div>)
	}
}
export default Home
