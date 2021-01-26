import React, { useState } from 'react'

const AddEmployee = (props) => {
  const initialFormState = {
    id: null,
    firstName: '',
    lastName: '',
    mobileNumber: '',
    emailId: '',
    currentAddress: '',
    ctc: 0
  }
  const [employee, setEmployee] = useState(initialFormState)

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setEmployee({ ...employee, [name]: value })
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        if (!employee.firstName || !employee.lastName) return

        props.addEmployee(employee)
        // setEmployee(initialFormState)
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
      <button>Add new Employee</button>
    </form>
  )
}

export default AddEmployee