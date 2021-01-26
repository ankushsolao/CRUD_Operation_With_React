import React, { useState, useEffect } from 'react'

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

    return (
        <form
            onSubmit={event => {
                event.preventDefault()

                props.updateEmployee(employee.id, employee)
            }}
        >
            <label>First Name</label>
            <input
                type="text"
                name="firstName"
                value={employee.firstName}
                onChange={handleInputChange}
            />
            <label>Last Name</label>
            <input
                type="text"
                name="lastName"
                value={employee.lastName}
                onChange={handleInputChange}
            />
            <label>Mobile Number</label>
            <input
                type="text"
                name="mobileNumber"
                value={employee.mobileNumber}
                onChange={handleInputChange}
            />
            <label>Email Id</label>
            <input
                type="text"
                name="emailId"
                value={employee.emailId}
                onChange={handleInputChange}
            />
            <label>Current Address</label>
            <input
                type="text"
                name="currentAddress"
                value={employee.currentAddress}
                onChange={handleInputChange}
            />
            <label>Current CTC</label>
            <input
                type="text"
                name="ctc"
                value={employee.ctc}
                onChange={handleInputChange}
            />
            <button>Update Employee</button>
            <button onClick={() => props.setEditing(false)} className="button muted-button">
                Cancel
      </button>
        </form>
    )
}

export default EditEmployee