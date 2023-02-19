import { db } from "./config/firebase";
import { getDocs, collection, addDoc } from "firebase/firestore";

const employeesTableRef = collection(db, "employees");

export const updateEmployee = async (employeeID, employee) => {
  // try {
  //   const employeeDocToBeUpdated = doc(db, "employees", employeeID);
  //   await updateDoc(employeeDocToBeUpdated, employee);
  // } catch (err) {
  //   console.log(err);
  // }
};

export const addEmployee = async (employee) => {
  try {
    await addDoc(employeesTableRef, employee);
    return "New Employee Inserted Successfully";
  } catch (err) {
    console.error(err);
  }
};

export const deleteEmployee = async (employeeID) => {
  // const response = await axios.delete(DELETE_EMPLOYEE + employeeID);
  // const dataResponse = await response.data;
  // return dataResponse;
};

export const getEmployee = async (employeeID) => {
  // const response = await axios.get(GET_EMPLOYEE + employeeID);
  // const dataResponse = response.data;
  // return dataResponse;
};

export const getAllEmployee = async () => {
  try {
    const response = await getDocs(employeesTableRef);

    const filteredData = response.docs.map((doc) => ({
      ...doc.data(),
    }));

    return filteredData;
  } catch (err) {
    console.error(err);
  }
};
