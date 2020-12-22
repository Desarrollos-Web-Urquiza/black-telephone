import React from 'react';

import { connect } from 'react-redux';

import { motion } from "framer-motion";

import { withRouter } from 'react-router-dom'
import {Link} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import { firestore } from "./FirebaseConfig";

import DeleteInform from './DeleteInform';
import DeleteAll from './DeleteAll';
import EditInform from './EditInform';

import  NUEVA  from '../redux/actions/nueva';
import  GET  from '../redux/actions/get';
import  MONTH  from '../redux/actions/month';
import  MODIFIED  from '../redux/actions/modified';
import  SHOW  from '../redux/actions/show';

class SimpleTable extends React.Component{

  constructor(){
  	super();

  	this.state= { informacion: [], res: "", rows: [], issetMonth: false, spinner: false, showDeleteAll: true }

  }

  /*

  IMPORTANTE!!!!: 

  componentDidMount Y componentDidUpdate DEBEN ESTAR SIMPRE DUPLICADOS PARA QUE LA INFORMACIÓN SE MUESTRE AL MONTAR Y ACTUALIZAR EL COMPONENTE

  */

  componentDidMount () { 

    this.detonator()
    // console.log(this.props.history.location.pathname.slice(3, 0))
  }

  // Este ciclo de vida se ejecuta cuando hay actualizaciones, es decir, cuando cambio el mes con el select
  //  ↓  Este ciclo de vida es un espejo del componentDidMount, es decir que su codigo está duplicado.
  componentDidUpdate(prevProps) {
    //Este condicional vererifica que el mes del select se haya cambiado para recién en ese momento se ejecute el contenido de este ciclo de vida de React. Tambien se ejecuta cuando se elimina un informe.
    if (this.props.month !== prevProps.month || this.props.modified !== prevProps.modified ) {
    
      this.detonator()  

    }

  }
  //En esta función se encuentra la consulta directa a la base de datos
  createData (esto, mes)  {
       
    return new Promise(function(resolve, reject) {

      console.log(esto)        
      console.log(mes)              

      let informes = new Array()
      let i = 0 
     
      firestore.collection("informes").where("inform.mes", "==", mes)
      .get()
      .then(function(querySnapshot) {
        
        querySnapshot.forEach(function(doc) {

          informes[i] = {

            id: doc.id,
            name: doc.data().inform.name,
            ventas: doc.data().inform.ventas,
            mes: doc.data().inform.mes,
            llamadas: doc.data().inform.llamadas,
            ausentismo: doc.data().inform.ausentismo,
            horas: doc.data().inform.horas,
            reclamos: doc.data().inform.reclamos,
            notas: doc.data().inform.notas

          }
          
          i++

        });
        
        console.log("Informes " + informes)
        let parametros = JSON.stringify(informes)
        let paroms= {parametros: parametros,  esto: esto}

        return resolve(paroms)       
    
      })
      .catch(function(error) {
      
        console.log("Error getting documents: ", error);
      
      });

    });  
    
  }
  //Dentro de esta función se procesa los datos que llegan desde la base de datos y se crea el array "rows" con todos los datos que luego se mostrarán en la tabla
  get(){

    let informe = this.props.reducidor
   
    if(typeof(informe) == "object") {

      informe = JSON.parse(informe.parametros)

    } 
   
    console.log(informe)
   
    function createArray(name, esto) {

      let informe = esto.props.reducidor

      if(typeof(informe) == "object") {

        informe = JSON.parse(informe.parametros)

      }   
      
      let  arrayNotes = []
      
      for (var i = informe.length - 1; i >= 0; i--) {
           
        arrayNotes[i] =  informe[i]
      
        console.log(arrayNotes[i])
                
      }          
    
      console.log(arrayNotes)

      let coincidenciaDeNombre = {}

      arrayNotes.map((value) => {
                
        console.log("createArray " + value.name)
        
        if(value.name === name) {
    
          coincidenciaDeNombre = {

            name: value.name,
            ventas: value.ventas,
            mes: value.mes,
            llamadas: value.llamadas,
            ausentismo: value.ausentismo,
            horas: value.horas,
            reclamos: value.reclamos,
            notas: value.notas,
            id: value.id

          }

        } 

      })

      console.log( coincidenciaDeNombre.mes)
      
      if(coincidenciaDeNombre.mes === undefined){

        coincidenciaDeNombre = {

          name: name,
          ventas: "-",
          mes: "-",
          llamadas: "-",
          ausentismo: "-",
          horas: "-",
          reclamos: "-",
          notas: "-",
          id: "-"

        }

      }

      name = coincidenciaDeNombre.name
      let  ventas = coincidenciaDeNombre.ventas
      let  llamadas =coincidenciaDeNombre.llamadas
      let  horas = coincidenciaDeNombre.horas
      let  ausentismo = coincidenciaDeNombre.ausentismo
      let  reclamos = coincidenciaDeNombre.reclamos
      let  notes = coincidenciaDeNombre.notas
      let  id = coincidenciaDeNombre.id

      console.log(ausentismo)

      return { name, ventas, llamadas, horas, ausentismo, reclamos, notes, id };

    }

    // function createDatas(name, ventas, llamadas, horas, ausentismo, reclamos, notes) {

    //   return { name, ventas, llamadas, horas, ausentismo, reclamos, notes };

    // }

    const rows = [

      createArray('Mónica Garrido', this),
      createArray('Juan López', this),
      createArray('Sara Jiménez',  this),
      createArray('Juan Guardia', this),
      createArray('Sergio Puentes',  this),
      createArray('Miguel Puentes', this ),
      createArray('Pedro Fernández',  this),
      createArray('Elisabet Rodriguez',  this),
      createArray('Giovanni Rossi',  this),
      createArray('Fransisco Barraud',  this ),
      createArray('Cristina Levallois', this),
      createArray('Roberto Pérez', this),
      createArray('Marcela Ricci', this ),
      createArray('Ignacio Riguberto', this),
      createArray('Francesca Meazza',  this)

    ];

    //Esta variable retornará true o false al estado dependiendo de si el mes seleccionado tiene informes asignados a ese mes o no.  
    //Esto determinará si el botón "Eliminar mes completo" se mostrará o no.
    let issetMonth = false

    rows.map(row => {

      if(row.horas != "-"){

        issetMonth = true

      }
              
    })
    
    console.log(rows)
    //Si el mes está vacío, no mostramos el botón de descargar el mes en Excel. Tampoco lo hacemos cuando el mes se está cargando
    if (issetMonth == false) {

      this.props.SHOW(false)
    
    } else {

      this.props.SHOW(true)

    }

    this.setState({issetMonth: issetMonth })
    this.setState({rows: rows})
    this.setState({spinner: false})
    this.setState({showDeleteAll: true})

  }
  //Esta función contiene la ejecución de la función "createData" que es la que hace la consulta a la base de datos. 
  //Esta función "detona" todas la funciones que reunen y crean la información que va a la tabla.
  //detonator() se llama en los ciclos de vida "componentDidMount" y "componentDidUpdate" para que todo se ejecute cuando el componente se monta y actualiza.
  detonator(){

    let esto = this
    let mes 
    //Se iniciliza la pantalla de carga del mes. 
    //Todos estos valores son modificados al terminar la pantalla de carga
    esto.setState({spinner: true})
    esto.setState({showDeleteAll: false})
    esto.props.SHOW(false)
    console.log(mes)

    const rows= [

      {name: "Mónica Garrido", ventas: "-", llamadas: "-", horas: "-", ausentismo: "-", reclamos: "-", notes: "-", id: "-"},
      {name: "Juan López", ventas: "-", llamadas: "-", horas: "-", ausentismo: "-", reclamos: "-", notes: "-", id: "-"},
      {name: "Sara Jiménez", ventas: "-", llamadas: "-", horas: "-", ausentismo: "-", reclamos: "-", notes: "-", id: "-"},
      {name: "Juan Guardia", ventas: "-", llamadas: "-", horas: "-", ausentismo: "-", reclamos: "-", notes: "-", id: "-"},
      {name: "Sergio Puentes", ventas: "-", llamadas: "-", horas: "-", ausentismo: "-", reclamos: "-", notes: "-", id: "-"},
      {name: "Miguel Puentes", ventas: "-", llamadas: "-", horas: "-", ausentismo: "-", reclamos: "-", notes: "-", id: "-"},
      {name: "Pedro Fernández", ventas: "-", llamadas: "-", horas: "-", ausentismo: "-", reclamos: "-", notes: "-", id: "-"},
      {name: "Elisabet Rodriguez", ventas: "-", llamadas: "-", horas: "-", ausentismo: "-", reclamos: "-", notes: "-", id: "-"},
      {name: "Giovanni Rossi", ventas: "-", llamadas: "-", horas: "-", ausentismo: "-", reclamos: "-", notes: "-", id: "-"},
      {name: "Fransisco Barraud", ventas: "-", llamadas: "-", horas: "-", ausentismo: "-", reclamos: "-", notes: "-", id: "-"},
      {name: "Cristina Levallois", ventas: "-", llamadas: "-", horas: "-", ausentismo: "-", reclamos: "-", notes: "-", id: "-"},
      {name: "Roberto Pérez", ventas: "-", llamadas: "-", horas: "-", ausentismo: "-", reclamos: "-", notes: "-", id: "-"},
      {name: "Marcela Ricci", ventas: "-", llamadas: "-", horas: "-", ausentismo: "-", reclamos: "-", notes: "-", id: "-"},
      {name: "Ignacio Riguberto", ventas: "-", llamadas: "-", horas: "-", ausentismo: "-", reclamos: "-", notes: "-", id: "-"},
      {name: "Francesca Meazza", ventas: "-", llamadas: "-", horas: "-", ausentismo: "-", reclamos: "-", notes: "-", id: "-"},

    ]

    this.setState({rows: rows})

    //fin de pantalla de carga
    
    if(this.props.month == "-Mes no seleccionado- Volver a la página anterior"){
      
      //Si entramos en esta parte del IF es porque la página de "Ver completo" fue recargada y el mes que estaba cargado en Redux se borró
      //en ese caso, sacamos el mes a mostrar desde la URL 
      let semiMes = this.props.history.location.pathname.split('/')//Separamos el mes del resto de la URL
      
      mes =  semiMes[2]
    
      this.props.MONTH(mes)

      console.log("Mes sacado de la URL " + mes )  

    } else {

      //Si estamos en esta parte del IF, el mes fue cargado a Redux y aun está en memoria
      mes = this.props.month

    }  
  
    this.createData(esto, mes)
    .then( param => {  
        
      console.log("RESOLUCIÓN DE PROMISE " + param)
      // Redux lleva string nada más, por eso hay que convertir
      // let parametros = JSON.stringify(param)
      
      this.props.NUEVA(param)
      this.get()

    })       
        
    console.log(this.props)    

  }

