import {type as MODIFIED } from '../actions/modified'

console.log("CASE DE MONTH " + MODIFIED)

function modified( state , { type, payload } ) {

	console.log("PAYLOAD DEL REDUCIDOR!!!!" + payload)
	console.log("TYPE DEL REDUCIDOR!!!!" + type)

	if(state == undefined){

		state = false
		
	}

	switch(type){

		case MODIFIED:
			

			return state = payload
 
		default: 
			
			return state  

	}
}

export default modified  