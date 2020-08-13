import React from 'react';

import {Link} from 'react-router-dom';

import styles from './footer.module.css'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import services from './data/services'
import { home } from './data/sliders'
// import Link from 'next/link'
import InstagramIcon from '@material-ui/icons/Instagram'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

import MultilineTextFields from './MultilineTextFields';
import MaterialInput from './materialInput';
import SimpleSelect from './SimpleSelect';

import Footer from './footer';
import Carousel from './carousel';


import './styles.css';

class Experimental extends React.Component{
	
	
	
		
	render() {

		
		
		return(
			
			<div>		

				{/*<h1 align="center"> Black Telephone </h1>	*/}

				<Carousel carouselData={home} />

			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />

				


        <Footer />
     







			</div>

		)

	} 
	
}



export default Experimental;