import {type as ERR } from '../actions/err'
 
console.log(ERR)

function err( state , { type, payload } ) {

	if(state == undefined){

		state ="noErr"
		
	}

	switch(type){

		case ERR:
			
			return state = payload; 
		
 
		default: 
			
			return state; 

	}
}

export default err  