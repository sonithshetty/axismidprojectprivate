import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Header, Card } from "semantic-ui-react";
import classes from "./CreateTeacher.module.css";
import axios from "axios";

const CreateTeacher = () => {
  let navigate = useNavigate();

  const [teacher, setTeacher] = useState(
    {
      id: 0,
      school_id: 1,
      firstName: "",
      lastName: "",
      emailId: "",
      password: "",
      salaryEarned: 0,
      salaryPaid: false,
      remainingSalary: 0,
      totalSalary: 30000,
      imageUrl: "",
    },
    []
  );

  const {
    id,
    school_id,
    firstName,
    lastName,
    emailId,
    password,
    salaryEarned,
    salaryPaid,
    remainingSalary,
    totalSalary,
    imageUrl,
  } = teacher;

  const sendDataToAPI = async (e) => {
    // console.log(name);
    e.preventDefault();
    let requestBody = teacher;
    axios
      .post(`http://localhost:8082/teachers`, requestBody)
      .then((response) => {
        console.log(response.data);
        alert("Teacher added successfully");
      });
    navigate("/show-teacher");
  };

  return (
    <div>
      <div className={classes.main}></div>
      <div className={classes.content}>
        <div className={classes.form}>
          <Card>
            <Card.Content>
              <Card.Header textAlign="center">Add Teacher Details</Card.Header>
              <br />
              <Card.Description>
                <Form>
                  <Form.Field required>
                    <label>ID</label>
                    <input
                      type="number"
                      value={id}
                      onChange={(e) => {
                        setTeacher({ ...teacher, id: e.target.value });
                      }}
                    />
                  </Form.Field>
                  <Form.Field required>
                    <label>FirstName</label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => {
                        setTeacher({ ...teacher, firstName: e.target.value });
                      }}
                    />
                  </Form.Field>
                  <Form.Field required>
                    <label>LastName</label>
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => {
                        setTeacher({ ...teacher, lastName: e.target.value });
                      }}
                    />
                  </Form.Field>
                  <Form.Field required>
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
                  <Form.Field required>
                    <label>Password</label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => {
                        setTeacher({ ...teacher, password: e.target.value });
                      }}
                    />
                  </Form.Field>
                  <Form.Field required>
                    <label>Image</label>
                    <input
                      type="text"
                      value={imageUrl}
                      placeholder="Enter your Image Url"
                      onChange={(e) => {
                        setTeacher({ ...teacher, imageUrl: e.target.value });
                      }}
                    />
                  </Form.Field>
                </Form>
              </Card.Description>
            </Card.Content>
            <Card.Content textAlign="center" extra>
              <Button inverted color="green" onClick={(e) => sendDataToAPI(e)}>
                Submit
              </Button>
              <Link to={"/admin-home"}>
                <Button color="black">Back</Button>
              </Link>
            </Card.Content>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CreateTeacher;
