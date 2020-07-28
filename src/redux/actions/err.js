export const type = "ERR"

const ERR = id => {

	return {

		type,
		payload: id,   

	}
}

export default ERR