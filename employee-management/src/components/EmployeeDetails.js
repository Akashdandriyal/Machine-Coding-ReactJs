import React, { useRef } from "react";
import profileImage from "../images/profile.jpg";

const EmployeeDetails = ({ employee }) => {
  const imgRef = useRef(null);

  const handleImageError = () => {
    if (imgRef.current) {
      imgRef.current.src = ""; // Set your default image URL here
    }
  };

  return (
    <div className="p-3 overflow-y-auto">
      <div className=" pb-2 border-b border-black">
        <h2 className="text-center font-bold">Employee Information</h2>
      </div>
      {employee.id && (
        <div className="text-center">
          <img
            src={employee.image_url}
            alt={employee.firstname + " " + employee.lastname}
            ref={imgRef}
            className="h-40 object-contain my-4 mx-auto"
            onError={handleImageError}
          />
          <h2 className="font-bold">
            {employee.firstname + " " + employee.lastname}, {employee.age}
          </h2>
          <p>Email: {employee.email}</p>
          <p>Mobile: {employee.contact_number}</p>
          <p>Address: {employee.address}</p>
          <p>Salary: {employee.salary}</p>
        </div>
      )}
    </div>
  );
};

export default EmployeeDetails;
