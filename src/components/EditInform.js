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

const PencilButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: yellow[700],
    minWidth: 50,
    fontSize: 20,
    
    '&:hover': {
      backgroundColor: yellow[800],
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

  let currentData = props

  const sendDatas = () => {
    props.properties.history.push("/edit")
    dispatch(MODIFIED(currentData)) 
  };
 
  return (
    <div className="editButton">
         {/*FONT AWESOME TRASH https://fontawesome.com/icons/trash-alt?style=solid*/}
    { 
      idNoNull.value &&   <PencilButton variant="contained" color="primary" onClick={sendDatas}>
         <i class="fa fa-pencil" ></i> 
       </PencilButton> 
    }

     
    </div>
  );
}
