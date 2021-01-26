
import React, { useState, Fragment, useEffect } from 'react'
import Table from '../common/Table';
import AddEmployee from './AddEmployee';
import EditEmployee from './EditEmployee';
import EmployeeService from "../services/EmployeeService";
const EmployeeComponent = () => {
    const [employees, setEmployees] = useState([]);
    const initialFormState = {
        id: null,
        firstName: '',
        lastName: '',
        mobileNumber: '',
        emailId: '',
        currentAddress: '',
        ctc: 0
    }
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
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });

        console.log("Add Employee", user);
        //setEmployees([ ...users, user ])
    }

    const deleteEmployee = id => {
        EmployeeService.deleteEmployee(id)
            .then(response => {
                setEditing(false);
                getEmployeeData();
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    const updateEmployee = (id, updatedEmployee) => {
        EmployeeService.updateEmployee(id, updatedEmployee)
            .then(response => {
                setEditing(false);
                getEmployeeData();
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
                        <h2>Edit Employee</h2>
                        <EditEmployee
                            editing={editing}
                            setEditing={setEditing}
                            currentEmployee={currentEmployee}
                            updateEmployee={updateEmployee}
                        />
                    </Fragment>
                ) : (
                        <Fragment>
                            <h2>Add Employee</h2>
                            <AddEmployee addEmployee={addEmployee} />
                        </Fragment>
                    )}
            </div>
            <div className="flex-large">
                <h2>View Employee</h2>
                <Table employees={employees} editRow={editRow} deleteEmployee={deleteEmployee} />
            </div>
        </div>
    )
}

export default EmployeeComponent;
