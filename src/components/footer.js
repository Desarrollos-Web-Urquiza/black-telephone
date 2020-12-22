import React from 'react';

import {Link} from 'react-router-dom';

import styles from './footer.module.css'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import services from './data/services'
// import Link from 'next/link'
import InstagramIcon from '@material-ui/icons/Instagram'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

import MultilineTextFields from './MultilineTextFields';
import MaterialInput from './materialInput';
import SimpleSelect from './SimpleSelect';

import './styles.css';

class Footer extends React.Component{
	
	
	
		
	render() {

	
		
		return(
			
			<div>		

				

				 <footer  className={styles.footer}>
      <Container>
        <Grid spacing={4} container className={styles.container}> 
          <Grid item xs={12} md={6} lg={3}>
            <Typography variant="h6" className={styles.subtitle}>Servicios</Typography>
            {/*services.map(service => 
              <div key={service.image}>
                <Link href={service.link}>
                  <a className={styles.link} alt={service.title}>{service.title} &rarr;</a>
                </Link>
              </div>  
            )*/}
            <Typography variant="body2">
              <br/>
              Telemarketing
              <br/>
              
              Servicios telefónicos
              <br/>
              Publicidad
              <br/>
              Atención al cliente
              <br/>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Typography variant="h6" className={styles.subtitle}>Contacto</Typography>
            <Typography variant="body2">
              9 de Julio 1003 
              <br/>
              Rosario, Argentina
              <br/><br/>
              <strong>Ventas: </strong>
              <a
                href="tel:02644200987" 
                className={styles.link}
                alt="electro 3 teléfono"
              >
               (0341) - 431-1734
              </a>
              <br/>
              <strong>Email: </strong>
              <a
                href="mailto:consultas@blacktelephone.com.ar" 
                className={styles.link}
                alt="electro 3 email"
              >
                consultas@blacktelephone.com.ar
              </a>
              <br/>
            </Typography>
            <br/>

             
             { this.props.properties && <a className={styles.link}  onClick={() => this.props.properties.history.push("/informar" ) } alt='Ir a contacto'>Enviar informe de trabajo &rarr;</a>

         		}
            <br/>
            <br/>
            <a href="https://www.instagram.com/blacktelephone/ " className={styles.socialLink} target="_blank">
              <InstagramIcon></InstagramIcon>
            </a>
            <a href=" https://wa.me/5341431-1734" className={styles.socialLink} target="_blank">
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



export default Footer;