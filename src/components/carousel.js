import React from 'react';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from '@material-ui/core/Hidden';

import './carousel.module.css'
import styles from './carousel.module.css'

const useStyles = makeStyles(() => ({
  carouselProvider: {
    width: '100%',
    marginBottom: '40px',
    display: 'block',
    overflow: 'hidden',
    position: 'relative'
  },
  bottomParagraph: {
    padding: '15px',
    textAlign: 'center',
    marginBottom: '40px'
  }
}))

export default function Carousel(props)  {

  console.log(props) 

  const classes = useStyles()
  const mdScreen = useMediaQuery('(min-width:600px)');
  const lgScreen = useMediaQuery('(min-width:1200px)');

  let heigth = lgScreen ? 30 : mdScreen ? 40 : 70

  if(props.carouselData.short) heigth = heigth / 2 + 5
  
  console.log(props.carouselData.short) 
  console.log(styles) 
 
  return (
    <div>
      
      <CarouselProvider
        className={classes.carouselProvider}
        naturalSlideWidth={100}
        naturalSlideHeight={heigth}
        totalSlides={props.carouselData.slides.length}
        interval={7000}
        isPlaying={true}
      >

        <div className={styles.text}>
          
          <div>
            
            <Hidden mdUp >
             
              <div  className={styles.telephoneTitle} >
            
                <br />
              
                <Typography variant="h4" className={styles.title}>
              
                  {props.carouselData.title}
              
                </Typography>
                
                <br />
                <br />
              
              </div>
            </Hidden>
           
            <Hidden smDown>

              <div className={styles.telephone}   >
                
                <Typography variant="h4" className={styles.title}>
                
                  {props.carouselData.title}
                
                </Typography>
                
                <br />
                <br />
                <br />
                
                <Typography variant="body1" className={styles.paragraph}>
                
                  {props.carouselData.paragraph}
                
                </Typography>
                
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

              </div>

            </Hidden>
          </div>

        </div>

        <Slider className={styles.slider}>
          
          {props.carouselData.slides.map((slide, i) => 
            
            <Slide key={slide.image} index={i}>
              
              <div className={styles.overlay} style={{opacity: slide.overlayOpacity || 0}}></div>
              
              <div className={styles.slideImg} style={{backgroundImage: `url(/images/${slide.image})`}}></div> 

            </Slide>

          )}

        </Slider>
        {props.carouselData.slides.length > 1 && (
          
          <div className={styles.arrows}>
          
            <ButtonBack className={styles.arrow}><ChevronLeft></ChevronLeft></ButtonBack>
            <ButtonNext className={styles.arrow}><ChevronRight></ChevronRight></ButtonNext>
          
          </div>

        )}
      </CarouselProvider>
      
      {props.carouselData.paragraph && (
        
        <Hidden mdUp>
          
          <Typography variant="body1" className={`${styles.paragraph} ${classes.bottomParagraph}`}>
       
            {props.carouselData.paragraph}
       
          </Typography>
       
        </Hidden>
      )}

    </div>
  )
  
}

