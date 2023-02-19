import EditButton from "./Button/EditButton";
import DeleteButton from "./Button/DeleteButton";
import { getAllEmployee } from "../utils/EmployeesServiceData";
import { useEffect, useState } from "react";
import "../App.css";

const EmployeeTable = () => {
  const [allEmployees, setAllEmployees] = useState([]);
  const [message, setMessage] = useState(null);
  const [deletedEmployee, setDeletedEmployee] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // console.log("all employees before ", allEmployees);
  useEffect(() => {
    async function fetchData() {
      const data = await getAllEmployee();
      setAllEmployees(data);
      setIsLoading(false);
    }
    fetchData();
  }, [deletedEmployee]);

  if (isLoading) {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Employee Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email Id</th>
              <th>edit/delete</th>
            </tr>
          </thead>
        </table>
        <p>Loading...</p>
      </div>
    );
  } else if (allEmployees.length === 0) {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Employee Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email Id</th>
              <th>edit/delete</th>
            </tr>
          </thead>
        </table>
        <p>No employee exists, add an employee</p>
      </div>
    );
  } else {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Employee Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email Id</th>
              <th>edit/delete</th>
            </tr>
          </thead>
          <tbody>
            {allEmployees?.map((employee) => {
              return (
                <tr key={employee.employeeId}>
                  <td>{employee?.employeeId}</td>
                  <td>{employee?.firstName}</td>
                  <td>{employee?.lastName}</td>
                  <td>{employee?.emailId}</td>
                  <td
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "90px",
                    }}
                    className="edit-delete"
                  >
                    <EditButton employeeId={employee?.employeeId} />

                    <DeleteButton
                      employeeId={employee?.employeeId}
                      setMessage={setMessage}
                      setDeletedEmployee={setDeletedEmployee}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {message && <p>{message}</p>}
      </div>
    );
  }
};

export default EmployeeTable;
