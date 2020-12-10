import React, { useEffect } from 'react';

import { withRouter } from 'react-router-dom'

import axios from 'axios'

import {Helmet} from "react-helmet";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { green, purple, grey, amber } from '@material-ui/core/colors';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';

import TopBar from '../topBar'
import Drawer from '../drawer'
import Shifts from './shifts';
import NoHouse from './noHouse';
import Footer from '../footer';

import imageExcelInform from '../../img/excelupload-lite.jpg';

import GoogleMaps from '../../img/Google-maps.png';

import clipUsado from '../../img/clip-usado2.png';

import XLSX  from 'xlsx'; // Tutorial para convertir Excel en JSON https://www.youtube.com/watch?v=IcxJUJXRPGw

// // import './style.css';
// //Los estilos los puse en Routes.js

const CardSelect = withStyles((theme) => ({
  root: {

    backgroundColor: grey[100],
    width: 500,


    '&:hover': {
      backgroundColor: grey[100],
    },
  },
}))(Card);

const CardSelectTerritory = withStyles((theme) => ({
  root: {

    backgroundColor: '#d8ae74',
    width: 675,


    '&:hover': {
      backgroundColor: '#d8ae74',
    },
  },
}))(Card);

const Help = props => {

    return (

        <div align= "center">


            <h1>CÓMO USAR EL SISTEMA DE LLAMADAS DE BLACK TELEPHONE</h1>
            <h2>Qué es un territorio</h2>

            <p style={{marginLeft: 20}}>
              En Black Telephone le llamamos "territorio" a un conjunto de números telefónicos de personas que son potenciales clientes a los cuales nuestros empleados se encargarán de llamar.
              <br />
              <br />
              
              Estos territorios se ordenan numéricamente y se almacenan en archivos de hojas de cálculo en los que figurarán cuatro columnas: "Nombre", "Direccion", "Telefono", "Territorio". 


            </p>
            <h2>Cómo importar un territorio al sistema</h2>
            
            <p style={{marginLeft: 20}}>
              Descargue un territorio  <a href="https://drive.google.com/uc?id=1Gcp5_1JF-JRC0SHY3X7SMI83KJGdiZ5S&export=download&authuser=0" >aquí</a>.
              <br />
              <br />

              Luego importe la hoja de cálculo en la página anterior y verá el resultado.

            </p>

        </div>
		)

}

export default  Help  ;