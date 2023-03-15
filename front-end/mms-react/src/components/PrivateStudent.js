import React from "react";
import { Navigate } from "react-router-dom";
import { isLogIn } from "./CheckStudentLogin";

const PrivateStudent = ({ children }) => {
  const isLoggedIn = isLogIn();
  return (
    <>
      {isLoggedIn ? (
        children
      ) : (
        <>
          {alert("Unauthorized Access")}
          <Navigate to={"/"} />
        </>
      )}
    </>
  );
};

export default PrivateStudent;
