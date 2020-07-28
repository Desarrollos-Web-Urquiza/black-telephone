import React from 'react';

import { Switch, Route, BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux';

import store from './redux/store.js';

import './components/style.css'

import MiComponente from './components/MiComponente'
import MiComponente2 from './components/MiComponente2'
import Informar from './components/informar'
import linkError from './components/linkError'
import edit from './components/edit'
// import Experimental from './components/experimental'

const Routes = () => {

	return (

		<Provider store={store}>
			
			<BrowserRouter>

				<Switch>

					<Route exact path='/' component={ Informar } />					
					<Route  path='/eFnz319O' component={ MiComponente } /> {/*Para establecer un nuevo nombre para esta ruta, es necesario actualizar el componente "card.js" también*/}
					<Route  path='/eFnz319O-ver/:mes' component={ MiComponente2 } />
					<Route path='/edit' component={ edit } />
					{/*<Route path='/experimental' component={ Experimental } />*/}
					<Route component={linkError} />	{/*<--  404 page - Con esta route, toda ruta que no esté definida se redirecciona al componente "linkError" */}				

				</Switch>
			
			</BrowserRouter>
	
		</Provider>

	)

}

export default Routes ; 