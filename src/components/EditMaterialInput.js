import React from 'react';

import { connect } from 'react-redux';

import  ERR  from '../redux/actions/err';
import  MONTH  from '../redux/actions/month';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

function EditFormPropsTextFields(props) {

  const [camp, setCamp] = React.useState({value: ""});
  const [err, setErr] = React.useState({value: false});

  const handleChange = event => {
    
    event.target.value = parseInt(event.target.value)//Si quiere meter un numero decimal, se lo transformo a entero automáticamente
    
    if(props.type == "Horas" && event.target.value > 720){

       event.target.value = 0

    }
    
    console.log(event.target)
    setCamp(event.target );
    console.log(props.type);
    console.log(event.target.value)
    let array =[event.target.value, props.type ]
    props.MONTH(array)

  };

  if(props.reducidor == "reset") {

    console.log("Se reinician los campos Input")

    camp.value = ""

    err.value = false
 
  }

  console.log(props.err)
  console.log(" currentData" + props.currentData)
  console.log(" props.type" +  props.type)
  console.log(camp.value)
  console.log("editMaterialInput: 3")

  let currentData = props.currentData
  
  if (currentData == undefined) {

    currentData = ""

  }

  if(props.err == "err") {

  	//Este IF verifica si hay campos vacíos y de haberlo los pone rojos 
  	if( camp.value  == "" &&  currentData == "") {

     	err.value = true
  		
      console.log("Entró al inf del err")
      console.log(err.value)
  	  //Si el usuario los llena, le saca el color rojo 
  	
    } else{

     	err.value = false

  	}

  } else {

    err.value = false
      
  }

  if(props.err == "contradiction" && props.type != "Horas" && camp.value !== 0 && props.currentData != 0 ) {
  
    err.value = true

  } else {

    if (props.type == "Horas" && camp.value != 0  && props.err != "err" && props.err != "contradiction2" ) {
      
      console.log("Entra a noErr")
      props.ERR("noErr")

    }
    
    if ( props.err == "noErr") { 
    
      err.value = false

    }

  }

  if ( props.err=="contradiction2" && props.type == "Revisitas" ) {
    
    console.log("CONTRADICTION2")

    if (camp.value == 0 || props.currentData == 0) {

      err.value = true

    } else{

      err.value = false

    }   

  }

  console.log(props.err)
  console.log(camp)
  console.log(props.type + " " +err.value)

  return (

      <div>
        
        <TextField
        
          id="standard-number"
          label={props.type}
          type="number"
          InputProps={{ inputProps: { min: 0,  } }}
          error={err.value}
          onChange = {  handleChange        }
          defaultValue={props.currentData}

        />
        
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

export default connect(mapStateToProps, mapDispatchToProps)(EditFormPropsTextFields)