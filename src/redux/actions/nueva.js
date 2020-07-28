export const type = "NUEVA"

const NUEVA = params => {
	
	console.log("PARAMS " + params) 
	return {

		type,
		payload: params,   

	}
	
}	

export default NUEVA