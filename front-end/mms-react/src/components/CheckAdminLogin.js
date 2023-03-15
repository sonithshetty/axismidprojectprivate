import { Navigate } from "react-router-dom";

export const logOut = () => {
  localStorage.clear();
  alert("Logged Out Successfully");
  <Navigate to={"/"} />;
};

export const isLogIn = () => {
  if (JSON.parse(localStorage.getItem("AdminData"))) {
    return true;
  }
  return false;
};
