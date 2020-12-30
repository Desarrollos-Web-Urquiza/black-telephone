import React, {  useEffect  } from 'react';

import { useDispatch, useSelector, connect } from 'react-redux';

import  MONTH  from '../../redux/actions/month';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import { purple, red } from '@material-ui/core/colors';
import { withStyles} from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import TextField from '@material-ui/core/TextField';
import Draggable  from './draggable'
  
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
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700],
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

const useStyle = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
       position: 'absolute',
       bottom: 0,
       right: 0,
       position: 'fixed'
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
     
  },
}));

function Shifts(props) {
  
  const classes = useStyles();
  const classe = useStyle();
  const [open, setOpen] = React.useState(false);
  const [idNoNull, setIdNoNull] = React.useState({value: true});
  const [currentData, setCurrentData] = React.useState('');
  const dispatch = useDispatch()

  useEffect(() => {
  
    setCurrentData(props.reducidor)
    console.log(props.reducidor)
   
  });

  console.log(props)
  console.log("props")

  const handleOpen = () => {
  
    setOpen(true);
  
  };

  const handleClose = () => {
   
    setOpen(false);

  };

  return (

    <div className="deleteButton">
        
      <div className={classe.root} onClick={handleOpen} >
     
        <Fab variant="extended">
          <NavigationIcon className={classe.extendedIcon} />
          Turnos
        </Fab>
      
      </div>
   
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

            <Draggable   />

            <div  className="noButton">
           
              <Button   onClick={handleClose}>
                Guardar
              </Button>

            </div> 

          </div>
        </Fade>
      </Modal>
    </div>

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

export default   connect(mapStateToProps, mapDispatchToProps)(Shifts)