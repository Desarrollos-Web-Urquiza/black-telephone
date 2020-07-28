import { createStore, combineReducers   }  from 'redux'

import reducidor  from './reducers/reducidor.js'
import get  from './reducers/get.js'
import month  from './reducers/month.js'
import err  from './reducers/err.js'
import modified  from './reducers/modified.js'
import show  from './reducers/show.js'

const reducer = combineReducers ({

	reducidor,
	get,
	month,
	err,
	modified,
	show

})

const store = createStore( reducer) 

export default store  