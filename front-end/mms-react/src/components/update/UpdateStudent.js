import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Form, Button } from "semantic-ui-react";
import classes from "./UpdateStudent.module.css";
import axios from "axios";

const UpdateStudent = () => {
  let navigate = useNavigate();

  const { id } = useParams();
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [std, setStd] = useState("");

  const [student, setStudent] = useState({
    id: 0,
    school_id: 1,
    name: "",
    emailId: "",
    password: "",
    std: "",
    feesPaid: false,
    feesTotal: 15000,
    fees: 0,
    remainingFees: 0,
  });

  // console.log(name);
  // console.log(email);
  // console.log(password);
  // console.log(std);

  const {
    school_id,
    name,
    emailId,
    password,
    std,
    feesPaid,
    feesTotal,
    fees,
    remainingFees,
  } = student;

  // const onInputChange = (e) => {
  //   setStudent({ ...student, [e.target.name]: e.target.value });
  // };

  useEffect(() => {
    loadUsers();
  }, []);

  const sendDataToAPI = async (e) => {
    // console.log(name);
    e.preventDefault();
    let requestBody = student;
    await axios
      .put(`http://localhost:8082/students/${id}`, requestBody)
      .then((response) => {
        console.log(response.data);
        alert("Student updated successfully");
      });
    navigate("/show-student");
  };

  const loadUsers = async () => {
    const result = await axios.get(`http://localhost:8082/students/${id}`);
    setStudent(result.data);
  };

  return (
    <div className={classes.main}>
      <div className={classes.navbar}>
        <h3>Admin Name</h3>
      </div>
      <div className={classes.container}>
        <div className={classes.sidenav}>
          <Link to={"/show-student"} className={classes.link}>
            Show Students
          </Link>

          <Link to={"/add-teacher"} className={classes.link}>
            Add Teachers
          </Link>

          <Link to={"/show-teacher"} className={classes.link}>
            Show Teachers
          </Link>

          <Link to={"/admin-login"} className={classes.link}>
            Logout
          </Link>
        </div>
        <div className={classes.content}>
          <div>
            <h3>Update Student details</h3>
          </div>
          <div>
            <Form>
              {/* <Form.Field>
                <label>ID</label>
                <input
                  type="number"
                  required
                  value={student.id}
                  onChange={(e) => onInputChange(e)}
                />
              </Form.Field> */}
              <Form.Field>
                <label>Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => {
                    setStudent({ ...student, name: e.target.value });
                  }}
                />
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <input
                  type="email"
                  required
                  value={emailId}
                  onChange={(e) => {
                    setStudent({ ...student, emailId: e.target.value });
                  }}
                />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => {
                    setStudent({ ...student, password: e.target.value });
                  }}
                />
              </Form.Field>
              <Form.Field>
                <label>Std</label>
                <input
                  type="text"
                  required
                  value={std}
                  onChange={(e) => {
                    setStudent({ ...student, std: e.target.value });
                  }}
                />
              </Form.Field>

              <Button onClick={(e) => sendDataToAPI(e)}>Submit</Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateStudent;
