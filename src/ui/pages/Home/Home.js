import React from 'react';
import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap';

class Home extends React.Component{
	render(){
		return(<div>
      Home
			<Link to='login'>LOGIN</Link>
		</div>)
	}
}
export default Home
