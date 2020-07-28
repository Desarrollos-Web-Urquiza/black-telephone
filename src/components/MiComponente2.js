import React from 'react';

import { withRouter } from 'react-router-dom'

import SimpleTable  from './table.js';

import logo from '../assets/images/logo.svg';

// import './style.css';
//Los estilos los puse en Routes.js

import { Hidden } from '@material-ui/core';
import Button from '@material-ui/core/Button';

class MiComponente2 extends React.Component{
	
	constructor() {
		super();
	    
	    this.state = {value : false }
					 
 	}

	render(){

		return(
		
			<div>
    			
				<SimpleTable /*month={this.props.test.month}*/ />
				
			</div>
		)

	} 

}

function buttonBack(path) {

	return(
	
		<Button 
				      
    		color="primary"
			variant="contained"
			onClick={() => path.push('/') } //Ejecución del evento "NUEVA" mediante mapDispatchToProps.
		
		>
		
		Volver
		        
		</Button>

	)

} 

export default  MiComponente2  ;