import {type as GET } from '../actions/get'

console.log(GET)

function get( state , { type, payload } ) {	

	if(state == undefined){

		state ="Estado undefined"
		
	}
	
	switch(type){

		case GET:
			
			return state = payload; 
		
 
		default: 
			
			return state; 

	}
}

export default get  