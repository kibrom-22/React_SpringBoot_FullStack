import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../EmployeeService";

const UpdateEmployeeComponent = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });

  useEffect(() => {
    EmployeeService.getEmployeeById(id).then((res) => {
      setEmployee(res.data);
    });
  }, [id]);

  const handleChange = (e) => {
    const { firstName, value } = e.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [firstName]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    EmployeeService.updateEmployee(id, employee).then(() => {
      navigate("/employees");
    });
  };

  return (
    <div>
      <h2 className="text-center">Update Employee</h2>
      <form>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            value={employee.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            value={employee.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="text"
            className="form-control"
            name="email"
            value={employee.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateEmployeeComponent;
