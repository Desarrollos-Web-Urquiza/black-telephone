import React from 'react';

import { connect } from 'react-redux';

import  MONTH  from '../redux/actions/month';
import  ERR  from '../redux/actions/err';
import  MODIFIED  from '../redux/actions/modified';

import pencil from '../img/pencil.png';

import { firestore } from "./FirebaseConfig";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import { purple, yellow } from '@material-ui/core/colors';
import { withStyles} from '@material-ui/core/styles';

import MultilineTextFields from './MultilineTextFields';
import EditMaterialInput from './EditMaterialInput';

import './styles.css';

const EditButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: yellow[700],
    minWidth: 50,
    fontSize: 14,
    
    '&:hover': {
      backgroundColor: yellow[800],
    },
  },
}))(Button);

class Edit extends React.Component{
	
	constructor(props) {
    	super(props);
	     							   
	    this.state ={ name: this.props.modified.nameContent , id: this.props.modified.idContent ,  month: this.props.modified.monthContent , ventas: this.props.modified.currentventas, llamadas: this.props.modified.currentllamadas, horas: this.props.modified.currentHoras, ausentismo: this.props.modified.currentausentismo, reclamos: this.props.modified.currentreclamos, comentarios: this.props.modified.currentNotes, err: false, err2: false, err3: false, success: false, spinner: false, disabled: false, err4: false, err5: false }

	    // this.cambioMes = this.cambioMes.bind(this);	
	}
	
	componentDidMount(){

		console.log(this.props)

		//Si el estado "modified" de Redux viene vacío con su estado por default (false), lo redirigimos al componente para informar. 
		//Esto se puede dar si recargamos la página o si tipeamos la ruta de este componente.
		if(this.props.modified == false) {

			this.props.history.push("/")

		}

	}

	componentWillUnmount(){

		//Dejamos de marcar en rojo cualquier campo cuando se va del componente sin editar
		//Esto permite que si luego vuelve al componente, no herede errores viejos
		this.props.ERR("NoErr")

	}
	
	componentDidUpdate(prevProps) {

		if (this.props.month !== prevProps.month) {

			console.log(this.props.month)

		//en this.props.month[1]↓  está el tipo de dato que viene del formulario. En el primer caso, se valida si es el select de los "name" y se asigna al estado del componente "informar"
			if(this.props.month[1] == "name"){

				console.log("Es NAME")
				
				this.setState({name: this.props.month[0]})
				//Ocultamos el cartel de "informe enviado" si usa de nuevo el select
				this.setState({success: false})
				//Ocultamos el cartel de "Informe repetido" en caso de que se haya equivocado de nombre y lo quiera cambiar. 
				this.setState({err3: false})

			}

			if(this.props.month[1] == "Ventas") {

				console.log("Es ventas")

				this.setState({ventas: this.props.month[0]})
				this.setState({success: false})
			
			}	
	
			if(this.props.month[1] == "Llamadas") {

				console.log("Es Llamadas")

				this.setState({llamadas: this.props.month[0]})
				this.setState({success: false})
			
			}

			if(this.props.month[1] == "Horas") {

				console.log("Es Horas")

				this.setState({horas: this.props.month[0]})
				this.setState({success: false})
				
				if (this.props.month[0] != 0) {

					this.setState({err4: false})
				}
			
			}

			if(this.props.month[1] == "Ausentismo") {

				console.log("Es Ausentismo")

				this.setState({ausentismo: this.props.month[0]})
				this.setState({success: false})
			
			}	

			if(this.props.month[1] == "Reclamos") {

				console.log("Es Reclamos atendidos")

				this.setState({reclamos: this.props.month[0]})
				this.setState({success: false})
				
			}
			
			if(this.props.month[1] == "Comentarios") {

				console.log("Es Comentarios")

				this.setState({comentarios: this.props.month[0]})
				this.setState({success: false})
			}		

		}		

	}

