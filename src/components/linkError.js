import React from 'react';

import ImgError from '../img/404-2.png';

import CssBaseline from '@material-ui/core/CssBaseline';

class linkError extends React.Component{
	
	render() {
		
		console.log("RENDERIZANDO")
				
		return(
			
			<div>		

				<CssBaseline />
	            
	            <h1 align="center">LINK EQUIVOCADO</h1>
	           	
	           	<div className="h2">

					<h2 align="center"> La página a la que quiere acceder no existe.</h2> 

					<h2 align="center"> Si tiene alguna dificultad para enviar su informe de trabajo o encontrar alguna sección de la página, comuníquese con su gerente.</h2>
           			            
	            </div>

	            <br />
	            <br />
	           
	        	<div align="center" margin-top="50px"  >
	           	
	           		<img className="img404" src={ ImgError }   />
	          
	            </div>                  
	         
	            <br />
	            <br />
	            <br />
	            <br />
	           
			</div>

		)

	}
	
}

export default linkError;