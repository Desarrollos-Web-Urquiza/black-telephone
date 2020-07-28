import React from 'react';

import { connect } from 'react-redux';

import  MONTH  from '../redux/actions/month';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '15ch',

    },
  },
}));

function MultilineTextFields(props) {
  
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');

  //Cuando el campo de "Comentarios" pierde el foco, se ejecuta esta función
  const _onBlur = event => {

    setValue(event.target);

    console.log(props.type);
    
    let array =[event.target.value, props.type ]
    
    props.MONTH(array)

  }

  console.log(value)

  if(props.reducidor == "reset"){

    if(value != "Controlled"){

      console.log("Se reinician el campo MultilineTextFields")

      value.value = ""

      console.log(value)

    }

  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      
      <div>
        
        <TextField
          
          id="outlined-multiline-static"
          label="Comentarios"
          multiline
          rows="6"
          variant="outlined"
          onBlur={_onBlur}
          defaultValue={props.currentData}        

        />

      </div>

    </form>
  );
}

const mapStateToProps = (state) =>{

  return {

    reducidor: state.month,
        
  }
}      

const mapDispatchToProps = {

  MONTH,
  
}

export default connect(mapStateToProps, mapDispatchToProps)(MultilineTextFields)