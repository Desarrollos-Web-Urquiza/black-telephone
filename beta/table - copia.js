import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { firestore } from "../../firebase/FirebaseConfig";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});




function createData(name, mes) {




        firestore.collection("informes").where("name", "==", name).where("mes", "==", mes)
        .get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {

            informe = {


              name: name,
              pubs: doc.pubs, 
              videos: doc.videos,
              horas: doc.horas,
              revisites: doc.revisitas,
              curses: doc.cursos,
              notes: doc.notas



            }



          });

        name = informe.name
        let  pubs = informe.pubs
        let  videos = informe.videos
        let  horas = informe.horas
        let  revisites = informe.revisites
        let  curses = informe.curses
        let  notes = informe.notes






  return { name, pubs, videos, horas, revisites, curses, notes };














}

var mes ="Febrero",

const rows = [
     createData('Castaño, Joaquín', mes),
  // createData('Arias, Norma , mes),
  // createData('Del Moro, Eleonora', mes),
  // createData('Del Moro, Natalia', mes),
  // createData('Feliciani, Dianela', mes),
  // createData('Feliciani, Enrique',mes ),
  // createData('Feliciani, Jehiel', mes),
  // createData('Feliciani, Misael', mes),
  // createData('Feliciani, Priscila', mes),
  // createData('Mendieta, Angel', mes ),
  // createData('Mendieta, Gabriel', mes),
  // createData('Mendieta, Nora', mes),
  // createData('Mendieta, Verónica',mes ),
  // createData('Peralta, Ana',mes),
  // createData('Schymalski, Werner', mes),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (

    <div>

      <h1>Informes del mes de "Febrero"</h1>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell><b>Publicador</b></TableCell>
              <TableCell align="right"><b>Pubs</b></TableCell>
              <TableCell align="right"><b>Videos</b></TableCell>
              <TableCell align="right"><b>Horas</b></TableCell>
              <TableCell align="right"><b>Revisitas</b></TableCell>
              <TableCell align="right"><b>Cr.Bi.</b></TableCell>
              <TableCell align="right"><b>Notas</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.pubs}</TableCell>
                <TableCell align="right">{row.videos}</TableCell>
                <TableCell align="right">{row.horas}</TableCell>
                <TableCell align="right">{row.revisites}</TableCell>
                <TableCell align="right">{row.curses}</TableCell>
                <TableCell align="right">{row.notes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}