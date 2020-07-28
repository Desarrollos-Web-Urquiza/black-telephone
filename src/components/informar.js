import React from 'react';

import {Link} from 'react-router-dom';

import { connect } from 'react-redux';

import  MONTH  from '../redux/actions/month';
import  ERR  from '../redux/actions/err';

import paper from '../img/papeldeinforme.png';

import { firestore } from "./FirebaseConfig";

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import SendIcon from '@material-ui/icons/Send'

import MultilineTextFields from './MultilineTextFields';
import MaterialInput from './materialInput';
import SimpleSelect from './SimpleSelect';

import './styles.css';

class Informar extends React.Component{
	
	constructor(props) {
    	super(props);
	     							   /* ↓  Modificar aca para cambiar el mes del informe */
	    this.state ={ name: '', month: 'Junio 2020', ventas: '', llamadas: '', horas: '', ausentismo: '', reclamos: '', comentarios: '', err: false, err2: false, err3: false, success: false, spinner: false, disabled: false, err4: false, err5: false }

	    // this.cambioMes = this.cambioMes.bind(this);	
	}
	
	componentDidUpdate(prevProps) {

		if (this.props.month !== prevProps.month) {

			console.log(this.props.month)

		//en this.props.month[1]↓  está el tipo de dato que viene del formulario. En el primer caso, se valida si es el select de los "name" y se asigna al estado del componente "informar"
			if(this.props.month[1] == "name"){

				console.log("Es NAME")
				
				this.setState({name: this.props.month[0]})
				//Ocultamos el cartel de "informe enviado" por si quieren enviar otro informe con el mismo dispositivo
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

			if(this.props.month[1] == "Reclamos atendidos") {

				console.log("Es Reclamos")

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

			name:   name,
			month:  month,
			ventas: ventas,
			llamadas: llamadas,
			horas: horas,
			ausentismo: ausentismo,
			reclamos: reclamos, 
			comentarios: comentarios

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

			firestore.collection("informes").where("inform.mes", "==", informe.month).where("inform.name", "==", informe.name)
			.get()
			.then(function(querySnapshot) {
            	querySnapshot.forEach(function(doc) {
          
	            	informe = {
	                
	                	id: doc.id
	              	
	              	}

            	});
            
	            console.log(informe.id)
	         	
	         	if(informe.id == undefined) {

	         		console.log("No exite informe previo de este empleado")
	         		
	         		firestore.collection("informes").add({
	              
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
	            			
	            		console.log("Document written");
			            
			            esto.setState({name: ''})
			            esto.setState({ventas: ''})
			            esto.setState({llamadas: ''})
			            esto.setState({horas: ''})
			            esto.setState({ausentismo: ''})
			            esto.setState({reclamos: ''})
			            esto.setState({comentarios: ''})

			            esto.setState({success: true})
			            esto.setState({spinner: false})
			            esto.setState({disabled: false})
			            esto.setState({err: false})
						esto.setState({err2: false})
						esto.setState({err3: false})
						esto.setState({err4: false})
						esto.setState({err5: false})
			           
						//Ir a abajo
						window.scrollBy(0, window.innerHeight);

			            // ↓ Este dispacth hace que se reseteen todos los campos
			            esto.props.MONTH("reset")
			           
			            // ↓ Este segundo dispatch lo único que hace es evitar un bug que surgía al enviar un primer informe, y si queríamos volver a usar el select este quedaba en blanco pero seguía teniendo value.
			            esto.props.MONTH("noReset")
			           
			            //Dejamos de marcar en rojo cualquier campo que pudo haber dejado vacío el usuario
			            esto.props.ERR("NoErr")

	        		})
       				.catch(function(error) {
            
            			console.error("Error adding document: ", error);
        	
        			});

         		} else {

		     		console.log("Informe repetido")
			      	
			      	esto.setState({err3: true})
			      	esto.setState({err5: false})
			      	esto.setState({err4: false})
			  	  	esto.setState({success: false})
	           	  	esto.setState({err: false})
				  	esto.setState({err2: false})
				  	esto.setState({spinner: false})
				  	esto.setState({disabled: false})

        		}
      
          	})
          	.catch(function(error) {
        
            	console.log("Error getting documents: ", error);
        
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
	            
	            <h1 align="center">ESCRIBA SU INFORME DE TRABAJO</h1>
	           
	            <br />
	            <br />
	           
	            <div align="center" margin-top="50px">
	           	
	           		<img src={ paper } />
	          
	            </div>                  
	          
	            <div className="card-container">
	              
	               <Card className="card">

	               <CardMedia/>

	               <CardContent>

	               		<Typography gutterBottom variant="h4" component="h2" >
	                   
	                    	Informe para el mes de <b>{this.state.month}</b>
	                   
	                    </Typography>
	                   
	                    <hr />
	                    <br />
	                   
	                    <Typography gutterBottom variant="h5">

	                    	<SimpleSelect type="name"  />
	                   
	                    </Typography>
	                    
	                    <br />
	                   
	                    <Typography gutterBottom variant="h5">

	                   		{/* ↓  https://material-ui.com/es/components/text-fields/*/}
	                    	<MaterialInput type= "Ventas"/>
				       
	                    </Typography>
	                    
	                    <br />
	                    
	                    <Typography gutterBottom variant="h5">

	                    	<MaterialInput type= "Llamadas"/> 
	                    
	                    </Typography>	
	                   
	                    <br />
	                   
	                    <Typography gutterBottom variant="h5">

	                    	<MaterialInput type= "Horas"/>
				       
	                    </Typography>
	                   
	                    <br />
	                   
	                    <Typography gutterBottom variant="h5">

		                    <MaterialInput type= "Ausentismo"/>
				       
	                    </Typography>	
	    
	                    <br />

	                    <Typography gutterBottom variant="h5">

		                    <MaterialInput type= "Reclamos atendidos"/>
				       
	                    </Typography>
	    
	                    <br />	
	                    
	                    <Typography gutterBottom variant="h5">
	                  
	                    	<MultilineTextFields type= "Comentarios"  />
				       
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
					      	
					      	 • Si por ejemplo no tiene ventas realizadas en el mes, ingrese el número 0 en vez de dejar ese campo en blanco.
					      	
					      	<br />
					      	<br />
					      	 
					      	 • Si no trabajó en el mes que está informando, ponga el número 0 en todos los campos excepto en el de "Nombre" y en el de "Comentarios".</Alert>   }
					      		
					      	{  this.state.success  && <Alert severity="success">Perfecto. Su informe fue enviado. <br /> <br /> ¡Muchas gracias por mandar su informe!</Alert>   }
					      	
					      	{  this.state.err3  && <Alert severity="error">¡Usted ya envió su informe!  </Alert>   }
					      	
					      	{  false  && <Alert severity="warning">Si usted ingresó algún dato erróneo en la primera vez que envió su informe y lo que pretende ahora es volverlo a enviar para corregirlo, mejor comuníqueselo directamente a su gerente. </Alert>   }
					      	{  false  && <Alert severity="warning">Si está viendo este mensaje pero en realidad usted nunca envió su informe, comuníqueselo a su gerente lo antes posible. </Alert>   }
					      	
					      	{  

						      	this.state.err3  && <Alert severity="warning">Deberá comunicarle este error a su gerente si se da alguno de los siguientes casos: 

						      	<br /> 
						      	<br /> 

						      	• Usted ingresó algún dato erróneo en la primera vez que envió su informe y lo que pretende ahora es volverlo a enviar para corregirlo.
						      	
						      	<br />
						      	<br />
						      	
						      	• Está viendo este mensaje pero en realidad nunca envió su informe. De ser así, es posible que otro empleado erróneamente haya informado por usted. Debe comunicar este error lo antes posible.

						      	</Alert>   

					      	}

					      	{ this.state.err4  && <Alert severity="error">¡Su informe es contradictorio! <br /> <br /> Usted está tratando de decir que no tiene horas trabajadas pero al mismo tiempo que sí trabajó. Si realmente no trabajó este mes, usted no puede informar en los otros campos otro valor que no sea 0.  </Alert>   }
					      	{ this.state.spinner && <CircularProgress />}								      	
					      	{ this.state.spinner &&   <Typography >Procesando datos...</Typography>}

					      	<br />
		                   
		                   	<Button  variant="contained" color="primary" disabled={this.state.disabled} onClick= { () => this.add(this) }>
						    
						    	<SendIcon /> &nbsp;&nbsp; Enviar informe
					      	
					      	</Button>
					       
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

	}

}      

const mapDispatchToProps = {

	MONTH,
	ERR,

}

export default connect(mapStateToProps, mapDispatchToProps)(Informar);