  render(){
    // https://codesandbox.io/s/material-demo-5rdmx?file=/demo.js 
    // className="headofTable"
    console.log(this.state.issetMonth)

    return (

      <div>
       {/* <motion.div */}
		
			{/* // initial="initial"
			// animate="enter"
			// exit="exit"
			

			// >  
			// <motion.div */}
{/* 		
			// variants={{initial: {x: 80, opacity: 0, duration: 0.3,
			// ease: [0.43, 0.13, 0.23, 0.76]},
			// exit: { x: -80, opacity: 0, duration: 0.3, },
			// enter: { x: 0, opacity: 1,   ease: [0.43, 0.13, 0.23, 0.76] }}}

			// >   */}
        <div className="h1ofTable">
          
          <meta charset="utf-8" />
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

          <h3>Informes del mes de "{this.props.month}"</h3>
          { this.state.spinner &&   <CircularProgress /> }
          { this.state.spinner &&   <Typography >Cargando mes...</Typography>}
        
        </div>
        
        <DeleteAll monthContent={this.props.month} issetMonth={this.state.issetMonth} showDeleteAll={this.state.showDeleteAll}/>

        <br />
        <br />
        
        <TableContainer component={Paper} className="container">
          <Table  stickyHeader={true} minWidth= "650" aria-label="simple table" id="tblData" >
            
            <TableHead>
              <TableRow>

                <TableCell><b>Empleado</b></TableCell>
                <TableCell align="right"><b>Ventas</b></TableCell>
                <TableCell align="right"><b>Llamadas</b></TableCell>
                <TableCell align="right"><b>Horas trabajadas</b></TableCell>
                <TableCell align="right"><b>Ausentismo (días)</b></TableCell>
                <TableCell align="right"><b>Reclamos atendidos</b></TableCell>
                <TableCell align="right"><b>Notas</b></TableCell>
                <TableCell align="right"></TableCell>   

              </TableRow>
            </TableHead>
            
            <TableBody>
              
              {this.state.rows.map(row => (            

                <TableRow key={row.name}>
                  
                  <TableCell component="th" scope="row">
                  
                    <Typography gutterBottom variant="h6">{row.name}</Typography>
                  
                  </TableCell>

                  <TableCell align="right"><Typography gutterBottom variant="h6">{row.ventas} </Typography></TableCell>
                  <TableCell align="right"><Typography gutterBottom variant="h6">{row.llamadas} </Typography></TableCell>
                  <TableCell align="right"><Typography gutterBottom variant="h6">{row.horas}</Typography></TableCell>
                  <TableCell align="right"><Typography gutterBottom variant="h6">{row.ausentismo}</Typography></TableCell>
                  <TableCell align="right"><Typography gutterBottom variant="h6">{row.reclamos}</Typography></TableCell>
                  <TableCell align="right"><Typography gutterBottom variant="h6">{row.notes}</Typography></TableCell>
                  <TableCell align="right"><EditInform properties={this.props} idContent={row.id} monthContent={this.props.month} nameContent={row.name} currentventas={row.ventas} currentllamadas={row.llamadas} currentHoras={row.horas} currentausentismo={row.ausentismo} currentreclamos={row.reclamos} currentNotes={row.notes}  /><DeleteInform idContent={row.id} monthContent={this.props.month} nameContent={row.name} /></TableCell>
                                    
                </TableRow>
              ))}
            
            </TableBody>
          
          </Table>
       
       </TableContainer>
    
      </div>
             
			// </motion.div>
			// </motion.div>
    );
  }
}

const mapStateToProps = (state) =>{

	return {

		reducidor: state.reducidor,
		get: state.get,
		month: state.month,
    modified: state.modified,
    show: state.show
	
	}
}      

const mapDispatchToProps = {
	
	NUEVA,
	GET,
	MONTH,
  MODIFIED,
  SHOW
		
}

export default withRouter (connect(mapStateToProps, mapDispatchToProps)(SimpleTable))