	add (esto) {
		
		// window.scrollTo(0, 100)
		console.log("Entró al add")
		
		//Todos estos cambios de estado van regulando con booleanos qué mensajes se van mostrando u ocultando en la pantalla
		esto.setState({spinner: true})
		esto.setState({disabled: true})
		esto.setState({err3: false})
		esto.setState({err4: false})
		esto.setState({err5: false})
		esto.setState({success: false})
       	esto.setState({err: false})
		esto.setState({err2: false})

		let name = esto.state.name
		let month = esto.state.month
		let ventas = esto.state.ventas
		let llamadas = esto.state.llamadas
		let horas = esto.state.horas
		let ausentismo = esto.state.ausentismo
		let reclamos = esto.state.reclamos
		let comentarios = esto.state.comentarios

		let informe = { 

			name, 
			month,
			ventas,
			llamadas,
			horas,
			ausentismo,
			reclamos,
			comentarios

		}

		console.log(informe)

		if(informe.name =='' ||  informe.ventas =='' || informe.llamadas =='' || informe.horas =='' || informe.ausentismo =='' || informe.reclamos ==''){

			if(esto.state.err == true) {
				
				esto.setState({err2: true})
				esto.setState({err5: false})
				esto.setState({err: false})
				esto.setState({err3: false})
				esto.setState({err4: false})
				esto.setState({success: false})
				esto.setState({spinner: false})
				esto.setState({disabled: false})
					
				//Marcamos en rojo cualquier campo que pudo haber dejado vacío el usuario
				esto.props.ERR("err")

			} else {

				console.log("Formulario incompleto")
				
				esto.setState({err: true})
				esto.setState({err5: false})
				esto.setState({err2: false})
				esto.setState({err3: false})
				esto.setState({err4: false})
				esto.setState({success: false})
				esto.setState({spinner: false})
				esto.setState({disabled: false})

				//Marcamos en rojo cualquier campo que pudo haber dejado vacío el usuario
				esto.props.ERR("err")

			}

		} else {

			let posibleContradiction 

			if ( this.state.ventas != 0 || this.state.llamadas != 0 || this.state.ausentismo != 0 || this.state.reclamos != 0  ) {

				posibleContradiction =  true

			} else {

				posibleContradiction = false

			}

			if (this.state.horas == 0 && posibleContradiction == true && this.state.horas != "" ) {

				console.log("INFORME CONTRADICTORIO!!!!")
				esto.props.ERR("contradiction")

				esto.setState({err4: true})
				esto.setState({err5: false})
				esto.setState({err2: false})
				esto.setState({err: false})
				esto.setState({err3: false})
				esto.setState({success: false})
				esto.setState({spinner: false})
				esto.setState({disabled: false})

			}	else {

				let informes
				firestore.collection("informes").where("inform.mes", "==", informe.month).where("inform.name", "==", informe.name)
				.get()
				.then(function(querySnapshot) {
            		querySnapshot.forEach(function(doc) {
          
						informes = {
						
							id: doc.id
						
						}

            		});
            
	            console.log(informe.id)
	         	
	         	if(informes.id != undefined) {

	         		console.log("Existe informe previo de este publicador")
	         		
	         		firestore.collection("informes").doc(esto.state.id).update({
	              
	              		inform:{ 

	             			name: informe.name,
			             	ventas: informe.ventas,
			              	mes: informe.month,
			              	llamadas: informe.llamadas,
			              	ausentismo: informe.ausentismo,
			              	horas: informe.horas,
			              	reclamos: informe.reclamos,
			              	notas: informe.comentarios
	              		
	              		}
	                 
	        		})
	        		.then(function() {
	            			
	            		console.log("inform updated");
			            
			            esto.setState({success: true})
			            esto.setState({spinner: false})
			            esto.setState({disabled: false})
			            esto.setState({err: false})
						esto.setState({err2: false})
						esto.setState({err3: false})
						esto.setState({err4: false})
						esto.setState({err5: false})
			           
						//Ir a abajo (no siempre funciona)
						window.scrollBy(0, window.innerHeight);
			           
			            // ↓ Este segundo dispatch lo único que hace es evitar un bug que surgía al enviar un primer informe, y si queríamos volver a usar el select este quedaba en blanco pero seguía teniendo value.
			            esto.props.MONTH("noReset")
			           
			            //Dejamos de marcar en rojo cualquier campo que pudo haber dejado vacío el usuario
			            esto.props.ERR("NoErr")

	        		})
       				.catch(function(error) {
            
            			console.error("Error adding document: ", error);
        	
        			});

         		} else {

		     		console.log("No existe la ID del informe registrado previamente ")
			      	
        		}
      
          	})
          	.catch(function(error) {
        
            	console.log("Error getting documents: ", error);
            
            	if (error == "TypeError: Cannot read property 'id' of undefined") {
            	
            		console.log("No existe la ID del informe registrado previamente ")
			      	
			      	esto.setState({err3: true})
			      	esto.setState({err5: false})
			      	esto.setState({err4: false})
			  	  	esto.setState({success: false})
	           	  	esto.setState({err: false})
				  	esto.setState({err2: false})
				  	esto.setState({spinner: false})
				  	esto.setState({disabled: false})
				}
        
          	});

          	}	
   		}
	
	}
		
