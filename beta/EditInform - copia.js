import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import  MODIFIED  from '../redux/actions/modified';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import { purple, yellow } from '@material-ui/core/colors';
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
    backgroundColor: red[500],
    minWidth: 50,
    fontSize: 20,

    '&:hover': {
      backgroundColor: red[700],
    },
  },
}))(Button);

export default function EditeInform(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [idNoNull, setIdNoNull] = React.useState({value: true});
  const modified = useSelector(store => store.modified)
  const dispatch = useDispatch()


   
  if(props.idContent == "-" ){

    idNoNull.value=false


   } else {

    idNoNull.value=true


   }

  console.log(props)

  const deleteInform = () => {

    firestore.collection("informes").doc(props.idContent).delete().then(function() {
        console.log("Document successfully deleted!");
        dispatch(MODIFIED(!modified))
        


     

      }).catch(function(error) {
          console.error("Error removing document: ", error);
      });

    console.log("Se desea eliminar a " + props.idContent )

    handleClose()
  
  }


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

  };

  return (
    <div className="deleteButton">
         {/*FONT AWESOME TRASH https://fontawesome.com/icons/trash-alt?style=solid*/}
    { 
      idNoNull.value &&   <TrashButton variant="contained" color="primary" onClick={handleOpen}>
         <i class="fas fa-trash-alt " ></i> 
       </TrashButton>
    }
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
          
           {/* <h2 id="transition-modal-title">¿Seguro que quiere eliminar el informe de "{props.nameContent}" para el mes de "{props.monthContent}"?</h2>*/}
            <div style={{ fontSize: 30}}>¿Seguro que quiere eliminar el informe de <b>"{props.nameContent}"</b> para el mes de <b>"{props.monthContent}"</b>?</div>
            <p id="transition-modal-description">Tenga en cuenta que esta acción no se puede deshacer.</p>


            <div  className="noButton">
            <Button variant="contained"   onClick={handleClose}>
              No
            </Button>
            
          </div>
            <div  className="yesButton">
             <ColorButton variant="contained" color="primary"  onClick={deleteInform}>
              Sí
            </ColorButton>
            </div>


              
         
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
