import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, pubs, videos, horas, revisites, curses, notes) {
  return { name, pubs, videos, horas, revisites, curses, notes };
}

const rows = [
  createData('Arias, Norma', 159, 6.0, 24, 4.0, 1, "No pudo predicar porque laburó en el LDC"),
  createData('Castaño, Joaquín', 237, 9.0, 37, 4, 1),
  createData('Del Moro, Eleonora', 262, 16.0, 24, 6, 1),
  createData('Del Moro, Natalia', 305, 3, 67, 4, 1),
  createData('Feliciani, Dianela', 356, 16, 49, 3, 1),
  createData('Feliciani, Enrique', 356, 16, 49, 3, 1),
  createData('Feliciani, Jehiel', 356, 16, 49, 3, 1),
  createData('Feliciani, Misael', 356, 16, 49, 3, 1),
  createData('Feliciani, Priscila', 356, 16, 49, 3, 1),
  createData('Mendieta, Angel', 356, 16, 49, 3, 1),
  createData('Mendieta, Gabriel', 356, 16.0, 49, 3, 1),
  createData('Mendieta, Nora', 356, 16, 49, 3, 1),
  createData('Mendieta, Verónica', 356, 16, 49, 3, 1),
  createData('Peralta, Ana', 356, 16, 49, 3, 1),
  createData('Schymalski, Werner', 356, 16.0, 49, 3, 1),
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