import {combineReducers} from 'redux'
import login from './LoginReducer'
import signup from './SignUpReducer'
import alertbox from './AlertBoxReducer'
const rootReducers=combineReducers({
	login,
	signup,
	alertbox
})
export default rootReducers