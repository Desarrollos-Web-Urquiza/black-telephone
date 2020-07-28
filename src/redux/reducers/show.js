import {type as SHOW } from '../actions/show'

console.log("CASE DE REDUCIDOR " + SHOW)

function show( state , { type, payload } ) {

	console.log("PAYLOAD DEL REDUCIDOR!!!!" + payload)
	console.log("TYPE DEL REDUCIDOR!!!!" + type)

	if(state == undefined){

		state =false

	}

	switch(type){

		case SHOW:
			
			return state = payload

		default: 
			
			return state  

	}
}

export default show  