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
    minWidth: 50,
    borderRadius: '1rem',
  },
});

function createData(serialNo, patientName, medicalHistory, age, roomNo, date, doctor, ailment, payment) {
  return { serialNo, patientName, medicalHistory, age, roomNo, date, doctor, ailment, payment };
}

const rows = [
  createData(5129, 'Uzoma Buchi', 'None', 31, 412, '02/12/18', 'Leon Hunt', 'Orthopedic', 'Cheque'),
  createData(5129, 'Uzoma Buchi', 'None', 31, 412, '02/12/18', 'Leon Hunt', 'Orthopedic', 'Cheque'),
  createData(5129, 'Uzoma Buchi', 'None', 31, 412, '02/12/18', 'Leon Hunt', 'Orthopedic', 'Cheque'),
  createData(5129, 'Uzoma Buchi', 'None', 31, 412, '02/12/18', 'Leon Hunt', 'Orthopedic', 'Cheque'),
  createData(5129, 'Uzoma Buchi', 'None', 31, 412, '02/12/18', 'Leon Hunt', 'Orthopedic', 'Cheque'),
  createData(5129, 'Uzoma Buchi', 'None', 31, 412, '02/12/18', 'Leon Hunt', 'Orthopedic', 'Cheque'),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="center">Patient Name</TableCell>
            <TableCell align="center">Medical History</TableCell>
            <TableCell align="center">Age</TableCell>
            <TableCell align="center">Room No</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Doctor</TableCell>
            <TableCell align="center">Ailment</TableCell>
            <TableCell align="center">Payment</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="left">{row.serialNo}</TableCell>
              <TableCell align="center" >
                {row.patientName}
              </TableCell>
              <TableCell align="center" >{row.medicalHistory}</TableCell>
              <TableCell align="center">{row.age}</TableCell>
              <TableCell align="center">{row.roomNo}</TableCell>
              <TableCell align="center">{row.date}</TableCell>
              <TableCell align="center">{row.doctor}</TableCell>
              <TableCell align="center">{row.ailment}</TableCell>
              <TableCell align="center">{row.payment}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
