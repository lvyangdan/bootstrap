import React from 'react'
import {Link} from 'react-router-dom'
import './SignUp.css'
import store from '../../../redux/store';
import {connect} from 'react-redux';
import TitleHeader from '../../shared/TitleHeader/TitleHeader'
import AlertBox from '../../shared/AlertBox/AlertBox'
class SignUp extends React.Component{
	signup=(e)=>{
		e.preventDefault()
		let username=this.userNameInput.value
		let email=this.emailInput.value
		let password=this.passwordInput.value
		let passwordAgain=this.passwordAgainInput.value
		let data={
			username:username,
			email:email,
			password:password
		}
		if(username==''){
			store.dispatch({type:'SHOWERR',message:'用户名不能为空'})
		}
		else if(password!==passwordAgain){
			store.dispatch({type:'SHOWERR',message:'两次输入密码不一致'})
		}
		else {store.dispatch({type:'SIGNUP',data:data})}
	}
	render(){
		return(<div>
			<TitleHeader title='signup'/>
			<AlertBox />
			<div className='signup'>
				<form className='signup-form' onSubmit={this.signup}>
					<div><input ref={value=>this.userNameInput=value} type="text" placeholder='用户名'/></div>
					<div><input ref={value=>this.emailInput=value} type="text" placeholder='email'/></div>
					<div><input ref={value=>this.passwordInput=value} type="password" placeholder='密码'/></div>
					<div><input ref={value=>this.passwordAgainInput=value} type="password" placeholder='再次输入密码'/></div>
					<div><button type='submit'>提交注册</button></div>
					<div className='signup-link'>
					<Link to='/login'>已有账户？去登录</Link>
					</div>
				</form>
				
			</div>
			
		</div>)
	}
} 
const mapStateToProps=(state)=>({
	signup:state.signup
})
export default connect(mapStateToProps)(SignUp)