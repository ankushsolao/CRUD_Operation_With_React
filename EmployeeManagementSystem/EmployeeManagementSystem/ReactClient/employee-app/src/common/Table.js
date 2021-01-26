import React from 'react'

const Table = (props) => (
    <table>
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Mobile Number</th>
                <th>Email Id</th>
                <th>Current Address</th>
                <th>Current CTC</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {props.employees.length > 0 ? (
                props.employees.map(employees => (
                    <tr key={employees.id}>
                        <td>{employees.firstName}</td>
                        <td>{employees.lastName}</td>
                        <td>{employees.mobileNumber}</td>
                        <td>{employees.emailId}</td>
                        <td>{employees.currentAddress}</td>
                        <td>{employees.ctc}</td>
                        <td>
                            <button
                                onClick={() => {
                                    props.editRow(employees)
                                }}
                                className="button muted-button"
                            >
                                Edit
              </button>
                            <button
                                onClick={() => props.deleteEmployee(employees.id)}
                                className="button muted-button"
                            >
                                Delete
              </button>
                        </td>
                    </tr>
                ))
            ) : (
                    <tr>
                        <td colSpan={3}>No users</td>
                    </tr>
                )}
        </tbody>
    </table>
)

export default Table