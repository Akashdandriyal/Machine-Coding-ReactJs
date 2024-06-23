import { useState } from "react";
import "./App.css";
import EmployeeDetails from "./components/EmployeeDetails";
import EmployeesList from "./components/EmployeesList";

import { employees } from "./utils/employeeData";
import AddEmployeeModal from "./components/AddEmployeeModal";

const App = () => {
  const [employeesData, setEmployeesData] = useState(employees);

  const [selectedEmployee, setSelectedEmployee] = useState({});
  const [openModal, setOpenModal] = useState(false);

  const addEmployee = (employee) => {
    employee.id = employeesData.length + 1;
    setEmployeesData([...employeesData, employee]);
  };

  const deleteEmployee = (id) => {
    let remainingEmployees = employeesData.filter(
      (employee) => employee.id !== id
    );
    if (selectedEmployee?.id === id) {
      setSelectedEmployee({});
    }
    setEmployeesData(remainingEmployees);
  };

  return (
    <div className="App p-4 relative">
      <div className="flex justify-between mb-5">
        <h1 className="text-xl font-bold">Employee Management</h1>
        <button
          className="p-2 bg-gray-300 rounded-2xl"
          onClick={() => setOpenModal(!openModal)}
        >
          Add Employee
        </button>
      </div>
      <div className="flex h-96">
        <div className="w-2/5 border border-black">
          <EmployeesList
            employeesData={employeesData}
            setSelectedEmployee={setSelectedEmployee}
            deleteEmployee={deleteEmployee}
          />
        </div>
        <div className="w-3/5 border border-black">
          <EmployeeDetails employee={selectedEmployee} />
        </div>
      </div>
      {openModal && (
        <AddEmployeeModal
          setOpenModal={setOpenModal}
          addEmployee={addEmployee}
        />
      )}
    </div>
  );
};

export default App;
