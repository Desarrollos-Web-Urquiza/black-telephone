import React from 'react';

import {Link} from 'react-router-dom';

import styles from './footer.module.css'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';

import services from './data/services'
import { home } from './data/sliders'

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles'

import Footer from './footer';
import Carousel from './carousel';
import TopBar from './topBar'
import Drawer from './drawer'
import Section from './section'

import './styles.css';

const useStyles = makeStyles(() => ({
  card: {
    boxShadow: '0 0 20px 0 rgba(0,0,0,0.1)',
    minWidth: '200px',
    textAlign: 'center',
    height: '100%'
  },
  title: {
    marginBottom: '15px',
    flexGrow: 1
  },
  cardActions: {
    justifyContent: 'center'
  }
}))

export default function Home(props){
      
  const classes = useStyles()

  const [drawerOpened, setDrawerOpened] = React.useState(false)

  const handleDrawerOpen = () => {
  
    setDrawerOpened(true);
  
  };

  const handleDrawerClose = () => {
 
    setDrawerOpened(false)
 
  }
		
  return(
    
    <div>		

      <TopBar
      
        page={"home"} 
        onOpenDrawer={handleDrawerOpen}
        history={props.history}
      
      />

      <Drawer

        onClose={handleDrawerClose}
        open={drawerOpened}
        history={props.history}
      
       />

      <Carousel carouselData={home} />

      <Grid id="services" container spacing={4}>
    
        {
          services.map(service => 
          
          <Grid key={service.image} item xs={12} sm={6} md={3}>
            
            <Card className={classes.card}>
            
              <CardContent>
                
                <img  src={`/images/${service.image}`} alt={service.image} style={{width: 90}}/>
                
                <Typography className={classes.title} variant="h5" component="h2">
                
                  {service.title}
                
                </Typography>
                
                <Typography variant="body2" component="p">
                
                  {service.desc}
                
                </Typography>
              
              </CardContent>
              
              <CardActions className={classes.cardActions}>
                
                <Link href={`/${service.link}`}>
                  
                  <a className={styles.link} alt={service.title} />
                      
                </Link>
              
              </CardActions>
            
            </Card>
        
          </Grid>
        
        )}
  
      </Grid>
      
      <Section  />

      <br/>
      <br/>
      <br/>

      <Footer properties={props}/>

    </div>

  )
	
}


