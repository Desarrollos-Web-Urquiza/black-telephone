export const type = "SHOW"

const SHOW = params => {
	
	console.log("PARAMS " + params) 
	
	return {

		type,
		payload: params,   

	}
	
}	

export default SHOW