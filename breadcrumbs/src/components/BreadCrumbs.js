import React from "react";
import { Link, useLocation } from "react-router-dom";

const BreadCrumbs = () => {
  const location = useLocation();
  const pathNames = location.pathname.split("/").filter(Boolean);
  console.log(pathNames);
  let breadCrumbPath = "";

  return (
    <div className="breadcrumbs">
      <Link to="/">Home</Link>
      {pathNames.map((pathName, index) => {
        breadCrumbPath += `/${pathName}`;
        const isLast = index === pathNames.length - 1;
        return isLast ? (
          <span key={breadCrumbPath}> / {pathName}</span>
        ) : (
          <span key={breadCrumbPath}>
            {" "}
            / <Link to={breadCrumbPath}>{pathName}</Link>
          </span>
        );
      })}
    </div>
  );
};

export default BreadCrumbs;
