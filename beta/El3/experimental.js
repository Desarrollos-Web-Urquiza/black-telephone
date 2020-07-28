import React from 'react';

import {Link} from 'react-router-dom';

import styles from './footer.module.css'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import services from '../data/services'
// import Link from 'next/link'
import InstagramIcon from '@material-ui/icons/Instagram'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

import MultilineTextFields from './MultilineTextFields';
import MaterialInput from './materialInput';
import SimpleSelect from './SimpleSelect';

import './styles.css';

class Experimental extends React.Component{
	
	
	
		
	render() {

		
		
		return(
			
			<div>		

				<h1 align="center"> Black Telephone </h1>	

				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />

				 <footer  className={styles.footer}>
      <Container>
        <Grid spacing={4} container className={styles.container}> 
          <Grid item xs={12} md={6} lg={3}>
            <Typography variant="h6" className={styles.subtitle}>Servicios</Typography>
            {services.map(service => 
              <div key={service.image}>
                <Link href={service.link}>
                  <a className={styles.link} alt={service.title}>{service.title} &rarr;</a>
                </Link>
              </div>  
            )}
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Typography variant="h6" className={styles.subtitle}>Contacto</Typography>
            <Typography variant="body2">
              9 de Julio 1022 (este)
              <br/>
              San Juan, Argentina
              <br/><br/>
              <strong>Ventas: </strong>
              <a
                href="tel:02644200987" 
                className={styles.link}
                alt="electro 3 teléfono"
              >
               (0264) - 420-0987
              </a>
              <br/>
              <strong>Email: </strong>
              <a
                href="mailto:consultas@electro3.com.ar" 
                className={styles.link}
                alt="electro 3 email"
              >
                consultas@electro3.com.ar
              </a>
              <br/>
            </Typography>
            <br/>
            <Link href='/contacto'>
              <a className={styles.link} alt='Ir a contacto'>Ir a contacto &rarr;</a>
            </Link>
            <br/>
            <br/>
            <a href="https://wa.me/5492645407221" className={styles.socialLink} target="_blank">
              <InstagramIcon></InstagramIcon>
            </a>
            <a href="https://www.instagram.com/electro3.sj/" className={styles.socialLink} target="_blank">
              <WhatsAppIcon></WhatsAppIcon>
            </a>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Typography variant="h6" className={styles.subtitle}>Acerca de Black Telehpone</Typography>
            <Typography variant="body2">
              Somos una empresa dedicada al negocio del "call center", empleamos gente capacitada para vender planes, diversos servicios y otros productos de telemarketing.
              <br/>
              En Black Telehpone hacemos que la tecnología y las personas trabajen juntas⚡️
            </Typography>
          </Grid>
        </Grid>

      </Container>

      <div className={styles.footerBottom}>
        <Typography variant="body2">
          © Copyright <strong>Black Telephone</strong>. Todos los derechos reservados.
        </Typography>
      </div>
    </footer>







			</div>

		)

	} 
	
}



export default Experimental;