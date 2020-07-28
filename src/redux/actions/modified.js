export const type = "MODIFIED"

const MODIFIED = params => {

	console.log("PARAMS " + params) 
	
	return {

		type,
		payload: params,   

	}
	
}	

export default MODIFIED