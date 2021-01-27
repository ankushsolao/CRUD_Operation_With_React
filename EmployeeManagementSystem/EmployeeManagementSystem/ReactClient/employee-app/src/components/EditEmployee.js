import React, { useState, useEffect } from 'react'
import { TextField, Button, FormControl, Grid } from "@material-ui/core";

const EditEmployee = props => {
    const [employee, setEmployee] = useState(props.currentEmployee);

    useEffect(
        () => {
            setEmployee(props.currentEmployee)
        },
        [props]
    )

    const handleInputChange = event => {
        const { name, value } = event.target

        setEmployee({ ...employee, [name]: value })
    }

    const updateEmployeHandler = () => {
        props.updateEmployee(employee.id, employee)
    }

    return (
        <FormControl >
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
                <Grid item xs={12} sm={6}>
                    <Button variant="contained" color="primary" onClick={updateEmployeHandler}>Update Employee</Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button variant="contained" color="primary" onClick={() => props.setEditing(false)}>Cancel</Button>

                </Grid>
            </Grid>
        </FormControl >
    )
}

export default EditEmployee