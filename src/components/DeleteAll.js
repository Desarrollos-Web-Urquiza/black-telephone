import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import  MODIFIED  from '../redux/actions/modified';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { purple, yellow, red } from '@material-ui/core/colors';
import { withStyles} from '@material-ui/core/styles';
  
import { firestore } from "./FirebaseConfig";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: yellow[500],
    '&:hover': {
      backgroundColor: yellow[700],
    },
  },
}))(Button);

const TrashButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: red[700],
    minWidth: 50,
    fontSize: 13,

    '&:hover': {
      backgroundColor: red[900],
    },
  },
}))(Button);

export default function DeleteAll(props) {
  
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [filter, setFilter] = React.useState({value: true});
  
  //Redux en React Hooks
  const modified = useSelector(store => store.modified)
  const dispatch = useDispatch()

  const handleChange = event => {
    
    if(event.target.value == props.monthContent){

      setFilter({value: false})

    } else {

      setFilter({value: true})
    
    }

    console.log(event.target.value)
    console.log(props.monthContent)
    console.log(filter)

  };

  console.log(props)

  const deleteInforms = () => {

    firestore.collection("informes").where("inform.mes", "==", props.monthContent)
    .get()
    .then(function(querySnapshot) {
      
      querySnapshot.forEach(function(doc) {

        firestore.collection("informes").doc(doc.id).delete().then(function() {
        
          console.log("Document successfully deleted!");
      
        }).catch(function(error) {
        
          console.error("Error removing document: ", error);
        
        });

      });
             
      handleClose()
      dispatch(MODIFIED(!modified))    

    })
    .catch(function(error) {
    
      console.log("Error getting documents: ", error);
      
    });  
  
  }

  const handleOpen = () => {
    
    setOpen(true);
 
  };

  const handleClose = () => {
    
    setOpen(false);
    setFilter({value: true})

  };

  return (
    <div className="deleteButton">
          
      { 
        props.showDeleteAll && props.issetMonth && <TrashButton variant="contained" color="primary"  onClick={handleOpen} >
      
          Eliminar mes completo<i class="fas fa-exclamation-triangle" style={{marginLeft: 5}} ></i> 
      
       </TrashButton>
      }
  
      <br />
      <br />

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        disableScrollLock= {true}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}

      >
        <Fade in={open}>
          <div className={classes.paper}>
          
            <div style={{ fontSize: 20, marginTop: 15 }}>¿Seguro quiere eliminar todos los informes del mes de <b>"{props.monthContent}"</b>?</div>
            
            <p id="transition-modal-description">Esta acción no se puede deshacer. Si aun así usted quiere borrar todos los informes del mes, debe escribir exactamente <b>"{props.monthContent}"</b> sin comillas.</p>

            <TextField
        
              id="deleteMonth"
              variant="outlined"
              onChange = {    handleChange    }
        
            />
        
            <br />
            <br />
        
            <TrashButton  style={{ marginTop: -15}} variant="contained" color="primary" disabled={filter.value} onClick= { () => deleteInforms() }>
                
              Entiendo las consecuencias, eliminar el mes completo
                  
            </TrashButton>

            <div  className="noButton2">
              
              <Button   onClick={handleClose} >
              
                Cancelar
              
              </Button>
            
            </div>           
         
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
