import React from 'react';

import { Switch, Route, BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux';

import store from './redux/store.js';

import { AnimatePresence } from "framer-motion";

import './components/style.css'
import './components/global.css'	
import 'pure-react-carousel/dist/react-carousel.es.css';

import MiComponente from './components/MiComponente'
import MiComponente2 from './components/MiComponente2'
import Informar from './components/informar'
import linkError from './components/linkError'
import edit from './components/edit'
import Home from './components/home'
import uploadInput from './components/excel-to-json/uploadInput'
import Help from './components/excel-to-json/help'
import showNumber from './components/excel-to-json/showNumber'

//https://stackoverflow.com/questions/54511950/react-router-with-http-server
//http-server --proxy http://localhost:8080? ./build

const Routes = () => {

	return (

		<Provider store={store}>
			
			<BrowserRouter>
				
				<AnimatePresence exitBeforeEnter initial={false}>

					<Switch>

						{<Route exact path='/' component={ Home } />}
						<Route path='/informar' component={ Informar } />					
						<Route  path='/estadisticas' component={ MiComponente } /> {/*Para establecer un nuevo nombre para esta ruta, es necesario actualizar el componente "card.js" también*/}
						<Route  path='/estadisticas-ver/:mes' component={ MiComponente2 } />
						<Route path='/edit' component={ edit } />
						<Route path='/uploadexcel' component={ uploadInput } />
						<Route path='/mostrarnumero/:params' component={ showNumber } />
						<Route path='/uploadexcel-ayuda' component={ Help } />
						<Route component={linkError} />	{/*<--  404 page - Con esta route, toda ruta que no esté definida se redirecciona al componente "linkError" */}				

					</Switch>
			
				</AnimatePresence>

			</BrowserRouter>
	
		</Provider>

	)

}

export default Routes ; 