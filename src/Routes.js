import React from 'react';

import { Switch, Route, BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux';

import store from './redux/store.js';

import './components/style.css'
import './components/global.css'	
import 'pure-react-carousel/dist/react-carousel.es.css';
	

import MiComponente from './components/MiComponente'
import MiComponente2 from './components/MiComponente2'
import Informar from './components/informar'
import linkError from './components/linkError'
import edit from './components/edit'
import Experimental from './components/experimental'

//https://stackoverflow.com/questions/54511950/react-router-with-http-server
//http-server --proxy http://localhost:8080? ./build

const Routes = () => {

	return (

		<Provider store={store}>
			
			<BrowserRouter>

				<Switch>

					{<Route exact path='/' component={ Experimental } />}
					<Route path='/informar' component={ Informar } />					
					<Route  path='/estadisticas' component={ MiComponente } /> {/*Para establecer un nuevo nombre para esta ruta, es necesario actualizar el componente "card.js" también*/}
					<Route  path='/estadisticas-ver/:mes' component={ MiComponente2 } />
					<Route path='/edit' component={ edit } />
					<Route component={linkError} />	{/*<--  404 page - Con esta route, toda ruta que no esté definida se redirecciona al componente "linkError" */}				

				</Switch>
			
			</BrowserRouter>
	
		</Provider>

	)

}

export default Routes ; 