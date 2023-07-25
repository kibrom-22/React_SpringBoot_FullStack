import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../EmployeeService";

const CreateEmployeeComponent = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
    if (id !== "_add") {
      EmployeeService.getEmployeeById(id)
        .then((res) => {
          const { firstName, lastName, email } = res.data;
          setEmployee({ firstName, lastName, email });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]);

  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();
    if (id === "_add") {
      EmployeeService.createEmployee(employee)
        .then(() => {
          navigate("/employees");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      EmployeeService.updateEmployee(employee, id)
        .then(() => {
          navigate("/employees");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    navigate("/employees");
  };

  const getTitle = () => {
    if (id === "_add") {
      return <h3 className="text-center">Add Employee</h3>;
    } else {
      return <h3 className="text-center">Update Employee</h3>;
    }
  };

  return (
    <div>
      <br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3">
            {getTitle()}
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>First Name:</label>
                  <input
                    placeholder="First Name"
                    name="firstName"
                    className="form-control"
                    value={employee.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Last Name:</label>
                  <input
                    placeholder="Last Name"
                    name="lastName"
                    className="form-control"
                    value={employee.lastName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Email:</label>
                  <input
                    placeholder="Email"
                    name="email"
                    className="form-control"
                    value={employee.email}
                    onChange={handleChange}
                  />
                </div>

                <button
                  className="btn btn-success"
                  onClick={saveOrUpdateEmployee}
                >
                  Save
                </button>
                <button
                  className="btn btn-danger"
                  onClick={handleCancel}
                  style={{ marginLeft: "10px" }}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEmployeeComponent;
