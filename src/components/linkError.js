import React from 'react';

import {Link} from 'react-router-dom';

import { connect } from 'react-redux';

import  MONTH  from '../redux/actions/month';
import  ERR  from '../redux/actions/err';

// import './styles.css';
//Los estilos los puse en Routes.js

import ImgError from '../img/404-2.png';

import { firestore } from "./FirebaseConfig";

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';

import MultilineTextFields from './MultilineTextFields';
import MaterialInput from './materialInput';
import SimpleSelect from './SimpleSelect';

class linkError extends React.Component{
	
	render() {
		
		console.log("RENDERIZANDO")
				
		return(
			
			<div>		

				<CssBaseline />
	            
	            <h1 align="center">LINK EQUIVOCADO</h1>
	           	
	           	<div className="h2">

           		<h2 align="center"> La página a la que quiere acceder no existe.</h2> 

           		<h2 align="center"> Si tiene alguna dificultad para enviar su informe de trabajo, comuníquese con su gerente.</h2>
           			            
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