import React from 'react';

import { Switch, Route, BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux';

import store from './redux/store.js';

import { AnimatePresence } from "framer-motion";

import './components/style.css'
import './components/global.css'	
import 'pure-react-carousel/dist/react-carousel.es.css';

import Screen from './components/Screen'
import MiComponente2 from './components/MiComponente2'
import Informar from './components/informar'
import linkError from './components/linkError'
import Edit from './components/edit'
import Home from './components/home'
import uploadInput from './components/excel-to-json/uploadInput'
import Help from './components/excel-to-json/help'
import showNumber from './components/excel-to-json/showNumber'
import MiComponente from './components/MiComponente'

//https://stackoverflow.com/questions/54511950/react-router-with-http-server
//http-server --proxy http://localhost:8080? ./build

const Routes = () => {

	return (

		<Provider store={store}>
			
			<BrowserRouter>
				
				<Route
					
					render={({ location }) => {
					
						return (
							
							<AnimatePresence exitBeforeEnter initial={false}>

								<Switch	location={location} key={location.pathname}>

									{<Route exact path='/' component={ Home } />}
									<Route path='/informar' render={ (props) => <Screen {...props} component={<Informar  history={props.history}/>} />}  /> 					
									<Route  path='/estadisticas' render={ (props) => <Screen {...props} component={<MiComponente  history={props.history}/>} />}  />  {/*Para establecer un nuevo nombre para esta ruta, es necesario actualizar el componente "card.js" también*/}
									<Route  path='/estadisticas-ver/:mes' render={ (props) => <Screen {...props} component={<MiComponente2  history={props.history}/>} />}  /> 
									<Route path='/edit' render={ (props) => <Screen {...props} component={<Edit  history={props.history}/>} />}  /> 
									<Route path='/uploadexcel' component={ uploadInput } />
									<Route path='/mostrarnumero/:params' component={ showNumber } />
									<Route path='/uploadexcel-ayuda' component={ Help } />
									<Route component={linkError} />	{/*<--  404 page - Con esta route, toda ruta que no esté definida se redirecciona al componente "linkError" */}				

								</Switch>
						
							</AnimatePresence>
							
							) 
						}}
				/> 

			</BrowserRouter>
	
		</Provider>

	)

}

export default Routes ; 