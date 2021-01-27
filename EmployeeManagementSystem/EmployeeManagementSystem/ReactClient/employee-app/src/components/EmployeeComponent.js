import React, { useState, Fragment, useEffect } from 'react'
import EmployeeTable from '../common/EmployeeTable';
import AddEmployee from './AddEmployee';
import EditEmployee from './EditEmployee';
import EmployeeService from "../services/EmployeeService";
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const EmployeeComponent = () => {
    const [open, setOpen] = React.useState(false);
    const [msg, setMsg] = React.useState("");
    const [employees, setEmployees] = useState([]);
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
    const handleClick = () => {
        setOpen(true);
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    // Data
    useEffect(() => {
        getEmployeeData();
    }, []);

    const getEmployeeData = () => {
        EmployeeService.getAllEmployee()
            .then(response => {
                setEmployees(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    // Setting state
    const [currentEmployee, setCurrentEmployee] = useState(initialFormState)
    const [editing, setEditing] = useState(false)

    // CRUD operations
    const addEmployee = user => {
        EmployeeService.createEmployee(user)
            .then(response => {
                getEmployeeData();
                handleClick();
                setMsg("Employee added successfully!");
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
        console.log("Add Employee", user);
    }

    const deleteEmployee = id => {
        if (window.confirm("Do you want to delete employee?") == true) {
            EmployeeService.deleteEmployee(id)
                .then(response => {
                    setEditing(false);
                    getEmployeeData();
                    handleClick();
                    setMsg("Employee deleted successfully!");
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        }
    }

    const updateEmployee = (id, updatedEmployee) => {
        EmployeeService.updateEmployee(id, updatedEmployee)
            .then(response => {
                setEditing(false);
                getEmployeeData();
                handleClick();
                setMsg("Employee updated successfully!");
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    const editRow = employee => {
        EmployeeService.getEmployeeById(employee.id)
            .then(response => {
                setEditing(true);
                setCurrentEmployee(response.data)
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });

    }

    return (
        <div className="flex-row">
            <div className="flex-large">
                {editing ? (
                    <Fragment>
                        <h2>Edit Employee Information</h2>
                        <EditEmployee
                            editing={editing}
                            setEditing={setEditing}
                            currentEmployee={currentEmployee}
                            updateEmployee={updateEmployee}
                        />
                    </Fragment>
                ) : (
                        <Fragment>
                            <h2>Add Employee Information</h2>
                            <AddEmployee addEmployee={addEmployee} />
                        </Fragment>
                    )}
            </div>
            <div className="flex-large">
                <h2>View Employee</h2>
                <EmployeeTable employees={employees} editRow={editRow} deleteEmployee={deleteEmployee} />
            </div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    {msg}
                </Alert>
            </Snackbar>
        </div>
    )
}

export default EmployeeComponent;
