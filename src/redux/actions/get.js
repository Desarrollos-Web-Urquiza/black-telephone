export const type = "GET"

const GET = id => {

	return {

		type,
		payload: id,   

	}
}

export default GET