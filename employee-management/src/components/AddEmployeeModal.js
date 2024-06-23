import React, { useState } from "react";

const AddEmployeeModal = ({ setOpenModal, addEmployee }) => {
  const [employeeDetails, setEmployeeDetails] = useState({
    firstname: "",
    lastname: "",
    image_url: "",
    email: "",
    contact_number: "",
    address: "",
    salary: "",
    dob: "",
    age: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      employeeDetails.firstname === "" ||
      employeeDetails.lastname === "" ||
      employeeDetails.address === "" ||
      employeeDetails.dob === ""
    )
      return;
    if (
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
        employeeDetails.email
      )
    )
      return;
    if (isNaN(employeeDetails.contact_number) || isNaN(employeeDetails.salary))
      return;

    const dob = new Date(employeeDetails.dob);
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - dob;
    const ageInYears = Math.floor(ageInMilliseconds / 31557600000);
    employeeDetails.age = ageInYears;
    addEmployee(employeeDetails);
    setEmployeeDetails({
      firstname: "",
      lastname: "",
      image_url: "",
      email: "",
      contact_number: "",
      address: "",
      salary: "",
      dob: "",
      age: "",
    });
    setOpenModal(false);
  };

  return (
    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-30%] p-5 bg-white rounded-md drop-shadow-[2px_2px_5px_rgb(0,0,0)]">
      <div className="flex justify-between items-center">
        <h2 className="mb-2 text-lg font-bold">Add a new Employee</h2>
        <span className="cursor-pointer" onClick={() => setOpenModal(false)}>
          ✖️
        </span>
      </div>
      <form className="flex flex-col">
        <div className="my-2">
          <input
            className="mr-2 p-1 border border-gray-400 rounded-sm"
            type="text"
            placeholder="First Name"
            value={employeeDetails.firstname}
            onChange={(e) =>
              setEmployeeDetails({
                ...employeeDetails,
                firstname: e.target.value,
              })
            }
          />
          <input
            className="p-1 border border-gray-400 rounded-sm"
            type="text"
            placeholder="Last Name"
            value={employeeDetails.lastname}
            onChange={(e) =>
              setEmployeeDetails({
                ...employeeDetails,
                lastname: e.target.value,
              })
            }
          />
        </div>
        <input
          className="my-2 p-1 border border-gray-400 rounded-sm"
          type="url"
          placeholder="Image URL (Optional)"
          value={employeeDetails.image_url}
          onChange={(e) =>
            setEmployeeDetails({
              ...employeeDetails,
              image_url: e.target.value,
            })
          }
        />
        <input
          className="my-2 p-1 border border-gray-400 rounded-sm"
          type="email"
          placeholder="Email"
          value={employeeDetails.email}
          onChange={(e) =>
            setEmployeeDetails({ ...employeeDetails, email: e.target.value })
          }
        />
        <input
          className="my-2 p-1 border border-gray-400 rounded-sm"
          type="text"
          placeholder="Contact"
          value={employeeDetails.contact_number}
          onChange={(e) =>
            setEmployeeDetails({
              ...employeeDetails,
              contact_number: e.target.value,
            })
          }
        />
        <input
          className="my-2 p-1 border border-gray-400 rounded-sm"
          type="text"
          placeholder="Salary"
          value={employeeDetails.salary}
          onChange={(e) =>
            setEmployeeDetails({ ...employeeDetails, salary: e.target.value })
          }
        />
        <input
          className="my-2 p-1 border border-gray-400 rounded-sm"
          type="text"
          placeholder="Address"
          value={employeeDetails.address}
          onChange={(e) =>
            setEmployeeDetails({ ...employeeDetails, address: e.target.value })
          }
        />
        <input
          className="my-2 p-1 border border-gray-400 rounded-sm"
          type="date"
          placeholder="DOB"
          value={employeeDetails.dob}
          onChange={(e) =>
            setEmployeeDetails({ ...employeeDetails, dob: e.target.value })
          }
        />
      </form>
      <button
        className="my-2 p-1 bg-gray-300 rounded-sm w-full"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default AddEmployeeModal;
