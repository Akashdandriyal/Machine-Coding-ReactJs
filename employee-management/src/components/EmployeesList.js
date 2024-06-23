import React from "react";

const EmployeesList = ({
  employeesData,
  setSelectedEmployee,
  deleteEmployee,
}) => {
  console.log(employeesData);

  return (
    <div className="p-3 h-full overflow-y-auto">
      <div className=" pb-2 border-b border-black">
        <h2 className="text-center font-bold">Employee List</h2>
      </div>
      <div>
        {employeesData.map((employee) => (
          <div
            key={employee.id}
            className="flex justify-between items-center p-2 my-1 rounded-sm cursor-pointer bg-gray-200 hover:bg-gray-300"
          >
            <p
              className="flex-grow"
              onClick={() => setSelectedEmployee(employee)}
            >
              {employee.firstname + " " + employee.lastname}
            </p>
            <span onClick={() => deleteEmployee(employee.id)}>❌</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeesList;
