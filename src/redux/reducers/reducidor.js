import {type as NUEVA } from '../actions/nueva'

console.log("CASE DE REDUCIDOR " + NUEVA)

function reducidor( state , { type, payload } ) {

	console.log("PAYLOAD DEL REDUCIDOR!!!!" + payload)
	console.log("TYPE DEL REDUCIDOR!!!!" + type)

	if(state == undefined){

		state ="Estado undefined"

	}

	switch(type){

		case NUEVA:
			
			return state = payload

		default: 
			
			return state  

	}
}

export default reducidor  