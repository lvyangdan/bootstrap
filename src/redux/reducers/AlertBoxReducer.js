let defaultState={
	showAlert:false,
	alertMessage:''
}
export default function AlertBoxReducer(state=defaultState,action){
	console.log('alert.....',action.message)
	switch(action.type){
		case 'SHOWERR':return {...state,showAlert:true,alertMessage:action.message}
		case 'HIDE_ALERT': return {...state,showAlert:false,alertMessage:''}
		default:return state
	}
}