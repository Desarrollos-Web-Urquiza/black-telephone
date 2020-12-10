import React from 'react';

import { withRouter } from 'react-router-dom'

import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';
import TextField from "@material-ui/core/TextField";

import Iframe from 'react-iframe'

import clipUsado from '../../img/clip-usado1.png';

import { green, purple, grey } from '@material-ui/core/colors';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';

// import './style.css';
//Los estilos los puse en Routes.js

const CardSelect = withStyles((theme) => ({
  root: {

    backgroundColor: grey[100],

    '&:hover': {
      backgroundColor: grey[100],
    },
  },
}))(Card);

const CardSelectTerritory = withStyles((theme) => ({
  root: {

    backgroundColor: '#d8ae74',
    width: 275,

    '&:hover': {
      backgroundColor: '#d8ae74',
    },
  },
}))(Card);

const ShowNumber = props => {
	
  const [Territorio, setTerritorio] = React.useState({value: 'Territorio "?" '});
  const [Nombre, setNombre] = React.useState({value: ''});
  const [Direccion, setDireccion] = React.useState({value: ''});
  const [Telefono, setTelefono] = React.useState({value: ''});
  const [showMap, setShowMap] = React.useState({value: true});
  const [urlImage, setUrlImage] = React.useState('');
  const [showTerritory, setShowTerritory] = React.useState({value: false});
  const [visibiltyMouseHover, setVisibiltyMouseHover] = React.useState(false);
  const [visibiltyInputName, setVisibiltyInputName] = React.useState(false);
  const [visibiltyInputDireccion, setVisibiltyInputDireccion] = React.useState(false);
  const [visibiltyInputTelefono, setVisibiltyInputTelefono] = React.useState(false);
 	
  //Recibimos todos los argumentos del número que clickeamos desde la URL

  console.log("ShowNumber actualizado: 20")

  let semiParams = window.location.pathname.split('/')//Separamos el mes del resto de la URL
  
  semiParams =  semiParams[2]

  let params = semiParams.split('&')

  let territory = params[0].split('=')

  territory = territory[0] + " " + territory[1]

  console.log(territory)
  Territorio.value = territory

  let name = params[1].split('=')
  
  name = name[1].split('%20')

  let completeName = ""

  for (var i = 0  ; i < name.length; i++) {
  
    completeName = completeName + name[i] + " "
  
  }

  //Corregimos las "Ñ" que vienen mal de las URLs
  completeName = completeName.replace("%C3%91", "Ñ")

  console.log(completeName)

  //Ponemos en el estado los datos de la URL solo si en el estado por defecto está vacío. Si no quedará el estado que modificamos con el "pencil"
  //Hacemos lo mismo con la "Direccion" y el "Telefono"
  if (Nombre.value == '') {

  Nombre.value = completeName

  }

  let direction = params[2].split('=')

  direction =  direction[1].split('%20')


  let completeDirection = ""

  for (var i = 0  ; i < direction.length; i++) {
  
  completeDirection = completeDirection + direction[i] + " "
  
  }

  if (Direccion.value == '') {

    Direccion.value = completeDirection

  }


  console.log(completeDirection)

  let telephone = params[3].split('=')

  telephone =  telephone[1].split('%20')

  let completeTelephone = ""

  for (var i = 0  ; i < telephone.length; i++) {
  
  completeTelephone = completeTelephone + telephone[i] + " "
  
  }


  console.log(completeTelephone)


  if (Telefono.value == '') {

    Telefono.value = completeTelephone

  }

  console.log(Territorio)

  let showTerritorys = params[4].split('=')

  // showTerritorys =  showTerritorys[1].split('%20')

  // let completeTelephone = ""
  console.log(showTerritorys)

  if( showTerritorys[1] == "true"  && Territorio.value != "Territorio desconocido"  ){   

  showTerritory.value = true


  } else {

  showTerritory.value = false

  }

  //  console.log(document.getElementById("outlined-multiline-static-nro"))
  //  console.log(visibiltyInputTelefono)
  // if ( document.getElementById("outlined-multiline-static-nro") != null) {


  //  document.getElementById("outlined-multiline-static-nro").focus()
  //  console.log(document.getElementById("outlined-multiline-static-nro"))

  // }

  console.log( showTerritory.value)

  console.log(semiParams)
    
  const hiddenShowMap =  () => {

    setShowMap({value: !showMap.value})
    // showMap.value =  !showMap.value
    console.log(showMap.value)


  }

  const mouseOver =  () => {

    
    setVisibiltyMouseHover(true)
    // setInterval(function() { setVisibiltyMouseHover(false) }, 10000);
    // console.log("Hola mundo 👋")


  }

  const noMouseOver =  () => {



    

    // setInterval(function() { setVisibiltyMouseHover(false) }, 5000);
    // setInterval(function() {  console.log("Hello world 👋") }, 5000);
    

    setVisibiltyMouseHover(false) 
    console.log("Hello world 👋")
    
    


  }

  //Al perder el foco, actualizamos el estado y volvemos invisible el input para pasar a mostrar el texto correspondiente
  const _onBlurFunctionName =  event => {

      console.log(event.target.value )
      
      setNombre({value: event.target.value })

      console.log(Nombre.value )
      setVisibiltyInputName(false)

  }
  
  const _onBlurFunctionTelefono =  event => {

          console.log(event.target.value )
          
          Telefono.value = event.target.value 
          setTelefono({value: event.target.value })
          console.log(setTelefono )

          console.log(Telefono )
          setVisibiltyInputTelefono(false)


  }
  
  const _onBlurFunctionDireccion =  event => {

          console.log(event.target.value )
          
          setDireccion({value: event.target.value })

          console.log(Direccion.value )
          setVisibiltyInputDireccion(false)

  }

  const pencilOfName =  () => {

      setVisibiltyInputName(true)

  }
  
  const pencilOfDireccion =  () => {

      setVisibiltyInputDireccion(true)

  }
  
  const pencilOfTelefono =  () => {

      setVisibiltyInputTelefono(true)
      // document.getElementById("outlined-multiline-static-nro").focus()

      // console.log( document.getElementById("outlined-multiline-static-nro"))
      // if ( document.getElementById("outlined-multiline-static-nro") != null) {


      //   document.getElementById("outlined-multiline-static-nro").focus()
      //   console.log(document.getElementById("outlined-multiline-static-nro"))

      //  }

  }

    console.log(showMap.value)

{/*<div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=rosario%20santa%20fe&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.whatismyip-address.com/nordvpn-coupon/">nordvpn discount codes</a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style></div>     */}

		return(
		
			<div>
    		
        <div align="center" style={{marginTop: 60}}  >
      		<CardSelect className="cardSelect" >
                

            

            <br />
            { showTerritory.value &&
             <CardSelectTerritory>
            <img src={ clipUsado } style={{marginLeft: -220, }}/>
            {<h2 align="center"  style={{marginTop: -30, }}>{Territorio.value}</h2>}
          <a href={urlImage} target="_blank" > <img src={urlImage} style={{marginTop: -10 }} width="175"  /></a>
            <br />
            <br />
             </CardSelectTerritory>
            }

            { !showTerritory.value && <br />}
            { !showTerritory.value &&  <h1 align="center"  style={{marginTop: -30, }}>{Territorio.value}</h1>}
            { !showTerritory.value && <hr />}

            <br />
            
            <div >
             { showMap.value && <a style={{cursor:"pointer"}} onClick={() => hiddenShowMap() } > Ocultar mapa</a>}
             { !showMap.value && <a style={{cursor:"pointer"}} onClick={() => hiddenShowMap() } > Mostrar mapa</a>}

            </div>
            {showMap.value && <Iframe url={"https://maps.google.com/maps?q=" + Direccion.value + ",+Rosario,+Santa+Fe,+Argentina/" + "&t=&z=16&ie=UTF8&iwloc=&output=embed"}
            position="relative"
            width="450px"
            height="200px"
            id="myId"
            className="myClassname"

            styles={{height: "25px"}}/>}
            {/*Los lapicitos aparecen cuando les paso el mouse encima o los toco si estoy en dispositivo movil. Después desaparecen al dejar de hacerlo*/}
            <div style={{ margiTop: "-20"}}   onMouseEnter={() => mouseOver()} onMouseLeave={() => noMouseOver()}  >
            <div className="numberBox">             
             { !visibiltyInputName && <p  align="center" style={{fontSize: 30}}>{Nombre.value}</p>}
              
                { visibiltyInputName &&
                    <TextField
                      id="outlined-multiline-static1"
                      multiline
                      fontSize={30}
                      rows={1}
                      height={20}
                      defaultValue={Nombre.value}
                      variant="outlined"
                      onBlur={_onBlurFunctionName}
                      autoFocus={visibiltyInputName}
                      style={{marginTop: 10 }}
                    /> 
                }
                { visibiltyInputDireccion &&  <br /> }
                { visibiltyInputDireccion &&  <br /> }
               <br />
               <br />
               <br />
               <br />
             
               { visibiltyMouseHover && !visibiltyInputName &&  <Grid  className="pencilName" onClick={() => pencilOfName()} >
                  <Tooltip title="Editar"   >
                    <IconButton aria-label="delete" >
                      <CreateIcon />
                      </IconButton>
                  </Tooltip>
                </Grid> }
              
            </div>
            
            <div className="numberBox">       

              { !visibiltyInputDireccion &&  <p  align="center" style={{fontSize: 40, marginTop: -14}}>{Direccion.value}</p>}
               
                { visibiltyInputDireccion &&  <br /> }
                { visibiltyInputDireccion &&  <br /> }
                { visibiltyInputDireccion &&  <br /> }
                
                { visibiltyInputDireccion &&
                    <TextField
                      id="outlined-multiline-static3"
                      multiline
                      fontSize={30}
                      rows={1}
                      height={20}
                      defaultValue={Direccion.value}
                      variant="outlined"
                      onBlur={_onBlurFunctionDireccion}
                      autoFocus={visibiltyInputDireccion}
                      style={{marginTop: -27 }}
                    /> 
                }

                 { visibiltyInputDireccion &&  <br /> }
                 { visibiltyInputDireccion &&  <br /> }
                 
                 { visibiltyMouseHover && !visibiltyInputDireccion && <Grid  className="pencil" style={{marginTop: -10}}  onClick={() => pencilOfDireccion()}>
                  <Tooltip title="Editar"   >
                    <IconButton aria-label="delete" >
                      <CreateIcon />
                      </IconButton>
                  </Tooltip>
                </Grid>}
              </div>

             { visibiltyInputDireccion &&  <br /> }

               
              <div className="numberBox"   >
                { !visibiltyInputTelefono && <b><p align="center" style={{fontSize: 60, marginTop: -40 }} >{Telefono.value}</p></b>}

                { visibiltyInputTelefono &&  <br /> }
                { visibiltyInputTelefono &&  <br /> }
                { visibiltyInputTelefono &&  <br /> }
                
                { visibiltyInputTelefono &&
                    <TextField
                      id="outlined-multiline-static3"
                      multiline
                      fontSize={30}
                      rows={1}
                      height={20}
                      defaultValue={Telefono.value}
                      variant="outlined"
                      onBlur={_onBlurFunctionTelefono}
                      autoFocus={visibiltyInputTelefono}
                      style={{marginTop: -27 }}
                    /> 
                }

                 { visibiltyInputTelefono &&  <br /> }
                 
                 { visibiltyMouseHover && !visibiltyInputTelefono && <Grid  className="pencil"  onClick={() => pencilOfTelefono()}>
                  <Tooltip title="Editar"   >
                    <IconButton aria-label="delete" >
                      <CreateIcon />
                      </IconButton>
                  </Tooltip>
                </Grid>}
              </div>
                { visibiltyInputTelefono &&  <br /> }
              </div>


         </CardSelect>
        </div>




				
				
			</div>
		)

	

}



export default  ShowNumber  ;