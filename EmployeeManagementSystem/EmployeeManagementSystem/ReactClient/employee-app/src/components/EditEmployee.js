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
                    <TextField id="standard-basic" label="Mobile Number" name="mobileNumber"
                        value={employee.mobileNumber}
                        onChange={handleInputChange} />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField id="standard-basic" label="Email Id" name="emailId"
                        value={employee.emailId}
                        onChange={handleInputChange} />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField id="standard-basic" label="Current Address" name="currentAddress"
                        value={employee.currentAddress}
                        onChange={handleInputChange} />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField id="standard-basic" label="Current CTC" name="ctc"
                        value={employee.ctc}
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