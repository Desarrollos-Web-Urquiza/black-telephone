import React, {useEffect} from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import { withStyles} from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { green, purple, grey, red } from '@material-ui/core/colors';
import Card from '@material-ui/core/Card';

import excel from '../../img/Excel.png';

const CardSelect = withStyles((theme) => ({
  root: {

    backgroundColor: grey[100],

    '&:hover': {
      backgroundColor: grey[100],
    },
  },
}))(Card);

const TrashButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: red[500],
    minWidth: 40,
    fontSize: 20,
  
    '&:hover': {
      backgroundColor: red[700],
    },
  },
}))(Button);

export default function NoHouse(props) {
  
  const [rows, setRows] = React.useState({value: []}); 
  
  const [showExcel, setShowExcel] = React.useState({value: false}); 

  const exportTableToExcel = (tableID, filename = '') =>{
      
    var downloadLink;
    var dataType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById(tableID);
    var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
    //Acentos
    var tableHTML = tableHTML.replace(/ñ/g, '&ntilde');
    var tableHTML = tableHTML.replace(/í/g, '&iacute');
    var tableHTML = tableHTML.replace(/ó/g, '&oacute');
    var tableHTML = tableHTML.replace(/á/g, '&aacute');
    var tableHTML = tableHTML.replace(/é/g, '&eacute');
    var tableHTML = tableHTML.replace(/ú/g, '&uacute');
    
    // Specify file name
    filename = filename?filename+'.xls':'excel_data.xls';
    
    // Create download link element
    downloadLink = document.createElement("a");
    
    document.body.appendChild(downloadLink);
    
    if(navigator.msSaveOrOpenBlob){
        var blob = new Blob(['\ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob( blob, filename);
    }else{
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
    
        // Setting the file name
        downloadLink.download = filename;
        
        //triggering the function
        downloadLink.click();
    }
  } 
  
  if (props.noHouses != undefined) {

    rows.value = props.noHouses

  }

  if (props.noHouses[0] == undefined) {

    showExcel.value = false

  } else {

    showExcel.value = true

  }

  console.log(props)
  console.log(props.noHouses[0])
  console.log(rows)

  const deleteOfArray = (param) => {

      var index = rows.value.indexOf( param );
      rows.value.splice( index, 1 );
      
      setRows({value: rows.value})

      console.log(rows.value)

  }

  // setRows(props.noHouses)

  return (

    <div>
    
     {/* <div align="center" >*/}
      <div className="card-container" align="center"  >
        
        <CardSelect className="cardSelectNoHouse">
          <h2 align="center"  >NO EN CASA</h2>

          {showExcel.value && <img src={ excel } className="deleteButton" style={{cursor:"pointer"}} onClick= { () => exportTableToExcel("tblNoHouses", 'No en casa' )   } />}
          { showExcel.value && <p  onClick= { () => exportTableToExcel("tblNoHouses", 'No en casa' )} className="downloadExcel"  /*style={{marginTop: 50, marginLeft: 690, cursor:"pointer"}}*/>Descargar en Excel</p> }

          <TableContainer component={Paper} >
            <Table  stickyHeader={false} minWidth= "650" aria-label="simple table" id="tblNoHouses" >
              <TableHead>
                <TableRow>

                  <TableCell><b>Nombre</b></TableCell>
                  <TableCell align="right"><b>Direccion</b></TableCell>
                  <TableCell align="right"><b>Telefono</b></TableCell>
                  <TableCell align="right"><b>Territorio</b></TableCell>
                  <TableCell align="right"><b>Fecha</b></TableCell>
                  <TableCell align="right"></TableCell> 

                </TableRow>
              </TableHead>
                    
              <TableBody>
                    
                {rows.value.map(row => (            

                  <TableRow key={row.Nombre}>
                    
                    <TableCell component="th" scope="row">
                    
                      <Typography gutterBottom variant="h6">{row.Nombre}</Typography>
                    
                    </TableCell>

                    <TableCell align="right"><Typography gutterBottom variant="h6">{row.Direccion} </Typography></TableCell>
                    <TableCell align="right"><Typography gutterBottom variant="h6">{row.Telefono} </Typography></TableCell>
                    <TableCell align="right"><Typography gutterBottom variant="h6">{row.Territorio}</Typography> </TableCell>
                    <TableCell align="right"><Typography gutterBottom variant="h6">{row.Fecha}</Typography> </TableCell>
                    <TableCell align="right"><TrashButton variant="contained" color="primary" onClick={() => deleteOfArray(row)} ><i class="fas fa-trash-alt " ></i></TrashButton></TableCell>                  
                    
                  </TableRow>
                ))}
                    
             </TableBody>
                  
            </Table>
                
          </TableContainer>

        </CardSelect>
        
        </div>    
    
    </div>

  );
}
