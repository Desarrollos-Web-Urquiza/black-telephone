import React from 'react';

import MiComponente2  from './MiComponente2.js'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

/* https://material-ui.com/es/components/cards/ */

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    minHeight : 275,
    margin: "1em",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 13,
  },
  pos: {
    marginBottom: 12,
  },
 
});

export default function SimpleCard(props) {
  
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  //Con esto podemos saber la URL también, usando solo código JS -->   'console.log(window.location.origin)'
  //pero en este componente hacemos uso de una propiedad de la librería 'react-router-dom'

  console.log(props.properties.history.location.pathname)

  //Es importante que la ruta sea "/eFnz319O" porque si no se complica mostrarlo completo con el botón. 
  if(props.properties.history.location.pathname != "/eFnz319O"){
  
    props.properties.history.push("/eFnz319O")
  
  }
  
  return (
    
    <Card className={classes.card}>
    
      <CardContent> 
        
      <MiComponente2 test={props} month= {props.month}/>
      
      </CardContent>
      
      <CardActions>
      
        <Button  onClick={() => props.properties.history.push(props.properties.history.location.pathname + "-ver/" + props.month ) } size="small">ver completo</Button>
          
      </CardActions>
    
    </Card>
  
  );
}