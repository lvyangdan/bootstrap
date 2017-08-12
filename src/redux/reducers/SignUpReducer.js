let user={
	userId:{
		username:'',
		email:'',
		password:''
	}
}
export default function SignUpReducer(state=user,action){
	switch(action.type){
		case 'SIGNUP': return state
		case 'SHOWERR':return state
		default:return state
	}
}