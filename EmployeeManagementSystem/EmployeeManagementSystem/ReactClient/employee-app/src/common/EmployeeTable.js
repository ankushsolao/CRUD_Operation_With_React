import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { TextField, Button, FormControl, Grid } from "@material-ui/core";
const EmployeeTable = (props) => (

  <TableContainer component={Paper}>
    <Table size="small" aria-label="a dense table">
      <TableHead>
        <TableRow>
          <TableCell>Sr. No</TableCell>
          <TableCell align="right">First Name</TableCell>
          <TableCell align="right">Last Name)</TableCell>
          <TableCell align="right">Mobile Number</TableCell>
          <TableCell align="right">Email Id</TableCell>
          <TableCell align="right">Current Address</TableCell>
          <TableCell align="right">Current CTC</TableCell>
          <TableCell align="right">Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.employees.length > 0 ? (
          props.employees.map((employees, index) => (
            <TableRow key={employees.id}>
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell align="right">{employees.firstName}</TableCell>
              <TableCell align="right">{employees.lastName}</TableCell>
              <TableCell align="right">{employees.mobileNumber}</TableCell>
              <TableCell align="right">{employees.emailId}</TableCell>
              <TableCell align="right">{employees.currentAddress}</TableCell>
              <TableCell align="right">{employees.ctc}</TableCell>
              <TableCell align="right">
                <Button variant="contained" color="primary" onClick={() => {
                  props.editRow(employees)
                }}>
                  Edit
</Button>
                <Button variant="contained" color="primary" onClick={() => props.deleteEmployee(employees.id)}>
                  Delete
</Button>
              </TableCell>
            </TableRow>
          ))
        ) : (
            <tr>
              <TableCell align="right">No Employee</TableCell>

            </tr>
          )}
      </TableBody>
    </Table>
  </TableContainer>
)

export default EmployeeTable;