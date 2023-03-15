export const logOut = () => {
  localStorage.clear();
  alert("Logged Out Successfully");
};

export const isLogIn = () => {
  if (JSON.parse(localStorage.getItem("StudentData"))) {
    return true;
  }
  return false;
};
