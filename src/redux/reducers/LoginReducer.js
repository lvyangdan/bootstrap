let defaultState={
	isLogin:false,
	username:''
}
export default function LoginReducer(state=defaultState,action){
	switch(action.type){
		case 'LOGIN':return {...state,isLogin:true,username:action.username}
		default: return state
	}
}