	render() {

		console.log("name " + this.state.name)
		console.log("month " + this.state.month)
		console.log("ventas " + this.state.ventas)
		console.log("llamadas " + this.state.llamadas)
		console.log("horas " + this.state.horas)
		console.log("ausentismo " + this.state.ausentismo)
		console.log("reclamos " + this.state.reclamos)
		console.log("Comentarios " + this.state.comentarios)
		console.log("RENDERIZANDO")
		
		return(
			
			<div>		

				<CssBaseline />
	            
	            <h1 align="center">EDITAR INFORME</h1>
	           	           
	            <br />
	            <br />
	           
	            <div align="center" margin-top="50px">
	           	
	           		<img src={ pencil } />
	          
	           	</div>                  
	          
	           <div className="card-container">
	               <Card className="card">

						<CardMedia/>

						<CardContent>

							<Typography gutterBottom variant="h4" component="h4" align="center" >
						
								INFORME DE TRABAJO<b/>
						
							</Typography>
						
							<hr />
							
							<br />
						
							<Typography gutterBottom variant="h5">

								Nombre: {this.props.modified.nameContent}
						
							</Typography>
							
							<br />

							<Typography gutterBottom variant="h5">

								Mes: {this.props.modified.monthContent}
						
							</Typography>
							
							<br />
						
							<Typography gutterBottom variant="h5">

								<EditMaterialInput type= "Ventas" currentData={this.state.ventas}/>
						
							</Typography>
							
							<br />
							
							<Typography gutterBottom variant="h5">

								<EditMaterialInput type= "Llamadas" currentData={this.state.llamadas}/> 
							
							</Typography>	
						
							<br />
						
							<Typography gutterBottom variant="h5">

								<EditMaterialInput type= "Horas" currentData={this.state.horas}/>
						
							</Typography>
						
							<br />
						
							<Typography gutterBottom variant="h5">

								<EditMaterialInput type= "Ausentismo" currentData={this.state.ausentismo}/>
						
							</Typography>	
			
							<br />

							<Typography gutterBottom variant="h5">

								<EditMaterialInput type= "Reclamos" currentData={this.state.reclamos}/>
						
							</Typography>
			
							<br />	
							
							<Typography gutterBottom variant="h5">

								<MultilineTextFields type= "Comentarios"  currentData={this.state.comentarios} />
						
							</Typography>		

							<br />
							
							<Typography gutterBottom variant="h5">

								{  this.state.err  && <Alert severity="error">Datos incompletos. Asegúrese de llenar todos los campos obligatorios correctamente.</Alert>   }
								
								{  this.state.err2  && <Alert severity="error">Los datos siguen incompletos.</Alert>   }
								
								{  this.state.err2  && <Alert severity="warning">Tenga en cuenta los siguientes puntos: 

								<br />
								<br />

								• No deje campos en blanco. El único campo que puede enviar sin llenar es el de "Comentarios".
								
								<br />
								<br />
								
								• Si por ejemplo el publicador no tuvo publicaciones colocadas en el mes, ingrese el número 0 en vez de dejar ese campo en blanco.
								
								<br />
								<br />
								
								•  Si no trabajó en el mes que está informando, ponga el número 0 en todos los campos excepto en el de "Nombre" y en el de "Comentarios".</Alert>   }
									
								{  this.state.success  && <Alert severity="success">Perfecto. El informe fue editado. </Alert>   }
								
								{  

									this.state.err3  && <Alert severity="error">

									Error 

									<br /> 
									<br /> 
									
									El informe que está tratando de editar ya no existe.

									</Alert>   

								}

								{  this.state.err4  && <Alert severity="error">¡Su edición es contradictoria! <br /> <br /> Usted está tratando de decir que este empleado no tiene horas trabajadas pero al mismo tiempo que sí trabajó durante el mes. Si el empleado realmente no tuvo horas trabajadas, usted no puede poner en los otros campos otro valor que no sea 0.  </Alert>   }
														
								{ this.state.spinner && <CircularProgress />}								      	
								{ this.state.spinner &&   <Typography >Procesando datos...</Typography>}

								<br />
							
								<div className="editBox">
									
									<div className="backButton">
									
										<EditButton  variant="contained" color="primary" disabled={this.state.disabled} onClick= { () => this.add(this) }>
										
											Editar informe
										
										</EditButton>
									
									</div>
									
									<div className="backButton">
									
										<Button  onClick= { () => this.props.history.go(-1) }>{/*<-- this.props.history.go(-1) sirve para volver a la última página visitada por el usuario. Es un botón para volver a atrás.*/}
										
											Volver a atrás
										
										</Button>

									</div>
							
								</div>
							</Typography>	

						</CardContent>
	                
					</Card>
	        
			    </div>				

			</div>

		)

	}

}

const mapStateToProps = (state) =>{

	return {

		month: state.month,
		err: state.err,
		modified: state.modified

	}

}      

const mapDispatchToProps = {

	MONTH,
	ERR,
	MODIFIED

}

export default connect(mapStateToProps, mapDispatchToProps)(Edit);