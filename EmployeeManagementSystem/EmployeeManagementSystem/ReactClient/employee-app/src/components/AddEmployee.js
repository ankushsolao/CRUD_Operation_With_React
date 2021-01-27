import React, { useState } from 'react';
import { TextField, Button, FormControl, Grid } from "@material-ui/core";
const AddEmployee = (props) => {
  const initialFormState = {
    id: null,
    firstName: '',
    lastName: '',
    designation: '',
    mobileNumber: '',
    email: '',
    department: '',
    address: '',
    city: ''
  }
  const [employee, setEmployee] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEmployee({ ...employee, [name]: value });
  }
  const addEmployeHandler = () => {
    props.addEmployee(employee)
    setEmployee(initialFormState)
  }

  return (
    <FormControl
      onSubmit={(event) => {
        event.preventDefault()
        if (!employee.firstName || !employee.lastName) return

        props.addEmployee(employee)
        setEmployee(initialFormState)
      }}
    >

      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <TextField id="standard-basic" label="First Name" name="firstName"
            value={employee.firstName}
            onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField id="standard-basic" label="Last Name" name="lastName"
            value={employee.lastName}
            onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField id="standard-basic" label="Designation" name="designation"
            value={employee.designation}
            onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField id="standard-basic" label="Mobile Number" name="mobileNumber" type="number"
            value={employee.mobileNumber}
            onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField id="standard-basic" label="Email" name="email"
            value={employee.email}
            onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField id="standard-basic" label="Department" name="department"
            value={employee.department}
            onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12} sm={4}>
        <TextField id="standard-basic" label="Address" name="address"
          value={employee.address}
          onChange={handleInputChange} />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField id="standard-basic" label="City" name="city" 
          value={employee.city}
          onChange={handleInputChange} />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={addEmployeHandler}>Add new Employee</Button>
        {/* <button>Add new Employee</button> */}
      </Grid>
      </Grid>
    </FormControl >
  )
}

export default AddEmployee