import React from 'react';

import { connect } from 'react-redux';

import  MONTH  from '../redux/actions/month';
import  ERR  from '../redux/actions/err';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
   
    width: '70%',
  
  },
  selectEmpty: {
  
    marginTop: theme.spacing(2),
  
  },
}));

function SimpleSelect(props) {
 
  const classes = useStyles();
  const [campo, setCampo] = React.useState({value: ''});
  const [err, setErr] = React.useState({value: false});

  const handleChange = event => {
  
    setCampo(event.target);
  
    console.log(event.target);
    console.log(props.type);
  
    let name = event.target.value
  
    console.log(name);
  
    // event.target.value
    let array =[name, props.type ]
	
    props.MONTH(array)
    
  };

  console.log(campo)
  console.log(props.reducidor)
  
  if(props.reducidor == "reset"){

    console.log("Se reinician el campo Select")

    campo.value="";

    err.value = false
    
    console.log(campo)

  }

  if(props.err == "err"){

    //Este IF verifica si hay campos vacíos y de haberlos los pone rojos 
    if( campo.value  == "" ) {

      err.value = true
      console.log("Entró al if del err")

    //Si el usuario los llena, le saca el color rojo 
    } else {

      err.value = false

    }

  }  else {

    err.value = false
      
  } 

  return (
    <div>
    
      <FormControl className={classes.formControl}>
     
        <InputLabel id="demo-simple-select-label">Nombre</InputLabel>
     
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={campo.value}
          error={err.value} 
          onChange={handleChange}
        >
          
          <MenuItem value={"Mónica Garrido"}>Mónica Garrido</MenuItem>
          <MenuItem value={"Juan López"}>Juan López</MenuItem>
          <MenuItem value={"Sara Jiménez"}>Sara Jiménez</MenuItem>
          <MenuItem value={"Juan Guardia"}>Juan Guardia</MenuItem>
          <MenuItem value={"Sergio Puentes"}>Sergio Puentes</MenuItem>
          <MenuItem value={"Miguel Puentes"}>Miguel Puentes</MenuItem>
          <MenuItem value={"Pedro Fernández"}>Pedro Fernández</MenuItem>
          <MenuItem value={"Elisabet Rodriguez"}>Elisabet Rodriguez</MenuItem>
          <MenuItem value={"Giovanni Rossi"}>Giovanni Rossi</MenuItem>
          <MenuItem value={"Fransisco Barraud"}>Fransisco Barraud</MenuItem>
          <MenuItem value={"Cristina Levallois"}>Cristina Levallois</MenuItem>
          <MenuItem value={"Roberto Pérez"}>Roberto Pérez</MenuItem>
          <MenuItem value={"Marcela Ricci"}>Marcela Ricci</MenuItem>
          <MenuItem value={"Ignacio Riguberto"}>Ignacio Riguberto</MenuItem>
          <MenuItem value={"Francesca Meazza"}>Francesca Meazza</MenuItem>
          
        </Select>
     
      </FormControl>
      
    </div>
    
  );

}

const mapStateToProps = (state) =>{

	return {

		reducidor: state.month,
    err: state.err
		
	}
}      

const mapDispatchToProps = {

  MONTH,
  ERR
	
}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleSelect)