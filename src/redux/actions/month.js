export const type = "MONTH"

const MONTH = params => {

	console.log("PARAMS " + params) 
	
	return {

		type,
		payload: params,   

	}
	
}	

export default MONTH