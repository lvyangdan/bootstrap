import React from 'react'
import {Link} from 'react-router-dom'
import store from '../../../redux/store';
import {connect} from 'react-redux';
import './Login.css'
import TitleHeader from '../../shared/TitleHeader/TitleHeader'
class Login extends React.Component{
	login=(e)=>{
		e.preventDefault()
		let username=this.usernameInput.value
		store.dispatch({type:'LOGIN',username:username})
	}
  render(){
    return(<div>
      <TitleHeader title='login'/>
      <div className='login'>
			<form className='login-form' onSubmit={this.login}>
				<div><input ref={value=>this.usernameInput=value} type="text"placeholder='用户名'/></div>
				<div><input ref={value=>this.passwordInput=value} type="password" placeholder='密码'/></div>
				<div><button type='submit'>登录</button></div>
			</form>
			<div className='login-link'>
				<Link to='/signup'>没有账户？去注册</Link>
			</div>
		</div>
      </div>)
  }
}
const mapStateToProps=()=>{

}
export default connect(mapStateToProps)(Login)
