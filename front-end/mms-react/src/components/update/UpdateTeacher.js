import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Form, Button } from "semantic-ui-react";
import classes from "./UpdateTeacher.module.css";
import axios from "axios";

const UpdateTeacher = () => {
  let navigate = useNavigate();

  const { id } = useParams();

  const [teacher, setTeacher] = useState(
    {
      id: 0,
      school_id: 1,
      firstName: "",
      lastName: "",
      emailId: "",
      password: "",
      salaryEarned: 0,
    },
    []
  );

  const { school_id, firstName, lastName, emailId, password, salaryEarned } =
    teacher;

  useEffect(() => {
    loadUsers();
  }, []);

  const sendDataToAPI = async (e) => {
    // console.log(name);
    e.preventDefault();
    let requestBody = teacher;
    axios
      .put(`http://localhost:8082/teachers/${id}`, requestBody)
      .then((response) => {
        console.log(response.data);
        alert("Teacher updated successfully");
        window.location.reload();
      });
    navigate("/show-teacher");
  };

  const loadUsers = async () => {
    const result = await axios.get(`http://localhost:8082/teachers/${id}`);
    setTeacher(result.data);
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

          <Link to={"/add-student"} className={classes.link}>
            Add Students
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
            <h3>Update Teacher details</h3>
          </div>
          <div>
            <Form>
              <Form.Field>
                <label>FirstName</label>
                <input
                  type="text"
                  required
                  value={firstName}
                  onChange={(e) => {
                    setTeacher({ ...teacher, firstName: e.target.value });
                  }}
                />
              </Form.Field>
              <Form.Field>
                <label>LastName</label>
                <input
                  type="text"
                  required
                  value={lastName}
                  onChange={(e) => {
                    setTeacher({ ...teacher, lastName: e.target.value });
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
                    setTeacher({ ...teacher, emailId: e.target.value });
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
                    setTeacher({ ...teacher, password: e.target.value });
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

export default UpdateTeacher;
