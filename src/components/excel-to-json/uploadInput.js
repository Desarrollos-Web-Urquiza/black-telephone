import React from 'react';

import {Helmet} from "react-helmet";

import { motion } from "framer-motion";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { grey } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import TopBar from '../topBar'
import Drawer from '../drawer'
import Shifts from './shifts';
import NoHouse from './noHouse';
import Footer from '../footer';

import imageExcelInform from '../../img/excelupload-lite.jpg';
import GoogleMaps from '../../img/Google-maps.png';
import clipUsado from '../../img/clip-usado2.png';

import XLSX  from 'xlsx'; 

// // import './style.css';
// //Los estilos los puse en Routes.js

const CardSelect = withStyles((theme) => ({
  root: {

    backgroundColor: grey[100],

    width: 500,

    '&:hover': {
      backgroundColor: grey[100],
    },
  },
}))(Card);

const CardSelectTerritory = withStyles((theme) => ({
  root: {

    backgroundColor: '#d8ae74',
   
    width: 675,

    '&:hover': {
      backgroundColor: '#d8ae74',
    },
  },
}))(Card);

const UploadInput = props => {

  //Script que evita cerrar la pestaña
	window.onbeforeunload = function(e) {
  
    return 'Texto de aviso';
  
  };

  const [rows, setRows] = React.useState({value: []});
  
  const [show, setShow] = React.useState({value: false});
 
  const [noHouse, setNoHouse] = React.useState({value: [  ]});

  const [spinner, setSpinner] = React.useState(false);

  const [urlImage, setUrlImage] = React.useState('');
  
  const [showTerritory, setShowTerritory] = React.useState({value: false});

  const [handleDrawerOpen, setHandleDrawerOpen] = React.useState(false);

  const noCasa = (param) => {

    if (noHouse.value != undefined) {

      console.log(param)
      console.log(noHouse.value)
      console.log(noHouse)
      console.log(typeof(noHouse.value))
      console.log(typeof(noHouse))
      
      let date =  Date()

      date = date.split(' ')

      date = date[2] + '-' + date[1] + '-' + date[3] 

      param.Fecha = date

      noHouse.value.push(param)
      
      setNoHouse({value: noHouse.value })
      
      console.log(noHouse.value)
      console.log(noHouse)          

      // Ir a abajo
      let bajar = window.innerHeight + 100000
      window.scrollBy(0, bajar);
      console.log(bajar)
      
    }  else {

      console.log(noHouse.value)
      console.log(noHouse)
      console.log(typeof(noHouse.value))
      console.log(typeof(noHouse))

      console.log("No entró a la actulización")

    }
    
  }  

  const handleOnChange = event => {

    setSpinner(true)
    
    let  selectedFile = event.target.files[0];

    if(selectedFile){
      
      let fileReader = new FileReader();

      fileReader.readAsBinaryString(selectedFile);
      
      fileReader.onload = (event)=>{
      
        let data = event.target.result;
        let workbook = XLSX.read(data,{type:"binary"});
      
        console.log(workbook);
      
        let finalRows = []

        workbook.SheetNames.forEach(sheet => {
          
          let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
          
          console.log(rowObject);

          finalRows.push(rowObject)

        });
        
        console.log(finalRows);
        
        setRows({value: finalRows})
        setShow({value: true})
        setSpinner(false)

      }
   
    }

  }
  
  const handleDrawerOpenFunction =  (esto) => {

    console.log(handleDrawerOpen)

    setHandleDrawerOpen(true)

  }

  const handleDrawerClose =  (esto) => {

    console.log(handleDrawerOpen)

    setHandleDrawerOpen(false)

  }

  const transition = {
    duration: 0.3,
    ease: [0.43, 0.13, 0.23, 0.76]
  };

  const backVariants = {
    initial: {x: 0, opacity: 0, transition},
    exit: { x: 0, opacity: 0, transition },
    enter: { x: 0, opacity: 1, transition }
  };

  console.log("uploadInput actualizado: 20")
  console.log(window.location.origin)
  console.log(noHouse.value)
  console.log(noHouse)
  console.log(showTerritory.value)
  console.log(show.value)
  console.log(urlImage)
  console.log(props.history)

  return(
    
    //Animación de transición
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div variants={backVariants}>

        <div>

          <Helmet>
                                  
            <title>Informes - Territorios de llamadas</title>
                  
          </Helmet>

          <TopBar
            
            page={"home"} 
            onOpenDrawer={ () => handleDrawerOpenFunction(this)}
            history={props.history}
          
          />
        
          <Drawer

            onClose={() => handleDrawerClose(this)}
            open={handleDrawerOpen}
            history={props.history}
          
          />

          { !show.value && 

            <div  align="center" style={{marginTop: 150}}>
              <CardSelect>
                
                <h1>Ingrese territorio</h1>
                
                <img src={ imageExcelInform } />
                  
                <br />
                <br />
              
                <input type="file" name="avatar"  onChange={handleOnChange.bind(this)}  accept=".xls,.xlsx,.ods,.ots,.uos,.xlt,.xlsm" />

                <br />
                <br />

                { spinner && <CircularProgress />}                       
                { spinner &&   <Typography >Cargando territorio...</Typography>}

                <br />
                
                <a 
                  
                  onClick={() => props.history.push('/uploadexcel-ayuda' ) }
                  style={{marginLeft: 400,   cursor: "pointer", color: "#0070f3",  }}
                
                >
                  Ayuda
              
                </a>
                
                <br />
                <br />
              
              </CardSelect>
            </div>

          }
          
          {show.value &&
            
            <TableContainer component={Paper} className="containerOfTerritory">
          
              <div align="center">

                <div  align="center" style={{marginTop: 100}}>
                  
                  { showTerritory.value &&
                    
                    <CardSelectTerritory>
                      
                      <img src={ clipUsado } style={{marginLeft: -550, }}/>
                      
                      <h1 style={{marginTop: -50, marginLeft: 10, }}>{"Territorio " + rows.value[0][0].Territorio}</h1>
                      
                      <a href={urlImage} target="_blank" > <img src={urlImage} width="400"  /></a>
                      
                      <br />
                      <br />
                      <br />
                      <br />
                  
                    </CardSelectTerritory>
                  }
                  
                  { !showTerritory.value && <h1 style={{marginTop: 50, marginLeft: 10, }}>{"Territorio " + rows.value[0][0].Territorio}</h1> }
                
                </div>
                
                <br />
                <br />
                <br />
                
              </div>
            
              <Table  stickyHeader={true} minWidth= "650" aria-label="simple table" id="tblD" >
                
                <TableHead>
                
                  <TableRow>

                    <TableCell><b>Nombre</b></TableCell>
                    <TableCell align="right"><b>Direccion</b></TableCell>
                    <TableCell align="right"><b>Telefono</b></TableCell>
                    <TableCell align="right"><b>Google Maps</b></TableCell>
                    <TableCell align="right"><b>Hecho</b></TableCell>
                    <TableCell align="right"><b>No en casa</b></TableCell>
                    <TableCell align="right"><b>Mostrar número</b></TableCell>

                  </TableRow>
                
                </TableHead>
                
                <TableBody>
                  
                  {rows.value[0].map(row => (            

                    row.Nombre ? undefined : row.Nombre = "" ,
                    
                    row.Direccion ? undefined : row.Direccion = "" ,
                    
                    row.Territorio ? undefined : row.Territorio = "desconocido" ,

                    <TableRow key={row.Nombre}>
                      
                      <TableCell component="th" scope="row">
                      
                        <Typography gutterBottom variant="h6">{row.Nombre}</Typography>
                      
                      </TableCell>

                      <TableCell align="right"><Typography gutterBottom variant="h6">{row.Direccion} </Typography></TableCell>
                      <TableCell align="right"><Typography gutterBottom variant="h6">{row.Telefono} </Typography></TableCell>
                      <TableCell align="right"> <a href={"https://www.google.com/maps/place/" + row.Direccion + ",+Rosario,+Santa+Fe,+Argentina/"} target="_blank" ><img src={ GoogleMaps } /></a></TableCell>
                      <TableCell align="right"><input type="checkbox" /></TableCell>
                      <TableCell align="right"><Button  color={"default"} size="large" onClick={() => noCasa({Nombre: row.Nombre, Direccion: row.Direccion, Telefono: row.Telefono, Territorio: row.Territorio})}><i class="fas fa-home  fa-lg"></i> </Button></TableCell>
                      <TableCell align="right">  <Button  color={"primary"} target="_blank"  href={window.location.origin + "/mostrarnumero/" + "Territorio=" + row.Territorio + "&" + "Nombre=" + row.Nombre + "&" + "Direccion=" + row.Direccion + "&" + "Telefono=" + row.Telefono + "&" + "showTerritory=" + showTerritory.value  } size="large"><i class="fa fa-external-link fa-lg" ></i> </Button> </TableCell>
                      
                    </TableRow>
                  
                  ))}
                
                </TableBody>
              
              </Table>
          
            </TableContainer>

          }

          { show.value &&  <br />}
          { show.value &&  <br />}
          
          { show.value && <Shifts /> /*Turnos*/}
          
          { show.value && <NoHouse noHouses={noHouse.value} /> /*No en casa*/}

          { !show.value &&  <br />}
          { !show.value &&  <br />}
          { !show.value &&  <br />}
          { !show.value &&  <br />}
          { !show.value &&  <br />}
          { !show.value &&  <br />}
          { !show.value &&  <br />}
          { !show.value &&  <br />}
          { !show.value &&  <br />}
          { !show.value &&  <br />}
          { !show.value &&  <br />}
          { !show.value &&  <br />}
          { !show.value &&  <br />}
          { !show.value &&  <br />}
          { !show.value &&  <br />}
          { !show.value &&  <br />}
          { !show.value &&  <br />}
          
          <Footer properties={props}/>	
        
        </div>
    </motion.div>
	</motion.div>
  )

}

export default  UploadInput  ;