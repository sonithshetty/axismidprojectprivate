import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Card } from "semantic-ui-react";
import classes from "./CreateStudent.module.css";
import axios from "axios";

const CreateStudent = () => {
  let navigate = useNavigate();

  const [student, setStudent] = useState(
    {
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
      imageUrl: "",
    },
    []
  );

  const sendDataToAPI = async (e) => {
    // console.log(name);
    e.preventDefault();
    let requestBody = student;
    await axios
      .post(`http://localhost:8082/students`, requestBody)
      .then((response) => {
        console.log(response.data);
        alert("Student added successfully");
      });
    navigate("/show-student");
  };

  return (
    <div>
      <div className={classes.main}></div>
      <div className={classes.content}>
        <div className={classes.form}>
          <Card>
            <Card.Content>
              <Card.Header textAlign="center">Add Student Details</Card.Header>
              <Card.Description>
                <Form>
                  <Form.Field required>
                    <label>ID</label>
                    <input
                      type="number"
                      value={student.id}
                      onChange={(e) => {
                        setStudent({ ...student, id: e.target.value });
                      }}
                    />
                  </Form.Field>
                  <Form.Field required>
                    <label>Name</label>
                    <input
                      type="text"
                      value={student.name}
                      onChange={(e) => {
                        setStudent({ ...student, name: e.target.value });
                      }}
                    />
                  </Form.Field>
                  <Form.Field required>
                    <label>Email</label>
                    <input
                      type="email"
                      value={student.emailId}
                      onChange={(e) => {
                        setStudent({ ...student, emailId: e.target.value });
                      }}
                    />
                  </Form.Field>
                  <Form.Field required>
                    <label>Password</label>
                    <input
                      type="password"
                      value={student.password}
                      onChange={(e) => {
                        setStudent({ ...student, password: e.target.value });
                      }}
                    />
                  </Form.Field>
                  <Form.Field required>
                    <label>Std</label>
                    <input
                      type="text"
                      value={student.std}
                      onChange={(e) => {
                        setStudent({ ...student, std: e.target.value });
                      }}
                    />
                  </Form.Field>
                  <Form.Field required>
                    <label>Image</label>
                    <input
                      type="text"
                      value={student.imageUrl}
                      placeholder="Paste the url of your image here"
                      onChange={(e) => {
                        setStudent({ ...student, imageUrl: e.target.value });
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

export default CreateStudent;
