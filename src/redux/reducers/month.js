import {type as MONTH } from '../actions/month'

console.log("CASE DE MONTH " + MONTH)

function month( state , { type, payload } ) {

	console.log("PAYLOAD DEL REDUCIDOR!!!!" + payload)
	console.log("TYPE DEL REDUCIDOR!!!!" + type)

	if(state == undefined){

		state ="-Mes no seleccionado- Volver a la página anterior"
		
	}

	switch(type){

		case MONTH:
			

			return state = payload
 
		default: 
			
			return state  

	}
}

export default month  